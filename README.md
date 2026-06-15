# Mohan Yadav â€” Personal Portfolio

A modern, production-ready personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript. Designed for internship and placement applications.

---

## ðŸš€ Features

- **Glassmorphism design** with dark/light mode
- **Floating particles background** with mouse interaction
- **Typing effect** in hero section
- **Scroll reveal animations** on all sections
- **Animated skill progress bars**
- **Animated statistics counter**
- **Custom cursor** (desktop)
- **Skills filter** (by category)
- **Contact form** with client-side validation
- **Active navbar highlighting** on scroll
- **Back to top button**
- **Theme preference** saved to localStorage
- **Fully responsive** â€” mobile first
- **SEO optimized** with meta tags

---

## ðŸ“ Project Structure

```
portfolio_codealpha/
â”œâ”€â”€ index.html
â”œâ”€â”€ README.md
â”œâ”€â”€ css/
â”‚   â”œâ”€â”€ style.css       # Design system, layout, components
â”‚   â”œâ”€â”€ animations.css  # Reveal and micro-animation styles
â”‚   â””â”€â”€ responsive.css  # Mobile-first breakpoints
â”œâ”€â”€ js/
â”‚   â”œâ”€â”€ particles.js    # Canvas particle system
â”‚   â””â”€â”€ main.js         # All interactivity (IIFE, no globals)
â””â”€â”€ assets/
    â””â”€â”€ resume.pdf      # Place your resume PDF here
```

---

## ðŸ› ï¸ Setup

1. **Clone or download** the project.
2. **Place your resume** at `assets/resume.pdf`.
3. **Update personal details** in `index.html`:
   - Name, email, phone number
   - GitHub, LinkedIn, Twitter profile URLs
   - Project GitHub/demo links
   - Education details and years
4. Open `index.html` in a browser â€” no build step required.

---

## ðŸŒ Deploy to GitHub Pages

### Option 1 â€” GitHub UI (Easiest)

1. Create a new repository on GitHub (e.g., `username.github.io` or `portfolio`).
2. Upload all project files to the repository root.
3. Go to **Settings â†’ Pages**.
4. Set **Source** to `Deploy from a branch`, select `main` branch, `/ (root)`.
5. Click **Save** â€” your site will be live at `https://username.github.io/portfolio`.

### Option 2 â€” Git CLI

```bash
git init
git add .
git commit -m "Initial portfolio release"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository Settings â†’ Pages.

---

## âœï¸ Customization

| What to change           | Where                              |
|--------------------------|------------------------------------|
| Name & bio               | `index.html` â€” hero & about        |
| Projects                 | `index.html` â€” projects section    |
| Skills & percentages     | `index.html` â€” skills section      |
| Color accent             | `css/style.css` â€” `--accent-primary` |
| Font                     | Google Fonts link in `<head>`      |
| Resume file              | `assets/resume.pdf`                |
| Social links             | `index.html` â€” contact & footer    |

---

## ðŸ“ License

MIT License â€” free to use and modify for personal use.

---

*Crafted with â¤ï¸ by Mohan Yadav*

