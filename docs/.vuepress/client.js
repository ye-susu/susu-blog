import { defineClientConfig } from '@vuepress/client'
import ArticleList from './layouts/ArticleList.vue'
import ProjectList from './layouts/ProjectList.vue'
import AboutMe from './layouts/AboutMe.vue'
import MyHome from './components/MyHome.vue'
import MyHomeNav from './components/MyHomeNav.vue'
import MyHomeFooter from './components/MyHomeFooter.vue'
import ReadingTime from './components/ReadingTime.vue'
import ColorPalette from './components/ColorPalette.vue'

export default defineClientConfig({
    layouts: {
        ArticleList, ProjectList, AboutMe
    },
    enhance({ app }) {
        app.component('MyHome', MyHome)
        app.component('MyHomeNav', MyHomeNav)
        app.component('MyHomeFooter', MyHomeFooter)
        app.component('ReadingTime', ReadingTime)
        app.component('ColorPalette', ColorPalette)
    },
})