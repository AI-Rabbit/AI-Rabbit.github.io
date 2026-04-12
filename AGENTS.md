# AGENTS.md

## Project Overview

This is an academic homepage for Xilong Pei (裴熙隆) - a static website built with vanilla HTML, CSS, and JavaScript. No build tools, frameworks, or package managers are used.

---

## Build, Lint, and Test Commands

### Local Development
- **Serve locally**: Use any static file server (e.g., `npx serve`, `python -m http.server 8000`, or VS Code Live Server)
- **No build step required**: This is a pure static site - edit files directly and refresh browser

### Validation
- **HTML validation**: [W3C Validator](https://validator.w3.org/) - paste `index.html` content
- **CSS validation**: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - paste `style.css` content
- **JavaScript linting**: No linting configured - manually review for syntax errors
- **Browser testing**: Test in Chrome, Firefox, Safari, and Edge

---

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.)
- Include `lang` attribute on `<html>` element for i18n
- Use `data-i18n` attributes for internationalized text elements
- Include `aria-label` on interactive elements without visible text
- External resources (fonts) loaded via Google Fonts with `rel="preconnect"`
- Script loaded at end of `<body>`

### CSS
- **CSS Custom Properties**: All colors/fonts defined in `:root` block at top of `style.css`
- **Naming**: BEM-like naming convention (e.g., `.hero-inner`, `.pub-item`, `.entry-header`)
- **Font stacks**:
  - Display: `'Playfair Display', 'Georgia', serif`
  - Body: `'Source Serif 4', 'Georgia', serif`
  - Mono: `'JetBrains Mono', 'Consolas', monospace`
- **Animations**: Use `cubic-bezier(0.16, 1, 0.3, 1)` for smooth entrance animations
- **Responsive breakpoints**: 768px (tablet), 480px (mobile)
- **Print styles**: Include `@media print` rules for clean printing
- No CSS preprocessors - vanilla CSS only

### JavaScript
- **i18n system**: `i18nData` object with `zh` and `en` keys; `applyLang()` function for switching
- **DOM queries**: Use `querySelector`/`querySelectorAll` with class/ID selectors
- **Event handling**: Use `addEventListener` pattern; check element existence before attaching
- **Scroll handling**: Use `requestAnimationFrame` for scroll-linked effects (debounced with `ticking` flag)
- **Intersection Observer**: Used for scroll-reveal animations on sections
- **No external dependencies**: Pure vanilla JS, no libraries
- **Variable naming**: camelCase for variables and functions
- **Local storage**: Language preference stored as `lang` key

---

## File Structure

```
├── index.html     # Main HTML page with embedded i18n content
├── style.css      # All styles with CSS custom properties
├── script.js      # i18n, scroll effects, publication filtering
├── images/        # Static images (profile photo, etc.)
├── README.md      # Project documentation
└── AGENTS.md      # This file
```

---

## Key Conventions

### Internationalization (i18n)
- All visible text uses `data-i18n` attribute matching keys in `i18nData` object
- Language stored in `localStorage` as `lang` (values: `'en'`, `'zh'`)
- `data-lang` attribute on `<html>` reflects current language
- Chinese locale uses `lang="zh-CN"`, English uses `lang="en"`

### Publication Filtering
- Filter buttons use `data-filter` attribute (`all`, `first`, `journal`, `conference`)
- Publication items use `data-type` attribute combining filters (e.g., `"first journal"`)
- Hidden items get `.hidden` class (CSS: `display: none`)

### Accessibility
- Use semantic HTML elements
- Include `aria-label` on icon-only buttons/links
- External links use `target="_blank" rel="noopener"`
- Smooth scroll via `scroll-behavior: smooth` on `html`

---

## Working with This Codebase

### Making Changes
1. Edit `index.html`, `style.css`, or `script.js` directly
2. Refresh browser to see changes
3. No build step required

### Adding Publications
Add new `<li class="pub-item ...">` in the `pub-list` with appropriate `data-type` attribute.

### Modifying i18n
1. Update `i18nData.zh` and `i18nData.en` objects in `script.js`
2. Add corresponding `data-i18n` attributes to HTML elements
3. Update Chinese content in HTML directly if not using i18n system

### CSS Modifications
- Add new variables to `:root` for consistent theming
- Follow existing BEM-like naming pattern
- Use existing animation curves (`cubic-bezier(0.16, 1, 0.3, 1)`)

---

## Restrictions

- **No npm/node**: Do not add package.json or node_modules
- **No frameworks**: Pure vanilla HTML/CSS/JS only
- **No build tools**: No webpack, vite, or similar
- **No TypeScript**: Use vanilla JavaScript
- **No CSS preprocessors**: Plain CSS only (no SCSS/Less)
