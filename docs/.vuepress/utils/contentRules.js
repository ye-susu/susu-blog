// 抽取正文分类和日期排序规则 ------------------------------------------------------------

const contentRules = [
    {
      type: 'blog',
      prefix: 'blog/article/',
      excluded: [
        'blog/article/README.md',
        'blog/article/articlelist/README.md',
      ],
    },
    {
      type: 'experience',
      prefix: 'blog/experience/',
      excluded: [
        'blog/experience/README.md',
        'blog/experience/experiencelist/README.md',
      ],
    },
    {
      type: 'projects',
      prefix: 'projects/',
      excluded: ['projects/README.md'],
    },
  ];
  
  // 接收相对于 docs 的文件路径，兼容 Windows 路径分隔符。
  export function getContentType(filePathRelative) {
    if (typeof filePathRelative !== 'string') return null;
  
    const file = filePathRelative.replaceAll('\\', '/');
  
    if (!file.endsWith('.md')) return null;
  
    return contentRules.find(({ prefix, excluded }) =>
      file.startsWith(prefix) && !excluded.includes(file)
    )?.type ?? null;
  }
  
  function getDateTimestamp(page) {
    const value = page.frontmatter?.date;
  
    if (value == null || value === '') return 0;
  
    const timestamp = new Date(value).getTime();
    return Number.isFinite(timestamp) ? timestamp : 0;
  }
  
  // 日期从新到旧；缺失或无效日期由构建校验负责报错。
  export function sortByDateDesc(pageA, pageB) {
    return getDateTimestamp(pageB) - getDateTimestamp(pageA);
  }