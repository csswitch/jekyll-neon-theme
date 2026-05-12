---
layout: page
title: "Archive"
description: "All posts."
permalink: /archive/
---

# Signal Archive

<div class="section-title">All Transmissions</div>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<h2>{{ year.name }}</h2>
<ul class="archive-list">
  {% for post in year.items %}
  <li class="archive-list__item">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="archive-list__date">{{ post.date | date: "%m.%d" }}</span>
  </li>
  {% endfor %}
</ul>
{% endfor %}
