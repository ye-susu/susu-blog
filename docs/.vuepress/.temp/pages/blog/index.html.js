import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"sidebar\":false,\"artcate\":true,\"cates\":[{\"title\":\"设计文章\",\"cate\":\"art\",\"count\":\"共 6 篇\",\"path\":\"/blog/article/articlelist/\"},{\"title\":\"经验总结\",\"cate\":\"experience\",\"count\":\"共 2 篇\",\"path\":\"/blog/experience/experiencelist/\"},{\"title\":\"分享稿件\",\"cate\":\"share\",\"count\":\"共 2 篇\",\"path\":\"/blog/share/\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/README.md\",\"excerpt\":\"\",\"readingTime\":{\"minutes\":0.24,\"words\":48}}")
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
