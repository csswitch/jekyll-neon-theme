---
layout: post
title: "Welcome to Neon Noir — A Cyberpunk Jekyll Theme"
date: 2024-01-15
tags: [design, jekyll, getting-started]
description: "Everything you need to know to configure and run Neon Noir — the cyberpunk Jekyll theme with perspective grid, glitch effects, and electric neon glows."
---

**Neon Noir** is a cyberpunk-inspired Jekyll theme — deep darkness, electric glow, and a faint perspective grid that pulls the eye into the screen.

## Design Language

Every design decision comes from the same aesthetic source — neon signs, rain-slicked streets, CRT monitors:

- **Perspective grid** — the background is a pure CSS grid with a bottom-heavy opacity mask, creating a subtle vanishing-point floor
- **Glow on everything** — hover any card, any link, any button: `box-shadow` with `rgba` at stacked radii creates a realistic neon bloom
- **Scanlines** — a single `repeating-linear-gradient` at 3px intervals creates the CRT scanline effect
- **Glitch** — post titles use `clip-path: polygon()` with staggered `::before`/`::after` animations at 0.4s

## Configuration

```yaml
neon:
  accent: "magenta"   # magenta | cyan | amber | green
  grid: true          # perspective grid background
  scanlines: true     # CRT scanline overlay
  glitch: true        # clip-path glitch on page load
  particles: true     # floating neon particles
```

## Writing Posts

Add `tags` and `description` to every post for the best presentation:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-01
tags: [javascript, design, tutorial]
description: "A one-sentence description shown in the post card."
---
```

The featured card on the home page always shows the most recent post — no configuration needed.

## Color Accents

The four accent modes shift the dominant color:

| Mode | Primary | Secondary |
|------|---------|-----------|
| `magenta` | `#e040fb` | `#00e5ff` |
| `cyan` | `#00e5ff` | `#e040fb` |
| `amber` | `#ffab00` | `#e040fb` |
| `green` | `#69ff47` | `#00e5ff` |
