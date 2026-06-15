# Mohan Yadav - Personal Portfolio Website

A modern, premium, production-ready personal portfolio website built entirely with HTML5, CSS3, and Vanilla JavaScript. Crafted to make a strong first impression for internship and placement applications.

> Live Demo: [Netlify](https://6a30444375bf9b3b0e9cfc6b--spectacular-zabaione-204682.netlify.app/)  
> Repository: [CodeAlpha_PortfolioWebsite](https://github.com/mohanmohan07811-pixel/CodeAlpha_PortfolioWebsite)

---

## Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [License](#license)

---

## Overview

This portfolio was built as part of the **CodeAlpha Virtual Internship** and serves as a professional online presence for Mohan Yadav, a Computer Science & Engineering student. The design is inspired by modern developer portfolios with a focus on glassmorphism aesthetics, smooth animations, and responsive layouts.

The project uses **zero frameworks**, **zero build tools**, and **zero dependencies** (only Google Fonts and Font Awesome CDN). It loads fast, works offline once cached, and deploys easily to GitHub Pages with a single push.

---

## Live Preview

| Section | Description |
|---------|-------------|
| Hero | Name, animated typing, CTA buttons, floating tech badges |
| About | Bio, education timeline, career goals |
| Skills | 12 tech skills with animated progress bars and category filters |
| Projects | Emergency Blood Connector, Music Player, Image Gallery |
| Experience | Career timeline from 2022 to present |
| Resume | One-click resume download |
| Contact | Working form with validation, email, phone, social links |
| Footer | Navigation links, social icons, copyright |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure, SEO meta tags |
| CSS3 | Design system, glassmorphism, animations, responsive layout |
| Vanilla JavaScript | All interactivity, no frameworks |
| Google Fonts (Inter + JetBrains Mono) | Typography |
| Font Awesome 6.5 | Icons |
| HTML Canvas API | Floating particle background |
| CSS Custom Properties | Design token system (colors, spacing, radii) |
| CSS Grid + Flexbox | Layout |
| IntersectionObserver API | Scroll-triggered animations |
| localStorage API | Theme preference persistence |

---

## Features

### Visual Design
- Glassmorphism cards with blur, border, and shadow effects
- Dark mode (default) and light mode with smooth transition
- Gradient accent system (purple to cyan)
- Inter font for UI text, JetBrains Mono for code and branding
- Custom scrollbar matching the accent color

### Animations
- Loading screen with logo pulse and progress bar
- Floating particle canvas with mouse repulsion and connection lines
- Scroll-reveal animations (fade up, fade left, fade right)
- Staggered reveal delays for grid items
- Typing effect in hero with multiple rotating phrases
- Animated statistics counter on scroll
- Animated skill progress bars triggered on scroll
- Floating badge animation in hero visual
- Scroll-down mouse indicator animation
- Card shimmer effect on hero code card

### Navigation
- Fixed glassmorphism navbar with blur backdrop
- Auto-highlights active section link on scroll
- Smooth scroll to all sections with navbar offset
- Hamburger menu for mobile with animated icon
- Hire Me CTA button in navbar

### Interactivity
- Custom cursor (dot + circle follower) on desktop
- Cursor scales and changes color on hover over interactive elements
- Skill filter buttons (All / Frontend / Backend / Tools)
- Project card hover overlay with GitHub and Live Demo links
- Theme toggle with icon swap and localStorage persistence
- Back to top button that appears after scrolling 400px

### Contact Form
- Client-side validation for name, email, message fields
- Email format validation with regex
- Inline field error messages
- Loading spinner on submit button during async submission
- Success confirmation message after submission

### SEO and Accessibility
- Descriptive `<title>` and `<meta description>`
- Open Graph tags for social sharing
- `author`, `keywords` meta tags
- Semantic HTML5 elements (nav, section, footer, h1-h5)
- `aria-label` on all icon-only buttons and links
- `rel="noopener"` on all external links
- `autocomplete` attributes on form inputs
- `lang="en"` on the HTML element

---

## Project Structure

```
portfolio_codealpha/
|
├── index.html              # Main entry point - all 8 sections
|
├── css/
│   ├── style.css           # Core design system and all component styles
│   ├── animations.css      # Scroll-reveal and micro-animation styles
│   └── responsive.css      # Mobile-first breakpoints (1024px, 768px, 480px)
|
├── js/
│   ├── particles.js        # Canvas particle system (IIFE module)
│   └── main.js             # All portfolio interactivity (IIFE module)
|
├── assets/
│   └── resume.pdf          # Place your resume PDF here
|
└── README.md               # This file
```

### File Responsibilities

#### index.html
- Contains the complete HTML structure for all 8 sections
- Loads Google Fonts, Font Awesome, and all CSS/JS files
- All content (name, bio, projects, links) lives here
- SEO meta tags are in the `<head>`

#### css/style.css
- CSS custom properties (design tokens) for both dark and light themes
- Base reset and body styles
- Layout utilities (.container, .section, .glass-card)
- Button variants (primary, outline, sm, lg, block)
- Section-specific component styles
- Navbar, hero, about, skills, projects, experience, contact, footer

#### css/animations.css
- `.reveal-up`, `.reveal-left`, `.reveal-right` base states and `.visible` transitions
- Staggered transition-delay rules for grid children
- Button loading spinner keyframe
- Project card glow effect
- Shimmer animation for hero code card
- Active navbar dot indicator

#### css/responsive.css
- `@media (max-width: 1024px)` - tablet: single column hero and about
- `@media (max-width: 768px)` - mobile: hamburger nav, stacked layouts
- `@media (max-width: 480px)` - small mobile: full-width buttons
- `@media (hover: none)` - disables custom cursor on touch devices

#### js/particles.js
- Self-contained IIFE module, exposes `ParticleSystem.init()` and `ParticleSystem.setTheme()`
- Uses HTML Canvas API with `requestAnimationFrame`
- Each particle has random position, velocity, radius, and opacity
- Particles are repelled by the mouse cursor within a configurable radius
- Nearby particles are connected with translucent lines
- Theme-aware: particle color changes between dark and light mode

#### js/main.js
- Single IIFE containing all portfolio JavaScript
- Zero global variables, zero external dependencies
- Modules: `initLoader`, `initCursor`, `initNavbar`, `initTyping`, `initScrollReveal`, `initSkillBars`, `initCounters`, `initSkillFilters`, `initBackToTop`, `initTheme`, `initContactForm`, `initSmoothScroll`

---

## Sections

### 1. Hero Section
- Availability badge with animated green pulse dot
- Large name heading with gradient on last name
- Typing effect cycling through: "Full Stack Apps.", "REST APIs.", "Clean UI.", "Real Solutions.", "Open Source."
- Description paragraph
- Two CTA buttons: "View My Work" and "Get In Touch"
- Stats row: 10+ Projects, 3+ Technologies, 100% Dedication (animated counters)
- Code card visual with syntax-highlighted JavaScript snippet
- Floating tech badges: React, Node.js, MongoDB
- Scroll indicator with animated mouse wheel

### 2. About Section
- Profile card with avatar icon, location, degree, and role tags
- Bio paragraphs explaining background and motivation
- Personality tags: Problem Solver, Team Player, Fast Learner, Open Source Enthusiast
- Education timeline:
  - B.Tech CSE (2022-2026) with CGPA
  - Higher Secondary MPC (2020-2022) with percentage
- Download Resume and Let's Talk buttons

### 3. Skills Section
- Category filter buttons: All, Frontend, Backend, Tools
- 12 skill cards in a responsive grid:
  - Frontend: HTML5 (92%), CSS3 (88%), JavaScript (85%), React.js (80%)
  - Backend: Node.js (78%), Express.js (75%), MongoDB (72%), MySQL (68%), Python (74%)
  - Tools: Git (85%), GitHub (88%), Linux/CLI (70%)
- Each card has icon, name, animated progress bar, and percentage

### 4. Projects Section
- Featured project card (spans full width): Emergency Blood Connector
  - MERN stack full-stack application
  - Donor registration, blood request management, JWT auth, geolocation matching
- Music Player card
  - Vanilla JS audio player with playlist and visualizer
- Image Gallery card
  - Masonry layout with lightbox and lazy loading
- All cards have hover overlay with GitHub and Live Demo icon buttons
- "View All on GitHub" button at the bottom

### 5. Experience Section
- Vertical timeline with 4 entries:
  - 2025: Seeking Internship (Open to Work badge)
  - 2024: CodeAlpha Virtual Internship (Completed badge)
  - 2023: Blood Connector full-stack project (Project badge)
  - 2022: Started B.Tech (Education badge)
- Each entry shows company/context, description, and skill tags

### 6. Resume Section
- Full-width CTA card with animated floating resume icon
- Download Resume button linked to `assets/resume.pdf`

### 7. Contact Section
- Left column: email card, phone card, location card, social icon buttons
- Right column: contact form with Full Name, Email, Subject, Message fields
- Form has inline validation, loading state, and success confirmation

### 8. Footer
- Brand column with logo, tagline, and social links
- Navigation links column
- Projects links column
- Copyright line with current year

---

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, no npm, no build tools required

### Local Development

**Option 1 - Open directly:**
```
Open index.html in your browser
```

**Option 2 - Local server (recommended for clean paths):**

Using Python:
```bash
python -m http.server 8080
# Visit http://localhost:8080
```

Using Node.js (if installed):
```bash
npx serve .
# Visit the URL shown in terminal
```

Using VS Code:
- Install the **Live Server** extension
- Right-click `index.html` > Open with Live Server

---

## Customization Guide

### Changing Personal Information

All personal content is in `index.html`. Search for the following and update:

| What to update | Search for |
|---------------|------------|
| Your name | `Mohan Yadav` |
| Email address | `mohanmohan07811@gmail.com` |
| Phone number | `+91 62818 85318` |
| GitHub URL | `https://github.com/mohanmohan07811-pixel` |
| LinkedIn URL | `https://www.linkedin.com/in/mohan-yadav-8b077a413` |
| Twitter URL | `https://twitter.com/mohanyadav` |
| Location | `India` |
| CGPA | `7.8/10` |
| Degree years | `2022 - 2026` |

### Changing Colors

Open `css/style.css` and edit the CSS custom properties under `:root`:

```css
:root {
  --accent-primary: #7c3aed;    /* Main purple accent */
  --accent-secondary: #06b6d4;  /* Cyan secondary accent */
  --accent-gradient: linear-gradient(135deg, #7c3aed, #06b6d4);
}
```

Popular alternative accent colors:
- Blue/Indigo: `#3b82f6` / `#6366f1`
- Green/Teal: `#10b981` / `#14b8a6`
- Orange/Pink: `#f97316` / `#ec4899`

### Changing the Font

In `index.html`, replace the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

In `css/style.css`, update:
```css
--font-sans: 'Your Font', -apple-system, sans-serif;
```

### Adding a Profile Photo

Replace the icon placeholder in the About section with a real image:

```html
<!-- Find this in index.html -->
<div class="image-placeholder">
  <i class="fas fa-user-astronaut"></i>
</div>

<!-- Replace with: -->
<img src="assets/profile.jpg" alt="Mohan Yadav" class="profile-photo" />
```

Add this to `css/style.css`:
```css
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-primary);
}
```

### Adding/Removing Skill Cards

Each skill card in `index.html` follows this pattern:
```html
<div class="skill-card glass-card reveal-up" data-category="frontend">
  <div class="skill-icon"><i class="fab fa-react"></i></div>
  <h4>React.js</h4>
  <div class="skill-bar"><div class="skill-fill" data-width="80"></div></div>
  <span class="skill-percent">80%</span>
</div>
```

- `data-category` can be: `frontend`, `backend`, or `tools`
- `data-width` sets the fill percentage (0-100)
- Find icons at [fontawesome.com/icons](https://fontawesome.com/icons)

### Adding a New Project

Copy and paste this template into the projects grid in `index.html`:
```html
<div class="project-card glass-card reveal-up">
  <div class="project-image">
    <div class="project-img-placeholder" style="background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15)); color: var(--accent-primary);">
      <i class="fas fa-code"></i>
    </div>
    <div class="project-overlay">
      <div class="overlay-links">
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener" class="overlay-btn">
          <i class="fab fa-github"></i>
        </a>
        <a href="YOUR_DEMO_URL" class="overlay-btn">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="project-info">
    <div class="project-tags">
      <span class="ptag">React</span>
      <span class="ptag">Node.js</span>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-desc">Brief description of the project and what it does.</p>
    <div class="project-links">
      <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="YOUR_DEMO_URL" class="btn btn-sm btn-primary">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
    </div>
  </div>
</div>
```

### Changing Typing Phrases

In `js/main.js`, find `initTyping()` and edit the `phrases` array:

```javascript
const phrases = [
  'Full Stack Apps.',
  'REST APIs.',
  'Clean UI.',
  'Real Solutions.',
  'Open Source.',
];
```

### Changing Particle Behavior

In `js/particles.js`, edit the `config` object:

```javascript
const config = {
  count: 60,              // Number of particles
  maxRadius: 2.5,         // Largest particle size
  minRadius: 0.5,         // Smallest particle size
  speed: 0.4,             // Movement speed
  connectDistance: 130,   // Max distance for connection lines
  mouseRadius: 120,       // Mouse repulsion radius
};
```

---

## Deployment

### GitHub Pages (Free, Recommended)

1. Push all files to a GitHub repository
2. Go to repository **Settings > Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://USERNAME.github.io/REPO-NAME/`

> GitHub Pages deployment takes 1-2 minutes after saving.

### Netlify (Free, Instant)

> Deployed: [https://6a30444375bf9b3b0e9cfc6b--spectacular-zabaione-204682.netlify.app/](https://6a30444375bf9b3b0e9cfc6b--spectacular-zabaione-204682.netlify.app/)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add new site > Deploy manually**
3. Drag and drop your `portfolio_codealpha` folder onto the page
4. Your site is live instantly with a Netlify subdomain
5. Optionally connect a custom domain

### Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New > Project**
3. Import your GitHub repository
4. Click **Deploy** (no build settings needed for static sites)

### Custom Domain

After deploying to GitHub Pages:
1. Go to Settings > Pages > Custom domain
2. Enter your domain (e.g., `mohanyadav.dev`)
3. Add a CNAME record in your domain DNS pointing to `mohanmohan07811-pixel.github.io`
4. Enable **Enforce HTTPS**

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | Fully supported |
| Firefox | 75+ | Fully supported |
| Edge | 80+ | Fully supported |
| Safari | 13+ | Fully supported |
| Opera | 67+ | Fully supported |
| IE 11 | - | Not supported |

Features used and their support:
- CSS Custom Properties: 93%+ global support
- CSS Grid: 95%+ global support
- IntersectionObserver API: 93%+ global support
- CSS backdrop-filter (glassmorphism): 90%+ support (Safari requires -webkit- prefix, already included)

---

## Performance

The portfolio is optimized for fast loading:

- **No JavaScript frameworks** - no React, Vue, or Angular bundle overhead
- **No CSS frameworks** - no Tailwind or Bootstrap to load
- **Font subsetting** - Google Fonts loads only the weights used
- **CDN assets** - Font Awesome and Google Fonts served from CDN with caching
- **No images by default** - uses CSS gradients and Font Awesome icons instead
- **requestAnimationFrame** for particle animation - GPU-accelerated, pauses when tab is hidden
- **IntersectionObserver** for scroll effects - far more efficient than scroll event listeners
- **Single CSS variables** for theming - theme switches with one attribute change, no JS class toggling on every element

Estimated Lighthouse scores:
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 100

---

## Accessibility

- All images and icon buttons have `aria-label` attributes
- Form inputs have associated `<label>` elements
- Color contrast meets WCAG 2.1 AA standard in both dark and light mode
- Focus styles are browser-default (not removed)
- Custom cursor is disabled on touch/pointer devices via `@media (hover: none)`
- Semantic HTML structure with proper heading hierarchy (h1 > h2 > h3 > h4 > h5)
- External links use `rel="noopener noreferrer"` for security
- `lang="en"` declared on HTML element for screen readers

---

## Known Limitations

- The contact form currently simulates submission (shows success after 1.5s). To make it functional, connect it to a backend service such as Formspree, EmailJS, or your own API.
- The resume download requires `assets/resume.pdf` to exist. If it is missing, the download button will not work.
- The glassmorphism blur effect (`backdrop-filter`) may not render in very old browsers but degrades gracefully to a semi-transparent background.

---

## Contributing

This is a personal portfolio project. If you find a bug or want to suggest an improvement, feel free to open an issue on GitHub.

---

## Author

**Mohan Yadav**  
Computer Science & Engineering Student, Batch of 2026

- GitHub: [github.com/mohanmohan07811-pixel](https://github.com/mohanmohan07811-pixel)
- LinkedIn: [linkedin.com/in/mohan-yadav-8b077a413](https://www.linkedin.com/in/mohan-yadav-8b077a413)
- Email: mohanmohan07811@gmail.com

---

## License

MIT License

Copyright (c) 2025 Mohan Yadav

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

Designed and Developed by Mohan Yadav | CodeAlpha Virtual Internship 2024
