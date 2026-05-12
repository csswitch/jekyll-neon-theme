// Neon Noir — Main JS
// Progress bar, glitch on load, mobile nav, heading anchors, copy buttons

(function () {
  'use strict';

  // ── Reading progress bar ──────────────────────────────────────────────────
  const bar = document.querySelector('.neon-progress');
  if (bar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docH > 0 ? (scrollTop / docH * 100) + '%' : '0%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
  }

  // ── Mobile nav toggle ─────────────────────────────────────────────────────
  const toggle = document.querySelector('.neon-nav__toggle');
  const links = document.querySelector('.neon-nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }

  // ── Active nav link ───────────────────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.neon-nav__links a').forEach(a => {
    if (a.getAttribute('href') === path || (path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
  });

  // ── Glitch animation on headings ──────────────────────────────────────────
  document.querySelectorAll('.glitch').forEach(el => {
    el.setAttribute('data-text', el.textContent);
  });

  // ── Heading anchor links ──────────────────────────────────────────────────
  document.querySelectorAll('.post-body h2, .post-body h3').forEach(h => {
    if (!h.id) return;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'anchor';
    a.setAttribute('aria-hidden', 'true');
    a.textContent = '#';
    h.appendChild(a);
  });

  // ── Copy code buttons ─────────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'COPY';
    btn.setAttribute('aria-label', 'Copy code');
    pre.appendChild(btn);

    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
        btn.textContent = 'COPIED!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'COPY'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });

  // ── Neon flicker on page load (first visit) ───────────────────────────────
  if (!sessionStorage.getItem('neon-visited')) {
    sessionStorage.setItem('neon-visited', '1');
    const logo = document.querySelector('.neon-nav__logo span');
    if (logo) {
      logo.style.animation = 'neon-flicker 1.2s ease forwards';
    }
  }
})();
