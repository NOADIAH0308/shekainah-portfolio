# Orpilla's Portfolio

React + Tailwind portfolio, recovered from the live site.

## Run locally
```
npm install
npm start
```

## Deploy to GitHub Pages
```
npm run deploy
```
Then in the repo: Settings -> Pages -> Branch `gh-pages` / root.

## PHP hosting (not GitHub Pages)
GitHub Pages cannot run PHP. For a PHP host (Hostinger, cPanel, etc.):
```
npm run build:php
```
Upload everything inside `build/` (it contains `index.php`).

## Notes
- Contact form uses EmailJS. Copy `.env.example` to `.env` and fill in your keys.
- Put your CV at `public/documents/ORPILLA CV.pdf`.
