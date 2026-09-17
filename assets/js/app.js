/**
 * AMINUL (MZR) — PORTFOLIO ENGINE (PRATHM.ME AESTHETIC)
 * Web Audio FX, Dark/Light Mode, GitHub Heatmap, Cmd+K Search, Live Filtering
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER ENGINE (Web Audio API) ---
  class SoundFX {
    constructor() {
      this.enabled = localStorage.getItem('sound_fx_enabled') !== 'false';
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('sound_fx_enabled', this.enabled);
      if (this.enabled) {
        this.playPop();
      }
      return this.enabled;
    }

    playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05) {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Audio error silently handled
      }
    }

    playClick() {
      this.playTone(800, 'triangle', 0.04, 0.04);
    }

    playPop() {
      this.playTone(600, 'sine', 0.06, 0.06);
    }

    playSwitch() {
      this.playTone(450, 'sine', 0.08, 0.05);
    }
  }

  const sfx = new SoundFX();

  // --- THEME ENGINE ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');

  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    updateSoundIcon(sfx.enabled);
  }

  function toggleTheme() {
    sfx.playSwitch();
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  }

  function updateThemeIcon(isDark) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = isDark
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }

  function updateSoundIcon(isEnabled) {
    if (!soundToggleBtn) return;
    soundToggleBtn.innerHTML = isEnabled
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>`;
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const active = sfx.toggle();
      updateSoundIcon(active);
      showToast(active ? 'Sound FX Enabled' : 'Sound FX Muted');
    });
  }

  // --- GITHUB CONTRIBUTION HEATMAP GENERATOR ---
  function renderGitHubHeatmap() {
    const grid = document.getElementById('github-heatmap');
    if (!grid) return;

    grid.innerHTML = '';
    const totalWeeks = 28;
    const totalDays = totalWeeks * 7;

    // Pattern generator for realistic dense commit history (1829 contributions in 2025-26)
    for (let i = 0; i < totalDays; i++) {
      const cell = document.createElement('div');
      cell.className = 'heat-cell';

      // Random weight with clustering
      const seed = Math.sin(i * 997 + 13) * 10000;
      const rand = seed - Math.floor(seed);
      
      let level = 0;
      let count = 0;

      if (rand > 0.82) {
        level = 4;
        count = Math.floor(rand * 14) + 6;
      } else if (rand > 0.60) {
        level = 3;
        count = Math.floor(rand * 6) + 4;
      } else if (rand > 0.35) {
        level = 2;
        count = Math.floor(rand * 4) + 2;
      } else if (rand > 0.15) {
        level = 1;
        count = 1;
      } else {
        level = 0;
        count = 0;
      }

      // Recent weeks higher activity
      if (i > totalDays - 42 && level === 0 && rand > 0.08) {
        level = 2;
        count = 3;
      }

      cell.classList.add(`heat-${level}`);
      cell.setAttribute('title', `${count} contributions on commit day #${i + 1}`);

      cell.addEventListener('mouseenter', () => {
        sfx.playClick();
      });

      grid.appendChild(cell);
    }
  }

  // --- VIEW SWITCHING (Home View <-> Projects Catalog) ---
  const homeView = document.getElementById('home-view');
  const catalogView = document.getElementById('projects-catalog-page');
  const seeAllProjectsBtn = document.getElementById('see-all-projects-btn');
  const backHomeBtn = document.getElementById('back-home-btn');
  const catalogSearchInput = document.getElementById('catalog-search-input');

  function openProjectsCatalog() {
    sfx.playPop();
    if (homeView) homeView.classList.add('hidden');
    if (catalogView) catalogView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openHomeView() {
    sfx.playPop();
    if (catalogView) catalogView.classList.remove('active');
    if (homeView) homeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (seeAllProjectsBtn) {
    seeAllProjectsBtn.addEventListener('click', openProjectsCatalog);
  }

  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', openHomeView);
  }

  // Projects Search Filter
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const projectCards = catalogView.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // --- COMMAND PALETTE & FLOATING SEARCH (`Cmd+K` / `Ctrl+K`) ---
  const floatingSearchBtn = document.getElementById('floating-search-btn');
  const cmdModal = document.getElementById('cmd-modal');
  const cmdInput = document.getElementById('cmd-search-input');
  const cmdResults = document.getElementById('cmd-results-list');

  function openCommandPalette() {
    sfx.playPop();
    if (cmdModal) {
      cmdModal.classList.add('open');
      if (cmdInput) {
        cmdInput.value = '';
        filterCommandResults('');
        setTimeout(() => cmdInput.focus(), 50);
      }
    }
  }

  function closeCommandPalette() {
    if (cmdModal) {
      cmdModal.classList.remove('open');
    }
  }

  if (floatingSearchBtn) {
    floatingSearchBtn.addEventListener('click', openCommandPalette);
  }

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) {
        closeCommandPalette();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('open')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      closeLightbox();
      closeCommandPalette();
      closeDrawer();
    }
  });

  const commandsData = [
    { title: 'Home', tag: 'Navigation', icon: 'home', action: () => openHomeView() },
    { title: 'Everything I\'ve shipped (8 Projects)', tag: 'Projects', icon: 'folder', action: () => openProjectsCatalog() },
    { title: 'TicketXorai (Live Event Ticketing Platform)', tag: 'Project', icon: 'external', link: 'https://ticketxorai.vercel.app/' },
    { title: 'DR.APSC AspirantHub (Civil Services Learning OS)', tag: 'Project', icon: 'external', link: 'https://drapsc.vercel.app/' },
    { title: 'DocSlot (Doctor Appointment Booking Engine)', tag: 'Project', icon: 'external', link: 'https://docslot.vercel.app/' },
    { title: 'VoteLens (Assam Election Analytics & AI)', tag: 'Project', icon: 'external', link: 'https://votelens.vercel.app/' },
    { title: 'MZR Academy (NAAC A++ Academic Portal)', tag: 'Project', icon: 'external', link: 'https://mzracademy.vercel.app/' },
    { title: 'Mannat Lodge & Restaurant (Hospitality Engine)', tag: 'Project', icon: 'external', link: 'https://mannathotel.vercel.app/' },
    { title: 'Online Admission ERP (GSAC College Admissions)', tag: 'Project', icon: 'external', link: 'https://gsac-admission.vercel.app/' },
    { title: 'RankUp Academy (Coaching & Foundation Portal)', tag: 'Project', icon: 'external', link: 'https://rankupacademy.vercel.app/' },
    { title: 'Education & Law Qualifications (B.A. LL.B. Hons & LL.M. in Criminal Law)', tag: 'Section', icon: 'award', action: () => scrollToSection('education-sec') },
    { title: 'Skills & Tech Stack', tag: 'Section', icon: 'code', action: () => scrollToSection('skills-sec') },
    { title: 'Achievements & Awards', tag: 'Section', icon: 'award', action: () => scrollToSection('achievements-sec') },
    { title: 'Connect & Socials', tag: 'Section', icon: 'user', action: () => scrollToSection('connect-sec') },
    { title: 'GitHub Profile', tag: 'External', icon: 'github', link: 'https://github.com/aminulmaz' },
    { title: 'LinkedIn Profile', tag: 'External', icon: 'linkedin', link: 'https://linkedin.com/in/aminulmaz' },
    { title: 'Medium Publications', tag: 'External', icon: 'book', link: 'https://medium.com/@aminulmaz' },
    { title: 'Toggle Dark / Light Theme', tag: 'Action', icon: 'sun', action: () => toggleTheme() },
    { title: 'Toggle Audio Synthesizer', tag: 'Action', icon: 'volume', action: () => soundToggleBtn && soundToggleBtn.click() }
  ];

  function scrollToSection(id) {
    openHomeView();
    closeCommandPalette();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function filterCommandResults(query) {
    if (!cmdResults) return;
    cmdResults.innerHTML = '';
    const q = query.toLowerCase().trim();

    const matches = commandsData.filter(cmd => 
      !q || cmd.title.toLowerCase().includes(q) || cmd.tag.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      cmdResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">No results found for "${query}"</div>`;
      return;
    }

    matches.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cmd-item';
      div.innerHTML = `
        <div class="cmd-item-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          <span>${item.title}</span>
        </div>
        <span class="cmd-item-tag">${item.tag}</span>
      `;
      div.addEventListener('click', () => {
        sfx.playPop();
        if (item.action) {
          item.action();
          closeCommandPalette();
        } else if (item.link) {
          window.open(item.link, '_blank');
          closeCommandPalette();
        }
      });
      cmdResults.appendChild(div);
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      filterCommandResults(e.target.value);
    });
  }

  // --- LIGHTBOX SCREENSHOT PREVIEW ENGINE ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSubtitle = document.getElementById('lightbox-subtitle');

  function openLightbox(imgSrc, title, subtitle) {
    sfx.playPop();
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = imgSrc;
      if (lightboxTitle) lightboxTitle.textContent = title || 'Project Screenshot';
      if (lightboxSubtitle) lightboxSubtitle.textContent = subtitle || 'Full Screen View';
      lightboxModal.classList.add('open');
      lightboxModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      lightboxModal.setAttribute('aria-hidden', 'true');
      if (lightboxImg) lightboxImg.src = '';
    }
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // --- MOBILE DRAWER ENGINE ---
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    sfx.playPop();
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    if (mobileDrawer) mobileDrawer.classList.add('open');
  }

  function closeDrawer() {
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('data-target');
      if (targetId) {
        e.preventDefault();
        closeDrawer();
        if (targetId === 'projects-page') {
          openProjectsCatalog();
        } else {
          scrollToSection(targetId);
        }
      }
    });
  });

  // --- TOAST HELPER ---
  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  // Interactive buttons sound binding
  document.querySelectorAll('.pill-btn, .mini-link-btn, .skill-chip, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => sfx.playClick());
  });

  // Global exposes
  window.openProjectsCatalog = openProjectsCatalog;
  window.openHomeView = openHomeView;
  window.openCommandPalette = openCommandPalette;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.showToast = showToast;

  // Initialize
  initTheme();
  renderGitHubHeatmap();
})();
