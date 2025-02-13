import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/projects/test3 copy/test3/test3/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/test3%20copy/test3/test3/\",\"title\":\"这是项目test3的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是项目test3的标题\",\"description\":\"这是test3的的描述\",\"date\":\"2025-10-01T00:00:00.000Z\",\"heroImage\":\"https://gd-hbimg.huaban.com/721110c79efb60dbf2cc76f78b367ce60ce8f9e2e21f4-4dDIhr_fw658\",\"author\":\"yesusu\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/test3 copy/test3/test3/README.md\",\"readingTime\":{\"minutes\":0.15,\"words\":37}}")
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
