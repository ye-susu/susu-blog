import { shallowRef, defineComponent, computed, h as h$1, toRef, ref, onMounted, defineAsyncComponent, reactive, inject, getCurrentInstance, camelize, capitalize, Transition, watch, provide, onUnmounted, useSSRContext, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createSlots, renderSlot, toRefs, withDirectives, Fragment, renderList, vShow, resolveComponent, useTemplateRef, createTextVNode, nextTick, onBeforeUnmount, readonly, createSSRApp, customRef } from "vue";
import { isLinkWithProtocol, resolveLocalePath, isString, dedupeHead, splitPath, normalizeRoutePath, isLinkHttp, removeLeadingSlash, isLinkExternal, ensureEndingSlash, isPlainObject, removeEndingSlash } from "@vuepress/shared";
import { useRouter, useRoute, createRouter, createMemoryHistory, START_LOCATION } from "vue-router";
import { useElementSize, useWindowSize, useWindowScroll, useEventListener, useStorage, usePreferredDark, watchImmediate, useToggle } from "@vueuse/core";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderSlotInner, ssrRenderStyle } from "vue/server-renderer";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DRffUbt4.mjs"
  ), meta: { "title": "耶稣稣的博客" } }],
  ["/about/", { loader: () => import(
    /* webpackChunkName: "about_index.html" */
    "./assets/index.html-DyW4ti32.mjs"
  ), meta: { "_blog": { "author": "", "title": "关于我 | 耶稣稣的博客", "heroImage": "", "description": "这是关于我的描述", "date": null, "excerpt": "" }, "title": "关于我 | 耶稣稣的博客" } }],
  ["/blog/", { loader: () => import(
    /* webpackChunkName: "blog_index.html" */
    "./assets/index.html-_aS8hwG7.mjs"
  ), meta: { "_blog": { "author": "", "title": "博客", "heroImage": "", "description": "", "date": null, "excerpt": "" }, "title": "博客" } }],
  ["/blog/share/", { loader: () => import(
    /* webpackChunkName: "blog_share_index.html" */
    "./assets/index.html-Bj5ROlPG.mjs"
  ), meta: { "_blog": { "author": "", "title": "分享文稿", "heroImage": "", "description": "", "date": null, "excerpt": '<br>\n<h6>《多语言设计指南》</h6>\n<br>\n<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; " src="https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share" allowfullscreen=""></iframe>' }, "title": "分享文稿" } }],
  ["/projects/goswak/", { loader: () => import(
    /* webpackChunkName: "projects_goswak_index.html" */
    "./assets/index.html-BbeyJM_1.mjs"
  ), meta: { "_blog": { "author": "", "title": "GoSwak - Online Group Buying", "heroImage": "https://image.yesusu.top/PicGo/goswak-01.png", "description": "Online group buying", "date": "2025-03-04T00:00:00.000Z", "excerpt": "" }, "title": "GoSwak - Online Group Buying" } }],
  ["/projects/test5/", { loader: () => import(
    /* webpackChunkName: "projects_test5_index.html" */
    "./assets/index.html-BTnOH1xJ.mjs"
  ), meta: { "_blog": { "author": "", "title": "这是项目test5的标题", "heroImage": "https://image.yesusu.top/PicGo/goswak-01.png", "description": "这是test2的的描述", "date": "2025-09-27T00:00:00.000Z", "excerpt": "" }, "title": "这是项目test5的标题" } }],
  ["/blog/article/articlelist/", { loader: () => import(
    /* webpackChunkName: "blog_article_articlelist_index.html" */
    "./assets/index.html-BRsiB4jv.mjs"
  ), meta: { "_blog": { "author": "", "title": "文章目录", "heroImage": "", "description": "", "date": null, "excerpt": "" }, "title": "文章目录" } }],
  ["/blog/article/brand-fonts/", { loader: () => import(
    /* webpackChunkName: "blog_article_brand-fonts_index.html" */
    "./assets/index.html-YhMjD5sG.mjs"
  ), meta: { "_blog": { "author": "", "title": "苹果品牌字体变迁史", "heroImage": "https://image.yesusu.top/PicGo/brandfonts-01.png", "description": "苹果三十多年来品牌字体的变迁貌似一部浓缩的字体设计发展史", "date": "2025-02-27T00:00:00.000Z", "excerpt": "" }, "title": "苹果品牌字体变迁史" } }],
  ["/blog/article/colors1/", { loader: () => import(
    /* webpackChunkName: "blog_article_colors1_index.html" */
    "./assets/index.html-DZaCv3uo.mjs"
  ), meta: { "_blog": { "author": "", "title": "产品配色那些事1-学会色彩管理", "heroImage": "https://image.yesusu.top/PicGo/color-01.png", "description": "聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。", "date": "2025-02-17T00:00:00.000Z", "excerpt": "" }, "title": "产品配色那些事1-学会色彩管理" } }],
  ["/blog/article/colors2/", { loader: () => import(
    /* webpackChunkName: "blog_article_colors2_index.html" */
    "./assets/index.html-BDuZuXrd.mjs"
  ), meta: { "_blog": { "author": "", "title": "产品配色那些事2-了解选色逻辑", "heroImage": "https://image.yesusu.top/PicGo/color2-01.webp", "description": "如何选出更适用的色彩？— 色彩的选择逻辑。", "date": "2025-02-19T00:00:00.000Z", "excerpt": "" }, "title": "产品配色那些事2-了解选色逻辑" } }],
  ["/blog/article/colors3/", { loader: () => import(
    /* webpackChunkName: "blog_article_colors3_index.html" */
    "./assets/index.html-CtdtpWxz.mjs"
  ), meta: { "_blog": { "author": "", "title": "产品配色那些事3-我的配色实践", "heroImage": "https://image.yesusu.top/PicGo/color3-01.webp", "description": "本章介绍项目的选色逻辑、配色过程、使用到的工具及如何建立色彩系统。", "date": "2025-02-20T00:00:00.000Z", "excerpt": "" }, "title": "产品配色那些事3-我的配色实践" } }],
  ["/blog/article/system-fonts/", { loader: () => import(
    /* webpackChunkName: "blog_article_system-fonts_index.html" */
    "./assets/index.html-B4mCxpKw.mjs"
  ), meta: { "_blog": { "author": "", "title": "苹果系统字体变迁史", "heroImage": "https://image.yesusu.top/PicGo/systemfonts-01.png", "description": "从苹果第一台图形界面计算机聊聊系统字体", "date": "2025-02-25T00:00:00.000Z", "excerpt": "" }, "title": "苹果系统字体变迁史" } }],
  ["/blog/article/typography/", { loader: () => import(
    /* webpackChunkName: "blog_article_typography_index.html" */
    "./assets/index.html-DFRckANF.mjs"
  ), meta: { "_blog": { "author": "", "title": "西文字体排印的基础知识", "heroImage": "https://image.yesusu.top/PicGo/typography-01.png", "description": "在“西文”语境下分享字体排印的相关知识", "date": "2025-02-21T00:00:00.000Z", "excerpt": "" }, "title": "西文字体排印的基础知识" } }],
  ["/blog/experience/colors1/", { loader: () => import(
    /* webpackChunkName: "blog_experience_colors1_index.html" */
    "./assets/index.html-DMOmte-l.mjs"
  ), meta: { "_blog": { "author": "", "title": "这是一篇测试文章 这是一篇测试文章", "heroImage": "", "description": "聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。", "date": "2025-02-17T00:00:00.000Z", "excerpt": "" }, "title": "这是一篇测试文章 这是一篇测试文章" } }],
  ["/blog/experience/colors2/", { loader: () => import(
    /* webpackChunkName: "blog_experience_colors2_index.html" */
    "./assets/index.html-CkpHEbtC.mjs"
  ), meta: { "_blog": { "author": "", "title": "这是一篇测试文章 这是一篇测试文章", "heroImage": "", "description": "如何选出更适用的色彩？— 色彩的选择逻辑。", "date": "2025-02-19T00:00:00.000Z", "excerpt": "" }, "title": "这是一篇测试文章 这是一篇测试文章" } }],
  ["/blog/experience/experiencelist/", { loader: () => import(
    /* webpackChunkName: "blog_experience_experiencelist_index.html" */
    "./assets/index.html-CALmVF9N.mjs"
  ), meta: { "_blog": { "author": "", "title": "经验总结目录", "heroImage": "", "description": "", "date": null, "excerpt": "" }, "title": "经验总结目录" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-1tkxyI_e.mjs"
  ), meta: { "title": "" } }],
  ["/blog/article/", { loader: () => import(
    /* webpackChunkName: "blog_article_index.html" */
    "./assets/index.html-aA5yiQgu.mjs"
  ), meta: { "title": "" } }],
  ["/blog/experience/", { loader: () => import(
    /* webpackChunkName: "blog_experience_index.html" */
    "./assets/index.html-Dlr0lGrB.mjs"
  ), meta: { "title": "" } }],
  ["/projects/", { loader: () => import(
    /* webpackChunkName: "projects_index.html" */
    "./assets/index.html-CHd51AWA.mjs"
  ), meta: { "title": "项目 | 耶稣稣的博客" } }]
]);
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  if (event.button !== void 0 && event.button !== 0) return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i)) return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => h$1(
      "a",
      {
        class: ["route-link", { [props.activeClass]: props.active }],
        href: path.value,
        onClick: (event = {}) => {
          if (guardEvent(event)) {
            void router.push(props.to).catch();
          }
        }
      },
      slots.default()
    );
  }
});
var AutoLink = defineComponent({
  name: "AutoLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const config2 = toRef(props, "config");
    const route = useRoute();
    const siteData2 = useSiteData();
    const withProtocol = computed(() => isLinkWithProtocol(config2.value.link));
    const linkTarget = computed(
      () => config2.value.target || (withProtocol.value ? "_blank" : void 0)
    );
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isInternal = computed(
      () => !withProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(
      () => config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null)
    );
    const linkAriaLabel = computed(
      () => config2.value.ariaLabel ?? config2.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      if (config2.value.exact) return false;
      const localePaths = Object.keys(siteData2.value.locales);
      return localePaths.length ? (
        // Check all the locales
        localePaths.every((key) => key !== config2.value.link)
      ) : (
        // Check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => {
      if (!isInternal.value) return false;
      if (config2.value.activeMatch) {
        return (config2.value.activeMatch instanceof RegExp ? config2.value.activeMatch : new RegExp(config2.value.activeMatch, "u")).test(route.path);
      }
      if (shouldBeActiveInSubpath.value) {
        return route.path.startsWith(config2.value.link);
      }
      return route.path === config2.value.link;
    });
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const content = (defaultSlot == null ? void 0 : defaultSlot(config2.value)) ?? [
        before == null ? void 0 : before(config2.value),
        config2.value.text,
        after == null ? void 0 : after(config2.value)
      ];
      return isInternal.value ? h$1(
        RouteLink,
        {
          "class": "auto-link",
          "to": config2.value.link,
          "active": isActive.value,
          "aria-label": linkAriaLabel.value
        },
        () => content
      ) : h$1(
        "a",
        {
          "class": "auto-link external-link",
          "href": config2.value.link,
          "aria-label": linkAriaLabel.value,
          "rel": linkRel.value,
          "target": linkTarget.value
        },
        content
      );
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(
        async () => route.loader().then(({ comp }) => comp)
      );
    });
    return () => h$1(ContentComponent.value);
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales, routePath) => resolveLocalePath(locales, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales, ...siteData2 }, routeLocale) => {
    var _a;
    return {
      ...siteData2,
      ...locales[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- unsafe indexed access
        ...((_a = locales[routeLocale]) == null ? void 0 : _a.head) ?? [],
        ...siteData2.head
      ]
    };
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const config$9 = defineClientConfig({
  setup() {
    return;
  }
});
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$9
}, Symbol.toStringTag, { value: "Module" }));
[...new Array(6)].map((_2, i2) => `[vp-content] h${i2 + 1}`).join(",");
const hasGlobalComponent = (name, app) => {
  var _a;
  const globalComponents = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
const isDef = (val) => typeof val !== "undefined";
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const { keys } = Object;
const isLinkAbsolute = (test) => startsWith(test, "/") && test[1] !== "/";
const isLinkRelative = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "返回顶部" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    const { y } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y.value > 100);
    const progress = computed(() => y.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h$1(Transition, { name: "back-to-top" }, () => show.value ? h$1("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h$1("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h$1("svg", h$1("circle", {
        "cx": "26",
        "cy": "26",
        "r": "24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "4",
        "stroke-dasharray": `${Math.PI * progress.value * 0.48} ${Math.PI * (100 - progress.value) * 0.48}`
      }))),
      h$1("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const config$8 = defineClientConfig({
  rootComponents: [BackToTop]
});
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$8
}, Symbol.toStringTag, { value: "Module" }));
const config$7 = defineClientConfig({
  setup: () => {
  }
});
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$7
}, Symbol.toStringTag, { value: "Module" }));
const config$6 = defineClientConfig({
  setup() {
    useEventListener("beforeprint", () => {
      document.querySelectorAll("details").forEach((detail) => {
        detail.open = true;
      });
    });
  }
});
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$6
}, Symbol.toStringTag, { value: "Module" }));
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const addClass = (element, name) => {
  element.classList.add(name);
};
const removeClass = (element, name) => {
  element.classList.remove(name);
};
const removeElement = (element) => {
  var _a;
  (_a = element == null ? void 0 : element.parentNode) == null ? void 0 : _a.removeChild(element);
};
const clamp = (n2, min, max) => {
  if (n2 < min)
    return min;
  if (n2 > max)
    return max;
  return n2;
};
const toBarPercent = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ (() => {
  const pending = [];
  const nextStep = () => {
    const fn = pending.shift();
    if (fn) {
      fn(nextStep);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1)
      nextStep();
  };
})();
const camelCase = (content) => content.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (_2, letter) => letter.toUpperCase());
const addStyle = /* @__PURE__ */ (() => {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  const getVendorProp = (name) => {
    const { style } = document.body;
    if (name in style)
      return name;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let index = cssPrefixes.length;
    while (index--) {
      const vendorName = `${cssPrefixes[index]}${capName}`;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  };
  const getStyleProp = (name) => {
    const finalizedName = camelCase(name);
    return cssProps[finalizedName] ?? (cssProps[finalizedName] = getVendorProp(finalizedName));
  };
  const applyCss = (element, prop, value) => {
    element.style[getStyleProp(prop)] = value;
  };
  return (element, properties) => {
    for (const prop in properties) {
      const value = properties[prop];
      if (Object.hasOwn(properties, prop) && isDef(value))
        applyCss(element, prop, value);
    }
  };
})();
const SETTINGS = {
  minimum: 0.08,
  easing: "ease",
  speed: 200,
  trickleRate: 0.02,
  trickleSpeed: 800,
  barSelector: '[role="bar"]',
  parent: "body",
  template: '<div class="bar" role="bar"></div>'
};
const nprogress = {
  percent: null,
  isRendered: () => Boolean(document.getElementById("nprogress")),
  set: (progress) => {
    const { speed, easing } = SETTINGS;
    const inProgress = nprogress.isStarted();
    const newPercent = clamp(progress, SETTINGS.minimum, 1);
    nprogress.percent = newPercent === 1 ? null : newPercent;
    const nprogressElement = nprogress.render(!inProgress);
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    nprogressElement.offsetWidth;
    queue((next) => {
      addStyle(barElement, {
        transform: `translate3d(${toBarPercent(newPercent)}%,0,0)`,
        transition: `all ${speed}ms ${easing}`
      });
      if (newPercent === 1) {
        addStyle(nprogressElement, {
          transition: "none",
          opacity: "1"
        });
        nprogressElement.offsetWidth;
        setTimeout(() => {
          addStyle(nprogressElement, {
            transition: `all ${speed}ms linear`,
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => {
          next();
        }, speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.percent === "number",
  start: () => {
    if (!nprogress.percent)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.percent)
          return;
        nprogress.trickle();
        work();
      }, SETTINGS.trickleSpeed);
    };
    work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.percent)
      return nprogress;
    return nprogress.increase(0.3 + 0.5 * Math.random()).set(1);
  },
  increase: (amount) => {
    let { percent } = nprogress;
    if (!percent) {
      return nprogress.start();
    }
    percent = clamp(percent + (typeof amount === "number" ? amount : (1 - percent) * clamp(Math.random() * percent, 0.1, 0.95)), 0, 0.994);
    return nprogress.set(percent);
  },
  trickle: () => nprogress.increase(Math.random() * SETTINGS.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const nprogressElement = document.createElement("div");
    nprogressElement.id = "nprogress";
    nprogressElement.innerHTML = SETTINGS.template;
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    const parentElement = document.querySelector(SETTINGS.parent);
    const percent = fromStart ? "-100" : toBarPercent(nprogress.percent ?? 0);
    addStyle(barElement, {
      transition: "all 0 linear",
      transform: `translate3d(${percent}%,0,0)`
    });
    if (parentElement) {
      if (parentElement !== document.body) {
        addClass(parentElement, "nprogress-custom-parent");
      }
      parentElement.appendChild(nprogressElement);
    }
    return nprogressElement;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(SETTINGS.parent), "nprogress-custom-parent");
    removeElement(document.getElementById("nprogress"));
  }
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$5
}, Symbol.toStringTag, { value: "Module" }));
const setupCollapsedLines = ({ selector = 'div[class*="language-"].has-collapsed-lines > .collapsed-lines' } = {}) => {
  useEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(selector)) {
      const parent = target.parentElement;
      if (parent == null ? void 0 : parent.classList.toggle("collapsed")) {
        parent.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }
  });
};
const config$4 = {
  setup() {
    setupCollapsedLines();
  }
};
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$4
}, Symbol.toStringTag, { value: "Module" }));
const A = "VUEPRESS_CODE_TAB_STORE", i = useStorage(A, {}), S = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: String }, slots: Object, setup(a, { slots: r }) {
  const l = ref(a.active), o = shallowRef([]), n2 = () => {
    a.tabId && (i.value[a.tabId] = a.data[l.value].id);
  }, s = (e = l.value) => {
    l.value = e < o.value.length - 1 ? e + 1 : 0, o.value[l.value].focus();
  }, c = (e = l.value) => {
    l.value = e > 0 ? e - 1 : o.value.length - 1, o.value[l.value].focus();
  }, b = (e, t) => {
    e.key === " " || e.key === "Enter" ? (e.preventDefault(), l.value = t) : e.key === "ArrowRight" ? (e.preventDefault(), s()) : e.key === "ArrowLeft" && (e.preventDefault(), c()), a.tabId && (i.value[a.tabId] = a.data[l.value].id);
  }, p = () => {
    if (a.tabId) {
      const e = a.data.findIndex(({ id: t }) => i.value[a.tabId] === t);
      if (e !== -1) return e;
    }
    return a.active;
  };
  return onMounted(() => {
    l.value = p(), watch(() => a.tabId && i.value[a.tabId], (e, t) => {
      if (a.tabId && e !== t) {
        const d = a.data.findIndex(({ id: v }) => v === e);
        d !== -1 && (l.value = d);
      }
    });
  }), () => a.data.length ? h$1("div", { class: "vp-code-tabs" }, [h$1("div", { class: "vp-code-tabs-nav", role: "tablist" }, a.data.map(({ id: e }, t) => {
    const d = t === l.value;
    return h$1("button", { type: "button", ref: (v) => {
      v && (o.value[t] = v);
    }, class: ["vp-code-tab-nav", { active: d }], role: "tab", "aria-controls": `codetab-${a.id}-${t}`, "aria-selected": d, onClick: () => {
      l.value = t, n2();
    }, onKeydown: (v) => {
      b(v, t);
    } }, r[`title${t}`]({ value: e, isActive: d }));
  })), a.data.map(({ id: e }, t) => {
    const d = t === l.value;
    return h$1("div", { class: ["vp-code-tab", { active: d }], id: `codetab-${a.id}-${t}`, role: "tabpanel", "aria-expanded": d }, [h$1("div", { class: "vp-code-tab-title" }, r[`title${t}`]({ value: e, isActive: d })), r[`tab${t}`]({ value: e, isActive: d })]);
  })]) : null;
} });
const h = "VUEPRESS_TAB_STORE", n$1 = useStorage(h, {}), $ = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: String }, slots: Object, setup(a, { slots: d }) {
  const l = ref(a.active), v = shallowRef([]), s = () => {
    a.tabId && (n$1.value[a.tabId] = a.data[l.value].id);
  }, o = (t = l.value) => {
    l.value = t < v.value.length - 1 ? t + 1 : 0, v.value[l.value].focus();
  }, c = (t = l.value) => {
    l.value = t > 0 ? t - 1 : v.value.length - 1, v.value[l.value].focus();
  }, b = (t, e) => {
    t.key === " " || t.key === "Enter" ? (t.preventDefault(), l.value = e) : t.key === "ArrowRight" ? (t.preventDefault(), o()) : t.key === "ArrowLeft" && (t.preventDefault(), c()), s();
  }, p = () => {
    if (a.tabId) {
      const t = a.data.findIndex(({ id: e }) => n$1.value[a.tabId] === e);
      if (t !== -1) return t;
    }
    return a.active;
  };
  return onMounted(() => {
    l.value = p(), watch(() => a.tabId && n$1.value[a.tabId], (t, e) => {
      if (a.tabId && t !== e) {
        const i2 = a.data.findIndex(({ id: r }) => r === t);
        i2 !== -1 && (l.value = i2);
      }
    });
  }), () => a.data.length ? h$1("div", { class: "vp-tabs" }, [h$1("div", { class: "vp-tabs-nav", role: "tablist" }, a.data.map(({ id: t }, e) => {
    const i2 = e === l.value;
    return h$1("button", { type: "button", ref: (r) => {
      r && (v.value[e] = r);
    }, class: ["vp-tab-nav", { active: i2 }], role: "tab", "aria-controls": `tab-${a.id}-${e}`, "aria-selected": i2, onClick: () => {
      l.value = e, s();
    }, onKeydown: (r) => {
      b(r, e);
    } }, d[`title${e}`]({ value: t, isActive: i2 }));
  })), a.data.map(({ id: t }, e) => {
    const i2 = e === l.value;
    return h$1("div", { class: ["vp-tab", { active: i2 }], id: `tab-${a.id}-${e}`, role: "tabpanel", "aria-expanded": i2 }, [h$1("div", { class: "vp-tab-title" }, d[`title${e}`]({ value: t, isActive: i2 })), d[`tab${e}`]({ value: t, isActive: i2 })]);
  })]) : null;
} });
const config$3 = {
  enhance: ({ app }) => {
    app.component("CodeTabs", S);
    app.component("Tabs", $);
  }
};
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$3
}, Symbol.toStringTag, { value: "Module" }));
const themeData$1 = JSON.parse(`{"colorModeSwitch":false,"lastUpdated":false,"contributors":false,"navbar":[{"text":"博客","link":"/blog/?cate=art"},{"text":"项目","link":"/projects/"},{"text":"关于我","link":"/about/"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","logo":null,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdatedText":"Last Updated","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales == null ? void 0 : locales[routeLocale]
  };
};
const PLUGIN_ID = "org.vuejs.vuepress.plugin-theme-data";
const PLUGIN_LABEL = "VuePress Theme Data";
const PLUGIN_COMPONENT_STATE_TYPE = PLUGIN_LABEL;
const INSPECTOR_ID = "org.vuejs.vuepress";
const INSPECTOR_LABEL = "VuePress";
const INSPECTOR_CLIENT_DATA_ID = "client-data";
const INSPECTOR_CLIENT_DATA_LABEL = "Client Data";
const config$2 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
    {
      setupDevtoolsPlugin({
        // fix recursive reference
        app,
        id: PLUGIN_ID,
        label: PLUGIN_LABEL,
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://vuepress.vuejs.org",
        logo: "https://vuepress.vuejs.org/images/hero.png",
        componentStateTypes: [PLUGIN_COMPONENT_STATE_TYPE]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: INSPECTOR_LABEL,
          icon: "article"
        });
        api.on.getInspectorTree((payload) => {
          var _a;
          if (payload.inspectorId !== INSPECTOR_ID)
            return;
          (_a = payload.rootNodes.find((item) => item.id === INSPECTOR_CLIENT_DATA_ID)) == null ? void 0 : _a.children.push({
            id: "themeData",
            label: "themeData"
          }, {
            id: "themeLocaleData",
            label: "themeLocaleData"
          });
        });
        api.on.getInspectorState((payload) => {
          if (payload.inspectorId !== INSPECTOR_ID)
            return;
          if (payload.nodeId === INSPECTOR_CLIENT_DATA_ID) {
            payload.state[INSPECTOR_CLIENT_DATA_LABEL].push({
              key: "themeData",
              value: themeData2.value
            }, {
              key: "themeLocaleData",
              value: themeLocaleData.value
            });
          }
          if (["themeData", "themeLocaleData"].includes(payload.nodeId)) {
            payload.state = {
              [INSPECTOR_CLIENT_DATA_LABEL]: [
                {
                  key: payload.nodeId,
                  value: payload.nodeId === "themeData" ? themeData2.value : themeLocaleData.value
                }
              ]
            };
          }
        });
        watch([themeData2, themeLocaleData], () => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
        });
      });
    }
  }
});
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const darkModeSymbol = Symbol("");
const applyDarkmodeToHTML = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const el = window.document.documentElement;
    el.dataset.theme = value ? "dark" : "light";
  };
  onMounted(() => {
    watchImmediate(isDarkMode, update);
  });
  onUnmounted(() => {
    update();
  });
};
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  applyDarkmodeToHTML(isDarkMode);
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const resolveAutoLink = (config2, currentPath) => {
  const { notFound, meta, path } = resolveRoute(config2, currentPath);
  return notFound ? { text: path, link: path } : {
    text: meta.title || path,
    link: path
  };
};
const resolvePrefix = (prefix = "", path = "") => isLinkAbsolute(path) || isLinkWithProtocol(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const resolveSidebarPageHeader = (header) => ({
  text: header.title,
  link: header.link,
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  children: resolveSidebarPageHeaders(header.children)
});
const resolveSidebarPageHeaders = (headers) => headers ? headers.map((header) => resolveSidebarPageHeader(header)) : [];
const resolveSidebarHeadingItem = (page, headers) => [
  {
    text: page.title,
    children: resolveSidebarPageHeaders(headers)
  }
];
const resolveArraySidebarItems = (sidebarConfig, headers, path, prefix = "") => {
  const handleChildItem = (item, pathPrefix) => {
    var _a;
    const childItem = isString(item) ? resolveAutoLink(resolvePrefix(pathPrefix, item)) : isString(item.link) ? {
      ...item,
      link: isLinkRelative(item.link) ? resolveAutoLink(resolvePrefix(pathPrefix, item.link)).link : item.link
    } : item;
    if ("children" in childItem) {
      return {
        ...childItem,
        children: childItem.children.map((child) => handleChildItem(child, resolvePrefix(pathPrefix, childItem.prefix)))
      };
    }
    if (childItem.link === path) {
      const currentHeaders = ((_a = headers[0]) == null ? void 0 : _a.level) === 1 ? headers[0].children : headers;
      return {
        ...childItem,
        children: resolveSidebarPageHeaders(currentHeaders)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item, prefix));
};
const resolveMultiSidebarItems = (sidebarConfig, page, headers, path) => {
  const sidebarRoutes = keys(sidebarConfig).sort((x, y) => y.length - x.length);
  for (const base of sidebarRoutes)
    if (startsWith(decodeURI(path), base)) {
      const matched = sidebarConfig[base];
      return matched ? matched === "heading" ? resolveSidebarHeadingItem(page, headers) : resolveArraySidebarItems(matched, headers, path, base) : [];
    }
  console.warn(`${decodeURI(path)} is missing sidebar config.`);
  return [];
};
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const resolveSidebarItems = (sidebarConfig, page, path, routeLocale, headers) => {
  if (sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "heading") {
    return resolveSidebarHeadingItem(page, headers);
  }
  if (Array.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, headers, path, routeLocale);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, page, headers, path);
  }
  return [];
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const page = usePageData();
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const sidebarConfig = computed(() => frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "heading");
  const sidebarItems = computed(() => resolveSidebarItems(sidebarConfig.value, page.value, route.path, routeLocale.value, page.value.headers));
  provide(sidebarItemsSymbol, sidebarItems);
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    type: { default: "tip" },
    text: { default: "" },
    vertical: { default: void 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: ["vp-badge", $props.type],
    style: {
      verticalAlign: $props.vertical
    }
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate($props.text)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u], ["__file", "Badge.vue"]]);
const _sfc_main$t = {
  __name: "MyHomeNav",
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
      validator: (value) => {
        return value.every(
          (item) => typeof item.src === "string" && typeof item.link === "string" && (typeof item.alt === "string" || typeof item.alt === "undefined")
        );
      }
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const router = useRouter();
    function navigateTo(link) {
      if (link) {
        router.push(link).catch((err) => {
          if (err.name !== "NavigationDuplicated") {
            console.error(err);
          }
        });
      }
    }
    const __returned__ = { props, router, navigateTo, get useRouter() {
      return useRouter;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-home-nav" }, _attrs))} data-v-60e389b4><!--[-->`);
  ssrRenderList($props.images, (item, index) => {
    _push(`<div class="image-link" data-v-60e389b4><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt || "Nav Image")} class="image-item" data-v-60e389b4></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/MyHomeNav.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const MyHomeNav = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t], ["__scopeId", "data-v-60e389b4"], ["__file", "MyHomeNav.vue"]]);
const _imports_0$2 = "/images/zcool.webp";
const _imports_1 = "/images/wechat.webp";
const _imports_2 = "/images/ins.webp";
const _imports_3 = "/images/x.webp";
const _imports_4 = "/images/footerline.webp";
const _imports_5 = "/images/qrcode.webp";
const _sfc_main$s = {
  __name: "MyHomeFooter",
  setup(__props, { expose: __expose }) {
    const isQRCodeVisible = ref(false);
    const showQRCode = () => {
      isQRCodeVisible.value = true;
    };
    const hideQRCode = () => {
      isQRCodeVisible.value = false;
    };
    __expose({ isQRCodeVisible, showQRCode, hideQRCode });
    const __returned__ = { isQRCodeVisible, showQRCode, hideQRCode, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-home-footer" }, _attrs))} data-v-e4a5a9b2><div class="footer-nav" data-v-e4a5a9b2><a href="https://www.zcool.com.cn/u/1072459" data-v-e4a5a9b2><img${ssrRenderAttr("src", _imports_0$2)} alt="zcool" class="image-item" data-v-e4a5a9b2></a><a href="#" data-v-e4a5a9b2><img${ssrRenderAttr("src", _imports_1)} alt="wechat" class="image-item" data-v-e4a5a9b2></a><a href="https://www.instagram.com/yepan3/" data-v-e4a5a9b2><img${ssrRenderAttr("src", _imports_2)} alt="ins" class="image-item" data-v-e4a5a9b2></a><a href="https://x.com/yesusu6" data-v-e4a5a9b2><img${ssrRenderAttr("src", _imports_3)} alt="X" class="image-item" data-v-e4a5a9b2></a></div><div class="line" data-v-e4a5a9b2><img${ssrRenderAttr("src", _imports_4)} alt="footerline" data-v-e4a5a9b2></div>`);
  if ($setup.isQRCodeVisible) {
    _push(`<div class="modal" data-v-e4a5a9b2><div class="modal-content" data-v-e4a5a9b2><span class="close-btn" data-v-e4a5a9b2>×</span><img${ssrRenderAttr("src", _imports_5)} alt="WeChat QR Code" class="qrcode-img" data-v-e4a5a9b2></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/MyHomeFooter.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const MyHomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s], ["__scopeId", "data-v-e4a5a9b2"], ["__file", "MyHomeFooter.vue"]]);
const _imports_0$1 = "/images/hero.webp";
const _sfc_main$r = {
  __name: "MyHome",
  setup(__props, { expose: __expose }) {
    __expose();
    const navImages = ref([
      { src: "/images/article.webp", link: "/articles/", alt: "articles" },
      { src: "/images/project.webp", link: "/projects/", alt: "projects" },
      { src: "/images/about.webp", link: "/about/", alt: "about" }
    ]);
    const __returned__ = { navImages, MyHomeNav, MyHomeFooter, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-container" }, _attrs))} data-v-fe6f7246><div class="hero-image" data-v-fe6f7246><img${ssrRenderAttr("src", _imports_0$1)} alt="heroImage" data-v-fe6f7246></div>`);
  _push(ssrRenderComponent($setup["MyHomeNav"], { images: $setup.navImages }, null, _parent));
  _push(ssrRenderComponent($setup["MyHomeFooter"], null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/MyHome.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const MyHome = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-fe6f7246"], ["__file", "MyHome.vue"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarBrand",
  setup(__props, { expose: __expose }) {
    __expose();
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const navbarBrandLogoAlt = computed(
      () => themeLocale.value.logoAlt ?? navbarBrandTitle.value
    );
    const navBarLogoAltMatchesTitle = computed(
      () => navbarBrandTitle.value.toLocaleUpperCase().trim() === navbarBrandLogoAlt.value.toLocaleUpperCase().trim()
    );
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value) return null;
      const img = h$1("img", {
        class: "vp-site-logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandLogoAlt.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h$1(ClientOnly, () => img);
    };
    const __returned__ = { routeLocale, siteLocale, themeLocale, isDarkMode, navbarBrandLink, navbarBrandTitle, navbarBrandLogo, navbarBrandLogoAlt, navBarLogoAltMatchesTitle, NavbarBrandLogo, get RouteLink() {
      return RouteLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["RouteLink"], mergeProps({ to: $setup.navbarBrandLink }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["NavbarBrandLogo"], null, null, _parent2, _scopeId));
        if ($setup.navbarBrandTitle) {
          _push2(`<span class="${ssrRenderClass([{ "vp-hide-mobile": $setup.navbarBrandLogo }, "vp-site-name"])}"${ssrRenderAttr("aria-hidden", $setup.navBarLogoAltMatchesTitle)}${_scopeId}>${ssrInterpolate($setup.navbarBrandTitle)}</span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode($setup["NavbarBrandLogo"]),
          $setup.navbarBrandTitle ? (openBlock(), createBlock("span", {
            key: 0,
            class: ["vp-site-name", { "vp-hide-mobile": $setup.navbarBrandLogo }],
            "aria-hidden": $setup.navBarLogoAltMatchesTitle
          }, toDisplayString($setup.navbarBrandTitle), 11, ["aria-hidden"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarBrand.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__file", "VPNavbarBrand.vue"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPAutoLink",
  props: {
    config: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["AutoLink"], mergeProps({ config: $props.config }, _attrs), createSlots({
    before: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "before", $props.config, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "before", $props.config)
        ];
      }
    }),
    after: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "after", $props.config, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "after", $props.config)
        ];
      }
    }),
    _: 2
  }, [
    _ctx.$slots.default ? {
      name: "default",
      fn: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", $props.config, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", $props.config)
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPAutoLink.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPAutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__file", "VPAutoLink.vue"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPDropdownTransition",
  setup(__props, { expose: __expose }) {
    __expose();
    const setHeight = (item) => {
      item.style.height = `${item.scrollHeight}px`;
    };
    const unsetHeight = (item) => {
      item.style.height = "";
    };
    const __returned__ = { setHeight, unsetHeight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPDropdownTransition.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPDropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__file", "VPDropdownTransition.vue"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarDropdown",
  props: {
    config: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { config: config2 } = toRefs(props);
    const route = useRoute();
    const [open, toggleOpen] = useToggle(false);
    const dropdownAriaLabel = computed(
      () => config2.value.ariaLabel || config2.value.text
    );
    const isLastItemOfArray = (arrayItem, array) => array[array.length - 1] === arrayItem;
    const handleDropdown = (e) => {
      if (e.detail === 0) toggleOpen();
      else toggleOpen(false);
    };
    watch(
      () => route.path,
      () => {
        toggleOpen(false);
      }
    );
    const __returned__ = { props, config: config2, route, open, toggleOpen, dropdownAriaLabel, isLastItemOfArray, handleDropdown, VPAutoLink, VPDropdownTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-navbar-dropdown-wrapper", { open: $setup.open }]
  }, _attrs))}><button class="vp-navbar-dropdown-title" type="button"${ssrRenderAttr("aria-label", $setup.dropdownAriaLabel)}><span class="title">${ssrInterpolate($setup.config.text)}</span><span class="arrow down"></span></button><button class="vp-navbar-dropdown-title-mobile" type="button"${ssrRenderAttr("aria-label", $setup.dropdownAriaLabel)}><span class="title">${ssrInterpolate($setup.config.text)}</span><span class="${ssrRenderClass([$setup.open ? "down" : "right", "arrow"])}"></span></button>`);
  _push(ssrRenderComponent($setup["VPDropdownTransition"], null, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul style="${ssrRenderStyle($setup.open ? null : { display: "none" })}" class="vp-navbar-dropdown"${_scopeId}><!--[-->`);
        ssrRenderList($setup.config.children, (child) => {
          _push2(`<li class="vp-navbar-dropdown-item"${_scopeId}>`);
          if ("children" in child) {
            _push2(`<!--[--><h4 class="vp-navbar-dropdown-subtitle"${_scopeId}>`);
            if (child.link) {
              _push2(ssrRenderComponent($setup["VPAutoLink"], {
                config: child,
                onFocusout: () => {
                  if ($setup.isLastItemOfArray(child, $setup.config.children) && child.children.length === 0) {
                    $setup.open = false;
                  }
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(child.text)}</span>`);
            }
            _push2(`</h4><ul class="vp-navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(child.children, (grandchild) => {
              _push2(`<li class="vp-navbar-dropdown-subitem"${_scopeId}>`);
              _push2(ssrRenderComponent($setup["VPAutoLink"], {
                config: grandchild,
                onFocusout: () => {
                  if ($setup.isLastItemOfArray(grandchild, child.children) && $setup.isLastItemOfArray(child, $setup.config.children)) {
                    $setup.toggleOpen(false);
                  }
                }
              }, null, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul><!--]-->`);
          } else {
            _push2(ssrRenderComponent($setup["VPAutoLink"], {
              config: child,
              onFocusout: () => {
                if ($setup.isLastItemOfArray(child, $setup.config.children)) {
                  $setup.toggleOpen(false);
                }
              }
            }, null, _parent2, _scopeId));
          }
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          withDirectives(createVNode("ul", { class: "vp-navbar-dropdown" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.config.children, (child) => {
              return openBlock(), createBlock("li", {
                key: child.text,
                class: "vp-navbar-dropdown-item"
              }, [
                "children" in child ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("h4", { class: "vp-navbar-dropdown-subtitle" }, [
                    child.link ? (openBlock(), createBlock($setup["VPAutoLink"], {
                      key: 0,
                      config: child,
                      onFocusout: () => {
                        if ($setup.isLastItemOfArray(child, $setup.config.children) && child.children.length === 0) {
                          $setup.open = false;
                        }
                      }
                    }, null, 8, ["config", "onFocusout"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(child.text), 1))
                  ]),
                  createVNode("ul", { class: "vp-navbar-dropdown-subitem-wrapper" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(child.children, (grandchild) => {
                      return openBlock(), createBlock("li", {
                        key: grandchild.link,
                        class: "vp-navbar-dropdown-subitem"
                      }, [
                        createVNode($setup["VPAutoLink"], {
                          config: grandchild,
                          onFocusout: () => {
                            if ($setup.isLastItemOfArray(grandchild, child.children) && $setup.isLastItemOfArray(child, $setup.config.children)) {
                              $setup.toggleOpen(false);
                            }
                          }
                        }, null, 8, ["config", "onFocusout"])
                      ]);
                    }), 128))
                  ])
                ], 64)) : (openBlock(), createBlock($setup["VPAutoLink"], {
                  key: 1,
                  config: child,
                  onFocusout: () => {
                    if ($setup.isLastItemOfArray(child, $setup.config.children)) {
                      $setup.toggleOpen(false);
                    }
                  }
                }, null, 8, ["config", "onFocusout"]))
              ]);
            }), 128))
          ], 512), [
            [vShow, $setup.open]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarDropdown.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPNavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__file", "VPNavbarDropdown.vue"]]);
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(prefix, item));
  }
  if ("children" in item) {
    return {
      ...item,
      children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
    };
  }
  return {
    ...item,
    link: isLinkRelative(item.link) ? resolveAutoLink(resolvePrefix(prefix, item.link)).link : item.link
  };
};
const useNavbarConfig = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => (
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item))
  ));
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || repo.includes("github.com"))
    return "GitHub";
  if (repo.includes("bitbucket.org"))
    return "Bitbucket";
  if (repo.includes("gitlab.com"))
    return "GitLab";
  if (repo.includes("gitee.com"))
    return "Gitee";
  return null;
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo);
  const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = computed(() => {
    if (repo.value && !isLinkHttp(repo.value)) {
      return `https://github.com/${repo.value}`;
    }
    return repo.value;
  });
  const repoLabel = computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocale.value.repoLabel)
      return themeLocale.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value) {
      return [];
    }
    return [
      {
        text: repoLabel.value,
        link: repoLink.value
      }
    ];
  });
};
const useNavbarSelectLanguage = () => {
  const route = useRoute();
  const routePaths = useRoutePaths();
  const routeLocale = useRouteLocale();
  const site = useSiteData();
  const siteLocale = useSiteLocaleData();
  const theme = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Object.keys(site.value.locales);
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = route.path;
    const currentFullPath = route.fullPath;
    const languageDropdown = {
      text: `${themeLocale.value.selectLanguageText}`,
      ariaLabel: `${themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText}`,
      children: localePaths.map((targetLocalePath) => {
        var _a, _b;
        const targetSiteLocale = ((_a = site.value.locales) == null ? void 0 : _a[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b = theme.value.locales) == null ? void 0 : _b[targetLocalePath]) ?? {};
        const targetLang = `${targetSiteLocale.lang}`;
        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        if (targetLang === siteLocale.value.lang) {
          return {
            text,
            activeMatch: ".",
            link: route.fullPath
          };
        }
        const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
        return {
          text,
          // try to keep current hash and params across languages
          link: routePaths.value.some((item) => item === targetLocalePage) ? currentFullPath.replace(currentPath, targetLocalePage) : targetThemeLocale.home ?? targetLocalePath
        };
      })
    };
    return [languageDropdown];
  });
};
const mobile = "719px";
const cssVariables = {
  mobile
};
var DeviceType;
(function(DeviceType2) {
  DeviceType2["Mobile"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
  [DeviceType.Mobile]: Number.parseInt(cssVariables.mobile.replace("px", ""), 10)
};
const useUpdateDeviceStatus = (deviceType, callback) => {
  const width = DeviceTypeMap[deviceType];
  if (!Number.isInteger(width)) {
    return;
  }
  useEventListener("orientationchange", () => {
    callback(width);
  }, false);
  useEventListener("resize", () => {
    callback(width);
  }, false);
  onMounted(() => {
    callback(width);
  });
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const isMobile = ref(false);
    const navbarLabel = computed(() => {
      const themeLocale = useThemeLocaleData();
      return themeLocale.value.navbarLabel ?? "site navigation";
    });
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        isMobile.value = window.innerWidth < mobileDesktopBreakpoint;
      }
    );
    const __returned__ = { navbarConfig, navbarSelectLanguage, navbarRepo, isMobile, navbarLabel, navbarLinks, VPAutoLink, VPNavbarDropdown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.navbarLinks.length) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      class: "vp-navbar-items",
      "aria-label": $setup.navbarLabel
    }, _attrs))}><!--[-->`);
    ssrRenderList($setup.navbarLinks, (item) => {
      _push(`<div class="vp-navbar-item">`);
      if ("children" in item) {
        _push(ssrRenderComponent($setup["VPNavbarDropdown"], {
          class: { mobile: $setup.isMobile },
          config: item
        }, null, _parent));
      } else {
        _push(ssrRenderComponent($setup["VPAutoLink"], { config: item }, null, _parent));
      }
      _push(`</div>`);
    });
    _push(`<!--]--></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarItems.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPNavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__file", "VPNavbarItems.vue"]]);
const _sfc_main$l = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "dark-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPDarkIcon.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPDarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__file", "VPDarkIcon.vue"]]);
const _sfc_main$k = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "light-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPLightIcon.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPLightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__file", "VPLightIcon.vue"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPToggleColorModeButton",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    const __returned__ = { themeLocale, isDarkMode, toggleColorMode, VPDarkIcon, VPLightIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "vp-toggle-color-mode-button",
    title: $setup.themeLocale.toggleColorMode
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPLightIcon"], {
    style: !$setup.isDarkMode ? null : { display: "none" }
  }, null, _parent));
  _push(ssrRenderComponent($setup["VPDarkIcon"], {
    style: $setup.isDarkMode ? null : { display: "none" }
  }, null, _parent));
  _push(`</button>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPToggleColorModeButton.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__file", "VPToggleColorModeButton.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPToggleSidebarButton",
  emits: ["toggle"],
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const __returned__ = { themeLocale };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vp-toggle-sidebar-button",
    title: $setup.themeLocale.toggleSidebar,
    "aria-expanded": "false",
    role: "button",
    tabindex: "0"
  }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPToggleSidebarButton.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__file", "VPToggleSidebarButton.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavbar",
  emits: ["toggleSidebar"],
  setup(__props, { expose: __expose }) {
    __expose();
    const SearchBox = hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : () => null;
    const themeLocale = useThemeLocaleData();
    const navbar = useTemplateRef("navbar");
    const navbarBrand = useTemplateRef("navbar-brand");
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: `${linksWrapperMaxWidth.value}px`
      };
    });
    const getCssValue = (el, property) => {
      var _a;
      const val = (_a = el == null ? void 0 : el.ownerDocument.defaultView) == null ? void 0 : _a.getComputedStyle(el, null)[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    };
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        var _a;
        const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        if (window.innerWidth < mobileDesktopBreakpoint) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) ?? 0);
        }
      }
    );
    const __returned__ = { SearchBox, themeLocale, navbar, navbarBrand, linksWrapperMaxWidth, linksWrapperStyle, getCssValue, VPNavbarBrand, VPNavbarItems, VPToggleColorModeButton, VPToggleSidebarButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    ref: "navbar",
    class: "vp-navbar",
    "vp-navbar": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPToggleSidebarButton"], {
    onToggle: ($event) => _ctx.$emit("toggleSidebar")
  }, null, _parent));
  _push(`<span>`);
  _push(ssrRenderComponent($setup["VPNavbarBrand"], null, null, _parent));
  _push(`</span><div class="vp-navbar-items-wrapper" style="${ssrRenderStyle($setup.linksWrapperStyle)}">`);
  ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPNavbarItems"], { class: "vp-hide-mobile" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
  if ($setup.themeLocale.colorModeSwitch) {
    _push(ssrRenderComponent($setup["VPToggleColorModeButton"], null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent($setup["SearchBox"], null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbar.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__file", "VPNavbar.vue"]]);
const _sfc_main$g = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "edit-icon",
    viewBox: "0 0 1024 1024"
  }, _attrs))}><g fill="currentColor"><path d="M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"></path><path d="M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"></path></g></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPEditIcon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPEditIcon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__file", "VPEditIcon.vue"]]);
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a = page.value.git) == null ? void 0 : _a.contributors) ?? null;
  });
};
const EDIT_LINK_PATTERNS = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return EDIT_LINK_PATTERNS[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;
    if (!showEditLink) {
      return null;
    }
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLinkText } = themeLocale.value;
    if (!docsRepo)
      return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink
    };
  });
};
const useLastUpdated = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a = page.value.git) == null ? void 0 : _a.updatedTime))
      return null;
    const updatedDate = new Date(page.value.git.updatedTime);
    return updatedDate.toLocaleString();
  });
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPPageMeta",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    const __returned__ = { themeLocale, editLink, lastUpdated, contributors, VPAutoLink, VPEditIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "vp-page-meta" }, _attrs))}>`);
  if ($setup.editLink) {
    _push(`<div class="vp-meta-item edit-link">`);
    _push(ssrRenderComponent($setup["VPAutoLink"], {
      class: "label",
      config: $setup.editLink
    }, {
      before: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["VPEditIcon"], null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["VPEditIcon"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="vp-meta-item git-info">`);
  if ($setup.lastUpdated) {
    _push(`<div class="vp-meta-item last-updated"><span class="meta-item-label">${ssrInterpolate($setup.themeLocale.lastUpdatedText)}: </span>`);
    _push(ssrRenderComponent(_component_ClientOnly, null, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="meta-item-info"${_scopeId}>${ssrInterpolate($setup.lastUpdated)}</span>`);
        } else {
          return [
            createVNode("span", { class: "meta-item-info" }, toDisplayString($setup.lastUpdated), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.contributors && $setup.contributors.length) {
    _push(`<div class="vp-meta-item contributors"><span class="meta-item-label">${ssrInterpolate($setup.themeLocale.contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
    ssrRenderList($setup.contributors, (contributor, index) => {
      _push(`<!--[--><span class="contributor"${ssrRenderAttr("title", `email: ${contributor.email}`)}>${ssrInterpolate(contributor.name)}</span>`);
      if (index !== $setup.contributors.length - 1) {
        _push(`<!--[-->, <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></footer>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPageMeta.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPPageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__file", "VPPageMeta.vue"]]);
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (isLinkAbsolute(url)) {
        if (route.path !== url)
          router.push(url);
      } else if (isLinkWithProtocol(url)) {
        window.open(url);
      } else {
        router.push(encodeURI(url));
      }
  };
};
const resolveFromFrontmatterConfig = (config2, currentPath) => {
  if (config2 === false) {
    return false;
  }
  if (isString(config2)) {
    return resolveAutoLink(config2, currentPath);
  }
  if (isPlainObject(config2)) {
    return {
      ...config2,
      link: resolveAutoLink(config2.link, currentPath).link
    };
  }
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
  if (linkIndex !== -1) {
    const targetItem = sidebarItems[linkIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  for (const item of sidebarItems) {
    if ("children" in item) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult) {
        return childResult;
      }
    }
  }
  const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
  if (prefixIndex !== -1) {
    const targetItem = sidebarItems[prefixIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  return null;
};
const useRelatedLinks = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarItems = useSidebarItems();
  const route = useRoute();
  const prevLink = computed(() => {
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, route.path);
    return prevConfig === false ? null : prevConfig ?? (themeLocale.value.prev === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
  });
  const nextLink = computed(() => {
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, route.path);
    return nextConfig === false ? null : nextConfig ?? (themeLocale.value.next === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
  });
  return {
    prevLink,
    nextLink
  };
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPPageNav",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const navigate = useNavigate();
    const { prevLink, nextLink } = useRelatedLinks();
    const navbarLabel = computed(
      () => themeLocale.value.pageNavbarLabel ?? "page navigation"
    );
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextLink.value) {
            navigate(nextLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevLink.value) {
            navigate(prevLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    const __returned__ = { themeLocale, navigate, prevLink, nextLink, navbarLabel, VPAutoLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.prevLink || $setup.nextLink) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      class: "vp-page-nav",
      "aria-label": $setup.navbarLabel
    }, _attrs))}>`);
    if ($setup.prevLink) {
      _push(ssrRenderComponent($setup["VPAutoLink"], {
        class: "prev",
        config: $setup.prevLink
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hint"${_scopeId}><span class="arrow left"${_scopeId}></span> ${ssrInterpolate($setup.themeLocale.prev ?? "Prev")}</div><div class="link"${_scopeId}><span${_scopeId}>${ssrInterpolate($setup.prevLink.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "hint" }, [
                createVNode("span", { class: "arrow left" }),
                createTextVNode(" " + toDisplayString($setup.themeLocale.prev ?? "Prev"), 1)
              ]),
              createVNode("div", { class: "link" }, [
                createVNode("span", null, toDisplayString($setup.prevLink.text), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($setup.nextLink) {
      _push(ssrRenderComponent($setup["VPAutoLink"], {
        class: "next",
        config: $setup.nextLink
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hint"${_scopeId}>${ssrInterpolate($setup.themeLocale.next ?? "Next")} <span class="arrow right"${_scopeId}></span></div><div class="link"${_scopeId}><span${_scopeId}>${ssrInterpolate($setup.nextLink.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "hint" }, [
                createTextVNode(toDisplayString($setup.themeLocale.next ?? "Next") + " ", 1),
                createVNode("span", { class: "arrow right" })
              ]),
              createVNode("div", { class: "link" }, [
                createVNode("span", null, toDisplayString($setup.nextLink.text), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPageNav.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPPageNav = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__file", "VPPageNav.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPPageMeta, VPPageNav, get Content() {
      return Content;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "vp-page" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
  _push(`<div vp-content>`);
  ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["Content"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent($setup["VPPageMeta"], null, null, _parent));
  _push(ssrRenderComponent($setup["VPPageNav"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__file", "VPPage.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if ("children" in item) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: { default: 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const collapsible = computed(
      () => "collapsible" in item.value && item.value.collapsible
    );
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "vp-sidebar-item": true,
      "vp-sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": collapsible.value
    }));
    const isOpenDefault = computed(
      () => collapsible.value ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const onClick = (e) => {
      if (collapsible.value) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach(() => {
      void nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    const __returned__ = { props, item, depth, route, router, collapsible, isActive, itemClass, isOpenDefault, isOpen, toggleIsOpen, onClick, unregisterRouterHook, VPAutoLink, VPDropdownTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  if ($setup.item.link) {
    _push(ssrRenderComponent($setup["VPAutoLink"], {
      class: $setup.itemClass,
      config: $setup.item
    }, null, _parent));
  } else {
    _push(`<p tabindex="0" class="${ssrRenderClass($setup.itemClass)}">${ssrInterpolate($setup.item.text)} `);
    if ($setup.collapsible) {
      _push(`<span class="${ssrRenderClass([$setup.isOpen ? "down" : "right", "arrow"])}"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p>`);
  }
  if ("children" in $setup.item && $setup.item.children.length) {
    _push(ssrRenderComponent($setup["VPDropdownTransition"], null, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<ul style="${ssrRenderStyle($setup.isOpen ? null : { display: "none" })}" class="vp-sidebar-children"${_scopeId}><!--[-->`);
          ssrRenderList($setup.item.children, (child) => {
            _push2(ssrRenderComponent(_component_VPSidebarItem, {
              key: `${$setup.depth}${child.text}${child.link}`,
              item: child,
              depth: $setup.depth + 1
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></ul>`);
        } else {
          return [
            withDirectives(createVNode("ul", { class: "vp-sidebar-children" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.item.children, (child) => {
                return openBlock(), createBlock(_component_VPSidebarItem, {
                  key: `${$setup.depth}${child.text}${child.link}`,
                  item: child,
                  depth: $setup.depth + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, $setup.isOpen]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "VPSidebarItem.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".vp-sidebar");
          if (!sidebar) return;
          const activeSidebarItem = document.querySelector(
            `.vp-sidebar .vp-sidebar-item.auto-link[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem) return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    const __returned__ = { route, sidebarItems, VPSidebarItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.sidebarItems.length) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "vp-sidebar-items" }, _attrs))}><!--[-->`);
    ssrRenderList($setup.sidebarItems, (item) => {
      _push(ssrRenderComponent($setup["VPSidebarItem"], {
        key: `${item.text}${item.link}`,
        item
      }, null, _parent));
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItems.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPSidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__file", "VPSidebarItems.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPNavbarItems, VPSidebarItems };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<aside${ssrRenderAttrs(mergeProps({
    class: "vp-sidebar",
    "vp-sidebar": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPNavbarItems"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPSidebarItems"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
  _push(`</aside>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__file", "VPSidebar.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props, { expose: __expose }) {
    __expose();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const enableExternalLinkIcon = computed(
      () => frontmatter.value.externalLinkIcon ?? themeLocale.value.externalLinkIcon ?? true
    );
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value,
        "external-link-icon": enableExternalLinkIcon.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    const __returned__ = { page, frontmatter, themeLocale, shouldShowNavbar, sidebarItems, isSidebarOpen, toggleSidebar, touchStart, onTouchStart, onTouchEnd, enableExternalLinkIcon, containerClass, get unregisterRouterHook() {
      return unregisterRouterHook;
    }, set unregisterRouterHook(v) {
      unregisterRouterHook = v;
    }, scrollPromise: scrollPromise2, onBeforeEnter, onBeforeLeave, VPHome: MyHome, VPNavbar, VPPage, VPSidebar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-theme-container", $setup.containerClass],
    "vp-container": ""
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
    if ($setup.shouldShowNavbar) {
      _push(ssrRenderComponent($setup["VPNavbar"], { onToggleSidebar: $setup.toggleSidebar }, {
        before: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "navbar-before")
            ];
          }
        }),
        after: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "navbar-after")
            ];
          }
        }),
        _: 3
      }, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<div class="vp-sidebar-mask"></div>`);
  ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
    _push(ssrRenderComponent($setup["VPSidebar"], null, {
      top: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "sidebar-top")
          ];
        }
      }),
      bottom: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "sidebar-bottom")
          ];
        }
      }),
      _: 3
    }, _parent));
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "page", {}, () => {
    if ($setup.frontmatter.home) {
      _push(ssrRenderComponent($setup["VPHome"], null, null, _parent));
    } else {
      _push(ssrRenderComponent($setup["VPPage"], {
        key: $setup.page.path
      }, {
        top: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-top")
            ];
          }
        }),
        "content-top": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-content-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-content-top")
            ];
          }
        }),
        "content-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-content-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-content-bottom")
            ];
          }
        }),
        bottom: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ParentLayout = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "Layout.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props, { expose: __expose }) {
    __expose();
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    const __returned__ = { routeLocale, themeLocale, messages, getMsg, homeLink, homeText, get RouteLink() {
      return RouteLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vp-theme-container",
    "vp-container": ""
  }, _attrs))} data-v-8636ca9b><main class="page" data-v-8636ca9b><div vp-content data-v-8636ca9b><h1 data-v-8636ca9b>404</h1><blockquote data-v-8636ca9b>${ssrInterpolate($setup.getMsg())}</blockquote>`);
  _push(ssrRenderComponent($setup["RouteLink"], { to: $setup.homeLink }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.homeText)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.homeText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/layouts/NotFound.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-8636ca9b"], ["__file", "NotFound.vue"]]);
const config$1 = defineClientConfig({
  enhance({ app, router }) {
    if (!hasGlobalComponent("Badge"))
      app.component("Badge", Badge);
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  },
  layouts: {
    Layout: ParentLayout,
    NotFound
  }
});
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const config = defineClientConfig({
  enhance({ app, router }) {
    return;
  }
});
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
const categoriesMap = JSON.parse("{}");
const store = JSON.parse('["/blog/article/brand-fonts/","/blog/article/system-fonts/","/blog/article/typography/","/blog/article/colors3/","/blog/article/colors2/","/blog/article/colors1/","/blog/experience/colors2/","/blog/experience/colors1/","/projects/test5/","/projects/goswak/"]');
const typesMap = JSON.parse('{"blog":{"/":{"path":"/blog/article/","indexes":[0,1,2,3,4,5]}},"experience":{"/":{"path":"/blog/experience/","indexes":[6,7]}},"projects":{"/":{"path":"/projects/","indexes":[8,9]}}}');
const _ = shallowRef(categoriesMap);
readonly(_);
const n = shallowRef(typesMap);
readonly(n);
const k = (t) => {
  const m = usePageFrontmatter(), u = useRouteLocale();
  return computed(() => {
    var _a;
    const s = t ?? ((_a = m.value.blog) == null ? void 0 : _a.key) ?? "";
    if (!s) return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!(s in n.value)) throw new Error(`useBlogType: key ${t} is invalid`);
    const e = n.value[s][u.value], a = { path: e.path, items: [] };
    for (const o of e.indexes) {
      const { path: r, meta: p } = resolveRoute(store[o]);
      a.items.push({ path: r, info: p["_blog"] });
    }
    return a;
  });
};
const _sfc_main$7 = {
  __name: "ArticleList",
  setup(__props, { expose: __expose }) {
    __expose();
    const articles = k("blog");
    const __returned__ = { articles, get useBlogType() {
      return k;
    }, get usePageFrontmatter() {
      return usePageFrontmatter;
    }, ParentLayout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["ParentLayout"], _attrs, {
    page: withCtx((_2, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="atricles-container" data-v-7ef142c6${_scopeId}>`);
        if ((_a = $setup.articles.items) == null ? void 0 : _a.length) {
          _push2(`<div class="articles-wrapper" data-v-7ef142c6${_scopeId}><!--[-->`);
          ssrRenderList($setup.articles.items, ({ info, path }) => {
            _push2(`<article class="articles-item" data-v-7ef142c6${_scopeId}><div class="articles-info" data-v-7ef142c6${_scopeId}><h1 class="title" data-v-7ef142c6${_scopeId}>${ssrInterpolate(info.title)}</h1>`);
            if (info.description) {
              _push2(`<p class="description" data-v-7ef142c6${_scopeId}>${ssrInterpolate(info.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (info.date) {
              _push2(`<p class="date" data-v-7ef142c6${_scopeId}> 发布于 ${ssrInterpolate(new Date(info.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (info.excerpt) {
              _push2(`<p class="excerpt" data-v-7ef142c6${_scopeId}>${info.excerpt ?? ""}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="ariticles-hero" data-v-7ef142c6${_scopeId}>`);
            if (info.heroImage) {
              _push2(`<img${ssrRenderAttr("src", info.heroImage)} alt="heroImage" data-v-7ef142c6${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></article>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div data-v-7ef142c6${_scopeId}>Nothing in here.</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "atricles-container" }, [
            ((_b = $setup.articles.items) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "articles-wrapper"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.articles.items, ({ info, path }) => {
                return openBlock(), createBlock("article", {
                  key: path,
                  class: "articles-item",
                  onClick: ($event) => _ctx.$router.push(path)
                }, [
                  createVNode("div", { class: "articles-info" }, [
                    createVNode("h1", { class: "title" }, toDisplayString(info.title), 1),
                    info.description ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "description"
                    }, toDisplayString(info.description), 1)) : createCommentVNode("", true),
                    info.date ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "date"
                    }, " 发布于 " + toDisplayString(new Date(info.date).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })), 1)) : createCommentVNode("", true),
                    info.excerpt ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "excerpt",
                      innerHTML: info.excerpt
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "ariticles-hero" }, [
                    info.heroImage ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: info.heroImage,
                      alt: "heroImage"
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ])
                ], 8, ["onClick"]);
              }), 128))
            ])) : (openBlock(), createBlock("div", { key: 1 }, "Nothing in here."))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/layouts/ArticleList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ArticleList = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-7ef142c6"], ["__file", "ArticleList.vue"]]);
const _sfc_main$6 = {
  __name: "ProjectList",
  setup(__props, { expose: __expose }) {
    __expose();
    const projects = k("projects");
    const __returned__ = { projects, get useBlogType() {
      return k;
    }, ParentLayout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["ParentLayout"], _attrs, {
    page: withCtx((_2, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="projects-container" data-v-e3a39854${_scopeId}>`);
        if ((_a = $setup.projects.items) == null ? void 0 : _a.length) {
          _push2(`<div class="projects-item" data-v-e3a39854${_scopeId}><!--[-->`);
          ssrRenderList($setup.projects.items, ({ info, path }) => {
            _push2(`<div class="projects" data-v-e3a39854${_scopeId}><div class="projects-heroimage" data-v-e3a39854${_scopeId}>`);
            if (info.heroImage) {
              _push2(`<img${ssrRenderAttr("src", info.heroImage)} alt="heroImage" data-v-e3a39854${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="projects-info" data-v-e3a39854${_scopeId}><h1 class="title" data-v-e3a39854${_scopeId}>${ssrInterpolate(info.title)}</h1>`);
            if (info.date) {
              _push2(`<p class="date" data-v-e3a39854${_scopeId}> 发布于 ${ssrInterpolate(new Date(info.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div data-v-e3a39854${_scopeId}>Nothing in here.</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "projects-container" }, [
            ((_b = $setup.projects.items) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "projects-item"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.projects.items, ({ info, path }) => {
                return openBlock(), createBlock("div", {
                  key: path,
                  class: "projects",
                  onClick: ($event) => _ctx.$router.push(path)
                }, [
                  createVNode("div", { class: "projects-heroimage" }, [
                    info.heroImage ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: info.heroImage,
                      alt: "heroImage"
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "projects-info" }, [
                    createVNode("h1", { class: "title" }, toDisplayString(info.title), 1),
                    info.date ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "date"
                    }, " 发布于 " + toDisplayString(new Date(info.date).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })), 1)) : createCommentVNode("", true)
                  ])
                ], 8, ["onClick"]);
              }), 128))
            ])) : (openBlock(), createBlock("div", { key: 1 }, "Nothing in here."))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/layouts/ProjectList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-e3a39854"], ["__file", "ProjectList.vue"]]);
const _sfc_main$5 = {
  __name: "ArtCatePage",
  setup(__props, { expose: __expose }) {
    __expose();
    const pageData = usePageData();
    const cateList = computed(() => {
      return pageData.value.frontmatter.cates;
    });
    const router = useRouter();
    const route = useRoute();
    const goCate = (cate) => {
      router.push({
        path: pageData.value.path,
        query: {
          cate
        }
      });
    };
    const listPath = computed(() => {
      const currentPath = pageData.value.path;
      const currentCate = route.query.cate;
      if (!currentCate) return "";
      const cateItem = cateList.value.find(
        (item) => item.cate === currentCate && item.path !== currentPath
      );
      return (cateItem == null ? void 0 : cateItem.path) || "";
    });
    const __returned__ = { pageData, cateList, router, route, goCate, listPath, computed, ref, get usePageData() {
      return usePageData;
    }, get useRouter() {
      return useRouter;
    }, get useRoute() {
      return useRoute;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Content = resolveComponent("Content");
  _push(`<!--[--><div data-v-af6beed8><ul class="cate-list" data-v-af6beed8><!--[-->`);
  ssrRenderList($setup.cateList, (item) => {
    _push(`<li data-v-af6beed8><div class="cate-list-item" data-v-af6beed8><span class="title" data-v-af6beed8>${ssrInterpolate(item.title)}</span><span class="count" data-v-af6beed8>${ssrInterpolate(item.count)}</span></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="art-list" data-v-af6beed8>`);
  _push(ssrRenderComponent(_component_Content, { path: $setup.listPath }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/ArtCatePage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ArtCatePage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-af6beed8"], ["__file", "ArtCatePage.vue"]]);
const _imports_0 = "/images/portrait.webp";
const _sfc_main$4 = {
  __name: "AboutMe",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ParentLayout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["ParentLayout"], _attrs, {
    page: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="about-container" data-v-940f8b9f${_scopeId}><div class="portrait" data-v-940f8b9f${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="portrait" data-v-940f8b9f${_scopeId}></div><div class="content" data-v-940f8b9f${_scopeId}><h2 data-v-940f8b9f${_scopeId}>关于我</h2><p data-v-940f8b9f${_scopeId}> Hi，我是<span data-v-940f8b9f${_scopeId}>耶稣稣</span>，呆过设计公司，混过企业。目前从事海外金融及电商的设计工作，具有设计系统搭建、产品改版升级、国际化项目的设计经验。 </p><h2 data-v-940f8b9f${_scopeId}>项目经历</h2><p data-v-940f8b9f${_scopeId}><a href="/projects/goswak/" data-v-940f8b9f${_scopeId}>Goswak</a> 是我参与的第一个国际化项目，期间我完成了竞品调研、视觉风格设定、主要界面输出、设计规范建立等工作。通过此项目使我习得了海外产品的设计经验，并输出了<a href="/blog/?cate=share#《多语言设计指南》" data-v-940f8b9f${_scopeId}>《多语言设计指南》</a> ，为团队成员的工作提供参考。 </p><p data-v-940f8b9f${_scopeId}> 21年负责了公司主要产品 <a href="" data-v-940f8b9f${_scopeId}>Akulaku</a> 改版，主动挖取机会点，提供设计策略，并输出了设计方案。上线后成功达成业务目标，各主要模块数据均有提升。 </p><p data-v-940f8b9f${_scopeId}> 22年独立负责 <a href="" data-v-940f8b9f${_scopeId}>Akulaku Mitra</a> 与 <a href="" data-v-940f8b9f${_scopeId}>SA</a> 的设计工作，该项目拓展了我 B 端产品的设计经验，期间输出了 <a href="" data-v-940f8b9f${_scopeId}>《B端产品视觉特征分析》</a> 并向团队分享。 </p><p data-v-940f8b9f${_scopeId}> 24年完成了 <a href="" data-v-940f8b9f${_scopeId}>UI 3.0</a> 设计系统的搭建，此设计系统搭建之初旨在解决团队重复造轮子的问题，一套设计系统可供多项目使用。期间输出了<a href="" data-v-940f8b9f${_scopeId}>《关于设计系统的搭建思考》</a> ，并向团队分享。 </p><h2 data-v-940f8b9f${_scopeId}>联系方式</h2><p data-v-940f8b9f${_scopeId}><span data-v-940f8b9f${_scopeId}>邮箱：</span>yepan1749@gmail.com</p><p data-v-940f8b9f${_scopeId}><span data-v-940f8b9f${_scopeId}>微信：</span>15200899567</p><p data-v-940f8b9f${_scopeId}><span data-v-940f8b9f${_scopeId}>X：</span>@Yesusu6</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "about-container" }, [
            createVNode("div", { class: "portrait" }, [
              createVNode("img", {
                src: _imports_0,
                alt: "portrait"
              })
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h2", null, "关于我"),
              createVNode("p", null, [
                createTextVNode(" Hi，我是"),
                createVNode("span", null, "耶稣稣"),
                createTextVNode("，呆过设计公司，混过企业。目前从事海外金融及电商的设计工作，具有设计系统搭建、产品改版升级、国际化项目的设计经验。 ")
              ]),
              createVNode("h2", null, "项目经历"),
              createVNode("p", null, [
                createVNode("a", { href: "/projects/goswak/" }, "Goswak"),
                createTextVNode(" 是我参与的第一个国际化项目，期间我完成了竞品调研、视觉风格设定、主要界面输出、设计规范建立等工作。通过此项目使我习得了海外产品的设计经验，并输出了"),
                createVNode("a", { href: "/blog/?cate=share#《多语言设计指南》" }, "《多语言设计指南》"),
                createTextVNode(" ，为团队成员的工作提供参考。 ")
              ]),
              createVNode("p", null, [
                createTextVNode(" 21年负责了公司主要产品 "),
                createVNode("a", { href: "" }, "Akulaku"),
                createTextVNode(" 改版，主动挖取机会点，提供设计策略，并输出了设计方案。上线后成功达成业务目标，各主要模块数据均有提升。 ")
              ]),
              createVNode("p", null, [
                createTextVNode(" 22年独立负责 "),
                createVNode("a", { href: "" }, "Akulaku Mitra"),
                createTextVNode(" 与 "),
                createVNode("a", { href: "" }, "SA"),
                createTextVNode(" 的设计工作，该项目拓展了我 B 端产品的设计经验，期间输出了 "),
                createVNode("a", { href: "" }, "《B端产品视觉特征分析》"),
                createTextVNode(" 并向团队分享。 ")
              ]),
              createVNode("p", null, [
                createTextVNode(" 24年完成了 "),
                createVNode("a", { href: "" }, "UI 3.0"),
                createTextVNode(" 设计系统的搭建，此设计系统搭建之初旨在解决团队重复造轮子的问题，一套设计系统可供多项目使用。期间输出了"),
                createVNode("a", { href: "" }, "《关于设计系统的搭建思考》"),
                createTextVNode(" ，并向团队分享。 ")
              ]),
              createVNode("h2", null, "联系方式"),
              createVNode("p", null, [
                createVNode("span", null, "邮箱："),
                createTextVNode("yepan1749@gmail.com")
              ]),
              createVNode("p", null, [
                createVNode("span", null, "微信："),
                createTextVNode("15200899567")
              ]),
              createVNode("p", null, [
                createVNode("span", null, "X："),
                createTextVNode("@Yesusu6")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/layouts/AboutMe.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-940f8b9f"], ["__file", "AboutMe.vue"]]);
const _sfc_main$3 = {
  setup() {
    const pageData = usePageData();
    return {
      pageData
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.$page.readingTime) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "readingInfo" }, _attrs))} data-v-31a6cd6b><p data-v-31a6cd6b> 发布时间：<span data-v-31a6cd6b>${ssrInterpolate($setup.pageData.frontmatter.date.split("T")[0])}</span></p><p data-v-31a6cd6b> 预计阅读时间：<span data-v-31a6cd6b>${ssrInterpolate(Math.round(_ctx.$page.readingTime.minutes))}分钟</span></p><p data-v-31a6cd6b> 字数共计：<span data-v-31a6cd6b>${ssrInterpolate(_ctx.$page.readingTime.words)}</span></p></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/ReadingTime.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ReadingTime = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-31a6cd6b"], ["__file", "ReadingTime.vue"]]);
const _sfc_main$2 = {
  __name: "ColorPalette",
  props: {
    // colorsGroups 为多组颜色数组
    colorsGroups: {
      type: Array,
      required: true
    },
    // gapSpacing 为色块之间的间距
    gapSpacing: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const getBoxWidth = (group) => `calc(100% / ${group.length})`;
    const __returned__ = { props, getBoxWidth, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "color-palette" }, _attrs))} data-v-27ae3909><!--[-->`);
  ssrRenderList($props.colorsGroups, (group, groupIndex) => {
    _push(`<div class="${ssrRenderClass([{ spacing: $props.gapSpacing }, "color-group"])}" data-v-27ae3909><!--[-->`);
    ssrRenderList(group, (color, index) => {
      _push(`<div class="color-box" style="${ssrRenderStyle({
        background: color.gradient || color.value,
        color: color.textColor || "#FFFFFF",
        width: $setup.getBoxWidth(group)
      })}" data-v-27ae3909>`);
      if (color.name) {
        _push(`<span data-v-27ae3909>${ssrInterpolate(color.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/ColorPalette.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ColorPalette = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-27ae3909"], ["__file", "ColorPalette.vue"]]);
const _sfc_main$1 = {
  __name: "ArtList",
  setup(__props, { expose: __expose }) {
    __expose();
    const articles = k("blog");
    const __returned__ = { articles, get useBlogType() {
      return k;
    }, get usePageFrontmatter() {
      return usePageFrontmatter;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "atricles-list" }, _attrs))} data-v-e3e5935e>`);
  if ((_a = $setup.articles.items) == null ? void 0 : _a.length) {
    _push(`<div class="articles-wrapper" data-v-e3e5935e><!--[-->`);
    ssrRenderList($setup.articles.items, ({ info, path }) => {
      _push(`<article class="articles-item" data-v-e3e5935e><div class="articles-info" data-v-e3e5935e><span class="title" data-v-e3e5935e>${ssrInterpolate(info.title)}</span>`);
      if (info.description) {
        _push(`<p class="description" data-v-e3e5935e>${ssrInterpolate(info.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (info.date) {
        _push(`<p class="date" data-v-e3e5935e> 发布于 ${ssrInterpolate(new Date(info.date).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (info.excerpt) {
        _push(`<p class="excerpt" data-v-e3e5935e>${info.excerpt ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ariticles-hero" data-v-e3e5935e>`);
      if (info.heroImage) {
        _push(`<img${ssrRenderAttr("src", info.heroImage)} alt="heroImage" class="no-zoom" data-v-e3e5935e>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div data-v-e3e5935e>Nothing in here.</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/ArtList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArtList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e3e5935e"], ["__file", "ArtList.vue"]]);
const _sfc_main = {
  __name: "ExperienceList",
  setup(__props, { expose: __expose }) {
    __expose();
    const experArt = k("experience");
    const __returned__ = { experArt, get useBlogType() {
      return k;
    }, get usePageFrontmatter() {
      return usePageFrontmatter;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "experArt-list" }, _attrs))} data-v-9118b716>`);
  if ((_a = $setup.experArt.items) == null ? void 0 : _a.length) {
    _push(`<div class="experArt-wrapper" data-v-9118b716><!--[-->`);
    ssrRenderList($setup.experArt.items, ({ info, path }) => {
      _push(`<article class="experArt-item" data-v-9118b716><div class="experArt-info" data-v-9118b716><span class="title" data-v-9118b716>${ssrInterpolate(info.title)}</span>`);
      if (info.description) {
        _push(`<p class="description" data-v-9118b716>${ssrInterpolate(info.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (info.date) {
        _push(`<p class="date" data-v-9118b716> 发布于 ${ssrInterpolate(new Date(info.date).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (info.excerpt) {
        _push(`<p class="excerpt" data-v-9118b716>${info.excerpt ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div data-v-9118b716>Nothing in here.</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/components/ExperienceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ExperienceList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9118b716"], ["__file", "ExperienceList.vue"]]);
const client = defineClientConfig({
  layouts: {
    ArticleList,
    ProjectList,
    AboutMe
  },
  enhance({ app }) {
    app.component("MyHome", MyHome);
    app.component("MyHomeNav", MyHomeNav);
    app.component("MyHomeFooter", MyHomeFooter);
    app.component("ReadingTime", ReadingTime);
    app.component("ColorPalette", ColorPalette);
    app.component("ArtCatePage", ArtCatePage);
    app.component("ArtList", ArtList);
    app.component("ExperienceList", ExperienceList);
  }
});
const clientConfig10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: client
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10
].map((m) => m.default).filter(Boolean);
const siteData$1 = JSON.parse(`{"base":"/","lang":"zh-CN","title":"yesusu.top","description":"","head":[["link",{"rel":"icon","href":"/images/logo.webp"}],["script",{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-TNS7EED85E"}],["script",{},"\\n        window.dataLayer = window.dataLayer || [];\\n        function gtag(){dataLayer.push(arguments);}\\n        gtag('js', new Date());\\n        gtag('config', 'G-TNS7EED85E', {\\n            cookie_flags: 'SameSite=None; Secure'\\n        });\\n        "]],"locales":{}}`);
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a2;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a2 = clientConfig.setup) == null ? void 0 : _a2.call(clientConfig);
      }
      const clientRootComponents = clientConfigs.flatMap(
        ({ rootComponents = [] }) => rootComponents.map((component) => h$1(component))
      );
      const pageLayout = usePageLayout();
      return () => [h$1(pageLayout.value), clientRootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router, clientConfigs);
  {
    const { setupDevtools } = await import("./assets/setupDevtools-7MC2TMWH-BbxPXgIn.mjs");
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a = clientConfig.enhance) == null ? void 0 : _a.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  createVueApp
};
