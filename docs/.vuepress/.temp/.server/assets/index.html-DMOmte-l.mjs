import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.cnZ2K1Uy.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ReadingTime = resolveComponent("ReadingTime");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="产品配色那些事1-学会色彩管理" tabindex="-1"><a class="header-anchor" href="#产品配色那些事1-学会色彩管理"><span>产品配色那些事1-学会色彩管理</span></a></h1>`);
  _push(ssrRenderComponent(_component_ReadingTime, null, null, _parent));
  _push(`<p>本系列文章共分为三个篇章：1.《学会色彩管理》2.《了解选色逻辑》3.《我的配色实践》，笔者将通过三个篇章向大家介绍一些产品配色的基础知识和方法，希望配色时我们有明确的思路和逻辑，帮助我们输出更成熟的配色方案。正式聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。工作中大家时常会发现设计稿与实际开发的界面色彩不一致，设计稿鲜亮动人，实际界面确色彩暗淡，效果差强人意。导致这个问题的原因便是没有做好色彩管理，要想解决这个问题我们必须先来了解下色彩管理的基础知识。</p><h3 id="一、色彩空间与色域" tabindex="-1"><a class="header-anchor" href="#一、色彩空间与色域"><span>一、色彩空间与色域</span></a></h3><p>色彩空间可以简单理解为在人眼所能识别的色彩范围内划定的某一区域，其目的是为了不同设备和介质可以在统一的色彩区域内显示颜色。如设计师耳熟能详的 SRGB，它是惠普和微软公司为显示器和打印机显示统一色彩而划定的色彩区域，我们也称之为 SRGB 色彩空间。色域更多是指这一色彩区域的范围大小，如我们会经常描述某一显示器色域大小为 90%SRGB 或 100%SRGB，意思就是此显示器可以显示 SRGB 色彩空间中 90%或 100%的颜色。不同色彩空间覆盖的色彩区域也存在着大小差异，如 Adobe SRGB 比 SRGB 覆盖的区域大 35%左右，更大的色彩区域表示可以显示更丰富的色彩。</p><p>当前常见的色彩空间有 NTSC、SRGB、Adobe RGB、DCI-P3 和 Display P3，之所以会出现不同色彩空间是因为技术发展和行业需求变化的原因，以下会对这些色彩空间进行简单介绍：</p><h4 id="_1-ntsc" tabindex="-1"><a class="header-anchor" href="#_1-ntsc"><span>1. NTSC</span></a></h4><p>上世纪 50 年代彩色电视技术在美国趋于成熟，为了制作标准的彩色电视节目，美国电视委员会制定了彩色电视广播标准（NTSC），其中建立的色彩空间被称为 NTCS 色彩空间。当前 NTSC 色彩空间已经不再使用，更多出现在描述显示设备的参数上，例如我们购买显示器时经常看到色域支持 72%NTSC 这样的描述。</p><p><img src="https://image.yesusu.top/PicGo/color1-02.png" alt=""></p><h4 id="_2-srgb" tabindex="-1"><a class="header-anchor" href="#_2-srgb"><span>2. SRGB</span></a></h4><p>SRGB 色彩空间是 1996 年惠普和微软开发完成的，其目的是为了建立一种用于显示器、打印机和互联网的通用色彩空间，也是当前主流使用的色彩空间，如 windows 系统默认使用 SRGB，浏览器上我们看到的所有图片和色彩也都是基于 SRGB 渲染的。</p><p><img src="https://image.yesusu.top/PicGo/color1-03.png" alt=""></p><h4 id="_3-adobe-rgb" tabindex="-1"><a class="header-anchor" href="#_3-adobe-rgb"><span>3. Adobe RGB</span></a></h4><p>SRGB 是显示器、打印机和互联网的通用色彩空间，但是在彩色印刷行业中，SRGB 覆盖的色域范围比较小，部份色彩在显示设备中不能很好的显示。所以 1998 年 Adobe 公司建立了 Adobe RGB 色彩空间，旨在使计算机显示设备囊括更多的颜色满足印刷行业的需求。</p><p><img src="https://image.yesusu.top/PicGo/color1-04.png" alt=""></p><h4 id="_4-dci-p3-和-display-p3" tabindex="-1"><a class="header-anchor" href="#_4-dci-p3-和-display-p3"><span>4. DCI-P3 和 Display P3</span></a></h4><p>DCI-P3 是 2005 年美国电影行业推出的一种色彩空间，是数字电影播放设备的色彩标准之一，它的色域面积比 SRGB 大了 25%。2015 年苹果公司推出了广色域屏幕的 iMac 产品，使用了全新的色彩空间，并称之为 Display P3，两种 P3 色彩空间在色域大小上没有区别，只是在一些调教参数上存在差异。</p><p><img src="https://image.yesusu.top/PicGo/color1-05.png" alt=""></p><h3 id="二、理解色彩管理的逻辑" tabindex="-1"><a class="header-anchor" href="#二、理解色彩管理的逻辑"><span>二、理解色彩管理的逻辑</span></a></h3><p>通过以上了解，我们可以尝试回答开篇的问题，为什么会出现实际界面与设计稿色彩不一致的情况？简单来说就是界面显示设备与设计稿显示设备色彩管理不一致导致的。如我们使用苹果电脑制作设计稿，其默认使用的色彩空间是 Display P3，而实际界面的显示设备支持的色彩空间是 SRGB，因为 Display P3 的色域范围远大于 SRGB，这就导致部分颜色无法在 SRGB 的设备上正常显示，所以我们看到的界面和设计稿是存在差异的。以上我们可以发现正确的色彩管理不关乎使用哪种色彩空间，而是整个色彩管理链路是否统一？上述例子，如果实际显示设备支持的是 Display P3 色彩空间，那么你将看到和设计稿完全一致的色彩。</p><p>要做到整个色彩管理链路统一，我们需要清楚了解所有环节，以下将通过图示进行说明：</p><p><img src="https://image.yesusu.top/PicGo/color1-06.png" alt=""></p><ol><li>输出屏幕：了解输出屏幕支持什么样的色彩空间，如苹果的显示屏幕可以覆盖到 100%Display P3，其他显示设备在购买时也会有相关参数描述。</li><li>系统设置：不同系统默认色彩空间可能不同，如 MacOS 默认 Display P3，Windows 默认 SRGB。系统色彩空间也支持不同配置，例如可以将 MacOS 的色彩空间更改为 SRGB。</li><li>制图软件：所有制图软件均可选择不同色彩空间进行工作，不同之处在于系统设置针对整个系统，制图软件只针对制图显示。</li><li>终端屏幕：明确终端屏幕支持什么样的色彩空间，因为最终的设计稿是在终端屏幕上呈现的。</li></ol><p>色彩管理链路是否统一，即以上环节是否使用了统一的色彩空间？而选择什么样的色彩空间需根据终端显示设备决定。笔者调研了不同显示设备色彩空间的支持情况，显示器行业的情况较为复杂，不同厂商不同产品线的支持不尽相同，有 72%NTSC、99%SRGB、90%DCI_P3 等等。安卓阵营情况较好，大部分中高端产品可以支持 100%DCI-P3，部分低端产品支持 72%NTSC 或 100%SRGB。苹果阵营由于自身产品的优势，自 2016 年全线产品开始支持 100%Display P3。</p><p>面对这复杂的情况，我们应该选取什么色彩空间呢？笔者根据实际显示场景给到以下建议：</p><p><img src="https://image.yesusu.top/PicGo/color1-07.png" alt=""></p><h4 id="_1-浏览器" tabindex="-1"><a class="header-anchor" href="#_1-浏览器"><span>1. 浏览器</span></a></h4><p>如果你的设计最终在浏览器上显示（如网页设计），那么可以选择 SRGB，上文有提到 SRGB 作为互联网通用的色彩空间，浏览器上的所有色彩都是基于 SRGB 渲染的。</p><h4 id="_2-windows" tabindex="-1"><a class="header-anchor" href="#_2-windows"><span>2. Windows</span></a></h4><p>如果你的设计最终在 Windows 上显示，也可以选择 SRGB 作为工作色彩空间，因为 Windows 默认的色彩空间是 SRGB。</p><h4 id="_3-安卓设备" tabindex="-1"><a class="header-anchor" href="#_3-安卓设备"><span>3. 安卓设备</span></a></h4><p>安卓设备的色域支持情况略显复杂，为了覆盖到不同设备，建议使用 SRGB 作为工作色彩空间。</p><h4 id="_4-苹果设备" tabindex="-1"><a class="header-anchor" href="#_4-苹果设备"><span>4. 苹果设备</span></a></h4><p>苹果设备均支持 100%Display P3，如果你是在为 IOS 和 MacOS 做设计，那么直接选择 Display P3 即可。</p><p>需要注意的是设计项目经常会覆盖多端，为了各端显示统一的色彩，色彩空间的选择可向下兼容。</p><h3 id="三-如何进行软件设置" tabindex="-1"><a class="header-anchor" href="#三-如何进行软件设置"><span>三. 如何进行软件设置</span></a></h3><h4 id="_1-sketch" tabindex="-1"><a class="header-anchor" href="#_1-sketch"><span>1. Sketch</span></a></h4><p>Sketch 为我们提供了两种色彩管理方式：</p><p>①全局预设：</p><p>可在 Sketch 的 Preferences 中找到 Canvas 选项，然后在 Color Profile 中选择要使用的色彩空间，设置后我们新建的所有文件都将采用新的色彩空间。</p><p><img src="https://image.yesusu.top/PicGo/color1-08.png" alt=""></p><p>②文件设置：</p><p>可在 Sketch 的 File 菜单中找到 Document Setting 选项，点击后在 Color Profile 中选择要使用的色彩空间，该设置只影响当前文件。</p><p><img src="https://image.yesusu.top/PicGo/color1-09.png" alt=""></p><p>需要注意的是当我们打开 Color Profile 下拉框后，除 SRGB 和 Display P3 选项外，还有一个叫做 Unmanaged 的选项，翻译过来的意思是无托管，选择该选项即为使用系统色彩管理方案。如需要将工作色彩空间调整为 SRGB，我们可以直接在 Color Profile 下拉框中选择 SRGB，也可以选择 Unmanaged，然后将系统色彩管理方案设置为 SRGB 即可。</p><h4 id="_2-figma" tabindex="-1"><a class="header-anchor" href="#_2-figma"><span>2. Figma</span></a></h4><p>Figma 的 Color Profile 提供了 Unmanaged 和 SRGB 两种选项，即只能使用系统色彩管理方案和 SRGB 色彩空间，且仅支持在客户端版本中进行选择。浏览器版本不支持色彩管理，默认使用 SRGB 色彩空间，原因上文已提及到浏览器上的色彩是基于 SRGB 进行渲染的。</p><p><img src="https://image.yesusu.top/PicGo/color1-10.png" alt=""></p><h4 id="_3-photoshop" tabindex="-1"><a class="header-anchor" href="#_3-photoshop"><span>3. Photoshop</span></a></h4><p>当我们在 Photoshop 中新建文件时可看到“高级选项”下的“色彩配置文件”，点击此处可选择想要使用的色彩空间。除此之外还可以在“编辑”菜单中的“色彩设置”选项中找到“工作空间”模块，在“RGB”选项中选择需要使用的色彩空间，该设置作为一种常用的工作空间存在。完成设置后我们便可以在新建文件时，选择“工作中的色彩空间”进行使用。</p><p><img src="https://image.yesusu.top/PicGo/color1-11.png" alt=""></p><p><img src="https://image.yesusu.top/PicGo/color1-12.png" alt=""></p><h4 id="_4-after-effects" tabindex="-1"><a class="header-anchor" href="#_4-after-effects"><span>4. After Effects</span></a></h4><p>在 AE 中我们可以在“文件”菜单下找到“项目设置”，点击后在“颜色”菜单下找到“工作空间”选项，此处可设置想要使用的颜色空间。</p><p><img src="https://image.yesusu.top/PicGo/color1-13.png" alt=""></p><p>最后色彩管理属于比较复杂的知识模块，本篇文章介绍的并不全面，只是将和我们工作相关的部份进行了梳理。希望这篇文章可以帮助大家明白色彩管理背后的逻辑，学会正确的色彩管理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/blog/experience/colors1/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blog/experience/colors1/","title":"这是一篇测试文章 这是一篇测试文章","lang":"zh-CN","frontmatter":{"title":"这是一篇测试文章 这是一篇测试文章","description":"聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。聊产品配色之前，笔者深感有必要专门花一章先来说说“色彩管理”。","date":"2025-02-17T00:00:00.000Z"},"headers":[{"level":3,"title":"一、色彩空间与色域","slug":"一、色彩空间与色域","link":"#一、色彩空间与色域","children":[]},{"level":3,"title":"二、理解色彩管理的逻辑","slug":"二、理解色彩管理的逻辑","link":"#二、理解色彩管理的逻辑","children":[]},{"level":3,"title":"三. 如何进行软件设置","slug":"三-如何进行软件设置","link":"#三-如何进行软件设置","children":[]}],"git":{},"filePathRelative":"blog/experience/colors1/README.md","readingTime":{"minutes":13.36,"words":2672}}');
export {
  index_html as comp,
  data
};
