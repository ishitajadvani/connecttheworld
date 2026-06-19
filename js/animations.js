/* =============================================
   CONNECT THE WORLD — Animation Engine
   Premium interactions for luxury travel brand
   ============================================= */

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- SCROLL REVEAL (data-reveal) ----
     Psychological: staged entrance guides attention sequentially,
     preventing cognitive overload and signalling premium craft.
  ---- */
  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (reduced) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => io.observe(el));
  }

  /* ---- SECTION TAG LINE REVEAL ----
     The horizontal line "grows" into view, drawing the eye
     down to the heading — a refined editorial technique.
  ---- */
  function initSectionTags() {
    if (reduced) {
      document.querySelectorAll('.section-tag').forEach(el => el.classList.add('tag-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tag-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.section-tag').forEach(el => io.observe(el));
  }

  /* ---- TIMELINE LINE DRAW ----
     The connecting line between steps "draws itself" as the
     itinerary enters view — visually narrating the journey.
  ---- */
  function initTimeline() {
    if (reduced) return;
    const timelines = document.querySelectorAll('.itinerary-timeline');
    timelines.forEach(tl => tl.classList.add('line-draw'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('line-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    timelines.forEach(tl => io.observe(tl));
  }

  /* ---- INLINE STAT COUNTER (eased, with pop entrance) ----
     Numbers counting up are the most effective trust signal —
     they "show the work" rather than just stating a claim.
  ---- */
  function initInlineCounters() {
    const nums = document.querySelectorAll('.inline-stat-num[data-target]');
    if (!nums.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const rawText = el.textContent.trim();
        const suffix = rawText.replace(/[\d,\.]/g, '');
        const duration = reduced ? 0 : 1600;
        let start = null;

        el.style.animation = 'statPop 0.55s cubic-bezier(0.34,1.56,0.64,1) both';

        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / (duration || 1), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = Math.floor(eased * target);
          el.textContent = val >= 1000 ? val.toLocaleString() + suffix : val + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target >= 1000 ? target.toLocaleString() + suffix : target + suffix;
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.65 });

    nums.forEach(n => io.observe(n));
  }

  /* ---- 3D TILT on destination + package cards ----
     Subtle depth transform makes cards feel physically present,
     triggering the same neural response as holding a luxury brochure.
  ---- */
  function initCardTilt() {
    if (reduced || window.innerWidth < 1024) return;

    document.querySelectorAll('.dest-card, .package-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform =
          `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateY(-10px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.5s ease';
        setTimeout(() => { card.style.transition = ''; }, 500);
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease, box-shadow 0.35s ease';
      });
    });
  }

  /* ---- BUTTON RIPPLE ----
     Click feedback that confirms the action was registered —
     reduces anxiety and increases perceived responsiveness.
  ---- */
  function initRipple() {
    document.querySelectorAll('.btn-primary, .btn-sm').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const r = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.left = (e.clientX - r.left) + 'px';
        ripple.style.top  = (e.clientY - r.top)  + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });
  }

  /* ---- HERO PARALLAX ----
     Layered depth scroll creates a spatial sense of "entering"
     the destination world — increases immersion and time-on-page.
  ---- */
  function initParallax() {
    if (reduced) return;
    const slides  = document.querySelector('.hero-slides');
    const content = document.querySelector('.hero-content');
    if (!slides) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight) {
            slides.style.transform  = `translateY(${y * 0.38}px)`;
            if (content) content.style.transform = `translateY(${y * 0.18}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- ACTIVE NAV LINK on scroll ----
     Users always know where they are — reduces disorientation
     and increases confidence in the navigation system.
  ---- */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const links    = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!sections.length || !links.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            const isMatch = link.getAttribute('href') === '#' + id;
            link.classList.toggle('active-link', isMatch);
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach(s => io.observe(s));
  }

  /* ---- HAMBURGER → X MORPH ----
     The icon transformation confirms the menu state change,
     eliminating ambiguity for mobile users.
  ---- */
  function initHamburger() {
    const btn = document.getElementById('mobileMenuBtn');
    if (!btn) return;
    const nav = document.getElementById('mobileNav');

    const originalClick = nav ? null : null;
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-open');
    });
    // Sync is-open when menu closes via overlay
    const overlay = document.getElementById('mobileNavOverlay');
    if (overlay) {
      overlay.addEventListener('click', () => btn.classList.remove('is-open'));
    }
    document.querySelectorAll('.mobile-nav-panel a').forEach(link => {
      link.addEventListener('click', () => btn.classList.remove('is-open'));
    });
  }

  /* ---- SMOOTH FAQ ----
     Override inline display toggle with max-height animation
     already wired in CSS — just ensure open class logic is clean.
  ---- */
  function patchFAQ() {
    // The existing initFAQ in main.js handles class toggling.
    // CSS animations.css handles the visual transition via .faq-item.open.
    // No JS patch needed — they cooperate correctly.
  }

  /* ---- INIT ---- */
  function init() {
    initReveal();
    initSectionTags();
    initTimeline();
    initInlineCounters();
    initCardTilt();
    initRipple();
    initParallax();
    initActiveNav();
    initHamburger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
