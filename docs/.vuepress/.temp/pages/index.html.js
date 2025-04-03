import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"耶稣稣的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"耶稣稣的博客\",\"heroImage\":\"/images/hero.png\",\"description\":\"UI设计师耶稣稣的博客\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\",\"readingTime\":{\"minutes\":0.11,\"words\":22}}")
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
