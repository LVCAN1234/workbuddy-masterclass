# 领域知识库 INDEX

## 这是什么
教「AI Agent / WorkBuddy」这门课的**权威底稿库**。让课程内容和口播素材「有根有据、不瞎编」。
定位为 Agent 教学框架的 **L3 领域知识层**。

## 与教学框架四层的关系
- **L1 内容层**：`workbuddy-masterclass`（19 课教什么）
- **L2 方法层**：`teaching-methodology`（怎么教）
- **L3 领域知识层**：本知识库（事实 / 术语 / 案例从哪来）← 当前目录
- **L4 教学专家层**：专家市场开放后配置的专业教学人格

## 目录结构
```
references/kb/
├── INDEX.md          # 本文件：说明 + 索引
├── manifest.json     # 机器可读索引（主题 → 文件），生成课程时检索用
├── glossary.md       # 概念术语库（定义 + 类比 + 易错点 + 关联课）
├── product_facts.md  # WorkBuddy 产品事实库（功能 / 模型 / 限制 / 路径）
└── cases.md          # 实战案例与常见坑（可复用工作流 + 排错）
```

## 怎么调用（生成课程 / 口播素材时）
1. 先 Read `references/kb/manifest.json`，按本课主题定位相关文件
2. 再 Read 对应 markdown（`glossary` / `product_facts` / `cases`）取权威内容
3. 课程内容直接引用，避免凭记忆编造；口播素材同理

## 怎么丰富（持续维护）
- **权威抓取**：WebFetch WorkBuddy 官方文档（`codebuddy.cn/docs/workbuddy/*`）补产品事实
- **对话沉淀**：每次实战踩坑 → 写进 `cases.md`（如 HEVC 抽 WAV、Chromium 固化）
- **用户案例**：老板真实场景（GEO 诊断、养生 / 健身课迁移）→ `cases.md`
- **课程回写**：每生成一节新课，把验证过的知识点补进 `glossary.md`

## 调用示例
- 讲第 4 课 Function Calling → 查 `manifest.by_topic.function_calling` → Read `glossary.md` 对应条目
- 讲第 0 课界面 → Read `product_facts.md`（界面三大区、模型倍率）
- 做「知识库板块 / 工作台板块」→ 综合三部分
