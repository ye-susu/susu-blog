import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/题/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E9%A2%98/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"blog\":{\"type\":\"category\",\"name\":\"题\",\"key\":\"categories\"},\"layout\":\"Layout\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\",\"readingTime\":{\"minutes\":0,\"words\":0}}")
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
