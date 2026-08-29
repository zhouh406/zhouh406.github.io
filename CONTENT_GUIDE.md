# 网站内容维护指南

这个网站使用 GitHub Pages + Jekyll。页面模板已经负责生成导航、首页精选内容、项目列表、知识列表、分类、标签、归档与关联内容。日常维护主要修改 YAML 或 Markdown，不需要改 HTML、CSS 或 JavaScript。

## 1. 常用内容在哪里

| 需要更新的内容 | 修改位置 |
| --- | --- |
| 姓名、定位、简介、教育、时间线、联系方式 | `_data/profile.yml` |
| Technical Skills | `_data/skills.yml` |
| Research 各方向的背景与当前重点 | `_data/research.yml` |
| 新增或修改项目 | `_projects/*.md` |
| 新增或修改知识文章 | `_knowledge/*.md` |
| 项目或文章图片 | `assets/images/` |
| 顶部导航 | `_data/navigation.yml` |

除非要改变整个网站的结构或视觉风格，否则不要修改 `_layouts/`、`_includes/`、`assets/css/` 或 `assets/js/`。

## 2. 修改个人介绍

打开 `_data/profile.yml`，可以直接修改：

- `name`：显示名称
- `role`：身份或职位
- `tagline`：首页一句话定位
- `intro`：首页简短介绍
- `focus`：当前研究重点
- `research_interests`：首页与 About 的研究兴趣
- `education`：教育经历
- `timeline`：时间线
- `contact`：邮箱和 GitHub

About 页开头的较长自我介绍位于根目录 `about.md`。结构化信息仍然来自 `_data/profile.yml` 和 `_data/skills.yml`。

YAML 对缩进敏感，请使用空格，不要使用 Tab。列表项前使用 `-`。

## 3. 新增项目

在 `_projects/` 新建一个英文小写文件名，例如：

```text
_projects/new-antenna-project.md
```

复制下面的模板：

```markdown
---
title: Project Name
slug: new-antenna-project
summary: 用一到两句话说明项目解决什么问题。
status: In progress
year: 2026
order: 4
featured: false
technologies:
  - HFSS
  - PyAEDT
  - Python
research:
  - antennas
  - hfss-pyaedt
# related_notes:
#   - related-note-slug
result: 简要说明当前结果；没有最终结论时可以写当前进展。
# repository: https://github.com/username/repository
# image: /assets/images/projects/new-antenna-project/overview.png
# image_alt: 图像的简短说明
# image_caption: 可选图注
---

## Problem

说明背景、约束和需要解决的问题。

## Solution

说明采用的方法、设计与主要流程。

## Results

说明可验证结果、当前进展和限制。

## Figures / Screenshots

可以在正文继续插入多张图片。
```

保存后，项目会自动出现在 Projects 页。`featured: true` 的项目会按 `order` 显示在首页，首页最多显示三个。

### Project Front Matter 字段

| 字段 | 是否必填 | 作用 |
| --- | --- | --- |
| `title` | 是 | 项目名称 |
| `slug` | 是 | 项目网址和关联标识；使用英文小写与连字符 |
| `summary` | 是 | 项目卡片和 SEO 描述 |
| `status` | 建议 | 例如 `In progress`、`Prototype`、`Completed` |
| `year` | 建议 | 项目年份 |
| `order` | 是 | Projects 页排序，数字越小越靠前 |
| `featured` | 是 | 是否在首页展示 |
| `technologies` | 建议 | 项目技术标签列表 |
| `research` | 建议 | 关联 `_data/research.yml` 中的 `key` |
| `related_notes` | 可选 | 关联知识文章的 `slug` 列表 |
| `result` | 建议 | 详情页侧栏的结果摘要 |
| `repository` | 可选 | GitHub 仓库完整地址 |
| `image` | 可选 | 项目主图的站点绝对路径 |
| `image_alt` | 图片存在时必填 | 无障碍替代文本 |
| `image_caption` | 可选 | 主图图注 |

不要填写不存在的仓库地址或未经验证的量化结果；字段暂时没有内容时可以省略。

## 4. 新增知识文章

在 `_knowledge/` 新建一个英文小写文件名：

```text
_knowledge/new-note.md
```

复制下面的模板：

```markdown
---
title: PyAEDT HFSS Automation Basics
slug: pyaedt-hfss-automation-basics
date: 2026-08-29
category: PyAEDT
tags:
  - HFSS
  - PyAEDT
  - Python
summary: Basic workflow for automating HFSS using PyAEDT.
research:
  - hfss-pyaedt
  - engineering-automation
# related_notes:
#   - another-note-slug
# related_projects:
#   - project-slug
---

## Introduction

正文使用标准 Markdown。

## Workflow

...

## Example

...

## Related Notes

关联列表通常由 Front Matter 自动生成；这里也可以补充解释。
```

保存后，文章会自动出现在以下位置：

- Knowledge 全部文章列表
- 首页 Latest Notes（最新三篇）
- 对应 Category 与 Tag 索引
- Archive 时间归档
- Related Notes / Related Projects
- 上一篇 / 下一篇
- Research 页的相关笔记

文章页目录会根据正文中的二级和三级标题自动生成，不需要手写 TOC。若某篇短文不需要目录，在 Front Matter 中加入：

```yaml
toc: false
```

### Knowledge Front Matter 字段

| 字段 | 是否必填 | 作用 |
| --- | --- | --- |
| `title` | 是 | 文章标题 |
| `slug` | 是 | 文章网址和关联标识；修改后旧链接会变化 |
| `date` | 是 | `YYYY-MM-DD` 格式，用于排序和归档 |
| `category` | 是 | 一个主分类 |
| `tags` | 建议 | 多个关键词 |
| `summary` | 是 | 列表摘要和 SEO 描述 |
| `research` | 可选 | 关联研究方向的 `key` |
| `related_notes` | 可选 | 相关文章 `slug` 列表 |
| `related_projects` | 可选 | 相关项目 `slug` 列表 |
| `toc` | 可选 | 默认自动生成；设为 `false` 可关闭 |
| `image` | 可选 | Open Graph 或文章相关图片路径 |

建议保持分类名称稳定，例如：

- `Antenna`
- `RF`
- `Electromagnetics`
- `HFSS`
- `PyAEDT`
- `Python`
- `AI / Machine Learning`
- `AI + EM`
- `Engineering Tools`

## 5. 添加图片

建议按内容建立文件夹：

```text
assets/images/projects/project-slug/
assets/images/knowledge/note-slug/
```

在 Markdown 正文中插入图片：

```markdown
![清楚描述图片内容的替代文本](/assets/images/knowledge/note-slug/result.png)
```

项目主图在项目 Front Matter 中设置：

```yaml
image: /assets/images/projects/project-slug/overview.png
image_alt: HFSS 模型与主要尺寸标注
image_caption: 参数化模型概览
```

建议：

- 优先使用 PNG、JPG、WebP 或 SVG。
- 图片宽度一般控制在 1600 px 以内，避免仓库和页面过大。
- 文件名使用英文小写与连字符，不要使用空格。
- 每张内容图片都写有意义的替代文本。

## 6. 修改研究方向

打开 `_data/research.yml`。每个方向包含：

```yaml
- key: antennas
  title: Antennas
  summary: 一句话概述
  background: 背景说明
  current_focus: 当前重点
```

`key` 用于项目和知识文章的自动关联。修改现有 `key` 时，也要同步修改引用它的 Markdown Front Matter；只改文字内容时不需要改其他文件。

## 7. 本地预览

首次预览需要安装 Ruby、Bundler 和仓库依赖。`Gemfile` 使用 `github-pages`，用于尽量匹配 GitHub Pages 的 Jekyll 环境，不是网站运行时的前端依赖。

在仓库根目录运行：

```bash
bundle install
bundle exec jekyll serve --livereload
```

浏览器打开：

```text
http://127.0.0.1:4000
```

停止预览时按 `Ctrl+C`。

如果更新 `_config.yml`，需要停止并重新运行本地预览；普通 Markdown、YAML 和 CSS 修改通常会自动重新构建。

## 8. 通过 GitHub Pages 发布

当前仓库保持“从 `main` 分支发布”的方式，不需要新增部署工作流。

```bash
git add .
git commit -m "Add a new knowledge note"
git push origin main
```

推送后，GitHub Pages 会自动运行 Jekyll 构建。通常等待一到几分钟即可在下面的地址看到更新：

```text
https://zhouh406.github.io
```

如果发布失败，在 GitHub 仓库的 **Actions** 或 **Settings → Pages** 查看构建信息。最常见的问题是 YAML 缩进、Front Matter 缺少结束的 `---`、日期格式错误或 Liquid 标记未闭合。

## 9. 发布前检查

- Front Matter 开头和结尾都有 `---`。
- YAML 使用空格缩进，没有 Tab。
- `slug` 使用英文小写与连字符，并且不重复。
- `related_notes` 和 `related_projects` 引用的 slug 确实存在。
- 图片路径、大小写和文件名一致。
- 代码块使用三个反引号完整包围。
- 本地打开首页、内容详情页和手机窄窗口检查一次。

完成以上步骤后，日常更新流程就是：**新建或修改 Markdown → 本地预览 → Commit → Push → GitHub Pages 自动发布**。
