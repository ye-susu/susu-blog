---
title: UI 3.0 Flutter 组件库 
description: UI 3.0 Flutter Components
date: 2025-04-10
heroImage: https://image.yesusu.top/PicGo/project-component-cover.png
---
# UI 3.0 Flutter 组件库 
<ReadingTime/>

## 项目背景
自2023年起，我司开发团队全面引入了 **Flutter** 框架，凭借其出色的跨端能力极大的提升了开发效率。尽管 **Flutter** 有着丰富的组件库，可还是存在着与我司项目适配不足的问题，因此我们决定构建一套内部组件库为公司项目提供支持。

## 项目目标
1️⃣ 可跨项目使用：一套组件库满足不同项目使用，避免重复造轮子。 

2️⃣ 提升协作效率：当前协作方式效率低下，需选择更有效率的方式。

## 项目方案
##### 1. 如何满足不同项目使用？

**a. 具备主题能力**：通过主题配置，覆盖变量值，进而实现对组件颜色、圆角、间距等样式的全局修改。

**b. 拥有定制能力**：定义组件时，需提供相关API，允许开发者调整组件样式及自定义组件内容。

![](https://image.yesusu.top/PicGo/cmp3.0-1.png)

##### 2. 如何选择高效的协作方式？

我们共提出了3种协作方式，经过实践后发现方式3的协作效率更高，而且可以更好的统一设计侧和开发侧的组件逻辑。

**方式 1**：枚举所有组件变体并进行唯一编号，开发通过编号调用组件。（优势：简单方便 劣势：语义化差）

**方式 2**：提供所有组件变体的使用代码，开发复制相关代码引用即可。（优势：语义化强 劣势：构建复杂）

**方式 3**：统一设计侧与开发侧的属性命名，开发依照组件属性设置即可。（优势：逻辑一致，效率高）

![](https://image.yesusu.top/PicGo/cmp3.0-2.png)

## 构建过程

##### 1. 确立设计原则

**从简** - 追求简单易用，避免过多样式、过多属性、过多变体。

**适用** - 立足项目、尊重用户、契合市场，确保组件更加适用。

**统一** - 统一的设计语言，统一的组件逻辑，统一的属性命名。

![](https://image.yesusu.top/PicGo/cmp3.0-3.png)

##### 2. 建立设计变量

**变量结构**：整个变量为三层嵌套结构，分别为 Base 、Global 、Component。Base 为基础层，存储梯度色版等基础变量。Global 为全局层，用于变量的全局修改。Component 为组件层，针对组件进行变量调整。

![](https://image.yesusu.top/PicGo/cmp3.0-4.png)

**命名规则**：命名遵循逐级递进的结构，核心格式为：Scope + Category + Type + Modifier。

![](https://image.yesusu.top/PicGo/cmp3.0-5.png)

**建立变量**：使用 Figma 建立变量，以层级 Base、Global、Cmp 为组进行分类，整个结构清晰易懂。

![](https://image.yesusu.top/PicGo/cmp3.0-6.png)

##### 3. 进行组件设计

![](https://image.yesusu.top/PicGo/cmp3.0-7.png)

##### 4. 输出文档规范

![](https://image.yesusu.top/PicGo/cmp3.0-8.png)

##### 5. 设计预览包

![](https://image.yesusu.top/PicGo/cmp3.0-9.png)

## 项目成果

已接入组件库的项目：**Merchant、Akulaku SA、Mitra、Mitra BD**。

常规需求效率提升 **18.8%**。

<br/>

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 16 / 10.06; " src="https://embed.figma.com/design/TQwv7I7pKT3qQMdcQPYS7x/Components?node-id=414-5616&embed-host=share" allowfullscreen></iframe>


