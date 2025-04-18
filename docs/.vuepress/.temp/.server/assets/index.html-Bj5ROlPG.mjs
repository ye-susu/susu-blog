import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.cnZ2K1Uy.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><br><h6 id="《多语言设计指南》" tabindex="-1"><a class="header-anchor" href="#《多语言设计指南》"><span>《多语言设计指南》</span></a></h6><br><iframe style="${ssrRenderStyle({ "border": "1px solid rgba(0, 0, 0, 0.1)", "width": "100%", "aspect-ratio": "16 / 10.06" })}" src="https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share" allowfullscreen></iframe><br><br><h6 id="《多语言设计指南222》" tabindex="-1"><a class="header-anchor" href="#《多语言设计指南222》"><span>《多语言设计指南222》</span></a></h6><br><iframe style="${ssrRenderStyle({ "border": "1px solid rgba(0, 0, 0, 0.1)", "width": "100%", "aspect-ratio": "16 / 10.06" })}" src="https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share" allowfullscreen></iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/blog/share/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blog/share/","title":"分享文稿","lang":"zh-CN","frontmatter":{"title":"分享文稿","sidebar":false},"headers":[],"git":{},"filePathRelative":"blog/share/README.md","excerpt":"<br>\\n<h6>《多语言设计指南》</h6>\\n<br>\\n<iframe style=\\"border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; \\" src=\\"https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&amp;viewport=-204%2C-221%2C1&amp;scaling=min-zoom&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;embed-host=share\\" allowfullscreen=\\"\\"></iframe>","readingTime":{"minutes":0.79,"words":157}}');
export {
  index_html as comp,
  data
};
