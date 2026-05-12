---
layout: page
title: "Tags"
description: "Browse posts by tag."
permalink: /tags/
---

# Tag Index

<div class="tags-cloud">
{% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
{% for tag in all_tags %}
  <a href="#{{ tag }}" class="tag-chip">{{ tag }}</a>
{% endfor %}
</div>

{% for tag in all_tags %}
<div class="tag-section" id="{{ tag }}">
  <h2 class="tag-section__heading">{{ tag }}</h2>
  <ul class="tag-section__list">
    {% for post in site.posts %}
      {% if post.tags contains tag %}
      <li class="tag-section__item">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="tag-date">{{ post.date | date: "%Y.%m.%d" }}</span>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
{% endfor %}
