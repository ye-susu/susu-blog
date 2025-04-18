import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/experience/experiencelist/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/experience/experiencelist/\",\"title\":\"经验总结目录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"经验总结目录\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/experience/experiencelist/README.md\",\"excerpt\":\"\",\"readingTime\":{\"minutes\":0.05,\"words\":10}}")
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
