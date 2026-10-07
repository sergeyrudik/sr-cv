# Sergei Rudik — portfolio

A lightweight, static Jekyll portfolio for https://rudik.dev, compatible with GitHub Pages. No frontend build pipeline, external theme, web fonts, icon libraries, or JavaScript UI dependencies.

The English portfolio stays at `/`; the complete Russian version is at `/ru/`. The two pages have reciprocal `hreflang` links and sitemap entries. `assets/language.js` shares the `lang` cookie with the QA and Mentor sites and only suggests another language on direct visits; it never redirects crawlers or visitors automatically. Cross-site links point to the matching language URL.

## Editing

- `_config.yml`: profile, experience, education, skills, social links, and analytics ID.
- `_layouts/portfolio.html`: page structure and short editorial copy.
- `assets/main.scss`: responsive styles (the two front-matter lines are required for Jekyll to produce `assets/main.css`).
- `images/profile.jpg`: portrait.
- `CNAME`: custom domain.

Job descriptions use native HTML disclosure controls. All text remains in the generated HTML. Navigation and disclosures work with JavaScript disabled; reduced-motion preferences and keyboard focus are supported. The existing Google Analytics integration is the only external script.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. For a production build, run `bundle exec jekyll build`.

Deployment continues to use the repository’s existing GitHub Pages settings. This redesign does not add a custom Actions workflow.
