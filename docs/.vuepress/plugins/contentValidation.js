// 正文信息校验 ----------------------------------------------------------------------

import { getContentType } from '../utils/contentRules.js';

function isNonEmptyText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidDate(value) {
  // 兼容 YAML 解析后得到的 Date 对象。
  if (value instanceof Date) {
    return Number.isFinite(value.getTime());
  }

  if (typeof value !== 'string') return false;

  const text = value.trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;

  const date = new Date(`${text}T00:00:00.000Z`);

  return (
    Number.isFinite(date.getTime()) &&
    date.toISOString().slice(0, 10) === text
  );
}

export function contentValidationPlugin() {
  return {
    name: 'susu-content-validation',

    onInitialized(app) {
      // 开发时允许编辑未完成的正文，生产构建必须通过校验。
      if (!app.env.isBuild) return;

      const errors = [];

      for (const page of app.pages) {
        const type = getContentType(page.filePathRelative);
        if (!type) continue;

        const frontmatter = page.frontmatter ?? {};
        const issues = [];

        if (!isNonEmptyText(frontmatter.title)) {
          issues.push('缺少 title，或标题为空');
        }

        if (!isValidDate(frontmatter.date)) {
          issues.push('date 缺失或无效，请填写 YYYY-MM-DD');
        }

        if (
          type !== 'experience' &&
          !isNonEmptyText(frontmatter.heroImage)
        ) {
          issues.push('缺少 heroImage，或封面地址为空');
        }

        if (issues.length) {
          const file = page.filePathRelative.replaceAll('\\', '/');
          errors.push(`- docs/${file}：${issues.join('；')}`);
        }
      }

      if (errors.length) {
        throw new Error(
          `[content-validation] 正文配置校验失败：\n${errors.join('\n')}`
        );
      }
    },
  };
}