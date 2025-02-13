import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/guide/README copy.html.vue"
const data = JSON.parse("{\"path\":\"/guide/README%20copy.html\",\"title\":\"页面的标题2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题2\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/README copy.md\"}")
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
