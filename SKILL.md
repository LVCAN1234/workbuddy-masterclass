---
name: workbuddy-masterclass
description: |
  WorkBuddy 从零到精通：19 节核心课 + 2 个补充板块（领域知识库 / 实战工作台）系统掌握 AI Agent。面向零基础用户（AI小白），通过"理论讲解 + 图解 + 互动验收"的方式教学。涵盖 Agent 原理、LLM工作机制、Function Calling、记忆系统、Skill开发、MCP连接器、自动化任务、竞品对比、MCP实操、工作日报实战、创作者路径等全部核心能力。
  触发场景：用户表示想学 Agent、想了解 WorkBuddy、问"什么是 Agent"、"教我用 WorkBuddy"、"Agent 入门"、"WorkBuddy 能做什么"、"AI Agent 课程"等。
  课程共 19 节核心课 + 2 个补充板块：第0课WorkBuddy界面导览 + 基础课（1-8节）+ 进阶课（9-18节）+ 补充板块（19 领域知识库、20 实战工作台），包含实战项目（搭建 MiniTask Agent）、MCP 实操、自动日报实战、GEO 工作台演示和创作者路线。
author: 灿哥（老板）
category: education
version: 1.0.0
tags:
  - AI Agent
  - 教程
  - 零基础
  - WorkBuddy
trigger:
  - 学 Agent
  - 学 WorkBuddy
  - Agent 入门
  - AI Agent 课程
  - 教我用 WorkBuddy
agent_created: true
---

# WorkBuddy 从零到精通 — AI Agent 通关教程

## Overview

本 Skill 提供一套经过验证的 AI Agent 教学体系，面向零基础用户（"AI 小白"），以 WorkBuddy 为教学载体，系统讲解 AI Agent 的所有核心概念和实战能力。

教学方式：理论讲解 → 可视化图解 → 互动问答验收。每节课末尾有 2-3 道验收题，用户回答后评讲，确保真正理解后才进入下一节。

## Course Structure

全部 19 节核心课 + 2 个补充板块，分三个阶段：

### 第 0 课：界面导览

| 课号 | 主题 | 核心内容 |
|------|------|----------|
| 0 | WorkBuddy 界面导览 | 三大区、任务 vs 空间、输入框功能、结果区四视图、模型选择、助理、专家入口 |

### 基础课（1-8 节）：会用 Agent

| 课号 | 主题 | 核心内容 |
|------|------|----------|
| 1 | Agent vs Chatbot | 本质区别：说话的大脑 vs 长手脚能做决策 |
| 2 | LLM 工作原理 | Token、概率预测、上下文窗口、Temperature、幻觉 |
| 3 | Agent 四件套 | LLM + 工具 + 记忆 + 规划 |
| 4 | Function Calling | 工具定义（name+description+parameters）、LLM 决策 vs 系统执行 |
| 5 | Agent 回复解剖 | 一次完整回复的 6 步工具调用链 |
| 6 | System Prompt | 出厂身份证、防篡改、四层输入结构 |
| 7 | 记忆系统深度 | 写入→存储→读取→注入循环、只追加原则、三层记忆 |
| 8 | 搭建 MiniTask Agent | 实战：Python 版 + HTML 版，完整 Agent Loop |

### 进阶课（9-18 节）：懂架构 + 懂生态 + 会上手 + 会创造

| 课号 | 主题 | 核心内容 |
|------|------|----------|
| 9 | 工作模式 | Craft（直接干）、Plan（先规划）、Ask（只答不做） |
| 10 | 技能系统 Skills | 多工具+领域知识+工作流打包，用户级 vs 项目级 |
| 11 | 专家系统 Experts | 专业人格、"谁来做"、可绑定 Skill |
| 12 | MCP 连接器 | 标准协议、手动授权、按需调用（非持续同步） |
| 13 | 自动化任务 | 定时循环 vs 一次性、依赖 WorkBuddy 在线 |
| 14 | 记忆管理进阶 | 什么该记、日志生命周期、记忆 vs Skill 区别 |
| 15 | 竞品对比 | ChatGPT/豆包/DeepSeek/Codex/WorkBuddy 五大产品矩阵 |
| 16 | MCP 实操 | 飞书（日程/消息/会议）+ 钉钉（群聊/通讯录/审批） |
| 17 | Agent 实战：自动日报 | 飞书日程+消息 → LLM提炼 → 日报模板 → 飞书群 |
| 18 | 从学员到创作者 | 三条路：造Skill/分享ClawHub/等Expert市场，含真实案例 |

### 补充板块（19-20 节）：知识库 + 工作台

| 课号 | 主题 | 核心内容 |
|------|------|----------|
| 19 | 领域知识库板块（L3） | 为什么 Agent 会编、知识库三件套（glossary/product_facts/cases）、manifest 检索调用、回写闭环越用越厚 |
| 20 | 实战工作台板块 | 工作台四要素、以谋仕GEO 诊断台为案例、五步搭建法、与 Skill/Expert 组合 |

## Teaching Workflow

### Phase 1: Onboarding

当用户触发本 Skill 时，按以下步骤启动：

1. **了解用户水平**：询问"你对 AI Agent 了解多少？用过哪些 AI 工具？"
2. **设定预期**：告知课程 19 节核心课 + 2 个补充板块（含第 0 课界面导览）、分基础和进阶两个阶段，外加知识库 / 工作台两个补充板块
3. **从第 0 课开始**，按顺序教学，不跳课

### Phase 2: Teaching Each Lesson

每节课遵循相同的教学模式：

1. **概念导入**（2-3 句话）：用类比/比喻让零基础用户建立直觉
2. **可视化图解**：用 `show_widget` 工具绘制 SVG 图表（`read_me` 先加载 `diagram` 模块），图解关键概念
3. **延伸讲解**：在图解基础上展开讲解，确保理解深度
4. **互动验收**：出 2-3 道选择题或简答题，用户回答后评讲

### Phase 3: Transition Between Lessons

- 每节验收通过后，询问"继续下一节还是休息？"
- 用户可以随时中断，下次对话从中断处继续
- 每节课完成后，在项目日志中记录进度

## Key Teaching Principles

### 1. 用类比，不用术语

对零基础用户，优先用生活类比。例如：
- Agent vs Chatbot → "Chatbot 是只会说话的大脑，Agent 长了手脚还能做决策"
- System Prompt → "出厂身份证，决定了 Agent 是谁"
- MCP 连接器 → "USB 协议，标准化的插头规格"
- 工具调用 → "玻璃房里的厨师——LLM 只能看菜谱（生成 Token），要炒菜（执行操作）必须让外面的助手拿锅"

### 2. 图解优先于文字

每节课至少配一张 SVG 图解。调用 `read_me` 加载 `diagram` 模块后使用 `show_widget`。图表应简洁、对比鲜明、与学员当前认知水平匹配。

### 3. 验收不过不推进

每节课的 2-3 道题必须全部答对才进入下一节。答错的地方用更直观的方式重新讲解，直到理解。

### 4. 鼓励学员的洞察

当学员用自己的话复述概念或发现深层逻辑时，明确肯定并展开。例如学员自主发现"豆包/DeepSeek 是半 Agent"，应表扬并延伸讲解。

## Detailed Course Content

每节课的详细教学内容（包括知识点清单、图解要点、验收题目和答案）请参考：

```
references/curriculum.md
```

此文件被拆分为独立引用文件以保持 SKILL.md 精简。当需要准备某一课的教学内容时，先读取该文件获取详细教案。

## 领域知识库 (L3 领域知识层)

课程内容的事实 / 术语 / 案例统一沉淀在 `references/kb/`，生成课程或口播素材前先检索调用，避免凭记忆编造：

1. **Read `references/kb/manifest.json`**：按本课主题在 `by_topic` 中定位相关文件（glossary / product_facts / cases）。
2. **Read 对应 markdown**：取权威内容（术语定义、产品事实、实战坑）写进课程或口播素材。
3. **知识库板块 / 工作台板块**：已作为第 19、20 课正式做进课程（详见 `references/curriculum.md`），综合三部分内容落地 L3 领域知识层 + L4 教学专家。

目录与用法详见 `references/kb/INDEX.md`；持续丰富方式见该文件「怎么丰富」一节。

## Assets

### 实战素材：MiniTask Agent

第 8 课需要学员动手搭建一个 MiniTask Agent。HTML 版本可直接使用：

```
assets/mini-task-agent.html
```

这是一个功能完整的浏览器端 Agent 演示，包含：
- Agent Loop（关键词匹配 → 工具调用 → 结果返回）
- 四个内置工具：添加待办、查看待办、计算器、当前时间
- localStorage 持久化（记忆功能）
- 中文交互界面

教学时应：
1. 先让学员体验 HTML 版（打开即用）
2. 讲解 Agent Loop 的四步循环
3. 根据学员技术背景，可选展示 Python 版代码逻辑

### 演示素材：谋仕GEO 诊断工作台

第 20 课需要学员直观看到「工作台」长什么样。直接使用：

```
assets/geo-workbench.html
```

这是一个纯前端、离线可用的 GEO（生成式引擎优化）诊断工作台：
- 粘贴网页内容 / 文章 → 5 维度规则分析（结构 / 实体 / 来源 / 权威 / AI 可提取）
- 输出综合评分 + 各维度建议 + 可导出 .txt 报告
- 呼应真实 GEO 诊断需求，也是「工作台」概念的最小可用原型

教学时应：点「加载示例」演示诊断出分，再对照第 20 课讲工作台四要素与五步搭建法。

## Post-Course Options

全部 19 节课完成后，向学员提供以下选项：

1. **做成 Skill**：将这套课程体系统性打包为 Skill（已实现 — 即本 Skill）
2. **实际动手**：用 WorkBuddy 完成一个真实任务（如数据分析、网站搭建）
3. **深入学习某个模块**：如专门学习金融分析、自动化任务等
4. **分享/发布**：发布到 WorkBuddy 技能市场供其他用户使用
5. **扩展实操课程**：进阶学习 MCP 实操（连接飞书/钉钉/腾讯文档等办公软件）和办公自动化工作流

## Resources

- `references/curriculum.md` — 19 节核心课 + 2 个补充板块的详细教案（知识点清单、图解要点、验收题及答案，含第 19、20 课）
- `references/kb/` — L3 领域知识库（INDEX / manifest.json / glossary / product_facts / cases），生成课程前检索调用
- `assets/mini-task-agent.html` — 第 8 课 MiniTask Agent 实战文件
- `assets/geo-workbench.html` — 第 20 课 GEO 诊断工作台演示素材
