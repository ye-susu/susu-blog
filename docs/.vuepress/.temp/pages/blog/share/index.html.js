import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/share/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/share/\",\"title\":\"分享文稿\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分享文稿\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/share/README.md\",\"excerpt\":\"<br>\\n<h6>《多语言设计指南》</h6>\\n<br>\\n<iframe style=\\\"border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; \\\" src=\\\"https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share\\\" allowfullscreen=\\\"\\\"></iframe>\",\"readingTime\":{\"minutes\":0.79,\"words\":157}}")
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
