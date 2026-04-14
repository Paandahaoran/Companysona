# Companysona | 大厂人格 MVP

一个零依赖静态 MVP，用 25 道职场场景题匹配 17 种公司/社会职业人格结果。

## 当前实现

- 首页：`Companysona` + `测测你的大厂人格` + 主视觉
- 答题：25 题，四选一场景题，一屏一题，5 个氛围章节
- 算法：四维连续分数 + 人格 bonus + 17 个公司/社会职业人格坐标匹配
- 结果页：公司人格主卡、厂牌共振指数、四维画像、长解析、典型行为、优点/痛点、适配/相克、自救指南
- 分享：前端 Canvas 生成 PNG 海报，复制分享文案
- 反馈：`准 / 不准`
- 埋点：本地 `localStorage` 记录开始、完成、保存海报、分享、反馈事件

## V2 内容草案

`content-v2-draft.md` 记录了下一轮内容升级方向：

- 从 5 档同意量表改为四选一场景题，已作为线上 V2 入口
- 题目更短、更像群聊、更有大厂黑话和职业梗
- 结果池从公司人格扩展到公司 + 社会职业人格
- 阿里替换淘宝闪购
- 新增公务员、老师、医生、银行人

这份草案已经进入线上 V2，后续继续作为内容迭代底稿。

## 运行

直接在浏览器打开 `index.html` 即可。

如果后续要迁移到 Next.js，建议把当前文件拆成：

- `app/page.tsx`
- `components/Quiz.tsx`
- `components/Result.tsx`
- `lib/content.ts`
- `lib/scoring.ts`
- `lib/analytics.ts`

## Supabase 指标采集

当前前端会写入 Supabase 的 `companysona_events` 表，同时保留 `localStorage` 作为本地备份。

上线前需要在 Supabase SQL Editor 里执行 `supabase.sql`。

第一版不存登录身份、不收邮箱、不存历史记录，也不存单题明细。核心指标从事件表聚合：

- 完测率：`complete / start`，可用 `payload->>'app_version' = 'v2'` 区分 V2
- 准确反馈率：`feedback` 事件中 `payload->>'value' = 'accurate'` 的占比
- 结果分布：按 `result_slug` 聚合 `complete`
- 分享点击：统计 `share_click`
- 海报保存：统计 `save_poster`
