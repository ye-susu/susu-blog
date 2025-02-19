import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { blogPlugin } from '@vuepress/plugin-blog'
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'




export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: false,
        sidebar: false,
        colorModeSwitch: false,
    }),
    // home
    base: '/',
    lang: 'zh-CN',
    markdown: {
        anchor: false
    },
    head: [['link', { rel: 'icon', href: '/images/logo.webp' }],
    ['script', { async: true, src: `https://www.googletagmanager.com/gtag/js?id=G-TNS7EED85E` }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TNS7EED85E', {
            cookie_flags: 'SameSite=None; Secure'
        });
        `],
    ],
    // replace components
    alias: {
        '@theme/VPHome.vue': path.resolve(
            __dirname,
            './components/MyHome.vue',
        ),
    },
    plugins: [
        blogPlugin({
            getInfo: ({ frontmatter, git = {}, data = {} }) => {
                /**
                 * @type {Record<string, unknown>}
                 */
                const info = {
                    author: frontmatter.author || '',
                    title: frontmatter.title || '',
                    heroImage: frontmatter.heroImage || '',
                    description: frontmatter.description || '',
                    date: frontmatter.date || git.createdTime || null,
                    excerpt: data.excerpt || '',
                };
                return info;
            },
            type: [
                {
                    key: 'articles',
                    filter: ({ filePathRelative }) => filePathRelative && filePathRelative.startsWith('articles/') &&
                        filePathRelative !== 'articles/README.md',
                    path: '/articles/',
                    layout: 'ArticleList',
                    sorter: (pageA, pageB) => {
                        const dateA = new Date(pageA.frontmatter.date || 0);
                        const dateB = new Date(pageB.frontmatter.date || 0);
                        return dateB - dateA;
                    }
                },
                {
                    key: 'projects',
                    filter: ({ filePathRelative }) => filePathRelative &&
                        filePathRelative.startsWith('projects/') &&
                        filePathRelative !== 'projects/README.md',
                    path: '/projects/',
                    layout: 'ProjectList',
                    sorter: (pageA, pageB) => {
                        const dateA = new Date(pageA.frontmatter.date || 0);
                        const dateB = new Date(pageB.frontmatter.date || 0);
                        return dateB - dateA;
                    }
                },
            ],
            excerpt: true,
            excerptFilter: ({ frontmatter }) => {
                return !frontmatter.description;
            },
        }),
        oml2dPlugin({
            mobileDisplay: true,
            primaryColor: '#2E2E2E',
            models: [
                {
                    path: "https://model.oml2d.com/cat-black/model.json",
                    scale: 0.15,
                    position: [20, 20],
                    stageStyle: {
                        width: 350
                    }
                }
            ],
            menus: {
                disable: true
            }
        }),
        readingTimePlugin({
            wordPerMinute: 200
        }),
    ],
    extendsPageOptions: (page) => {
        if (page.path === '/articles/') {
            page.frontmatter.title = '文章 | 耶稣稣的博客';
            page.frontmatter.description = '设计经验，知识沉淀，分享文稿';
        }
        if (page.path === '/projects/') {
            page.frontmatter.title = '项目 | 耶稣稣的博客';
            page.frontmatter.description = '耶稣稣的设计项目介绍';
        }
    },
})