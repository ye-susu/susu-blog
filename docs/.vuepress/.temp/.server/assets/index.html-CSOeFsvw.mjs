import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bh1e9LGd.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ReadingTime = resolveComponent("ReadingTime");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="产品配色那些事2-了解选色逻辑" tabindex="-1"><a class="header-anchor" href="#产品配色那些事2-了解选色逻辑"><span>产品配色那些事2-了解选色逻辑</span></a></h1>`);
  _push(ssrRenderComponent(_component_ReadingTime, null, null, _parent));
  _push(`<p>首先说明一下标题为什么用了“选色逻辑”而非“配色逻辑”，在笔者理念中产品配色的重点不在于“配”，而在于“选”。“配”是指在作品中如何组织、编排颜色，是为了画面更好看，而“选”是指经过理性思考、严谨推导得出的解决方案，是为了色彩更适用。那如何选出更适用的色彩呢？这便是本章探讨的内容——色彩的选择逻辑。</p><p>产品设计中会将色彩依次分为：主色、辅助色、功能色及中性色，不同色彩选择逻辑是不一样的，我们会逐一进行介绍。由于功能色业内已形成固定认知，绿色代表成功、红色代表错误，事实上已经不用再去选色，所以本章暂且不表。</p><h3 id="一、主色" tabindex="-1"><a class="header-anchor" href="#一、主色"><span>一、主色</span></a></h3><p>主色在产品用色中占据主要场景，关乎品牌调性与产品印象，选色时可以从产品情绪、行业属性、目标用户三个层面去思考。</p><h4 id="_1-产品情绪" tabindex="-1"><a class="header-anchor" href="#_1-产品情绪"><span>1. 产品情绪</span></a></h4><p>颜色本身并无过多内涵，只是人眼对于可见光的视觉感知。但随着人类与自然共处，逐渐将一些对自然事物的心理感知投射到颜色上，此时颜色便产生了不同含义。例如火可以带给人类温暖，使用不当也可以招至灾祸，所以火焰的红色便有了热情、警示的含义。再如烧不尽，春又生的野草，让人们对绿色有了成长与希望的感受。色彩的不同内涵也催生了一门学科叫做“色彩的情绪价值”，最早研究色彩情绪价值的学者是日本照明大师大庭三郎，他在《色彩的世界》一书中提出了基于东方人群的色彩情绪价值表，解析了不同色彩对人类的物化映射和心理映射。所以在产品设计之前会建立情绪版，确定产品情绪为色彩选择提供依据。</p><h4 id="_2-行业属性" tabindex="-1"><a class="header-anchor" href="#_2-行业属性"><span>2. 行业属性</span></a></h4><p>不同行业在色彩选择上会有不同偏好，如科技行业更喜欢蓝色，能源、食品行业更喜欢绿色。这背后也催生了两种选色逻辑：一、符合行业偏好，二、异于行业偏好。选择一可以使你的产品处于相对安全的境地，它的色彩不会引起用户反感和不适，但缺乏个性。选择二会使你的产品迅速从同行中跳脱出来，同时也表达了个性。具体使用哪种逻辑需要你对产品策略做好充足规划。下面是一份来自 skilled 公司的调查报告，他们从行业角度出发，调查并研究了色彩在不同行业的流行程度，最终规划出了三个级别：流行行业、不流行行业、可能并不适合使用该颜色的行业。此报告不作为绝对权威，仅作为选色参考。</p><p><img src="https://image.yesusu.top/PicGo/color2-02.webp" alt=""></p><p><img src="https://image.yesusu.top/PicGo/color2-03.webp" alt=""></p><h4 id="_3-目标用户" tabindex="-1"><a class="header-anchor" href="#_3-目标用户"><span>3. 目标用户</span></a></h4><p>作为产品最终使用者，用户喜好也作为选色必要参考。首先不同文化对用户喜好产生影响，虽然人类群体对色彩的心理反应都很类似，但研究表明不同文化下人们对于同种颜色会有不同反应。例如股票交易，国际市场通常是绿涨红跌，而在中国却是红涨绿跌。这是由于红色在西方国家代表财政赤字，绿色代表财富；而中国正好相反，红色对于中国人民有着非同一般的情感，红色常常意味着喜事正在发生。</p><p>其次不同年龄段用户，色彩喜好也不尽相同。Faber Birren 在他的《色彩心理学》一书中有提到关于年龄和色彩的实验，结果显示年轻人倾向于鲜艳、明亮、高饱和的色彩，而婴幼儿、老年人更喜欢柔和、低饱和的色彩。</p><p><img src="https://image.yesusu.top/PicGo/color2-04.webp" alt=""></p><p>最后用户性别也影响着色彩喜好，男性更喜欢蓝色、绿色，而女性除了蓝色更喜欢紫色、粉色。</p><h3 id="二、辅助色" tabindex="-1"><a class="header-anchor" href="#二、辅助色"><span>二、辅助色</span></a></h3><p>辅助色常与主色搭配使用，在产品配色中起着非常重要的作用。选色时可从搭配效果和作用方式进行考虑。</p><h4 id="_1-搭配效果" tabindex="-1"><a class="header-anchor" href="#_1-搭配效果"><span>1. 搭配效果</span></a></h4><p>不同色彩搭配可以产生丰富的视觉效果，如何确保“效果”好看是我们需要思考的。工作中常有设计师根据以往经验进行选色，这是一种感性的选择方式，往往会忽略经验以外的搭配，而经验以外可能存在着更好的效果。所以我们需要进行理性选择，何为理性选择？即通过辅助色的定义，匹配到所有的辅助色，然后进行删减，直到选出最好看的颜色。</p><p>不同辅助色的定义：</p><p>同类色：色相相差在 15 度左右的颜色。</p><p>类似色：色相相差在 30 度左右的颜色，属于较弱对比色。</p><p>邻近色：色相相差在 60 度左右的颜色。</p><p>中差色：色相相差 90 度左右的颜色，属于中等对比色。</p><p>对比色：色相相差 120 度左右的颜色，属于强对比色。</p><p>互补色：色相相差 180 度左右的颜色，属于高强度对比色。</p><p><img src="https://image.yesusu.top/PicGo/color2-05.webp" alt=""></p><p>以上得到的色彩未必是最好看的，他们和主色并不处于同一色彩层级。为了获取更好的搭配效果，需要进行饱和度、明度调整，此过程也称为色彩的视觉感官校准。</p><p><img src="https://image.yesusu.top/PicGo/color2-06.webp" alt=""></p><h4 id="_2-作用方式" tabindex="-1"><a class="header-anchor" href="#_2-作用方式"><span>2. 作用方式</span></a></h4><p>辅助色的作用方式可以是强化信息，也可以是区分业务。强化信息是指通过不同颜色对信息进行视觉分类，方便用户接收主要信息。对于强调的信息可以使用对比度高、色相较暖的色彩，暖色具有前进性可以使你的信息更突出。例如京东拍拍商品列表中的促销信息使用了橘色，饿了么的商品列表使用了橘色和红色。</p><p><img src="https://image.yesusu.top/PicGo/color2-07.webp" alt=""></p><p>区分业务针对整个产品，不同业务使用不同色彩，方便用户形成固定认知，快速定位业务。使用什么色彩需全局考虑，如色彩与业务的相关性、产品的整体调性等。此处列举两个例子，京东 APP 的京东超市使用了绿色区分此项业务，京东超市主要售卖生鲜食品，绿色可以给到用户“新鲜”“安全”的暗示，运用到此处再适合不过。Twitter 在 22 年初新增了 Twitter Space 功能，用户可以轻松创建或加入纯音频聊天室，Twitter 在设计这项功能时使用了紫色，紫色和 Twitter 的蓝色同属冷色，这样可以使整个产品的调性更加统一。</p><p><img src="https://image.yesusu.top/PicGo/color2-08.webp" alt=""></p><h3 id="三、中性色" tabindex="-1"><a class="header-anchor" href="#三、中性色"><span>三、中性色</span></a></h3><p>中性色是由黑色、白色及黑白调和的各种深浅不同的灰组成，是产品中看到的最多的颜色，主要用于文本显示和页面背景。有人觉得中性色的推导不需要经过太多思考，且行业内给到一些具体色值可直接使用，如 333、666、999 这类的中性色。使用这类颜色没有太大问题，但会使你的配色略显普通，其实关于中性色的选择还有很多地方值得探索。</p><h4 id="_1-色阶调整" tabindex="-1"><a class="header-anchor" href="#_1-色阶调整"><span>1. 色阶调整</span></a></h4><p>中性色的色阶可以通过两种方式调整，改变明度或透明度。相信大家都有这样的体会，如果将灰色文本放置到其他色彩之上，文本会开始变得难以阅读，其原因是色彩对比度不够造成视觉区分困难。如果此时文本的灰色是通过调整透明度得到的，那么文本的灰色会叠加到其他色彩之上，从而解决这个问题。如果你的产品也会遇到类似的使用场景，不妨使用调整透明度的方式得到你的中性色。</p><p><img src="https://image.yesusu.top/PicGo/color2-09.webp" alt=""></p><h4 id="_2-色彩倾向" tabindex="-1"><a class="header-anchor" href="#_2-色彩倾向"><span>2. 色彩倾向</span></a></h4><p>上文提到类似 333、666、999 这样的中性色会使你的配色略显普通，原因是此类色彩属于纯灰没有色彩倾向。我们在选择中性色时可以适当混入蓝色，蓝色被普遍认为是安全、舒适的色彩，在视觉上可以缓解焦虑和压力，具有蓝色倾向的中性色可以使文本更具可读性。除此之外也可以在中性色中叠加品牌色，使你的中性色更具内在逻辑和品牌倾向。</p><p><img src="https://image.yesusu.top/PicGo/color2-10.webp" alt=""></p><h4 id="_3-无障碍设计" tabindex="-1"><a class="header-anchor" href="#_3-无障碍设计"><span>3. 无障碍设计</span></a></h4><p>无障碍设计中对文字颜色的对比度有明确建议，对于 AA 级别正文文字的颜色对比度至少为 4.5:1，标题或加粗的文字颜色对比度至少为 3:1。我们为文字选择中性色时通常会定义四个级别：主要文字、次要文字、提示文字、禁用文字，提示文字对应级别三，需要满足颜色对比度至少为 3:1 的要求，禁用文字属于不可用状态可以低于对比度至少为 3:1 的要求。</p><p><img src="https://image.yesusu.top/PicGo/color2-11.webp" alt=""></p><p>通过以上介绍可以发现产品配色不仅仅是一项视觉工作，背后更是蕴含了大量的调研与思考，对于配色只有完美回答出“为什么要这样选色”时，我想才会得到最优秀的方案。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/blog/experience/colors2/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blog/experience/colors2/","title":"这是一篇测试文章 这是一篇测试文章","lang":"zh-CN","frontmatter":{"title":"这是一篇测试文章 这是一篇测试文章","description":"如何选出更适用的色彩？— 色彩的选择逻辑。","date":"2025-02-19T00:00:00.000Z"},"headers":[{"level":3,"title":"一、主色","slug":"一、主色","link":"#一、主色","children":[]},{"level":3,"title":"二、辅助色","slug":"二、辅助色","link":"#二、辅助色","children":[]},{"level":3,"title":"三、中性色","slug":"三、中性色","link":"#三、中性色","children":[]}],"git":{},"filePathRelative":"blog/experience/colors2/README.md","readingTime":{"minutes":12.76,"words":2552}}');
export {
  index_html as comp,
  data
};
