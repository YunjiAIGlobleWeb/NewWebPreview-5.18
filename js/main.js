// Nav: change background on scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 60) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Products dropdown
(() => {
  const header = document.querySelector('.nav');
  const trigger = document.querySelector('.nav__link--dropdown');
  const footerTrigger = document.querySelector('.footer__link--dropdown');
  if (!trigger) return;
  let closeTimer;

  const open = () => {
    clearTimeout(closeTimer);
    header.classList.add('is-dropdown-open');
  };
  const close = () => {
    closeTimer = setTimeout(() => header.classList.remove('is-dropdown-open'), 200);
  };

  trigger.addEventListener('mouseenter', open);
  trigger.addEventListener('mouseleave', close);

  const dropdown = header.querySelector('.nav__dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    dropdown.addEventListener('mouseleave', () => header.classList.remove('is-dropdown-open'));
  }

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('is-dropdown-open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) {
      header.classList.remove('is-dropdown-open');
    }
  });

  // Footer Products link also triggers the header dropdown
  if (footerTrigger) {
    footerTrigger.addEventListener('mouseenter', open);
    footerTrigger.addEventListener('mouseleave', close);
  }
})();

// Soft fade-in on scroll for sections
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('section').forEach(s => io.observe(s));

// Language toggle is handled by js/i18n.js

// Back to top button
(() => {
  const btn = document.querySelector('.to-top');
  if (!btn) return;
  const toggle = () => {
    if (window.scrollY > window.innerHeight * 0.6) btn.classList.add('is-visible');
    else btn.classList.remove('is-visible');
  };
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  toggle();
})();
(() => {
  const items = document.querySelectorAll('.gallery__item');
  if (!items.length) return;
  items.forEach((it) => {
    it.addEventListener('mouseenter', () => {
      items.forEach(x => x.classList.remove('is-active'));
      it.classList.add('is-active');
    });
    it.addEventListener('click', (e) => e.preventDefault());
  });
})();

// Trust-pin: scroll-driven zoom, pin-to-full, per-char caption reveal
(() => {
  const pin = document.querySelector('.trust-pin');
  if (!pin) return;
  const video = pin.querySelector('.trust-pin__video');
  const textEl = pin.querySelector('.trust-pin__text');
  const STEP = 0.08;

  const renderCaption = () => {
    const FULL_TEXT = window.__TRUST_CAPTION__ || 'AI + MORE INDUSTRIES';
    textEl.innerHTML = '';
    [...FULL_TEXT].forEach((c, i) => {
      const s = document.createElement('span');
      s.className = 'ch';
      s.textContent = c === ' ' ? ' ' : c;
      s.style.setProperty('--d', (i * STEP).toFixed(2) + 's');
      textEl.appendChild(s);
    });
  };
  window.__renderTrustCaption = renderCaption;
  renderCaption();

  let wasFull = false;

  const update = () => {
    const rect = pin.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrolled = -rect.top;
    const zoomRange = vh;
    let p = scrolled / zoomRange;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    pin.style.setProperty('--p', p.toFixed(3));

    const isFull = p >= 0.995;
    if (isFull && !wasFull) {
      wasFull = true;
      pin.classList.add('is-full');
      if (video.paused) video.play().catch(() => {});
    } else if (!isFull && wasFull) {
      wasFull = false;
      pin.classList.remove('is-full');
      video.pause();
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
