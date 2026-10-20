/* ==========================================================================
   BRAINCEL — STARTUP PROTOTYPE 2.0 APPLICATION SCRIPT (scripts/app.js)
   ========================================================================== */

(function () {
  "use strict";

  // Embedded fallback data so index.html works identically via file:// and HTTP servers
  const FALLBACK_DATA = {
    services: [
      {
        id: "svc-websites",
        tag: "Web & Design",
        title: "Moderne, mobile Websites",
        description:
          "Schnelle, klare Websites und übersichtliche One-Pager – perfekt abgestimmt auf Smartphones, Desktop und eine unkomplizierte Kontaktaufnahme durch Ihre Kunden.",
        highlights: [
          "Mobiloptimiert für Smartphone & Tablet",
          "Schnelle Ladezeiten & klares Design",
          "Auf Wunsch als kompakter One-Pager"
        ]
      },
      {
        id: "svc-google",
        tag: "Lokale Sichtbarkeit",
        title: "Google-Profile & Lokales SEO",
        description:
          "Wir richten Ihr Google-Unternehmensprofil sauber ein, pflegen Öffnungszeiten, Fotos sowie Leistungen und sorgen dafür, dass Kunden Sie in Darmstadt und Umgebung sofort finden.",
        highlights: [
          "Google-Unternehmensprofil einrichten & pflegen",
          "Lokales SEO für Darmstadt (+15 km)",
          "Struktur für echte Kundenbewertungen"
        ]
      },
      {
        id: "svc-portals",
        tag: "Digitale Präsenz",
        title: "Einheitliche Firmendaten",
        description:
          "Keine widersprüchlichen Öffnungszeiten oder veralteten Telefonnummern mehr: Wir bringen Ihre Kontaktdaten über alle wichtigen Portale und Kartendienste hinweg auf einen Stand.",
        highlights: [
          "Konsistente Adressen & Öffnungszeiten",
          "Abgleich auf Karten- & Branchenportalen",
          "Verlässliche Erreichbarkeit für Kunden"
        ]
      },
      {
        id: "svc-ai",
        tag: "Automatisierung & Extras",
        title: "Digitale Extras & KI-Werkzeuge",
        description:
          "Wo es im Alltag wirklich Zeit spart, ergänzen wir einfache digitale Werkzeuge: von strukturierten Anfrageformularen und Online-Terminbuchung bis zu maßgeschneiderten KI-Assistenten.",
        highlights: [
          "Einfache Online-Termin- & Vorbestellsysteme",
          "Strukturierte digitale Kundenanfragen",
          "Praktische KI-Helfer zur Büro-Entlastung"
        ]
      }
    ],
    founders: [
      {
        id: "hermann",
        name: "Hermann [Nachname]",
        role: "Co-Founder · Software Engineering & Web Systems",
        education: "5. Semester B.Sc. Informatik · TU Darmstadt",
        location: "Darmstadt",
        avatar: "https://avatars.githubusercontent.com/u/190851453?v=4",
        bio: "Informatik-Student an der TU Darmstadt mit Schwerpunkt auf moderner Web-Architektur, plattformübergreifenden Anwendungen und sauberem Software-Design. Begleitet Projekte bei Braincel persönlich vom ersten Gespräch vor Ort bis zur fertigen technischen Umsetzung.",
        skills: [
          "TypeScript & JavaScript",
          "Flutter & Cross-Platform",
          "Java & Algorithmen",
          "Moderne Web-UIs",
          "Google Business & Local SEO"
        ],
        links: [
          {
            label: "GitHub (@WillyderBezwinger123)",
            url: "https://github.com/WillyderBezwinger123"
          },
          {
            label: "E-Mail",
            url: "mailto:hermann@braincel.de"
          }
        ]
      },
      {
        id: "amine",
        name: "Amine Cheikhrouhou",
        role: "Co-Founder · Full-Stack Web & Applied AI",
        education: "5. Semester B.Sc. Informatik · TU Darmstadt",
        location: "Darmstadt",
        avatar: "https://avatars.githubusercontent.com/u/139517320?v=4",
        bio: "Informatik-Student an der TU Darmstadt mit Fokus auf Full-Stack-Webentwicklung, angewandte Künstliche Intelligenz und intelligente Prozess-Automatisierung. Entwickelt bei Braincel schnelle Web-Anwendungen und praktische KI-Werkzeuge, die echten Arbeitsaufwand reduzieren.",
        skills: [
          "TypeScript & Next.js",
          "Python & FastAPI",
          "KI-Agenten & Automatisierung",
          "PyTorch & Machine Learning",
          "C# & Desktop-Systeme"
        ],
        links: [
          {
            label: "GitHub (@AmineChr54)",
            url: "https://github.com/AmineChr54"
          },
          {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/aminechr/"
          },
          {
            label: "E-Mail",
            url: "mailto:amine@braincel.de"
          }
        ]
      }
    ],
    projects: [
      {
        id: "proj-taskcal",
        title: "TaskCal",
        author: "Hermann",
        authorId: "hermann",
        category: "Cross-Platform App",
        stack: ["Flutter", "Dart", "Firebase", "Windows & Android"],
        description:
          "Plattformübergreifende Aufgaben- und Kalender-Applikation für Windows und Android mit Echtzeit-Cloud-Synchronisation und fokussierter Tagesplanung.",
        githubUrl: "https://github.com/WillyderBezwinger123/taskcal",
        liveUrl: ""
      },
      {
        id: "proj-forest-vitality",
        title: "ForestVitality",
        author: "Amine",
        authorId: "amine",
        category: "Geospatial Web & AI",
        stack: ["TypeScript", "Sentinel-2 API", "Interactive Maps", "Vercel"],
        description:
          "Satellitengestütztes Monitoring-System zur Echtzeit-Analyse von Vegetationsindizes und Waldgesundheit mit interaktiven Kartenvisualisierung und REST-APIs.",
        githubUrl: "https://github.com/AmineChr54/ForestVitality",
        liveUrl: "https://forest-vitality.vercel.app"
      },
      {
        id: "proj-photovault",
        title: "PhotoVault",
        author: "Hermann",
        authorId: "hermann",
        category: "Desktop & On-Device AI",
        stack: ["Desktop App", "On-Device AI", "Deduplication", "Backup"],
        description:
          "Desktop-Anwendung zum Organisieren, Bereinigen von Duplikaten, Prüfen der Datei-Integrität und sicheren Speichern großer Fotobibliotheken inklusive lokaler KI-Bildsuche.",
        githubUrl: "https://github.com/WillyderBezwinger123/PhotoVault",
        liveUrl: ""
      },
      {
        id: "proj-hyperdraft",
        title: "HyperDraft",
        author: "Amine",
        authorId: "amine",
        category: "AI Productivity",
        stack: ["TypeScript", "LLM Copilot", "NLP", "Web UI"],
        description:
          "KI-gestützter E-Mail-Assistent, der lange Nachrichtenverläufe präzise zusammenfasst und in Sekunden kontextbewusste Antworten im gewünschten Tonfall entwirft.",
        githubUrl: "https://github.com/AmineChr54/HyperDraft",
        liveUrl: ""
      },
      {
        id: "proj-flash-gemini",
        title: "Flash & Flash-Gemini",
        author: "Hermann",
        authorId: "hermann",
        category: "AI Workflow Engine",
        stack: ["TypeScript", "Gemini API", "Modular Architecture"],
        description:
          "Schnelle, modular aufgebaute TypeScript-Anwendung und Core-Engine für strukturierte KI-Generierung und reaktionsschnelle Automatisierungs-Workflows.",
        githubUrl: "https://github.com/WillyderBezwinger123/flash-gemini",
        liveUrl: ""
      },
      {
        id: "proj-automeldung",
        title: "AutoMeldung",
        author: "Amine",
        authorId: "amine",
        category: "Workflow Automation",
        stack: ["Python", "Flet GUI", "PDF Automation", "Excel"],
        description:
          "Desktop-Werkzeug zur vollautomatischen Generierung, Zusammenführung und Aufbereitung von PDF-Dokumenten und Formularen direkt aus Excel-Tabellen.",
        githubUrl: "https://github.com/AmineChr54/AutoMeldung",
        liveUrl: ""
      },
      {
        id: "proj-algorithms",
        title: "Algorithmic Systems & Data Structures",
        author: "Hermann",
        authorId: "hermann",
        category: "Core Computer Science",
        stack: ["Java", "Algorithms", "Data Structures", "Complexity"],
        description:
          "Strukturierte Sammlung laufzeit- und speicheroptimierter Algorithmen- und Datenstruktur-Implementierungen in Java.",
        githubUrl: "https://github.com/WillyderBezwinger123/neetcode-submissions",
        liveUrl: ""
      },
      {
        id: "proj-umbra-rl",
        title: "Umbra & RL Autonomous Racing",
        author: "Amine",
        authorId: "amine",
        category: "Systems & Deep RL",
        stack: ["C#", "Python", "PyTorch", "PPO / DQN"],
        description:
          "Sandboxed OLED-Desktop-Widgets in C# mit Echtzeit-Daten sowie eine autonome Rennwagen-Simulation auf Basis von Deep Reinforcement Learning (PyTorch & ONNX).",
        githubUrl: "https://github.com/AmineChr54/RL-autonomous-racing",
        liveUrl: ""
      }
    ]
  };

  let siteData = FALLBACK_DATA;
  let activeFilter = "all";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatNameWithPlaceholder(name) {
    const safe = escapeHtml(name);
    return safe.replace(/\[([^\]]+)\]/g, '<span class="placeholder-highlight">[$1]</span>');
  }

  function renderServices(services) {
    const container = document.getElementById("services-grid");
    if (!container || !Array.isArray(services)) return;

    container.innerHTML = services
      .map((svc) => {
        const highlights = (svc.highlights || [])
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");
        return `
          <article class="service-card">
            <div>
              <span class="service-tag">${escapeHtml(svc.tag)}</span>
              <h3 class="service-title">${escapeHtml(svc.title)}</h3>
              <p class="service-desc">${escapeHtml(svc.description)}</p>
            </div>
            <ul class="service-highlights">
              ${highlights}
            </ul>
          </article>
        `;
      })
      .join("");
  }

  function renderFounders(founders) {
    const container = document.getElementById("founders-grid");
    if (!container || !Array.isArray(founders)) return;

    container.innerHTML = founders
      .map((person) => {
        const skills = (person.skills || [])
          .map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`)
          .join("");
        const links = (person.links || [])
          .map((link) => {
            const isExternal = link.url.startsWith("http");
            const attrs = isExternal ? 'target="_blank" rel="noopener"' : "";
            return `<a href="${escapeHtml(link.url)}" class="founder-link" ${attrs}>${escapeHtml(link.label)} ↗</a>`;
          })
          .join("");

        return `
          <article class="founder-card">
            <div>
              <div class="founder-top">
                <img src="${escapeHtml(person.avatar)}" alt="${escapeHtml(person.name)}" class="founder-avatar" loading="lazy">
                <div>
                  <h3 class="founder-name">${formatNameWithPlaceholder(person.name)}</h3>
                  <div class="founder-role">${escapeHtml(person.role)}</div>
                  <div class="founder-edu">${escapeHtml(person.education)}</div>
                </div>
              </div>
              <p class="founder-bio" style="margin-top: 18px;">${escapeHtml(person.bio)}</p>
            </div>
            <div>
              <div class="founder-skills" style="margin-bottom: 16px;">
                ${skills}
              </div>
              <div class="founder-links">
                ${links}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderProjects(projects, filter) {
    const container = document.getElementById("projects-grid");
    if (!container || !Array.isArray(projects)) return;

    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.authorId === filter);

    container.innerHTML = filtered
      .map((proj) => {
        const stackTags = (proj.stack || [])
          .map((tag) => `<span class="stack-tag">${escapeHtml(tag)}</span>`)
          .join("");

        const liveLink = proj.liveUrl
          ? `<a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener" class="project-link">Live Demo ↗</a>`
          : "";

        const githubLink = proj.githubUrl
          ? `<a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>`
          : "";

        return `
          <article class="project-card">
            <div>
              <div class="project-meta">
                <span class="project-category">${escapeHtml(proj.category)}</span>
                <span class="project-author">${escapeHtml(proj.author)}</span>
              </div>
              <h3 class="project-title">${escapeHtml(proj.title)}</h3>
              <p class="project-desc">${escapeHtml(proj.description)}</p>
            </div>
            <div class="project-footer">
              <div class="project-stack">${stackTags}</div>
              <div class="project-links">
                ${liveLink}
                ${githubLink}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function setupProjectFilters() {
    const filterContainer = document.getElementById("project-filters");
    if (!filterContainer) return;

    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;

      activeFilter = btn.getAttribute("data-filter") || "all";
      filterContainer.querySelectorAll(".filter-pill").forEach((el) => {
        el.classList.toggle("active", el === btn);
      });

      renderProjects(siteData.projects, activeFilter);
    });
  }

  function setupMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("nav-links");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const contact = String(formData.get("contact") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const subject = encodeURIComponent(
        `Anfrage über Braincel Website — ${name}${company ? ` (${company})` : ""}`
      );
      const body = encodeURIComponent(
        `Name: ${name}\nBetrieb / Organisation: ${company || "-"}\nKontakt (E-Mail / Telefon): ${contact}\n\nNachricht:\n${message}`
      );

      // Open default email client with pre-filled message to kontakt@braincel.de
      window.location.href = `mailto:kontakt@braincel.de?subject=${subject}&body=${body}`;

      feedback.textContent =
        "Vielen Dank! Ihr E-Mail-Programm wurde mit Ihrer Nachricht an kontakt@braincel.de geöffnet. Wir melden uns persönlich bei Ihnen.";
      feedback.classList.add("visible");
      form.reset();
    });
  }

  async function init() {
    setupProjectFilters();
    setupMobileMenu();
    setupContactForm();

    try {
      const response = await fetch("data/site-data.json", { cache: "no-store" });
      if (response.ok) {
        const json = await response.json();
        siteData = Object.assign({}, FALLBACK_DATA, json);
      }
    } catch (_) {
      // Fallback to embedded data when opened directly via file://
    }

    renderServices(siteData.services);
    renderFounders(siteData.founders);
    renderProjects(siteData.projects, activeFilter);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
