import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"sidebar\":false,\"artcate\":true,\"cates\":[{\"title\":\"设计文章\",\"cate\":\"art\",\"count\":\"共 6 篇\",\"path\":\"/blog/article/articlelist/\"},{\"title\":\"经验总结\",\"cate\":\"experience\",\"count\":\"共 2 篇\",\"path\":\"/blog/experience/experiencelist/\"},{\"title\":\"分享稿件\",\"cate\":\"share\",\"count\":\"共 2 篇\",\"path\":\"/blog/share/\"}],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"博客\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"耶稣稣\\\",\\\"url\\\":\\\"https://yesusu.top\\\",\\\"email\\\":\\\"yepan1749@gmail.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yesusu.top/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"yesusu.top\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"git\":{\"contributors\":[{\"name\":\"ye-susu\",\"username\":\"ye-susu\",\"email\":\"yepan1749@gmail.com\",\"commits\":1,\"url\":\"https://github.com/ye-susu\"}],\"changelog\":[{\"hash\":\"e5c77b7a03b8d41b02bf914b0981a8677a1e2692\",\"time\":1744960531000,\"email\":\"yepan1749@gmail.com\",\"author\":\"ye-susu\",\"message\":\"添加 blog cate\"}]},\"filePathRelative\":\"blog/README.md\",\"excerpt\":\"\",\"readingTime\":{\"minutes\":0.24,\"words\":48}}")
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
