import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/guide/sdfds.html.vue"
const data = JSON.parse("{\"path\":\"/guide/sdfds.html\",\"title\":\"第一个markdown文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"第一个markdown文档\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/sdfds.md\"}")
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
