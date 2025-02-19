export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.webp\"}],[\"script\",{\"async\":true,\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-TNS7EED85E\"}],[\"script\",{},\"\\n        window.dataLayer = window.dataLayer || [];\\n        function gtag(){dataLayer.push(arguments);}\\n        gtag('js', new Date());\\n        gtag('config', 'G-TNS7EED85E', {\\n            cookie_flags: 'SameSite=None; Secure'\\n        });\\n        \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
