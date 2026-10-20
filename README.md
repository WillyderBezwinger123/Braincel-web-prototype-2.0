# Braincel — Web Prototype 2.0

Offizielle Startup-Website für **Braincel** (**Hermann & Amine**, B.Sc. Informatik an der **TU Darmstadt**).

Wir helfen lokalen Betrieben in Darmstadt und Umgebung (+15 km), online besser gefunden zu werden und echte Alltagsprobleme mit modernen Websites, gepflegten Google-Profilen und praktischen KI-Werkzeugen zu lösen – schnell, persönlich und am Anfang kostenlos.

---

## Überblick & Struktur

Diese Version (`2.0`) ist als klarer, progressiver Startup-One-Pager im Clean Light Mode gestaltet – reduziert auf die wichtigsten Informationen für Interessenten und potenzielle Kunden, **ohne interne CRM-/Workflow-Notizen und ohne vertrauliche Kunden-Demos**:

1. **Hero & Wie wir arbeiten (`#top`)** — Klare Positionierung für Darmstadt (+15 km) und unsere 3 Grundsätze (*Erst verstehen, dann bauen*, *Schnell und praktisch*, *Am Anfang kostenlos*).
2. **Was wir bieten (`#leistungen`)** — Moderne, mobile Websites, Google-Profile & Lokales SEO, einheitliche Firmendaten und digitale Extras / KI-Werkzeuge + transparentes Preismodell.
3. **Über uns (`#ueber-uns`)** — Kurzprofile von **Hermann** und **Amine Cheikhrouhou** (5. Semester B.Sc. Informatik @ TU Darmstadt).
4. **Unsere Projekte (`#projekte`)** — Kuratierte Auswahl aus 8 eigenen Software-, Web- und KI-Projekten (filterbar nach *Alle*, *Hermann*, *Amine*).
5. **Kontakt (`#kontakt`)** — Direkte Kontaktwege + einfaches, einzelnes Kontaktformular.
6. **Impressum & Datenschutz (`#impressum`)** — Vorbereitetes Impressum (§ 5 DDG) und DSGVO-Hinweise mit markierten Platzhaltern für Nachname, Anschrift und Telefonnummer.

---

## Projektstruktur

```text
├── index.html            # Semantisches Startup-Layout (DE, Clean Light Mode)
├── styles/
│   └── main.css          # Progressiver Startup-Style (Light Mode, Responsive)
├── scripts/
│   └── app.js            # Dynamisches Rendering, Projekt-Filter & Kontaktformular
├── data/
│   └── site-data.json    # Zentrale Inhaltsdaten (aus dem Braincel Obsidian Vault)
└── vercel.json           # Deployment-Konfiguration für Vercel
```

---

## Platzhalter vor Live-Gang ausfüllen

Vor der Veröffentlichung einfach in `index.html` und `data/site-data.json` nach den gelb hervorgehobenen Platzhaltern suchen und ersetzen:
- `[Nachname]` / `[Nachname eintragen]` (Hermanns Nachname)
- `[Straße und Hausnummer eintragen]` (Anschrift für das Impressum)
- `[+49 151 XXXXXXXX eintragen]` (Telefonnummer für Kontakt & Impressum)
