import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/articles/index.html.vue"
const data = JSON.parse("{\"path\":\"/articles/\",\"title\":\"文章 | 耶稣稣的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"blog\":{\"type\":\"type\",\"key\":\"articles\"},\"layout\":\"ArticleList\",\"title\":\"文章 | 耶稣稣的博客\",\"description\":\"设计经验，知识沉淀，分享文稿\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"readingTime\":{\"minutes\":0,\"words\":0}}")
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
