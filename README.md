# zchhaa | AI × Electromagnetics

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-1d6250)](https://zhouh406.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-Markdown--driven-bb3a2b)](https://jekyllrb.com/)

个人介绍、工程项目与公开知识库。网站保留 GitHub Pages + Jekyll 架构，内容通过 Markdown 和 YAML 数据文件维护。

## Content structure

```text
_data/        profile, skills, research and navigation
_projects/    one Markdown file per project
_knowledge/   one Markdown file per knowledge note
_layouts/     shared page templates
_includes/    reusable page components
assets/       styles, scripts and images
```

常用更新不需要修改模板：

- 个人资料：`_data/profile.yml`
- 技术能力：`_data/skills.yml`
- 研究方向：`_data/research.yml`
- 新项目：`_projects/new-project.md`
- 新笔记：`_knowledge/new-note.md`

完整维护说明见 [CONTENT_GUIDE.md](CONTENT_GUIDE.md)。

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload
```

打开 `http://127.0.0.1:4000`。推送到 `main` 后，GitHub Pages 会自动重新构建并发布。

## License

[MIT](LICENSE)
