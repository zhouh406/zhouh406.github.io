---
title: Starting a Technical Notebook
slug: starting-a-technical-notebook
date: 2025-10-06
category: Engineering Tools
tags:
  - Writing
  - Documentation
  - GitHub Pages
summary: 说明为什么建立公开技术笔记，以及如何让学习记录逐步形成可复用的知识结构。
research:
  - engineering-automation
related_notes:
  - pyaedt-hfss-automation-basics
related_projects:
  - rf-simulation-toolchain
---

## Why Write Notes

技术学习很容易停留在“当时看懂了”。把过程写下来，会迫使自己补全假设、输入、方法和结论，也让之后的项目能够复用已经验证过的步骤。

这个知识库主要用于三件事：

1. 整理天线、射频、电磁仿真与优化算法的概念。
2. 保存 PyAEDT、Python 和工程工具的实践方法。
3. 记录项目中的问题、判断依据与后续改进方向。

## A Maintainable Structure

每篇笔记只对应一个 Markdown 文件。标题、日期、分类、标签和摘要放在 Front Matter 中，正文使用标准 Markdown。页面列表、分类、标签和相互链接由 Jekyll 自动生成。

这种结构的价值在于内容与页面代码分离：新增文章时，不需要同时修改首页、列表页和归档页。

## Writing Principles

- 一篇笔记聚焦一个可以清楚说明的问题。
- 优先记录为什么这样做，而不只是操作步骤。
- 代码示例保持最小，并注明版本或适用条件。
- 未完成的内容可以明确标记，不需要假装已有结论。
- 当理解发生变化时，直接修订旧笔记并保留清晰的日期信息。

## Related Work

知识笔记会与项目页面互相连接：项目解释问题、方案与结果，笔记则展开其中可复用的方法和背景知识。这样网站既能快速展示工作，也能支持长期阅读。

