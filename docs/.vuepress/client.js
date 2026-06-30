import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

import AboutMe from './layouts/AboutMe.vue'
import Layout from './layouts/Layout.vue'
import ProjectList from './layouts/ProjectList.vue'
import ArtCatePage from './components/ArtCatePage.vue'
import MyHome from './components/MyHome.vue'
import ReadingTime from './components/ReadingTime.vue'
import ColorPalette from './components/ColorPalette.vue'
import ArtList from './components/ArtList.vue'
import ExperienceList from './components/ExperienceList.vue'
import Footer from './components/Footer.vue'
import FigmaEmbed from './components/FigmaEmbed.vue'
import LottieHero from './components/LottieHero.vue'

export default defineClientConfig({
  layouts: {
    AboutMe,
    ProjectList,
    Layout,
  },

  setup() {
    onMounted(() => {
      // 关闭浏览器默认的滚动位置恢复
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }

      // 首页 项目 关于我 回到顶部
      const normalizePath = (p) => (p.endsWith('/') && p !== '/' ? p.slice(0, -1) : p)
      const path = normalizePath(window.location.pathname)

      const forceTopPages = new Set(['/', '/projects', '/about'])

      if (forceTopPages.has(path)) {
          requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
          setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      }
    })
  },

  enhance({ app }) {
    app.component('MyHome', MyHome)
    app.component('ReadingTime', ReadingTime)
    app.component('ColorPalette', ColorPalette)
    app.component('ArtCatePage', ArtCatePage)
    app.component('ArtList', ArtList)
    app.component('ExperienceList', ExperienceList)
    app.component('Footer', Footer)
    app.component('FigmaEmbed', FigmaEmbed)
    app.component('LottieHero', LottieHero)
  },
})