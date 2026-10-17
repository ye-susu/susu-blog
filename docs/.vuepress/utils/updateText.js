// 先去掉行首无序列表符号，再过滤空行，避免生成空列表项。
export function messageLines(message) {
    return message.split(/\r?\n/)
      .map((line) => line.replace(/^(\s*)[-*+](?:\s+|$)/, '$1'))
      .filter((line) => line.trim());
  }
  
  // 不执行 Markdown/HTML，也不做模糊匹配。较长标题优先。
  export function linkSegments(line, links = []) {
    const candidates = [...links].sort((a, b) => b.text.length - a.text.length);
    const result = [];
    let buffer = '';
    let position = 0;
    while (position < line.length) {
      const match = candidates.find((item) => item.text && line.startsWith(item.text, position));
      if (match) {
        if (buffer) result.push({ text: buffer });
        buffer = '';
        result.push({ text: match.text, path: match.path });
        position += match.text.length;
      } else {
        buffer += line[position++];
      }
    }
    if (buffer) result.push({ text: buffer });
    return result;
  }
