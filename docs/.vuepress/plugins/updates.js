import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { getContentType } from '../utils/contentRules.js';

const exec = promisify(execFile);
const HISTORY_FILE = 'updates/history.json';
const SHARE_FILE = 'docs/.vuepress/data/shareItems.json';
const LEGACY_SHARE_FILE = 'docs/.vuepress/data/shareItems.js';
const BASE = 'https://updates.invalid';

async function git(cwd, args) {
  const { stdout } = await exec('git', args, {
    cwd, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024,
  });
  return stdout;
}

function sitePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return null;
  const url = new URL(value, BASE);
  if (url.origin !== BASE || url.search) return null;
  return url.pathname + url.hash;
}

async function readGitFile(cwd, commit, file) {
  const entry = await git(cwd, ['ls-tree', '-z', commit, '--', file]);
  if (!entry) return null;
  return git(cwd, ['show', `${commit}:${file}`]);
}

// 当前数据格式：直接解析 JSON，并保留原有字段校验。
export function parseShareItems(source) {
  if (source == null) return [];

  const items = JSON.parse(source);

  if (!Array.isArray(items)) {
    throw new Error('[updates] shareItems 必须是数组。');
  }

  const ids = new Set();

  for (const item of items) {
    if (
      !item ||
      typeof item.id !== 'string' ||
      !item.id.trim() ||
      typeof item.title !== 'string' ||
      !item.title.trim() ||
      ids.has(item.id)
    ) {
      throw new Error('[updates] 稿件的 id、title 无效，或 id 重复。');
    }

    ids.add(item.id);
  }

  return items;
}

// 仅兼容历史提交中的旧文件，不执行 JavaScript。
function parseLegacyShareItems(source) {
  if (source == null) return [];

  const match = source.match(
    /^\s*export\s+const\s+shareItems\s*=\s*(\[[\s\S]*\])\s*;?\s*$/
  );

  if (!match) {
    throw new Error('[updates] 历史 shareItems.js 格式无法识别。');
  }

  return parseShareItems(match[1]);
}

// 每个提交分别判断格式，优先读取新文件。
async function readShareItems(cwd, commit) {
  const jsonSource = await readGitFile(cwd, commit, SHARE_FILE);

  if (jsonSource !== null) {
    return parseShareItems(jsonSource);
  }

  const legacySource = await readGitFile(
    cwd,
    commit,
    LEGACY_SHARE_FILE
  );

  return parseLegacyShareItems(legacySource);
}

export function validateHistory(value) {
  if (!Array.isArray(value)) throw new Error('[updates] 历史文件不是数组，已停止构建。');
  const seen = new Set();
  return value.map((record) => {
    if (!record || !/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(record.sha || '') ||
        typeof record.committedAt !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(record.committedAt) ||
        !Number.isFinite(Date.parse(record.committedAt)) ||
        record.date !== record.committedAt.slice(0, 10) ||
        typeof record.message !== 'string' || seen.has(record.sha)) {
      throw new Error('[updates] 历史记录无效或 SHA 重复，已停止构建。');
    }
    const links = record.links ?? [];
    if (!Array.isArray(links) || links.some((link) =>
      !link || typeof link.text !== 'string' || !link.text.trim() || !sitePath(link.path))) {
      throw new Error('[updates] 历史链接无效，已停止构建。');
    }
    seen.add(record.sha);
    return { ...record, links: links.map((link) => ({ text: link.text, path: sitePath(link.path) })) };
  });
}

async function loadHistory(cwd, ref, required) {
  let commit;
  try {
    commit = (await git(cwd, ['rev-parse', '--verify', `${ref}^{commit}`])).trim();
  } catch (error) {
    if (!required && (error.code === 1 || error.code === 128)) return [];
    throw new Error(`[updates] 无法读取发布分支 ${ref}。`, { cause: error });
  }
  const source = await readGitFile(cwd, commit, HISTORY_FILE);
  if (source == null) return []; // 发布分支存在但尚无历史：首次上线。
  return validateHistory(JSON.parse(source));
}

export function resolveCandidateLinks(candidates, message, warn = console.warn) {
  const targets = new Map();
  for (const { text, path } of candidates) {
    if (!targets.has(text)) targets.set(text, new Set());
    targets.get(text).add(path);
  }
  const links = [];
  for (const [text, paths] of targets) {
    if (paths.size !== 1) {
      warn(`[updates] 新增内容标题“${text}”不唯一，保持普通文字。`);
    } else if (!message.includes(text)) {
      warn(`[updates] 提交说明没有完整标题“${text}”，不猜测跳转目标。`);
    } else {
      links.push({ text, path: [...paths][0] });
    }
  }
  return links;
}

export function mergeRecords(history, record) {
  const records = history.some((item) => item.sha === record.sha) ? [...history] : [record, ...history];
  return records.sort((a, b) => Date.parse(b.committedAt) - Date.parse(a.committedAt));
}

async function makeCurrentRecord(cwd, sha, pages) {
  const raw = await git(cwd, ['show', '-s', '--format=%H%x00%cI%x00%cs%x00%B', sha]);
  const [hash, committedAt, date, ...messageParts] = raw.split('\0');
  const message = messageParts.join('\0').replace(/\n+$/, '');
  const parents = (await git(cwd, ['rev-list', '--parents', '-n', '1', sha])).trim().split(/\s+/);
  const parent = parents[1];
  const addedRaw = parent
    ? await git(cwd, ['diff', '--find-renames', '--name-only', '--diff-filter=A', '-z', parent, sha])
    : await git(cwd, ['diff-tree', '--root', '--no-commit-id', '--name-only', '--diff-filter=A', '-r', '-z', sha]);
  const added = new Set(addedRaw.split('\0').filter(Boolean));
  const candidates = [];
  for (const page of pages) {
    const file = page.filePathRelative?.replaceAll('\\', '/');
    if (
      !getContentType(file) ||
      !added.has(`docs/${file}`) ||
      page.frontmatter?.draft === true
    ) {
      continue;
    }
    const text = String(page.frontmatter?.title || page.title || '').trim();
    const path = sitePath(page.path);
    if (text && path) candidates.push({ text, path });
  }
  const currentShares = await readShareItems(cwd, sha);
  const oldShares = parent
    ? await readShareItems(cwd, parent)
    : [];
  const oldIds = new Set(oldShares.map((item) => item.id));
  const sharePage = pages.find((page) => page.filePathRelative === 'blog/share/README.md');
  if (sharePage) {
    for (const item of currentShares) {
      if (!oldIds.has(item.id)) {
        candidates.push({ text: item.title.trim(), path: `${sitePath(sharePage.path)}#${encodeURIComponent(item.id)}` });
      }
    }
  }
  const record = { sha: hash, committedAt, date, message, links: resolveCandidateLinks(candidates, message) };
  validateHistory([record]);
  return { record, currentShares, sharePath: sharePage ? sitePath(sharePage.path) : null };
}

// 保存历史元数据；当前已失效的目标只在页面中取消链接，未来恢复后仍可重新跳转。
function recordsForPage(records, pages, currentShares, sharePath) {
  const routes = new Set(pages.map((page) => sitePath(page.path)));
  const ids = new Set(currentShares.map((item) => item.id));
  return records.map((record) => ({
    ...record,
    links: record.links.filter((link) => {
      const url = new URL(link.path, BASE);
      if (!routes.has(url.pathname) || !record.message.includes(link.text)) return false;
      if (!url.hash) return true;
      try {
        return url.pathname === sharePath && ids.has(decodeURIComponent(url.hash.slice(1)));
      } catch {
        return false;
      }
    }),
  }));
}

export function updatesPlugin() {
  let historyForExport = null;
  return {
    name: 'susu-updates',
    async onInitialized(app) {
      const page = app.pages.find((item) => item.path === '/updates/');
      if (!page) throw new Error('[updates] 请先创建 /updates/ 页面。');
      const cwd = (await git(app.dir.source(), ['rev-parse', '--show-toplevel'])).trim();
      const sha = (await git(cwd, ['rev-parse', 'HEAD'])).trim();
      if (process.env.UPDATES_SOURCE_SHA && process.env.UPDATES_SOURCE_SHA !== sha) {
        throw new Error('[updates] 当前 HEAD 与本次发布提交不一致。');
      }
      const explicitRef = process.env.UPDATES_HISTORY_REF;
      const history = await loadHistory(cwd, explicitRef || 'refs/remotes/origin/blog-pages', Boolean(explicitRef));
      const { record, currentShares, sharePath } = await makeCurrentRecord(cwd, sha, app.pages);
      historyForExport = mergeRecords(history, record);
      page.data.updates = recordsForPage(historyForExport, app.pages, currentShares, sharePath);
    },
    async onGenerated(app) {
      if (!historyForExport) throw new Error('[updates] 历史数据尚未生成。');
      const destination = app.dir.dest(HISTORY_FILE);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, `${JSON.stringify(historyForExport, null, 2)}\n`, 'utf8');
    },
  };
}