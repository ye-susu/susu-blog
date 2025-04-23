import { defineClientConfig } from '@vuepress/client'
import AboutMe from './layouts/AboutMe.vue'
import ProjectList from './layouts/ProjectList.vue'
import ArtCatePage from './components/ArtCatePage.vue'
import MyHome from './components/MyHome.vue'
import MyHomeNav from './components/MyHomeNav.vue'
import MyHomeFooter from './components/MyHomeFooter.vue'
import ReadingTime from './components/ReadingTime.vue'
import ColorPalette from './components/ColorPalette.vue'
import ArtList from './components/ArtList.vue'
import ExperienceList from './components/ExperienceList.vue'

export default defineClientConfig({
    layouts: {
        AboutMe, ProjectList
    },
    enhance({ app }) {
        app.component('MyHome', MyHome)
        app.component('MyHomeNav', MyHomeNav)
        app.component('MyHomeFooter', MyHomeFooter)
        app.component('ReadingTime', ReadingTime)
        app.component('ColorPalette', ColorPalette)
        app.component('ArtCatePage', ArtCatePage)
        app.component('ArtList', ArtList)
        app.component('ExperienceList', ExperienceList)
    },
})