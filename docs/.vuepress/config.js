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

export default defineUserConfig({
    // 开发服务只允许本机访问，避免暴露到局域网。
    host: '127.0.0.1',
    shouldPrefetch: (file) => !file.includes("LottieHero-"),
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
        '@share-items': path.resolve(__dirname, './data/shareItems.js'),
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
                        path: false,
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
                        path: false,
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

        {
            name: 'blog-image-loading',
        
            extendsMarkdown(md) {
                const originalImageRule = md.renderer.rules.image
        
                md.renderer.rules.image = (
                    tokens,
                    index,
                    options,
                    env,
                    renderer
                ) => {
                    const token = tokens[index]
        
                    token.attrSet('v-image-loading', '')
        
                    const imageHtml = originalImageRule(
                        tokens,
                        index,
                        options,
                        env,
                        renderer
                    )
        
                    const width = Number(token.attrGet('width'))
                    const height = Number(token.attrGet('height'))
        
                    const hasSize =
                        Number.isFinite(width) && width > 0 &&
                        Number.isFinite(height) && height > 0
        
                    const style = hasSize
                        ? ` style="width:${width}px;aspect-ratio:${width}/${height}"`
                        : ''
        
                    return `<span class="blog-image-frame"${style}>${imageHtml}</span>`
                }
            },
        },
    ],
    extendsPageOptions: (page) => {
        if (page.path === '/projects/') {
            page.frontmatter.title = '项目';
            page.frontmatter.description = '耶稣稣的设计项目介绍';
        }
    },
})
