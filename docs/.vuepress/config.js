import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { path } from 'vuepress/utils'
import { blogPlugin } from '@vuepress/plugin-blog'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { updatesPlugin } from './plugins/updates.js'
import { getContentType, sortByDateDesc,} from './utils/contentRules.js';
import { imageLoadingPlugin } from './plugins/imageLoading.js';
import { contentValidationPlugin } from './plugins/contentValidation.js';

export default defineUserConfig({
    // 开发服务只允许本机访问，避免暴露到局域网。
    host: '127.0.0.1',
    shouldPrefetch: 'as-needed',
    bundler: viteBundler(),
    theme: defaultTheme({
        colorMode: 'auto',
        colorModeSwitch: true,
        toggleColorMode: '切换明暗模式',
        lastUpdated: false,
        contributors: false,
        themePlugins: {
            mediumZoom: false,
          },
        navbar: [
            {
                text: "博客",
                link: "/blog/",
                activeMatch: "^/blog/",
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
    head: [['link', { rel: 'icon', href: '/images/logo.webp' }],
        ['link', {
            rel: 'preconnect',
            href: 'https://image.yesusu.top',
        }],
        ['link', {
            rel: 'dns-prefetch',
            href: 'https://image.yesusu.top',
        }],
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
        '@share-items': path.resolve(__dirname, './data/shareItems.json'),
        '@theme/VPHome.vue': path.resolve(
            __dirname,
            './components/MyHome.vue',
        ),
        '@theme/VPLightIcon.vue': path.resolve(
        __dirname,
        './components/ThemeLightIcon.vue',
        ),
        '@theme/VPDarkIcon.vue': path.resolve(
            __dirname,
            './components/ThemeDarkIcon.vue',
        ),
    },
    plugins: [
        contentValidationPlugin(),

        blogPlugin({
            getInfo: ({ frontmatter, data = {} }) => ({
                author: frontmatter.author || '',
                title: frontmatter.title || '',
                heroImage: frontmatter.heroImage || '',
                heroImageSrcset: frontmatter.heroImageSrcset || '',
                description: frontmatter.description || '',
                date: frontmatter.date || null,
                excerpt: data.excerpt || '',
            }),
            type: [
                {
                    key: 'blog',
                    filter: ({ filePathRelative }) =>
                        getContentType(filePathRelative) === 'blog',
                    path: false,
                    sorter: sortByDateDesc,
                },
                {
                    key: 'experience',
                    filter: ({ filePathRelative }) =>
                        getContentType(filePathRelative) === 'experience',
                    path: false,
                    sorter: sortByDateDesc,
                },
                {
                    key: 'projects',
                    filter: ({ filePathRelative }) =>
                        getContentType(filePathRelative) === 'projects',
                    path: '/projects/',
                    layout: 'ProjectList',
                    sorter: sortByDateDesc,
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
            obsidianSize: true,
        }),

        seoPlugin({
            hostname: 'https://yesusu.top',
            author: {
                name: '耶稣稣',
                url: 'https://yesusu.top',
                email: 'yepan1749@gmail.com',
            },
        }),

        sitemapPlugin({
            hostname: 'https://yesusu.top',
        }),

        imageLoadingPlugin(),

        updatesPlugin(),
    ],
    extendsPageOptions: (page) => {
        if (page.path === '/projects/') {
            page.frontmatter.title = '项目';
            page.frontmatter.description = '耶稣稣的设计项目介绍';
            page.frontmatter.sidebar = false;
        }
    },
})
