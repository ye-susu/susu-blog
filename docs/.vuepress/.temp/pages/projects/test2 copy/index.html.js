import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/projects/test2 copy/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/test2%20copy/\",\"title\":\"这是项目test2的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是项目test2的标题\",\"description\":\"这是test2的的描述\",\"date\":\"2025-10-02T00:00:00.000Z\",\"heroImage\":\"https://gd-hbimg.huaban.com/e84e38ed17d9cf09befc9d9f381eccd7bf3c8663ec193-J1uw60_fw658\",\"author\":\"yesusu\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/test2 copy/README.md\",\"readingTime\":{\"minutes\":0.15,\"words\":37}}")
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
