import { defineClientConfig } from '@vuepress/client'
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

export default defineClientConfig({
    layouts: {
        AboutMe, ProjectList, Layout
    },
    enhance({ app }) {
        app.component('MyHome', MyHome)
        app.component('ReadingTime', ReadingTime)
        app.component('ColorPalette', ColorPalette)
        app.component('ArtCatePage', ArtCatePage)
        app.component('ArtList', ArtList)
        app.component('ExperienceList', ExperienceList)
        app.component('Footer', Footer)
    },
})