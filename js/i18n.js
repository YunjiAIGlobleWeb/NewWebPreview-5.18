// i18n dictionary + switching logic
(() => {
  const I18N = {
    en: {
      'meta.title': 'Yunji Technology — Innovating Business Solutions',
      'nav.home': 'Home',
      'nav.what': 'What We Do',
      'nav.insights': 'Insights',
      'nav.about': 'About Us',
      'nav.connect': 'Connect',
      'hero.eyebrow': '• AI + Robotics + AIOT',
      'hero.title': 'Building the Embodied AI<br />Agent Ecosystem',
      'hero.subtitle': 'We develop and deploy intelligent service robots and full-stack embodied AI solutions that power human-centric automation for hotels, hospitals, and enterprises worldwide',
      'hero.cta': 'Connect',
      'hero.scroll': 'SCROLL',
      'about.lede1': '<span class="about__num">Founded in 2014</span> delivers <em>Physical AI Agent</em> and <em>Serial polymorphic robots</em>—that think, act, and serve autonomously.',
      'about.lede2': 'Trusted by <strong>40,000+ businesses across 30+ countries</strong>,',
      'about.title': 'Robots for a Happier Humanity',
      'gallery.physical.label': 'Physical AI',
      'gallery.physical.title': 'Physical AI',
      'gallery.physical.copy': 'Service agents that perceive, reason, act, and learn in real-world environments.',
      'gallery.healthcare.label': 'Healthcare',
      'gallery.healthcare.title': 'Healthcare',
      'gallery.healthcare.copy': 'Autonomous robots supporting hospital delivery, pharmacy, ward, and care scenarios.',
      'gallery.hospitality.label': 'Hospitality',
      'gallery.hospitality.title': 'Hospitality Service',
      'gallery.hospitality.copy': 'Concierge-grade robots trusted by hotels worldwide for smarter guest service.',
      'gallery.manufacturing.label': 'Manufacturing',
      'gallery.manufacturing.title': 'Manufacturing',
      'gallery.manufacturing.copy': 'AI robots for material handling, production-line transport, and factory automation.',
      'gallery.commercial.label': 'Commercial',
      'gallery.commercial.title': 'Commercial',
      'gallery.commercial.copy': 'Robots for buildings, retail, cleaning, office service, and smart IoT operations.',
      'trustpin.caption': 'AI + MORE INDUSTRIES',
      'insights.eyebrow': 'AI + More Industries',
      'insights.title': 'SCENARIO-ORIENTED AUTOMATION<br />THAT BOOSTS EFFICIENCY &amp; REDUCES COSTS',
      'insights.sub1': 'Robotics + AI + AIoT',
      'insights.sub2': 'Tailored for Hotels, Hospitals, Factories & Commercial Facilities',
      'insights.hospital.title': 'Care That Moves, Efficiency That Lasts —',
      'insights.hospital.copy': "Yunji's healthcare robots automate sterile supply delivery, waste transport, and inventory workflows in hospitals. By handling repetitive logistics tasks, our solutions free up clinical staff to focus on what matters most: patient care. Built with medical-grade safety and compliance, we turn operational chaos into seamless, reliable care coordination.",
      'insights.factory.title': 'Precision Automation, Built for Modern Manufacturing —',
      'insights.factory.copy': "Yunji's industrial robotic arms deliver consistent, high-precision performance for assembly, material handling, and quality inspection tasks on production lines. With AI-driven motion control and flexible integration capabilities, our robots optimize throughput, reduce human error, and adapt to changing manufacturing demands — powering your factory's transition to smart, lean operations.",
      'aboutus.brand.title': 'Trusted by the Institutions<br />That Define Innovation',
      'aboutus.brand.text': "Our partnerships aren't just logos—they're the foundation of the reliable, enterprise-grade solutions we deliver to your business.",
      'aboutus.growth.eyebrow': 'Our Growth · Your Assurance',
      'aboutus.growth.title': 'Yunji delivers consistent growth and <em>enterprise-grade reliability.</em>',
      'aboutus.growth.text': 'We achieved <strong>23.1% YoY revenue growth</strong> to <strong>USD 43.87M</strong>, with overseas revenue rising to <strong>USD 2.78M</strong>. Trusted by <strong>40,000+ hotels (+33% YoY)</strong> and <strong>200+ healthcare facilities (+54% YoY)</strong>, our <strong>32,000 daily active robots</strong> power scalable automation, driving operational efficiency for global businesses.',
      'aboutus.vision.eyebrow': 'The Vision',
      'aboutus.vision.title': 'Our vision is to reimagine service through intelligent physical agents — <em>trust, scalability, and human-centric innovation.</em>',
      'aboutus.vision.text': 'As a HKEX-listed (<strong>02670.HK</strong>) global enterprise, Yunji is not just a robotics provider, but a partner powering smarter operations worldwide. We invite forward-thinking enterprises seeking reliable automation and sustainable growth to build the future of service with us.',
      'aboutus.vision.cta': 'Connect',
      'footer.offices.title': 'Offices',
      'footer.offices.bjLabel': 'Beijing (HQ)',
      'footer.offices.bjAddr': 'Block B, Building 1, Zhongguancun Dongsheng International Science Park, No. 1 Yongtaizhuang North Road, Haidian District, Beijing',
      'footer.offices.hkLabel': 'Hong Kong',
      'footer.offices.hkAddr': 'Smart Space Room 48, 6/F, Zone C, Block 3, Cyberport',
      'footer.hotline.title': 'Hotline',
      'footer.hotline.label1': 'After-sales / Service',
      'footer.hotline.label2': 'Business / Channel / Brand',
      'footer.contact.title': 'Contact',
      'footer.contact.label1': 'Integrity & Compliance',
      'footer.contact.label2': 'Business Development',
      'footer.contact.label3': 'Marketing & Brand',
      'footer.copyright': '© 2016 - 2026 Technology Inc. All Rights Reserved.',
    },
    zh: {
      'meta.title': '云迹科技 — 用科技创新驱动业务变革',
      'nav.home': '首页',
      'nav.what': '我们做什么',
      'nav.insights': '行业洞察',
      'nav.about': '关于我们',
      'nav.connect': '联系我们',
      'hero.eyebrow': '• AI + 机器人 + AIoT',
      'hero.title': '构建具身智能体生态',
      'hero.subtitle': '我们研发并部署智能服务机器人和全栈具身 AI 解决方案，为全球的酒店、医院及各类企业提供以人为本的自动化服务',
      'hero.cta': '联系我们',
      'hero.scroll': '向下滚动',
      'about.lede1': '<span class="about__num">成立于 2014 年</span>，云迹科技专注于打造 <em>物理 AI 智能体</em> 与 <em>复合多形态机器人</em>——它们能够自主思考、行动并提供服务。',
      'about.lede2': '服务全球 <strong>30+ 国家的 40,000+ 企业</strong>，',
      'about.title': '机器人，让人类更幸福',
      'gallery.physical.label': '物理人工智能',
      'gallery.physical.title': '物理人工智能',
      'gallery.physical.copy': '能够在真实环境中感知、推理、执行并持续学习的服务智能体。',
      'gallery.healthcare.label': '医疗健康',
      'gallery.healthcare.title': '医疗健康',
      'gallery.healthcare.copy': '自主机器人，赋能医院配送、药房、病房及护理等多元场景。',
      'gallery.hospitality.label': '酒店文旅',
      'gallery.hospitality.title': '酒店文旅服务',
      'gallery.hospitality.copy': '礼宾级服务机器人，深得全球酒店信赖，带来更智慧的宾客体验。',
      'gallery.manufacturing.label': '智能制造',
      'gallery.manufacturing.title': '智能制造',
      'gallery.manufacturing.copy': 'AI 机器人，胜任物料搬运、产线运输及工厂自动化作业。',
      'gallery.commercial.label': '业务拓展',
      'gallery.commercial.title': '业务拓展',
      'gallery.commercial.copy': '服务于楼宇、零售、清洁、办公及智慧物联运营场景。',
      'trustpin.caption': 'AI + 赋能更多行业',
      'insights.eyebrow': 'AI + 赋能更多行业',
      'insights.title': '场景化自动化方案，助力降本增效',
      'insights.sub1': '机器人 + AI + AIoT',
      'insights.sub2': '为酒店、医院、工厂及商业设施量身定制',
      'insights.hospital.title': '流动的关怀，持续的效率 —',
      'insights.hospital.copy': '云迹的医疗机器人为医院实现无菌物资配送、医废转运及库存流转的自动化。我们通过承担重复性的物流任务，让医护人员能专注于最重要的事——患者照护。以医疗级安全与合规为基础，我们将繁杂的运营秩序转化为流畅、可靠的医疗协同。',
      'insights.factory.title': '精准自动化，为现代制造而生 —',
      'insights.factory.copy': '云迹的工业机器人手臂在装配、物料搬运及产线质检中提供稳定、高精度的表现。基于 AI 驱动的运动控制与灵活的集成能力，我们的机器人优化产能、降低人为误差，并能快速适应不断变化的制造需求 —— 助力工厂迈向智能化、精益化运营。',
      'aboutus.brand.title': '与定义创新的机构同行',
      'aboutus.brand.text': '我们的合作伙伴并非只是 logo —— 他们是云迹为客户交付可靠、企业级解决方案的坚实基础。',
      'aboutus.growth.eyebrow': '持续增长 · 值得信赖',
      'aboutus.growth.title': '云迹始终保持稳健增长与 <em>企业级可靠性</em>',
      'aboutus.growth.text': '我们实现了 <strong>23.1% 的同比营收增长</strong>，营收达 <strong>4,387 万美元</strong>，海外收入提升至 <strong>278 万美元</strong>。<strong>40,000+ 家酒店(同比 +33%)</strong> 与 <strong>200+ 家医疗机构(同比 +54%)</strong> 选择我们，<strong>32,000 台日活机器人</strong> 支撑着大规模自动化能力，为全球企业带来更高的运营效率。',
      'aboutus.vision.eyebrow': '我们的愿景',
      'aboutus.vision.title': '我们致力于通过具身智能体重新定义服务 —— <em>信赖、可规模化、以人为本的创新</em>',
      'aboutus.vision.text': '作为港交所上市企业(<strong>02670.HK</strong>)，云迹不仅仅是机器人方案的提供者，更是助力全球企业实现智慧运营的合作伙伴。我们诚邀那些追求可靠自动化与可持续增长的远见者，携手共建服务的未来。',
      'aboutus.vision.cta': '联系我们',
      'footer.offices.title': '公司地址',
      'footer.offices.bjLabel': '北京(总部)',
      'footer.offices.bjAddr': '北京市海淀区永泰庄北路 1 号中关村东升国际科学园 1 号楼 B 座',
      'footer.offices.hkLabel': '中国香港',
      'footer.offices.hkAddr': '香港数码港 3 座 C 区 6 楼 Smart Space 48 室',
      'footer.hotline.title': '服务热线',
      'footer.hotline.label1': '售后 / 服务咨询',
      'footer.hotline.label2': '商务 / 渠道 / 品牌合作',
      'footer.contact.title': '联系邮箱',
      'footer.contact.label1': '廉洁合规',
      'footer.contact.label2': '业务发展合作',
      'footer.contact.label3': '市场与品牌合作',
      'footer.copyright': '© 2016 - 2026 云迹科技 版权所有',
    }
  };

  // Expose trust-pin caption value for main.js to read
  window.__I18N__ = I18N;

  const STORAGE_KEY = 'site_lang';
  const apply = (lang) => {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // <title>
    if (dict['meta.title']) document.title = dict['meta.title'];

    // text-only nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // html-aware nodes (allow <em>, <strong>, <span>, <br/>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // Update trust-pin caption text source — main.js reads it on next render
    window.__TRUST_CAPTION__ = dict['trustpin.caption'] || 'AI + MORE INDUSTRIES';
    if (typeof window.__renderTrustCaption === 'function') {
      window.__renderTrustCaption();
    }

    // Toggle button label state
    const btn = document.querySelector('.nav__lang');
    if (btn) {
      const cur = btn.querySelector('.nav__lang-current');
      const oth = btn.querySelector('.nav__lang-other');
      if (lang === 'zh') {
        cur.textContent = '中';
        oth.textContent = 'EN';
      } else {
        cur.textContent = 'EN';
        oth.textContent = '中';
      }
    }
  };

  const getInitialLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
    return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  };

  let current = getInitialLang();
  apply(current);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav__lang');
    if (!btn) return;
    current = current === 'en' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, current);
    apply(current);
  });
})();
