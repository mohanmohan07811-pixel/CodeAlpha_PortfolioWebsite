# Mohan Yadav - Personal Portfolio

A modern, production-ready personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript. Designed for internship and placement applications.

---

## Features

- Glassmorphism design with dark/light mode
- Floating particles background with mouse interaction
- Typing effect in hero section
- Scroll reveal animations on all sections
- Animated skill progress bars
- Animated statistics counter
- Custom cursor (desktop)
- Skills filter (by category)
- Contact form with client-side validation
- Active navbar highlighting on scroll
- Back to top button
- Theme preference saved to localStorage
- Fully responsive - mobile first
- SEO optimized with meta tags

---

## Project Structure

```
portfolio_codealpha/
├── index.html          # Full page markup (8 sections)
├── README.md           # Setup & deployment guide
├── css/
│   ├── style.css       # Design system + all component styles
│   ├── animations.css  # Reveal + micro-animation styles
│   └── responsive.css  # Mobile-first breakpoints
├── js/
│   ├── particles.js    # Canvas particle system
│   └── main.js         # All portfolio interactivity
└── assets/
    └── (place resume.pdf here)
```

---

## Setup

1. Clone or download the project.
2. Place your resume at `assets/resume.pdf`.
3. Update personal details in `index.html`:
   - Name, email, phone number
   - GitHub, LinkedIn, Twitter profile URLs
   - Project GitHub/demo links
   - Education details and years
4. Open `index.html` in a browser - no build step required.

---

## Deploy to GitHub Pages

### Option 1 - GitHub UI (Easiest)

1. Create a new repository on GitHub.
2. Upload all project files to the repository root.
3. Go to **Settings > Pages**.
4. Set **Source** to `Deploy from a branch`, select `main` branch, `/ (root)`.
5. Click **Save** - your site will be live at `https://username.github.io/repo-name`.

### Option 2 - Git CLI

```bash
git init
git add .
git commit -m "Initial portfolio release"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository Settings > Pages.

---

## Customization

| What to change           | Where                              |
|--------------------------|------------------------------------|
| Name and bio             | index.html - hero and about        |
| Projects                 | index.html - projects section      |
| Skills and percentages   | index.html - skills section        |
| Color accent             | css/style.css - --accent-primary   |
| Font                     | Google Fonts link in head          |
| Resume file              | assets/resume.pdf                  |
| Social links             | index.html - contact and footer    |

---

## License

MIT License - free to use and modify for personal use.

---

Designed and Developed by Mohan Yadav
