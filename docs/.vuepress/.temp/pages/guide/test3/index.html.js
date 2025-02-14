import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/guide/test3/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/test3/\",\"title\":\"这是test3的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是test3的标题\",\"description\":\"这是test3的的描述\",\"date\":\"2025-10-01T00:00:00.000Z\",\"heroImage\":\"https://steamuserimages-a.akamaihd.net/ugc/2362769341371317445/BD8E2AD582B9B24D516FD1B5D03E05C81A0509E9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false\",\"sidebar\":false,\"author\":\"yesusu\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/test3/README.md\"}")
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
