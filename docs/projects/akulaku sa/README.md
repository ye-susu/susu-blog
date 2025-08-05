---
title: Akulaku SA 销售管理系统 
description: Sales management system
date: 2025-03-20
heroImage: https://image.yesusu.top/PicGo/akusa-cover.png
---
# Akulaku SA 销售管理系统
<ReadingTime/>
## 项目背景
基于线下大额业务的发展，SA 团队规模日渐庞大。为方便 SA 团队作业，需要将整个作业流程线上化、系统化，并围绕关键指标持续优化销售动作，达到提升销售效率的目的。

## 问题与挑战
1️⃣ 如何实现作业流程的线上化、系统化？ 

2️⃣ 设计侧如何助力产品提升销售效率？

## 设计目标
1️⃣ 支持业务，提供高效的产品设计。

2️⃣ 助力业务，提升关键任务完成率。

3️⃣ 提炼组件库，提升设计效率。

## 设计思路

##### 1. 如何线上化？
参考线下作业流程，制定销售作业 SOP。围绕销售作业 SOP，建设产品基础能力。寻找关键过程指标，验证产品效果。

![](https://image.yesusu.top/PicGo/akusa-thinking-online.png)

##### 2. 如何系统化？
通过4大管理域建设产品能力：客户管理域、工具管理域、过程管理域、策略管理域。

![](https://image.yesusu.top/PicGo/akusa-thinking-systematize.png)

通过首页、工作台、个人中心3个菜单进行功能架构，功能入口按照管理域进行色彩区分。

![](https://image.yesusu.top/PicGo/akusa-thinking-systematize02.png)

##### 3. 如何提升销售效率？
提升产品操作效率（ 精简操作步骤、支持批量操作、提供操作引导 ）

![](https://image.yesusu.top/PicGo/akusa-thinking-efficiency01.png)

提升任务完成率（ 任务进度提示、设置任务倒计时、及时反馈与认可 ）

![](https://image.yesusu.top/PicGo/akusa-thinking-efficiency02.png)

提升作业积极性（ 销售目标看板、业绩榜单公示 ）

![](https://image.yesusu.top/PicGo/akusa-thinking-efficiency03.png)

## 设计过程

##### 1. 视觉调研

为了精准把握产品风格，我们在设计前对同类产品进行了视觉调研，并将调研结果运用于设计中。

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; "  src="https://embed.figma.com/deck/EHzOftDSyX239IpsH4ugmT/%E5%95%86%E5%AE%B6%E7%AB%AF%E7%AB%9F%E5%93%81%E8%A7%86%E8%A7%89%E8%B0%83%E7%A0%94?node-id=1-129&viewport=-184%2C-123%2C0.83&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>

##### 2. 确定设计语言

**图标** ：主要使用线性图标，线性图标具备更高的识别性。造型尽量与同类图标保持一致，且语义表达正确。避免使用过大圆角，图标风格应具备商务感。

<br/>

![](https://image.yesusu.top/PicGo/akusa-design-icon.png)

<br/>

**色彩** ：主色使用品牌色，确保 Akulaku 产品线品牌统一。文字色满足 W3C 规范，保证文字可读性。

<br/>

<ColorPalette :colorsGroups="[
  [ 
    { name: 'Brand', value: '#F0463C' }
  ],
  [ 
    { name: 'Warn', value: '#F2A100' },
    { name: 'Success', value: '#4FBD19' },
    { name: 'Link', value: '#198EFA' }
  ],
  [ 
    { name: 'Text-1', value: '#333' },
    { name: 'Text-2', value: '#666' },
    { name: 'Text-3', value: '#999' },
    { name: 'Text-4', value: '#B7B7B7' },
    { name: 'Divider', value: '#E8E8E8',textColor: '#3C3C43' },
    { name: 'Bg-1', value: '#F0F2F5' ,textColor: '#3C3C43'},
    { name: 'Bg-2', value: '#FAFAFA' ,textColor: '#3C3C43'}
  ]
]" />

<br/>

**字体排印** ：使用系统字体，系统字体聚焦信息本身。采用梳排风格，提升信息识别效率。

![](https://image.yesusu.top/PicGo/akusa-design-typography.png)

**布局** ：可视情况混用布局，但要求优先使用通栏布局。

![](https://image.yesusu.top/PicGo/akusa-design-layout.png)

**插画** ：强调品牌调性，迎合用户审美。刻画人物角色，传达用户情绪。

![](https://image.yesusu.top/PicGo/akusa-design-illustration.png)

##### 3. 输出视觉稿

![](https://image.yesusu.top/PicGo/akusa-design-page01.png)

![](https://image.yesusu.top/PicGo/akusa-design-page02.png)

##### 4. 提炼组件库

B 端产品覆盖多样化场景，对组件适用性有着更高要求。我们在设计中提炼了符合业务场景的组件，提升了设计效率。

![](https://image.yesusu.top/PicGo/akusa-design-component.png)

## 数据反馈

取自上线后 27 天数据

总 GMV 提升 **6.61%**，出单门店数提升 **30.00%**，订单量提升 **10.98%**

## 直接看 PPT 版

<br/>

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; " src="https://embed.figma.com/deck/NseB75laC8MzWqTcJyP2K3/Akulaku-SA?node-id=9-4393&viewport=-21761%2C-170%2C1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>


