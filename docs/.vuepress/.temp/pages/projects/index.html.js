import comp from "/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"项目\",\"lang\":\"zh-CN\",\"frontmatter\":{\"blog\":{\"type\":\"type\",\"key\":\"projects\"},\"layout\":\"ProjectList\",\"title\":\"项目\",\"description\":\"耶稣稣的设计项目介绍\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"项目\\\",\\\"description\\\":\\\"耶稣稣的设计项目介绍\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yesusu.top/projects/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"yesusu.top\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"项目\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"耶稣稣的设计项目介绍\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"git\":{},\"filePathRelative\":null,\"readingTime\":{\"minutes\":0,\"words\":0}}")
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
