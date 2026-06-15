// Main Portfolio JavaScript
// Handles: loader, cursor, navbar, typing, scroll reveal,
// skill bars, counters, theme, contact form, skill filters

(function () {
  'use strict';

  // ─── Loader ──────────────────────────────────────────────
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 1800);
    });
  }

  // ─── Custom Cursor ───────────────────────────────────────
  function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followX = 0, followY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateFollower() {
      followX += (mouseX - followX) * 0.12;
      followY += (mouseY - followY) * 0.12;
      follower.style.transform = `translate(${followX}px, ${followY}px)`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverTargets = 'a, button, .skill-card, .project-card, .social-btn, .contact-detail';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        follower.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        follower.classList.remove('hovering');
      });
    });
  }

  // ─── Navbar ──────────────────────────────────────────────
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const allNavLinks = document.querySelectorAll('.nav-link');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
      updateActiveLink();
    });

    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks?.classList.toggle('open');
    });

    allNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('open');
      });
    });

    function updateActiveLink() {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (window.scrollY >= top) current = sec.id;
      });
      allNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }

    updateActiveLink();
  }

  // ─── Typing Effect ───────────────────────────────────────
  function initTyping() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const phrases = [
      'Full Stack Apps.',
      'REST APIs.',
      'Clean UI.',
      'Real Solutions.',
      'Open Source.',
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let delay = 120;

    function type() {
      const phrase = phrases[phraseIdx];
      el.textContent = deleting
        ? phrase.substring(0, charIdx--)
        : phrase.substring(0, charIdx++);

      if (!deleting && charIdx > phrase.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIdx < 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 400;
      } else {
        delay = deleting ? 60 : 120;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 900);
  }

  // ─── Scroll Reveal ───────────────────────────────────────
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  // ─── Skill Bars ──────────────────────────────────────────
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.dataset.width;
            setTimeout(() => { bar.style.width = width + '%'; }, 200);
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach(bar => observer.observe(bar));
  }

  // ─── Animated Counters ───────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              el.textContent = current;
              if (current >= target) clearInterval(timer);
            }, 40);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(c => observer.observe(c));
  }

  // ─── Skill Filters ───────────────────────────────────────
  function initSkillFilters() {
    const filters = document.querySelectorAll('.skill-filter');
    const cards = document.querySelectorAll('.skill-card');

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
          const cat = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.classList.toggle('hidden', !show);
          if (show) {
            card.style.animation = 'none';
            card.offsetHeight; // reflow
            card.style.animation = '';
          }
        });
      });
    });
  }

  // ─── Back to Top ─────────────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Theme Toggle ────────────────────────────────────────
  function initTheme() {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const html = document.documentElement;

    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(saved);

    btn?.addEventListener('click', () => {
      const current = html.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('portfolio-theme', next);
    });

    function applyTheme(theme) {
      html.dataset.theme = theme;
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
      if (typeof ParticleSystem !== 'undefined') {
        ParticleSystem.setTheme(theme === 'dark');
      }
    }
  }

  // ─── Contact Form ────────────────────────────────────────
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');

    function getVal(id) {
      return document.getElementById(id)?.value.trim() || '';
    }

    function setError(id, msg) {
      const el = document.getElementById(id + '-error');
      if (el) el.textContent = msg;
    }

    function clearErrors() {
      ['name', 'email', 'message'].forEach(f => setError(f, ''));
    }

    function validate() {
      let valid = true;
      clearErrors();

      const name = getVal('name');
      const email = getVal('email');
      const message = getVal('message');

      if (!name) { setError('name', 'Please enter your name.'); valid = false; }
      if (!email) {
        setError('email', 'Please enter your email.'); valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('email', 'Please enter a valid email.'); valid = false;
      }
      if (!message || message.length < 10) {
        setError('message', 'Message must be at least 10 characters.'); valid = false;
      }

      return valid;
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate()) return;

      submitBtn?.classList.add('btn-loading');

      // Simulate async submission
      setTimeout(() => {
        submitBtn?.classList.remove('btn-loading');
        successMsg?.classList.remove('hidden');
        form.reset();
        setTimeout(() => successMsg?.classList.add('hidden'), 5000);
      }, 1500);
    });

    // Clear errors on input
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => {
        const errorEl = document.getElementById(input.id + '-error');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  // ─── Smooth Scroll ───────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = document.getElementById('navbar')?.offsetHeight || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // ─── Init All ────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initNavbar();
    initTyping();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initSkillFilters();
    initBackToTop();
    initTheme();
    initContactForm();
    initSmoothScroll();
  });

})();
