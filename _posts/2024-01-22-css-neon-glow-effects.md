---
layout: post
title: "CSS Neon Glow Effects — No Images, Just box-shadow"
date: 2024-01-22
tags: [css, design, tutorial, animation]
description: "How to build convincing neon glow effects entirely with CSS box-shadow — stacked radii, rgba opacity, and hover transitions."
---

Real neon signs glow because gas plasma emits light in all directions. We can fake this with CSS using nothing but `box-shadow` — stacked at two radii with different opacities.

## The Two-Layer Glow Formula

```css
.neon-element {
  box-shadow:
    0 0 8px rgba(224, 64, 251, 0.6),   /* tight inner glow */
    0 0 24px rgba(224, 64, 251, 0.3);  /* wide outer halo */
}
```

The key insight: the inner layer (8px) is high opacity for crispness; the outer layer (24px) is low opacity for the soft halo. Together they read as a real neon bloom.

## Animating the Glow

For hover transitions, always animate `box-shadow` between two defined states:

```css
.btn {
  box-shadow:
    0 0 8px rgba(224, 64, 251, 0.4),
    0 0 20px rgba(224, 64, 251, 0.15);
  transition: box-shadow 0.2s ease;
}

.btn:hover {
  box-shadow:
    0 0 12px rgba(224, 64, 251, 0.9),
    0 0 40px rgba(224, 64, 251, 0.5);
}
```

Do NOT animate `filter: drop-shadow` — it triggers GPU compositing on every frame.

## Text Glow

For text, use `text-shadow`:

```css
.neon-title {
  color: #e040fb;
  text-shadow:
    0 0 8px rgba(224, 64, 251, 0.8),
    0 0 20px rgba(224, 64, 251, 0.4);
}
```

Keep text-shadow radius small (8–12px) — wide text glow looks muddy.

## The Perspective Grid

The Neon Noir background grid is a CSS gradient with a directional mask:

```css
body::before {
  background-image:
    linear-gradient(rgba(224, 64, 251, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 64, 251, 0.07) 1px, transparent 1px);
  background-size: 60px 60px;

  /* Fade toward the top — floor perspective illusion */
  mask-image: linear-gradient(
    to top,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.1) 40%,
    transparent 70%
  );
}
```

The mask makes the grid dense near the "floor" and invisible at the "horizon" — no JavaScript required.

## Glitch with clip-path

The glitch animation uses `clip-path: polygon()` to slice the element into horizontal strips:

```css
@keyframes glitch {
  0%   { clip-path: polygon(0 0%, 100% 0%, 100% 30%, 0 30%); }
  50%  { clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%); }
  100% { clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%); }
}

.glitch::before {
  content: attr(data-text);
  color: cyan;
  animation: glitch 0.4s steps(1) forwards;
  transform: translateX(-2px);
}
```

Run at `steps(1)` — continuous easing looks wrong. Glitch should snap between frames.
