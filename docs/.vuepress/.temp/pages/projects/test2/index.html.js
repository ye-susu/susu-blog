import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/test2/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/test2/\",\"title\":\"这是项目test2的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是项目test2的标题\",\"description\":\"这是test2的的描述\",\"date\":\"2025-10-02T00:00:00.000Z\",\"heroImage\":\"https://image.yesusu.top/PicGo/goswak-01.png\"},\"headers\":[],\"git\":{\"updatedTime\":1739504496000,\"contributors\":[{\"name\":\"yesusu\",\"username\":\"yesusu\",\"email\":\"yepan1749@gmail.com\",\"commits\":2,\"url\":\"https://github.com/yesusu\"},{\"name\":\"ye-susu\",\"username\":\"ye-susu\",\"email\":\"yepan1749@gmail.com\",\"commits\":1,\"url\":\"https://github.com/ye-susu\"}]},\"filePathRelative\":\"projects/test2/README.md\",\"readingTime\":{\"minutes\":0.17,\"words\":34}}")
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
