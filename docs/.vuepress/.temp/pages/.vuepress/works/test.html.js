import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/.vuepress/works/test.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/works/test.html\",\"title\":\"Test Project\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Test Project\",\"author\":\"Test Author\",\"date\":\"2025-01-01T00:00:00.000Z\",\"description\":\"Test Description\",\"heroImage\":\"/images/test-hero.jpg\"},\"headers\":[],\"git\":{},\"filePathRelative\":\".vuepress/works/test.md\"}")
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
