import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { path } from 'vuepress/utils'
import { blogPlugin } from '@vuepress/plugin-blog'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { seoPlugin } from '@vuepress/plugin-seo'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        colorModeSwitch: false,
        lastUpdated: false,
        contributors: false,
        navbar: [
            {
                text: "博客",
                link: "/blog/?cate=art",
            },
            {
                text: "项目",
                link: "/projects/",
            },
            {
                text: "关于我",
                link: "/about/",
            }
        ],
    }),
    // home
    title: "yesusu.top",
    base: '/',
    lang: 'zh-CN',
    markdown: {
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
        `
    ],
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
                    key: 'blog',
                    filter: ({ filePathRelative }) => filePathRelative && filePathRelative.startsWith('blog/article/') &&
                        filePathRelative !== 'blog/article/README.md'
                        &&
                        filePathRelative !== 'blog/article/articlelist/README.md',
                    path: '/blog/article/',
                    layout: 'ArtList',
                    sorter: (pageA, pageB) => {
                        const dateA = new Date(pageA.frontmatter.date || 0);
                        const dateB = new Date(pageB.frontmatter.date || 0);
                        return dateB - dateA;
                    },
                },
                {
                    key: 'experience',
                    filter: ({ filePathRelative }) => filePathRelative && filePathRelative.startsWith('blog/experience/') &&
                        filePathRelative !== 'blog/experience/README.md'
                        &&
                        filePathRelative !== 'blog/experience/experiencelist/README.md',
                    path: '/blog/experience/',
                    layout: 'ExperienceList',
                    sorter: (pageA, pageB) => {
                        const dateA = new Date(pageA.frontmatter.date || 0);
                        const dateB = new Date(pageB.frontmatter.date || 0);
                        return dateB - dateA;
                    },
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

        mediumZoomPlugin({
            selector: '[vp-content] img:not(.no-zoom)',
        }),

        readingTimePlugin({
            wordPerMinute: 200
        }),

        markdownImagePlugin({
            lazyload: true,
        }),

        seoPlugin({
            hostname: 'https://yesusu.top',
            author: {
                name: '耶稣稣',
                url: 'https://yesusu.top',
                email: 'yepan1749@gmail.com',
            },
        }),
    ],
    extendsPageOptions: (page) => {
        if (page.path === '/projects/') {
            page.frontmatter.title = '项目';
            page.frontmatter.description = '耶稣稣的设计项目介绍';
        }
    },
})