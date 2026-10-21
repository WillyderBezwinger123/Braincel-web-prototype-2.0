/* ==========================================================================
   BRAINCEL — INSTRUMENT-STYLE MOTION & INTERACTION ENGINE (scripts/main.js)
   ========================================================================== */

(function () {
  "use strict";

  // 1. Page Entrance Transition
  function initPageLoad() {
    document.body.classList.add("page-ready");
    document.body.classList.remove("page-entering");
  }

  // 2. Auto-Hiding Sticky Header (like Instrument's GlobalHeader)
  function initStickyHeader() {
    const header = document.querySelector(".global-header");
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentY = window.scrollY;
            if (currentY > 120 && currentY > lastScrollY + 6) {
              header.classList.add("global-header--hidden");
            } else if (currentY < lastScrollY - 6 || currentY <= 80) {
              header.classList.remove("global-header--hidden");
            }
            lastScrollY = currentY;
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    // Mobile Menu Toggle
    const toggleBtn = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");
    if (toggleBtn && navList) {
      toggleBtn.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("is-open");
        toggleBtn.textContent = isOpen ? "Close" : "Menu";
      });
    }
  }

  // 3. Instrument-Style Masked Line & Element Reveal (useReveal)
  function initScrollReveals() {
    // Wrap each .line-mask with staggered transition delay
    document.querySelectorAll("[data-reveal-lines]").forEach((block) => {
      const lines = block.querySelectorAll(".line-inner");
      lines.forEach((line, idx) => {
        line.style.transitionDelay = `${idx * 90}ms`;
      });
    });

    const revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-lines]");
    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -6% 0px"
      }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

  // 4. Scroll-Triggered Theme Switcher (Light <-> Dark <-> Stone)
  function initThemeSwitcher() {
    const themedSections = document.querySelectorAll("[data-scroll-theme]");
    if (!themedSections.length || !("IntersectionObserver" in window)) return;

    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nextTheme = entry.target.getAttribute("data-scroll-theme");
            if (nextTheme) {
              document.body.setAttribute("data-theme", nextTheme);
            }
          }
        });
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0
      }
    );

    themedSections.forEach((section) => themeObserver.observe(section));
  }

  // 5. Animated "At a Glance" Counters
  function initGlanceCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) return;

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count") || "0", 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const prefix = el.getAttribute("data-prefix") || "";
          const duration = 1100;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = `${prefix}${current}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          }

          requestAnimationFrame(step);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((el) => countObserver.observe(el));
  }

  // 6. Magnetic Pill Buttons
  function initMagneticButtons() {
    document.querySelectorAll(".btn-pill").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.16;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // 7. Interactive PhotoVault Showcase Simulation (Home Page)
  function initPhotoVaultShowcase() {
    const queryEl = document.getElementById("pv-live-query");
    const statusEl = document.getElementById("pv-live-status");
    const tiles = document.querySelectorAll("#pv-interactive-grid .pv-tile");
    if (!queryEl || !tiles.length) return;

    const scenarios = [
      {
        query: 'search: "architecture & daylight"',
        status: "CLIP Embeddings · 3 matches (12ms)",
        activeIndices: [0, 3, 6]
      },
      {
        query: "scan: duplicate hash clusters",
        status: "SHA-256 + Perceptual Hash · 2 duplicates isolated",
        activeIndices: [1, 2]
      },
      {
        query: "verify: library integrity & backup",
        status: "Health Check 100% · 0 corrupted frames",
        activeIndices: [4, 5, 7]
      }
    ];

    let index = 0;

    function applyScenario(s) {
      queryEl.textContent = s.query;
      if (statusEl) statusEl.textContent = s.status;
      tiles.forEach((tile, idx) => {
        tile.classList.toggle("is-active", s.activeIndices.includes(idx));
      });
    }

    applyScenario(scenarios[0]);

    const intervalId = setInterval(() => {
      index = (index + 1) % scenarios.length;
      applyScenario(scenarios[index]);
    }, 3200);

    // Allow manual hover interaction on tiles
    tiles.forEach((tile) => {
      tile.addEventListener("mouseenter", () => {
        tiles.forEach((t) => t.classList.remove("is-active"));
        tile.classList.add("is-active");
      });
    });

    window.addEventListener("beforeunload", () => clearInterval(intervalId));
  }

  function init() {
    initPageLoad();
    initStickyHeader();
    initScrollReveals();
    initThemeSwitcher();
    initGlanceCounters();
    initMagneticButtons();
    initPhotoVaultShowcase();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
