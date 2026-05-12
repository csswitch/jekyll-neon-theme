# Neon Noir — Cyberpunk Jekyll Theme

[![MIT License](https://img.shields.io/badge/license-MIT-e040fb.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-4.3-e040fb.svg)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-compatible-e040fb.svg)](https://pages.github.com)

> A cyberpunk-inspired Jekyll theme with perspective grid, neon glow effects, scanline overlay, glitch animations, and electric magenta/cyan accents.

**[Live Demo →](https://csswitch.github.io/jekyll-neon-theme)**

---

## ✨ Features

- 🌆 **Perspective grid** — CSS gradient with mask-image floor illusion, zero images
- ⚡ **Neon glow** — stacked `box-shadow` bloom on every interactive element
- 📺 **CRT scanlines** — `repeating-linear-gradient` across viewport
- ✂️ **Glitch animation** — `clip-path` glitch on post titles
- 🎨 **4 accent modes** — magenta, cyan, amber, green
- 🏷️ **Tag system** — outlined chip tags + filterable archive
- 📱 **Fully responsive** — mobile-first nav toggle
- ⚡ **Zero dependencies** — vanilla JS only
- 🐙 **GitHub Pages compatible**

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_BLOG.git
cd YOUR_BLOG
bundle install
bundle exec jekyll serve --livereload
```

## ⚙️ Configuration

```yaml
neon:
  accent: "magenta"   # magenta | cyan | amber | green
  grid: true          # perspective grid background
  scanlines: true     # CRT scanline overlay
  glitch: true        # glitch animation on load
  particles: true     # floating neon particles
```

## 📁 Structure

```
jekyll-neon-theme/
├── _config.yml
├── _layouts/
│   ├── default.html   ← scanlines, grid, nav, footer
│   ├── home.html      ← featured card + post grid
│   ├── post.html      ← glitch title + post body
│   └── page.html
├── _sass/
│   ├── _variables.scss   ← palette, glow mixins
│   ├── _base.scss        ← grid, scanlines, typography
│   ├── _layout.scss      ← nav, progress bar, footer
│   └── _components.scss  ← cards, tags, glitch, pagination
├── assets/
│   ├── css/main.scss
│   └── js/neon.js
└── _posts/
```

## 📄 License

MIT © [csswitch](https://github.com/csswitch)

---

Made with 💜 by [csswitch](https://github.com/csswitch) — distinctive Jekyll themes for developers.
