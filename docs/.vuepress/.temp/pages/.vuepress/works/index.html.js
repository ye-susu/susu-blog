import comp from "/Users/yesusu/Desktop/working-space/myvuepress/docs/.vuepress/.temp/pages/.vuepress/works/index.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/works/\",\"title\":\"yesusu\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"yesusu\",\"heroImage\":\"/images/hero.png\"},\"headers\":[],\"git\":{},\"filePathRelative\":\".vuepress/works/README.md\",\"excerpt\":\"<div style=\\\"text-align:center;\\\">\\n  <a href=\\\"/guide/\\\">\\n    <img src=\\\"/images/hero.png\\\" style=\\\"width:auto; height:100px; margin-top:128px\\\">\\n  </a>\\n</div>\\n\"}")
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
