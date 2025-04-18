import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/test/articlelist/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test/articlelist/\",\"title\":\"文章目录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章目录\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/test/articlelist/README.md\",\"excerpt\":\"\",\"readingTime\":{\"minutes\":0.04,\"words\":8}}")
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
