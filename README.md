# 💻 Personal Portfolio — Tinbite Elias

> A premium, highly responsive personal portfolio website showcasing my software development journey, skills, verified credentials, and real-world projects.

Built with **React**, **Vite**, **Tailwind CSS**, and modern web design principles (including fully accessible components, smooth intersection animations, and persistent light/dark themes).

---

## ✨ Features

- 🌓 **Dynamic Theme System:** Seamlessly toggles between light and dark modes with state persistence using `localStorage`.
- 📱 **Responsive Design:** Premium layout adapts fluidly to desktop sidebars and mobile hamburger menus.
- 🚀 **Intersection Observer Animations:** Staggered, smooth entrance animations for project galleries, certificate grids, and skills.
- 📨 **Connected Contact Form:** Fully functional client-side form validation and submission via Formspree API.
- ⚡ **Optimized Performance:** Clean asset routing, lazy-loaded components, and minimal dependency overhead.

---

## 🛠️ Tech Stack

- **Core Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + custom CSS variables
- **Icons:** React Icons
- **Deployment:** Vercel (Production) & GitHub Pages (Build Pipeline)

---

## 📂 Project Structure

```text
├── public/
│   └── resume/          # Resume PDFs (tinbite resume.pdf)
├── src/
│   ├── assets/          # Static images & mockups
│   ├── components/      # UI Page Components (Home, About, Works, Certificates, Contact, Navbar)
│   ├── App.css          # Page layout specific adjustments
│   ├── index.css        # Core design tokens, global themes, and animation keyframes
│   ├── App.jsx          # App root, routing setup, and theme state
│   └── main.jsx         # DOM insertion entrypoint
├── index.html           # SEO optimizations & Open Graph headers
└── package.json         # Pruned dependency manifest
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tinbit25/Portifolio.git
   ```

2. Navigate into the directory:
   ```bash
   cd Portifolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

### Production Build

To build the static assets for production deployment:
```bash
npm run build
```

---

## 👤 About the Author

**Tinbite Elias** — Full-Stack Web & Android Developer
- **Email:** tinbitelias25@gmail.com
- **GitHub:** [@tinbit25](https://github.com/tinbit25)
- **LinkedIn:** [Tinbite Elias](https://www.linkedin.com/in/tinbite-elias)
