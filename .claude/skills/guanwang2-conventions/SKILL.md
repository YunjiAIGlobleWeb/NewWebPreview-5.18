---
name: guanwang2-conventions
description: Yunji Technology 官网2 项目（/Users/admin/官网2）的编码规范与设计令牌。当用户在该项目中要求新增/修改区块、样式、文案、i18n 词条、或保持视觉一致性时使用。覆盖 BEM 命名、CSS 变量、字体、配色、滚动交互模式、i18n 键路径约定与文案口径。

前置Skill准备：
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill : An AI SKILL that provide design intelligence for build

---

# 官网2 项目规范

云迹科技（02670.HK）官网 V2 — 静态站、无构建步骤、纯 HTML + CSS + 原生 JS。修改时遵循以下约定。

## 1. 文件结构

```
官网2/
├── index.html         # 单页结构，按 <!-- ============ XXX ============ --> 注释分区块
├── css/style.css      # 单文件样式，顶部含 :root 变量
├── js/
│   ├── i18n.js        # 词典对象 I18N = { en: {...}, zh: {...} }，data-i18n 切换
│   └── main.js        # 滚动、IntersectionObserver、画廊 hover、trust-pin 滚动动画
├── assets/            # 图片+视频（允许中文文件名：首页视频.mp4、医院.png 等）
└── 翻译清单.md         # 14 节中英文对照，文案的权威来源
```

无打包工具。直接用浏览器打开 `index.html` 或起一个静态服务即可调试。

## 2. CSS 设计令牌（必须复用，不要新增魔法值）

```css
:root {
  --c-bg: #fafaf7;
  --c-bg-dark: #0a0a0a;
  --c-text: #111;
  --c-text-muted: #6b6b6b;
  --c-text-light: #f5f5f0;
  --c-line: rgba(0,0,0,0.08);
  --c-line-light: rgba(255,255,255,0.15);
  --c-accent: #c9a86a;     /* warm gold */
  --ff-sans: 'Inter', -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
  --ff-serif: 'Playfair Display', Georgia, "Songti SC", serif;
  --maxw: 1440px;
  --pad-x: clamp(20px, 4vw, 80px);
}
```

- 衬线字体 `--ff-serif` 仅用于 `<em>`（已全局设定）和大标题斜体重点词。
- 容器最大宽度统一 `var(--maxw)`，左右内边距统一 `var(--pad-x)`。
- 强调金色 `--c-accent` 是品牌色，谨慎使用，不要随意改色。

## 3. 命名约定 — BEM

类名严格使用 `block__element--modifier`：

- `.nav`、`.nav__inner`、`.nav__link`、`.nav__link-hover`、`.nav__cta`
- `.hero`、`.hero__video`、`.hero__title`、`.hero__cta`
- `.gallery`、`.gallery__item`、`.gallery__item.is-active`
- `.service-card`、`.service-card--reverse`、`.service-card__media`
- `.about-block`、`.about-block--stack`、`.about-block--reverse`
- `.footer__col`、`.footer__col-title`、`.footer__col-item`、`.footer__col-label`

状态类用 `is-` 前缀：`is-active`、`is-visible`、`is-scrolled`、`is-full`。

不要引入 utility class（无 Tailwind），不要写内联 style 除非是 JS 写入的 `--p` 等动态变量。

## 4. i18n 约定

- 在 HTML 上加 `data-i18n="key"` 或 `data-i18n-html="key"`（后者允许内嵌 `<br>`、`<em>`、`<strong>`）。
- 键路径用点分层：`nav.home`、`hero.title`、`gallery.physical.copy`、`aboutus.growth.text`、`footer.offices.bjAddr`。
- 新增文本时：**同时** 在 `js/i18n.js` 的 `en` 和 `zh` 两个表里补条目，否则切换语言会丢字。
- 中文文案以 `翻译清单.md` 为权威，**不要自行翻译关键术语**：
  - Physical AI Agent → 物理 AI 智能体
  - Embodied AI → 具身智能体
  - Robots for a Happier Humanity → 机器人,让人类更幸福
  - HKEX-listed (02670.HK) → 港交所上市企业(02670.HK)

## 5. JS 交互模式

- `main.js` 是入口副作用脚本，按 IIFE 分块写不同交互（nav scroll、to-top、gallery hover、trust-pin）。
- 滚动驱动动画走"读取 boundingClientRect → 计算进度 p ∈ [0,1] → 写 `pin.style.setProperty('--p', p)`"路径，让 CSS 用 `var(--p)` 表达过渡。参见 `main.js` 的 trust-pin 段。
- 区块入场动画统一用 `IntersectionObserver` 加 `.is-visible`，CSS 里写过渡。
- 监听 scroll 必须带 `{ passive: true }`。

## 6. HTML 结构惯例

- 每个大区块用 `<section class="xxx" id="xxx">` + 内层 `.xxx__inner` 控制最大宽度。
- 区块顺序：nav → hero → about (What We Do lede) → gallery → trust-pin → services (Insights) → about-us → footer → to-top button。
- CTA 按钮全部用同一套结构：文字 `<span data-i18n>` + 14×14 箭头 SVG（路径 `M3 11L11 3M11 3H4M11 3V10`）。复用，不要画新箭头。
- 联系邮箱：BD（业务）= `BD@yunji.ai` / `bd@yunji.ai`；合规 = `yangguang@yunji.ai`；市场 = `Marketing@yunji.ai`。

## 7. 文案与数据口径（不要随意改数字）

权威数据均来自 `翻译清单.md`：

- 成立年份：2014
- 覆盖：30+ 国家、40,000+ 企业
- 营收：USD 43.87M（同比 +23.1%）
- 海外营收：USD 2.78M
- 酒店客户：40,000+（同比 +33%）
- 医疗机构：200+（同比 +54%）
- 日活机器人：32,000 台
- 港股代码：02670.HK
- 版权年份：2016 - 2026

要更新这些数字时，**先确认翻译清单与 i18n 字典同步**。

## 8. 资产命名

- 中文文件名是有意为之的（医院.png、工厂.png、高级写字楼.png、首页视频.mp4、中间视频.mp4、最后.mp4、上市.jpg、品牌.png、核心财务与运营数据 1.png）。重命名前确认 `index.html` 与 `style.css` 中的引用都更新。
- 历史命名带哈希前缀的文件（`69f2c2e4d28eea55c48c47ef_111.png` 等）来自原始素材，保留原名。

## 9. 修改清单（每次改动后自检）

- [ ] 改了文案？en + zh + 翻译清单.md 三处一致？
- [ ] 加了新区块？给了 BEM 类名 + `data-i18n` 键？
- [ ] 用了新颜色/间距？能否复用 `:root` 变量？
- [ ] 加了滚动监听？passive: true 加了吗？IntersectionObserver 优先于 scroll？
- [ ] 改了资产文件名？HTML 和 CSS 引用都跟着改了吗？

## 10. 调试

- 起本地服务：`cd /Users/admin/官网2 && python3 -m http.server 8000`
- 浏览器开 `http://localhost:8000`
- 切换语言：点导航栏 `EN / 中` 按钮，由 `js/i18n.js` 处理。
