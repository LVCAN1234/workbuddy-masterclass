#!/usr/bin/env node
/**
 * 谋仕GEO 诊断引擎（node 版，与 geo-workbench.html 共用同一套规则）
 * 用法：
 *   node geo-diagnose.js input.txt            -> 打印 Markdown 报告到 stdout
 *   node geo-diagnose.js input.txt out.md     -> 写到 out.md
 *   echo "文章内容" | node geo-diagnose.js    -> 从 stdin 读
 */
const fs = require('fs');

const ENTITIES = ["生成式引擎优化","GEO","AI","人工智能","大模型","大语言模型","引用","来源","结构化数据","EEAT","E-E-A-T","权威","可信","问答","FAQ","知识图谱","语义","检索","搜索引擎","豆包","元宝","DeepSeek","摘要","上下文","内容","优化"];

function count(re, s){ const m = s.match(re); return m ? m.length : 0; }

function analyze(text){
  const dims = [];

  // 1. 结构清晰度
  let score = 0;
  const headings = count(/^#+\s/gm, text) + count(/^\s*\d+[.、]/gm, text);
  const paras = text.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
  const avgLen = paras.length ? paras.reduce((a,p)=>a+p.length,0)/paras.length : 0;
  const hasList = /^\s*[-*]\s|^\s*\d+[.、]\s/gm.test(text);
  score += Math.min(40, headings*13);
  score += (avgLen>=60 && avgLen<=240) ? 30 : (avgLen>0 ? 15 : 0);
  score += hasList ? 30 : 0;
  dims.push({name:"结构清晰度", score:Math.round(Math.min(100,score)),
    tips:["用 H2/H3 小标题把文章分层（建议 ≥3 个）","段落别太长，单段控制在 60–240 字","关键信息用列表（1. 2. 或 -）呈现"]});

  // 2. 实体覆盖度
  const hit = ENTITIES.filter(e=>text.includes(e)).length;
  const entScore = Math.round(hit/ENTITIES.length*100);
  dims.push({name:"实体覆盖度", score:entScore,
    tips:["覆盖本主题的核心实体词（GEO/AI/引用/结构化数据等）","避免只喊口号，把概念写具体","出现行业术语时顺带解释，方便 AI 理解"]});

  // 3. 来源与引用
  let s3 = 0;
  const links = count(/https?:\/\//g, text);
  const refWords = ["来源","参考","引用","据","研究表明","数据","公开"];
  const hasRef = refWords.some(w=>text.includes(w));
  s3 += Math.min(50, links*25);
  s3 += hasRef ? 50 : 0;
  dims.push({name:"来源与引用", score:Math.round(Math.min(100,s3)),
    tips:["关键论点附上出处链接或「据 XX 研究显示」","区分观点与事实，事实尽量给来源","引用权威媒体 / 论文 / 官方文档"]});

  // 4. 权威信号 E-E-A-T
  let s4 = 0;
  const nums = count(/\d+(\.\d+)?\s?%/g, text) + count(/\d+\s?(个|项|倍|年)/g, text);
  const authWords = ["作者","发布","机构","公司","团队","研究院","专家","认证"];
  const hasAuth = authWords.some(w=>text.includes(w));
  const hasDate = /\d{4}\s?年|\d{4}[-/]\d{1,2}/.test(text);
  s4 += Math.min(35, nums*17);
  s4 += hasAuth ? 30 : 0;
  s4 += hasDate ? 35 : 0;
  dims.push({name:"权威信号 (E-E-A-T)", score:Math.round(Math.min(100,s4)),
    tips:["标注作者 / 发布机构，建立经验与专业度","写上发布日期，体现时效性","用具体数字 / 百分比替代模糊表述"]});

  // 5. AI 可提取性
  let s5 = 0;
  const sentences = text.split(/[。！？!?；;\n]/).map(s=>s.trim()).filter(Boolean);
  const shortCnt = sentences.filter(s=>s.length<=40).length;
  const shortRatio = sentences.length ? shortCnt/sentences.length : 0;
  const hasQA = text.includes("？")||text.includes("?")||text.includes("问答")||text.includes("FAQ");
  s5 += Math.round(shortRatio*40);
  s5 += hasQA ? 30 : 0;
  s5 += headings>=3 ? 30 : 0;
  dims.push({name:"AI 可提取性", score:Math.round(Math.min(100,s5)),
    tips:["多用短句，方便大模型抽取要点","加 FAQ / 问答结构，直接命中用户问题","小标题即论点，让 AI 秒懂每段在讲啥"]});

  const total = Math.round(dims.reduce((a,d)=>a+d.score,0)/dims.length);
  return {dims, total};
}

function gradeOf(t){
  if(t>=80) return ["优秀 · 易被 AI 引用","结构、事实、来源都到位，AI 搜索引擎很愿意把它放进答案。"];
  if(t>=60) return ["良好 · 有提升空间","基础不错，补强薄弱维度后引用概率明显提高。"];
  if(t>=40) return ["及格 · 需优化","已有雏形，但多个维度偏弱，建议按建议逐项整改。"];
  return ["偏弱 · 优先重做","目前 AI 较难理解与引用，建议先搭好结构与来源再发布。"];
}

function buildMarkdown(r, text){
  const [g] = gradeOf(r.total);
  const time = new Date().toLocaleString("zh-CN");
  let md = `# 谋仕GEO · AI 搜索引擎友好度诊断报告\n\n`;
  md += `- **综合得分**：${r.total} / 100（${g}）\n`;
  md += `- **生成时间**：${time}\n`;
  md += `- **被诊断内容**：约 ${text.length} 字\n\n`;
  md += `## 一、五维评分\n\n`;
  md += `| 维度 | 得分 | 评价 |\n|------|------|------|\n`;
  r.dims.forEach(d=>{
    const comment = d.score>=80?"优秀":d.score>=60?"良好":d.score>=40?"一般":"偏弱";
    md += `| ${d.name} | ${d.score} | ${comment} |\n`;
  });
  md += `\n## 二、整改建议（按优先级）\n\n`;
  const items = [];
  r.dims.forEach(d=>{ if(d.score<70) d.tips.forEach(t=>items.push(`1. 【${d.name}】${t}`)); });
  if(items.length===0){ md += `当前各项均达标，保持并更新即可。\n`; }
  else { md += items.join("\n") + "\n"; }
  md += `\n---\n*本报告由 谋仕GEO 诊断台 自动生成，供 GEO 优化参考。*\n`;
  return md;
}

function readInput(){
  if(process.argv[2] && process.argv[2] !== '-'){
    return fs.readFileSync(process.argv[2], 'utf-8');
  }
  // stdin
  return require('fs').readFileSync(0, 'utf-8');
}

const text = readInput().trim();
if(!text){ console.error("未读到内容。用法：node geo-diagnose.js input.txt [out.md]"); process.exit(1); }
const r = analyze(text);
const md = buildMarkdown(r, text);
if(process.argv[3]){
  fs.writeFileSync(process.argv[3], md, 'utf-8');
  console.error("已写入 " + process.argv[3]);
}
console.log(md);
