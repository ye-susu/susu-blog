import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/test2/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test2/\",\"title\":\"这是一篇测试文章2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是一篇测试文章2\",\"description\":\"从苹果第一台图形界面计算机聊聊系统字体\",\"date\":\"2025-02-25T00:00:00.000Z\",\"category\":\"经验总结\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/test2/README.md\",\"readingTime\":{\"minutes\":0.21,\"words\":42}}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
