<template><div><h1 id="产品配色那些事3-我的配色实践" tabindex="-1"><a class="header-anchor" href="#产品配色那些事3-我的配色实践"><span>产品配色那些事3-我的配色实践</span></a></h1>
<ReadingTime/><p>本章会从实操出发，结合真实项目为大家带来配色实践。期间会介绍项目选色逻辑、配色过程、使用到的工具及如何建立色彩系统。</p>
<h4 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h4>
<p>21 年我司进行业务调整，原保险业务从当前产品中独立出去，作为一家全新平台为印尼用户提供保险选购及理赔服务，为此我们提供了新的产品设计和配色。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-02.webp" alt="" loading="lazy"></p>
<h3 id="一、定义主色" tabindex="-1"><a class="header-anchor" href="#一、定义主色"><span>一、定义主色</span></a></h3>
<h4 id="_1-选择色相" tabindex="-1"><a class="header-anchor" href="#_1-选择色相"><span>1. 选择色相</span></a></h4>
<p>根据上一章提到的选色逻辑，我们依次从产品情绪、行业属性和目标用户几个纬度去思考。作为一家全新的保险平台，我们希望产品给到用户专业、安全、信任之感，那么蓝色、绿色可以作为备选，蓝色代表专业、权威，绿色代表安全、健康。后续我们做了相关行业调研，发现大部分本地产品也使用了这两个颜色，可以确保备选颜色是符合行业喜好的，属于安全的用色范围。最后考虑到用户的地域属性，印尼大部分用户都信奉伊斯兰教，对绿色有着非同一般的热爱。结合本次项目诉求，便选择了绿色成为我们产品主色。</p>
<h4 id="_2-确定色调" tabindex="-1"><a class="header-anchor" href="#_2-确定色调"><span>2. 确定色调</span></a></h4>
<p>明确了主色色相，但同一色相会有冷暖、深浅之别，给到用户的心里感受也略有差异。具体到本次项目中，暖绿有温暖、活泼、欢快的感觉，冷绿则带给用户冷静、平和的情绪。对于本次项目，冷绿更加符合产品定位。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-03.png" alt="" loading="lazy"></p>
<h4 id="_3-调整饱和度、明度" tabindex="-1"><a class="header-anchor" href="#_3-调整饱和度、明度"><span>3. 调整饱和度、明度</span></a></h4>
<p>饱和度控制色彩的艳丽程度，明度控制色彩的明暗变化，这两项参数直接影响色彩的最终效果，所以需要同步交替调整，直到选出最合适的。考虑到主色常用于按钮或重要文本，所以需要注意色彩的对比度，确保文本在界面中的可读性。在本次项目中，“绿色”本身属于对比度较小的颜色，为了获得合适的对比度，需要调整更大的饱和度和更低的明度。经调整之后，我们测试了色彩的对比度为 3:1，满足 W3C 中给到的色彩对比度建议。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-04.webp" alt="" loading="lazy"></p>
<h3 id="二、推导辅助色" tabindex="-1"><a class="header-anchor" href="#二、推导辅助色"><span>二、推导辅助色</span></a></h3>
<h4 id="_1-匹配色相" tabindex="-1"><a class="header-anchor" href="#_1-匹配色相"><span>1. 匹配色相</span></a></h4>
<p>根据辅助色定义，我们匹配到了不同色相的辅助色，但并不是所有颜色都是我们需要的，需要根据经验做出一定删减。如同类色中的两个绿色，色相上与主色过于接近，使用过程中会造成视觉混淆，所以我们剔除这组颜色。再如中差色与对比色中都有黄色，为了与橙色区分更加明显，我们删除对比色中的黄色。经过一系列删减后，留下来的便是我们需要的色彩。此时也可以对色相进一步调整，如类似色中的蓝色偏向湖蓝，为了尽量和主色拉开差别，我们选择色相向右偏移。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-05.png" alt="" loading="lazy"></p>
<h4 id="_2-视觉感官校准" tabindex="-1"><a class="header-anchor" href="#_2-视觉感官校准"><span>2. 视觉感官校准</span></a></h4>
<p>以上色彩只确定了色相，没有进行饱和度、明度调整，视觉上并不属于同一层级。为了获取更加统一的配色，需要对其进行调整，这一过程被称为视觉感官校准。如何校准？有人通过给色彩叠加黑色，对比色彩亮度进行校准。但不同颜色本身亮度不同，强行调整一致会导致部分颜色失衡。所以此种方法可作为参考，但不具备太大可靠性，实际工作中还需依靠自身经验进行调整，确保视觉上和谐统一。以下为完成校准后的配色。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-06.png" alt="" loading="lazy"></p>
<h3 id="三、推导中性色" tabindex="-1"><a class="header-anchor" href="#三、推导中性色"><span>三、推导中性色</span></a></h3>
<p>第二章提到中性色可通过调整明度或透明度得到，本项目使用场景比较固定，所以决定调整明度来得到中性色。考虑到主色为“冷绿”，与偏蓝的中性色搭配可保证色彩调性一致，于是我们取蓝色色相值，调整饱合度获得最终色彩。需要注意的是随中性色明度依次降低，饱和度需要逐级增加。最后确保主要用色符合无障碍设计指南，我们对一级、二级、三级文字用色进行了对比度测试，符合无障碍设计要求。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-07.png" alt="" loading="lazy"></p>
<h3 id="四、生成梯度色板" tabindex="-1"><a class="header-anchor" href="#四、生成梯度色板"><span>四、生成梯度色板</span></a></h3>
<p>梯度色板可以提供更多配色，覆盖更多使用场景，避免后续新增颜色的烦恼。早期为了获得梯度色板需要设计师利用公式计算，现在可以直接使用在线工具生成。如 <a href="https://ant.design/docs/spec/colors" target="_blank" rel="noopener noreferrer">Ant design</a>的色板生成工具，<a href="https://materialpalettes.com/" target="_blank" rel="noopener noreferrer">Material design</a> 的色板生成工具，<a href="https://colors.eva.design/" target="_blank" rel="noopener noreferrer">Eva Design System</a> 的色版生成工具。由于不同平台算法不同，生成的色版效果也存在差异，这里首推 Ant design，对比其他平台色相变化更丰富、颜色更均匀、色阶也更明确。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-08.webp" alt="" loading="lazy"></p>
<h3 id="五、建立色彩系统" tabindex="-1"><a class="header-anchor" href="#五、建立色彩系统"><span>五、建立色彩系统</span></a></h3>
<h4 id="_1-如何理解色彩系统" tabindex="-1"><a class="header-anchor" href="#_1-如何理解色彩系统"><span>1. 如何理解色彩系统？</span></a></h4>
<p>色彩系统隶属设计系统的一部分，是对色彩进行科学管理的体系。不同于色彩规范主要针对设计侧，而是需要打通开发聚焦产品代码中。</p>
<h4 id="_2-色彩系统包含什么" tabindex="-1"><a class="header-anchor" href="#_2-色彩系统包含什么"><span>2. 色彩系统包含什么？</span></a></h4>
<p>简单来说色彩系统由 design token、色彩库和说明文档构成。design token 是设计与开发约定一致的色彩名称，作为色彩调用的唯一凭证。色彩库是包含 design token 和颜色参数的样式集合，供我们在设计和开发中调用。说明文档类似于设计规范，定义了色彩的使用方式，为我们的使用提供指导。</p>
<h4 id="_3-如何建立色彩系统" tabindex="-1"><a class="header-anchor" href="#_3-如何建立色彩系统"><span>3. 如何建立色彩系统</span></a></h4>
<p>①token 命名</p>
<p>如何命名需要考虑 token 层级和 token 构成。</p>
<p>关于 token 层级，设计师 Lukas Oppermann 在文章<a href="https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb" target="_blank" rel="noopener noreferrer">《 Naming design tokens 》</a>中有提到一般设计系统会将 token 分为三个层级，核心 token（core token）、语义 token（semantic tokens）和组件 token（component tokens）。核心 token 存储的是原始值作为构建设计系统的基础，语义 token 引用核心 token，它的名称描述了 token 的预期用途。组件 token 引用语义 token，并将 token 绑定到对应的组件。较多的层级可以使 token 命名更加清晰，但层层嵌套的逻辑也增加了管理的难度，Lukas Oppermann 在文中提到也可以使用一层或两层。</p>
<p>关于 token 构成，体验设计师 Nathan Curtis 在<a href="https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676%EF%BC%89" target="_blank" rel="noopener noreferrer">《 Naming Tokens in Design Systems 》</a>一文中指出为了更加充分的描述 token，token 可以由名称空间（namespace）、目标对象（object）、基础样式（ base）、修饰符（Modifier）构成。名称空间对应系统、主题名称，目标对象对应组件、组件元素和复合组件，基础样式是 token 的主干部份，包含样式、属性、语义，修饰符表明状态、尺度、模式等。由于篇幅原因，此处只是简单介绍，感兴趣的同学可以点击原文查看。</p>
<p>按照两位作者的观点，笔者对本次色彩系统进行了 design token 命名，如下所示：</p>
<p><img src="https://image.yesusu.top/PicGo/color3-11.png" alt="" loading="lazy"></p>
<p>②建立样式库</p>
<p>样式库是设计与开发调用的基础，需要在设计工具中实现 token 的层级逻辑，同时方便开发同学查看。笔者主要使用的工具是 figma，Figma 为我们提供了丰富的功能和插件建立样式库，以下会介绍些主流方式及优缺点，大家按照项目实际情况选择使用即可。</p>
<p>local style：figma 支持将色彩定义为全局样式，并对样式进行命名。设计在调用样式后，开发便可以在查看面板看到对应 token，基本实现了样式库的作用。但 local style 不支持 token 的层级嵌套，只能实现单层级 token。如果你的项目刚好使用了单层级 token，那么建议你使用此功能。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-12.webp" alt="" loading="lazy"></p>
<p>local variables：在今年 6 月份的 config 大会中，figma 发布了变量功能，虽然 CEO Dylan Field 先生说不会推出 design tokens，但变量功能却完美实现了 token 的作用。它支持将色彩定义为变量，且可以实现层级嵌套，开发在查看面板也可以方便的看到变量名称，算是解决了 figma 在 design token 方面的缺陷。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-13.png" alt="" loading="lazy"></p>
<p>Figma token：一款定义 design token 的插件，且支持 token 的层级嵌套。开发查看 token 名称目前有两种方式：1.可在 Figma token 的 inspect 面板进行查看，但插件需要在编辑模式下使用，意味着你需要给到开发编辑权限，这无疑会增加团队成本。2.插件支持将 token 转化为 figma 样式和变量，并保持当前的 token 名称，此时开发可以在 figma 的 inspect 面板查看 token，建议使用此种方式，经济实惠。</p>
<p><img src="https://image.yesusu.top/PicGo/color3-14.png" alt="" loading="lazy"></p>
<p>③输出说明文档及团队推进</p>
<p>一般文档内容包含使用规则、注意事项、场景描述、token 名称、色值参数等等，也可根据实际情况作以增减。输出说明文档后，整个色彩系统搭建完成，接下来需要推进团队使用。为确保整个系统在项目中顺利落地，最好组织相关人员进行一次宣讲，介绍清楚使用规范及注意事项，明确要求严格按照系统执行。</p>
</div></template>


