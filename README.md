# طلسم جفر جنریٹر — Talism Jafar Generator

Free web tool for classic Ilm-e-Jafar calculations:
enter Talib and Matloob names (with mothers' names), select the purpose,
and get per-letter Abjad-e-Qamri breakdown, Satr-e-Asasi, Takseer rows and a 3x3 / 4x4 Loh grid.

**Live (GitHub Pages):** https://farrakhimtiaz74.github.io/talism-jafar-generator/
**Repo:** https://github.com/farrakhimtiaz74/talism-jafar-generator
**Account:** farrakhimtiaz74 (registered with farrakhimtiaz740@gmail.com — the email was already associated with this existing GitHub account, so no new account was created on 2026-11-06)
**Poster:** https://farrakhimtiaz74.github.io/talism-jafar-generator/poster.html

## Version 2 — methods (published sources, honestly stated)
- **Takseer:** both classic documented types — Sadr-o-Muakhkhar and Muakhkhar-o-Sadr (per published Takseer-e-Jafar rules, KazSoft manual).
- **Istikhara:** Mustahsila-e-Qurani (Babar Sultan Qadri, via RoohaniAloom) — question's Abjad total divided by 114 for the Surah, then by that Surah's ayat count for the Ayat. Verified against the published worked example: total 1960 → Surah 22 Al-Hajj → Ayat 10, exactly reproduced by this tool.
- The specific book arrangement of Abu Al-Hasan (Rohani Mufti) is NOT claimed or reproduced.

## Version 3 (2026-11-06)
- **5 languages** — Urdu, Roman Urdu, English, Arabic, Hindi: full interface (84 translated strings each, verified), auto RTL/LTR, choice saved. Long guide text in Urdu + English.
- **5 themes** — Classic Green+Gold, Professional Blue, Royal Purple+Gold, Amber Noir, Light Cream; saved per device.
- Result image card PNG, Print/PDF, on-screen Urdu keyboard, font-size slider, Takhlees + clean non-Abjad options, name Mizaj (traditional 4-element letter groups), saved name profiles, example/clear, daily Wazifa card, contact link.

## Features
- Urdu RTL, mobile-first, dark green + gold theme, PWA (installable, offline)
- Per-letter Abjad breakdown for every name + purpose
- 8 purposes, Takseer lines up to 100, Loh 3x3 and 4x4 with PNG download
- Tabs: Jafar Loh/Takseer · Qurani Istikhara · Rohani Ilaj guidance
- Last 5 results saved in the browser (localStorage), copy / TXT / WhatsApp share
- Urdu guide section with full Abjad table + FAQ schema
- 100% in-browser — names are never uploaded anywhere
- For traditional / rohani guidance only — no result is guaranteed

## Tech
Static files only (index.html, poster.html, manifest, service worker, icons) — no build, no server, no Netlify. Hosted on GitHub Pages from this repo.

By Farrakh Tools.
