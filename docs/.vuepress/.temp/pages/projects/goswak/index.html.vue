<template><div><h1 id="goswak-online-group-buying" tabindex="-1"><a class="header-anchor" href="#goswak-online-group-buying"><span>GoSwak - Online Group Buying</span></a></h1>
<ReadingTime/><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2>
<p><strong>GoSwak</strong> 是 Akulaku 内部孵化的社交电商平台，致力于通过拼团模式为用户提供极致低价的购物体验，解决东南亚市场网购价格贵、配送成本高、物流速度慢等痛点。目标客群主要为 18-40 周岁女性，如大学生、上班族、家庭主妇等，她们对价格敏感，消费需求旺盛，并具备良好的社交圈层优势，使得产品更易传播和转化。</p>
<h2 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标"><span>设计目标</span></a></h2>
<ol>
<li>
<p><strong>输出高质量的界面设计</strong> - 适合东南亚女性用户，避免文化禁忌。提供合理的UI布局，满足多国语言适配。差异化的视觉设计，打造用户心智。</p>
</li>
<li>
<p><strong>提升本地化设计</strong> - 国内的产品形态和用户群体都趋于成熟，对于各种玩法比较熟悉，而东南亚用户则相对陌生，需要对玩法进行本地化改造。</p>
</li>
<li>
<p><strong>建立组件库提升效率</strong> - 合理构建组件，满足多种使用场景。输出说明文档，规范组件化设计。确定协同方式，高效对接开发。</p>
</li>
</ol>
<h2 id="高质量的界面设计" tabindex="-1"><a class="header-anchor" href="#高质量的界面设计"><span>高质量的界面设计</span></a></h2>
<h4 id="_1-风格定义" tabindex="-1"><a class="header-anchor" href="#_1-风格定义"><span>1. 风格定义</span></a></h4>
<p>提炼设计关键词，分析心理映射，寻找设计方向。</p>
<table>
<thead>
<tr>
<th style="text-align:center">设计关键词</th>
<th style="text-align:center">心理映射</th>
<th style="text-align:center">设计方向</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>包容</strong></td>
<td style="text-align:center">温暖、友好、归属感</td>
<td style="text-align:center">本地化、易用</td>
</tr>
<tr>
<td style="text-align:center"><strong>女性</strong></td>
<td style="text-align:center">优美、柔和</td>
<td style="text-align:center">圆润、曲线、粉色、紫色</td>
</tr>
<tr>
<td style="text-align:center"><strong>品质</strong></td>
<td style="text-align:center">精致、完美、细节</td>
<td style="text-align:center">几何、留白、对比</td>
</tr>
<tr>
<td style="text-align:center"><strong>年轻</strong></td>
<td style="text-align:center">美好、热情、活力</td>
<td style="text-align:center">缤纷多彩、动态效果</td>
</tr>
</tbody>
</table>
<p><strong>色彩系统</strong></p>
<p><strong>主色：</strong> 作为主打女性用户的电商平台，我们选取了粉红色作为主色。在此基础上延伸出渐变色，用与按钮、图标等。</p>
<ColorPalette :colorsGroups="[
  [ 
    { name: 'Primary', value: '#F60059' },
    { name: 'Gradient', gradient: 'linear-gradient(45deg, #F60059, #FF9682)' }
  ]
]" 
:gapSpacing="true"/>
<p><strong>辅助色：</strong> 经过视觉校准，确保和主色属于同一色彩梯度。</p>
<ColorPalette :colorsGroups="[
  [ 
    { name: 'Error', value: '#F50A0A' },
    { name: 'Warning', value: '#FF9000' },
    { name: 'Yellow', value: '#FAE100' },
    { name: 'Green', value: '#8EC700' },
    { name: 'Success', value: '#00B573' },
    { name: 'Link', value: '#2D8DFA' },
    { name: 'Purple', value: '#884CFF' }
  ]
]" />
<p><strong>中性色：</strong> 混入1%透明度主色，得到的颜色更具品牌性。</p>
<ColorPalette :colorsGroups="[
  [ 
    { name: 'Text-1', value: '#1F1D1E' },
    { name: 'Text-2', value: '#676566' },
    { name: 'Text-3', value: '#9A9798' },
    { name: 'Text-4', value: '#CCCACB' },
    { name: 'Divider', value: '#EBE8E9',textColor: '#3C3C43' },
    { name: 'Bg-1', value: '#F6F4F4' ,textColor: '#3C3C43'},
    { name: 'Bg-2', value: '#FCFAFA' ,textColor: '#3C3C43'}
  ]
]" />
<p><strong>梯度色板：</strong> 使用 Ant Design 色板工具生成梯度色版，明确色彩使用场景。</p>
<ColorPalette :colorsGroups="[
  [ 
    { name: '胶囊背景', value: '#FFE6EB' ,textColor: '#F60059'},
    { value: '#FFA3B9' },
    { name: '按钮禁用', value: '#FF7A9E' },
    { value: '#FF5286' },
    { value: '#FF2970' },
    { name: '主色', value: '#F60059' },
    { name: '按钮点击', value: '#CF0053' },
    { value: '#A80049' },
    { value: '#82003D' },
    { value: '#5C002E' }
  ],
  [ 
    { name: '标签背景', value: '#FFEAE6' ,textColor: '#F50A0A'},
    { value: '#FFB8AD' },
    { value: '#FF9185' },
    { value: '#FF675C' },
    { value: '#FF3A33' },
    { name: '错误', value: '#F50A0A' },
    { name: '错误文字', value: '#CF0007' },
    { value: '#A8000B' },
    { value: '#82000D' },
    { value: '#5C000C' }
  ],
  [ 
    { name: '标签背景', value: '#FFF8E6' ,textColor: '#FF9000'},
    { value: '#FFE3A3' },
    { value: '#FFD37A' },
    { value: '#FFBF52' },
    { value: '#FFA929' },
    { name: '警示', value: '#FF9000' },
    { name: '警示文字', value: '#D97400' },
    { value: '#B35900' },
    { value: '#8C4100' },
    { value: '#662C00' }
  ],
  [ 
    { value: '#FDFFE6' },
    { value: '#FCFFA3' },
    { value: '#FFFF7A' },
    { value: '#FFF952' },
    { value: '#FFF129' },
    { value: '#FAE100' },
    { value: '#D4B700' },
    { value: '#AD9100' },
    { value: '#876C00' },
    { value: '#614A00' }
  ],
  [ 
    { value: '#FCFFE6' },
    { value: '#ECFAA0' },
    { value: '#D7ED72' },
    { value: '#BFE048' },
    { value: '#A7D422' },
    { value: '#8EC700' },
    { value: '#6EA100' },
    { value: '#507A00' },
    { value: '#345400' },
    { value: '#1B2E00' }
  ],
  [ 
    { name: '标签背景',value: '#EBFBF4' ,textColor: '#00B573'},
    { value: '#9AF0C4' },
    { value: '#69DBA6' },
    { value: '#42CF92' },
    { value: '#1FC281' },
    { name: '成功',value: '#00B573' },
    { name: '成功文字',value: '#008F5F' },
    { value: '#006949' },
    { value: '#004231' },
    { value: '#001C16' }
  ],
  [ 
    { name: '标签背景', value: '#F0F9FF' ,textColor: '#2D8DFA'},
    { value: '#D1EDFF' },
    { value: '#A8D9FF' },
    { value: '#80C3FF' },
    { value: '#57ABFF' },
    { name: '链接', value: '#2D8DFA' },
    { name: '链接文字', value: '#1C6BD4' },
    { value: '#0E4EAD' },
    { value: '#043487' },
    { value: '#022261' }
  ],
  [ 
    { value: '#F7F0FF' },
    { value: '#E1C9FF' },
    { value: '#C6A1FF' },
    { value: '#A978FF' },
    { value: '#8A4FFF' },
    { name: '标签', value: '#6838D9' },
    { value: '#4B25B3' },
    { value: '#31158C' },
    { value: '#200E66' },
    { value: '#100342' }
  ]
]" />
<p><strong>字体排印：</strong> 使用系统字体，定义合适的字母间距与行高。</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-01.png" alt="" loading="lazy"></p>
<p><strong>图标：</strong> 运营图标-造型风格统一 / 表意清晰易用。功能图标-跟随品牌调性 / 线性断点处理。</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-02.png" alt="" loading="lazy"></p>
<h4 id="_2-多语言设计" tabindex="-1"><a class="header-anchor" href="#_2-多语言设计"><span>2. 多语言设计</span></a></h4>
<p><strong>布局选择：</strong> ✅ 通栏布局、✅ 自适应布局、✅ 纵向布局</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-03.png" alt="" loading="lazy"></p>
<p><strong>文本处理：</strong> 1️⃣ 优先精简翻译、2️⃣ 不影响语义情况下...显示、3️⃣ 使用动态字号</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-04.png" alt="" loading="lazy"></p>
<h4 id="_3-差异化设计" tabindex="-1"><a class="header-anchor" href="#_3-差异化设计"><span>3. 差异化设计</span></a></h4>
<p>对于不同玩法，活动首页和商详腰带进行了不同的色彩处理，帮助用户提升视觉记忆，打造用户心智。</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-05.png" alt="" loading="lazy"></p>
<h4 id="_4-缺醒页插画" tabindex="-1"><a class="header-anchor" href="#_4-缺醒页插画"><span>4. 缺醒页插画</span></a></h4>
<p>缺醒页插画使用了年轻女性形象，契合目标用户，可提升产品好感度。</p>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-06.png" alt="" loading="lazy"></p>
<h2 id="提升本地化设计" tabindex="-1"><a class="header-anchor" href="#提升本地化设计"><span>提升本地化设计</span></a></h2>
<h4 id="_0元购" tabindex="-1"><a class="header-anchor" href="#_0元购"><span>0元购</span></a></h4>
<p><strong>需求背景</strong> - 东南亚用户对“零元购”相对陌生，设计上无法直接照搬国内模式，需要根据本地用户做出适时调整。</p>
<p><strong>需求目标</strong> - 转换率达到 <strong>40%</strong></p>
<p><strong>数据反馈</strong> -上线第一周日均3000用户注册，高峰期月均20万，直到后续零元购带来的新增用户占比总用户数的 <strong>50%</strong>。</p>
<h4 id="面对的问题" tabindex="-1"><a class="header-anchor" href="#面对的问题"><span>面对的问题</span></a></h4>
<ol>
<li>
<p>用户对零元购缺少认知，如何才能快速建立心智？</p>
</li>
<li>
<p>用户的行为特征是什么样？如何才能刺激用户完成分享？</p>
</li>
</ol>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h4>
<ol>
<li>
<p><strong>强化引导</strong> - 在关键路径上做图文引导，确保用户在参与过程中实时了解玩法，建立心智。</p>
</li>
<li>
<p><strong>明确目标</strong> - 在重要位置明确玩法目标 (Invite X Friends to register)，告知用户需要达到什么样的目标才能免费领取商品。</p>
</li>
<li>
<p><strong>强化利益点</strong> - 对于不熟悉玩法的用户，“免费领取”最能激发用户欲望，除此之外重点突出PO价格。</p>
</li>
</ol>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-07.png" alt="" loading="lazy"></p>
<h2 id="建立组件库提升效率" tabindex="-1"><a class="header-anchor" href="#建立组件库提升效率"><span>建立组件库提升效率</span></a></h2>
<p><strong>需求背景：</strong> 随着项目深入，设计侧已提炼出一套设计组件库，为提升产研效率，我们需要将其转换为开发组件库。</p>
<ol>
<li><strong>构建组件</strong> - 不同场景对组件类型和样式有不同要求，构建组件前我们梳理了可能的场景，确保组件满足使用。</li>
</ol>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-08.png" alt="" loading="lazy"></p>
<ol start="2">
<li><strong>说明文档</strong> - 说明文档包含组件定义、属性说明、编号样式及使用规范，助力设计师快速了解，正确使用组件库。</li>
</ol>
<p><img src="https://image.yesusu.top/PicGo/GoSwak-09.png" alt="" loading="lazy"></p>
<ol start="3">
<li><strong>协同方式</strong> - 为解决与开发的协同问题，我们枚举了组件的所有样式，并为其编写了唯一编号。开发只需按照设计师的标注调用编号即可。</li>
</ol>
<h2 id="项目收获" tabindex="-1"><a class="header-anchor" href="#项目收获"><span>项目收获</span></a></h2>
<p>Goswak 是我参与的第一个国际化项目，期间我完成了竞品调研、风格设定、主要界面输出、组件库建立等工作。通过此项目使我获得了海外产品的设计经验，并输出了《多语言设计指南》，也为团队成员的工作提供参考。</p>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; " src="https://embed.figma.com/deck/qFwMNOpHwiKYk8ZpRcOCBE/%E5%A4%9A%E8%AF%AD%E8%A8%80%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97?node-id=1-1582&viewport=-204%2C-221%2C1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>
<br>
<h2 id="直接看-gowask-ppt-版" tabindex="-1"><a class="header-anchor" href="#直接看-gowask-ppt-版"><span>直接看 GoWask PPT 版</span></a></h2>
<br>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; " src="https://embed.figma.com/deck/fT62OPUrnaxvEgbeGnfsBH/GoSwak---Online-group-buying?node-id=6-800&viewport=-82%2C-24%2C0.41&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>
</div></template>


