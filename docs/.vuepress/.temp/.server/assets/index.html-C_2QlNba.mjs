import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bh1e9LGd.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArtCatePage = resolveComponent("ArtCatePage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ArtCatePage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/blog/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blog/","title":"博客","lang":"zh-CN","frontmatter":{"title":"博客","sidebar":false,"artcate":true,"cates":[{"title":"设计文章","cate":"art","count":"共 6 篇","path":"/blog/article/articlelist/"},{"title":"经验总结","cate":"experience","count":"共 2 篇","path":"/blog/experience/experiencelist/"},{"title":"分享稿件","cate":"share","count":"共 2 篇","path":"/blog/share/"}]},"headers":[],"git":{},"filePathRelative":"blog/README.md","excerpt":"","readingTime":{"minutes":0.24,"words":48}}');
export {
  index_html as comp,
  data
};
