import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/test5 copy/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/test5%20copy/\",\"title\":\"这是项目test5的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是项目test5的标题\",\"description\":\"这是test2的的描述\",\"date\":\"2025-09-27T00:00:00.000Z\",\"heroImage\":\"https://image.yesusu.top/PicGo/goswak-01.png\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/test5 copy/README.md\",\"readingTime\":{\"minutes\":0.17,\"words\":34}}")
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
