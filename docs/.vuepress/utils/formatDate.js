/**
 * 按 UTC 输出 YYYY-MM-DD，不受访问者时区影响。
 * 支持日期字符串、Date 对象、毫秒时间戳。
 */
export const formatDate = (value) => {
    if (value == null || value === "") return "";
  
    const date = value instanceof Date ? value : new Date(value);
  
    if (Number.isNaN(date.getTime())) return "";
  
    return date.toISOString().slice(0, 10);
  };