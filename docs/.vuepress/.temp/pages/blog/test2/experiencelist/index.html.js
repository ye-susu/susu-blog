import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/test2/experiencelist/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test2/experiencelist/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cate\":\"experiencelist\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/test2/experiencelist/README.md\",\"excerpt\":\"<p>经验列表</p>\\n\",\"readingTime\":{\"minutes\":0.03,\"words\":6}}")
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
