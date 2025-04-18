export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"耶稣稣的博客"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"_blog":{"author":"","title":"关于我 | 耶稣稣的博客","heroImage":"","description":"这是关于我的描述","date":null,"excerpt":""},"title":"关于我 | 耶稣稣的博客"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"_blog":{"author":"","title":"博客","heroImage":"","description":"","date":null,"excerpt":""},"title":"博客"} }],
  ["/projects/goswak/", { loader: () => import(/* webpackChunkName: "projects_goswak_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/goswak/index.html.js"), meta: {"_blog":{"author":"","title":"GoSwak - Online Group Buying","heroImage":"https://image.yesusu.top/PicGo/goswak-01.png","description":"Online group buying","date":"2025-03-04T00:00:00.000Z","excerpt":""},"title":"GoSwak - Online Group Buying"} }],
  ["/projects/test5/", { loader: () => import(/* webpackChunkName: "projects_test5_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/test5/index.html.js"), meta: {"_blog":{"author":"","title":"这是项目test5的标题","heroImage":"https://image.yesusu.top/PicGo/goswak-01.png","description":"这是test2的的描述","date":"2025-09-27T00:00:00.000Z","excerpt":""},"title":"这是项目test5的标题"} }],
  ["/blog/share/", { loader: () => import(/* webpackChunkName: "blog_share_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/share/index.html.js"), meta: {"_blog":{"author":"","title":"分享文稿","heroImage":"","description":"","date":null,"excerpt":"<br>\n<h6>《多语言设计指南》</h6>\n<br>\n<iframe style=\"border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; \" src=\"https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share\" allowfullscreen=\"\"></iframe>"},"title":"分享文稿"} }],
  ["/blog/article/articlelist/", { loader: () => import(/* webpackChunkName: "blog_article_articlelist_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/articlelist/index.html.js"), meta: {"_blog":{"author":"","title":"文章目录","heroImage":"","description":"","date":null,"excerpt":""},"title":"文章目录"} }],
  ["/blog/article/brand-fonts/", { loader: () => import(/* webpackChunkName: "blog_article_brand-fonts_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/brand-fonts/index.html.js"), meta: {"_blog":{"author":"","title":"苹果品牌字体变迁史","heroImage":"https://image.yesusu.top/PicGo/brandfonts-01.png","description":"苹果三十多年来品牌字体的变迁貌似一部浓缩的字体设计发展史","date":"2025-02-27T00:00:00.000Z","excerpt":""},"title":"苹果品牌字体变迁史"} }],
  ["/blog/article/colors1/", { loader: () => import(/* webpackChunkName: "blog_article_colors1_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/colors1/index.html.js"), meta: {"_blog":{"author":"","title":"产品配色那些事1-学会色彩管理","heroImage":"https://image.yesusu.top/PicGo/color-01.png","description":"聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。","date":"2025-02-17T00:00:00.000Z","excerpt":""},"title":"产品配色那些事1-学会色彩管理"} }],
  ["/blog/article/colors2/", { loader: () => import(/* webpackChunkName: "blog_article_colors2_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/colors2/index.html.js"), meta: {"_blog":{"author":"","title":"产品配色那些事2-了解选色逻辑","heroImage":"https://image.yesusu.top/PicGo/color2-01.webp","description":"如何选出更适用的色彩？— 色彩的选择逻辑。","date":"2025-02-19T00:00:00.000Z","excerpt":""},"title":"产品配色那些事2-了解选色逻辑"} }],
  ["/blog/article/colors3/", { loader: () => import(/* webpackChunkName: "blog_article_colors3_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/colors3/index.html.js"), meta: {"_blog":{"author":"","title":"产品配色那些事3-我的配色实践","heroImage":"https://image.yesusu.top/PicGo/color3-01.webp","description":"本章介绍项目的选色逻辑、配色过程、使用到的工具及如何建立色彩系统。","date":"2025-02-20T00:00:00.000Z","excerpt":""},"title":"产品配色那些事3-我的配色实践"} }],
  ["/blog/article/system-fonts/", { loader: () => import(/* webpackChunkName: "blog_article_system-fonts_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/system-fonts/index.html.js"), meta: {"_blog":{"author":"","title":"苹果系统字体变迁史","heroImage":"https://image.yesusu.top/PicGo/systemfonts-01.png","description":"从苹果第一台图形界面计算机聊聊系统字体","date":"2025-02-25T00:00:00.000Z","excerpt":""},"title":"苹果系统字体变迁史"} }],
  ["/blog/article/typography/", { loader: () => import(/* webpackChunkName: "blog_article_typography_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/typography/index.html.js"), meta: {"_blog":{"author":"","title":"西文字体排印的基础知识","heroImage":"https://image.yesusu.top/PicGo/typography-01.png","description":"在“西文”语境下分享字体排印的相关知识","date":"2025-02-21T00:00:00.000Z","excerpt":""},"title":"西文字体排印的基础知识"} }],
  ["/blog/experience/colors1/", { loader: () => import(/* webpackChunkName: "blog_experience_colors1_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/experience/colors1/index.html.js"), meta: {"_blog":{"author":"","title":"这是一篇测试文章 这是一篇测试文章","heroImage":"","description":"聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。","date":"2025-02-17T00:00:00.000Z","excerpt":""},"title":"这是一篇测试文章 这是一篇测试文章"} }],
  ["/blog/experience/colors2/", { loader: () => import(/* webpackChunkName: "blog_experience_colors2_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/experience/colors2/index.html.js"), meta: {"_blog":{"author":"","title":"这是一篇测试文章 这是一篇测试文章","heroImage":"","description":"如何选出更适用的色彩？— 色彩的选择逻辑。","date":"2025-02-19T00:00:00.000Z","excerpt":""},"title":"这是一篇测试文章 这是一篇测试文章"} }],
  ["/blog/experience/experiencelist/", { loader: () => import(/* webpackChunkName: "blog_experience_experiencelist_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/experience/experiencelist/index.html.js"), meta: {"_blog":{"author":"","title":"经验总结目录","heroImage":"","description":"","date":null,"excerpt":""},"title":"经验总结目录"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/article/", { loader: () => import(/* webpackChunkName: "blog_article_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/article/index.html.js"), meta: {"title":""} }],
  ["/blog/experience/", { loader: () => import(/* webpackChunkName: "blog_experience_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/blog/experience/index.html.js"), meta: {"title":""} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"/Users/yesusu/Desktop/work-space/susu-blog/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"项目 | 耶稣稣的博客"} }],
]);
