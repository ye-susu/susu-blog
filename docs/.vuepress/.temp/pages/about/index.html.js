import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我 | 耶稣稣的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于我 | 耶稣稣的博客\",\"description\":\"这是关于我的描述\",\"layout\":\"AboutMe\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"about/README.md\",\"readingTime\":{\"minutes\":0.09,\"words\":23}}")
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
