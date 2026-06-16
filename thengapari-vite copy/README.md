# ThengaPari — Landing Page (React + Vite)

The ThengaPari landing page, converted from static HTML/CSS/JS into a React + Vite project.

## Stack
- React 18
- Vite 5
- Plain CSS (design tokens in `src/styles/colors_and_type.css`, page styles in `src/styles/landing.css`)

## Getting started
```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure
```
index.html                 # Vite entry; loads fonts + sets theme attributes on <body>
src/
  main.jsx                 # React entry, imports global CSS
  App.jsx                  # composes all sections
  useLandingInteractions.js# scroll reveals, step-flow animation, count-up stats
  components/
    Nav.jsx                # sticky nav + mobile menu (React state)
    Hero.jsx
    Problem.jsx
    HowItWorks.jsx
    WhoItsFor.jsx
    ZeroWaste.jsx
    Traction.jsx
    Signup.jsx             # waitlist form with validation (React state)
    Footer.jsx
  styles/
    colors_and_type.css
    landing.css
public/
  assets/                  # logos + Kerala illustration (referenced as /assets/...)
```

## Notes
- The original "Tweaks" visual-editor panel (`tweaks-panel.jsx` / `tweaks-app.jsx`) was intentionally
  excluded — it was an editing overlay, not part of the landing page.
- Interactions that animate DOM nodes (reveals, the how-it-works progress bar, count-up stats) are
  ported into a single `useEffect` hook. Nav, mobile menu, and the signup form use React state.
