import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.BaSuDPAb.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>这是我的文章正文2</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/projects/test5/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/projects/test5/","title":"这是项目test5的标题","lang":"zh-CN","frontmatter":{"title":"这是项目test5的标题","description":"这是test2的的描述","date":"2025-09-27T00:00:00.000Z","heroImage":"https://image.yesusu.top/PicGo/goswak-01.png"},"headers":[],"git":{},"filePathRelative":"projects/test5/README.md","readingTime":{"minutes":0.17,"words":34}}');
export {
  index_html as comp,
  data
};
