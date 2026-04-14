# Companysona | 大厂人格 MVP

一个零依赖静态 MVP，用 36 道职场场景题匹配 16 家公司的大厂人格结果。

## 当前实现

- 首页：`Companysona` + `测测你的大厂人格` + 主视觉
- 答题：36 题，5 档同意量表，一屏一题，4 个氛围章节
- 算法：四维连续分数 + 16 家公司人工坐标最近邻匹配
- 结果页：公司人格主卡、厂牌共振指数、四维画像、长解析、典型行为、优点/痛点、适配/相克、自救指南
- 分享：前端 Canvas 生成 PNG 海报，复制分享文案
- 反馈：`准 / 不准`
- 埋点：本地 `localStorage` 记录开始、完成、保存海报、分享、反馈事件

## 运行

直接在浏览器打开 `index.html` 即可。

如果后续要迁移到 Next.js，建议把当前文件拆成：

- `app/page.tsx`
- `components/Quiz.tsx`
- `components/Result.tsx`
- `lib/content.ts`
- `lib/scoring.ts`
- `lib/analytics.ts`

## 后续接 Supabase

MVP 可以新增这些表：

- `sessions`: anonymous_id, source, started_at, completed_at
- `results`: session_id, result_company, result_slug, match_score, data_score, break_score, result_score, craft_score
- `events`: session_id, event_name, payload, created_at
- `feedback`: session_id, result_slug, value, created_at

第一版不存登录身份、不收邮箱、不存历史记录。
