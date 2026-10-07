# BMIT Solapur — React + Tailwind + Firebase (Firestore)

Vite · React 18 · React Router 6 · Tailwind CSS 3 · Firebase 10 (Firestore, Hosting)

## Run it
```bash
npm install
cp .env.example .env      # then fill in your Firebase web-app keys (optional for a first look)
npm run dev
```
Without `.env` the site runs on the built-in content in `src/lib/data.js`. With `.env` it reads live from Firestore and falls back to the built-in content for any empty collection.

## Real routes
`/` `/about` `/academics` `/departments` `/departments/:id` `/departments/cse` `/departments/cse/:section` `/departments/cse/faculty/:id` `/admissions` `/campus-life` `/placements` `/research` `/achievements` `/notices` `/contact`

## Firebase setup
1. Firebase Console → create project → add a **Web app** → copy the config into `.env`.
2. Build → **Firestore Database** → create database.
3. Deploy the security rules: `firebase login && firebase init` (choose Firestore + Hosting, keep `firestore.rules`, public dir `dist`, SPA = yes, don't overwrite files) then `firebase deploy --only firestore:rules`.
4. Seed the content: put a service-account key at `./serviceAccount.json`, then `npm run seed`.
5. Edit content any time in Firestore → Data. The site updates live.

### Collections
| Path | Fields |
|---|---|
| `faculty/{id}` | `order, n, r, q, x, email?, photoURL?, scene?` |
| `notices/{id}` | `order, kind, title, desc, url` ← put the real document link here |
| `events/{id}` | `order, title, desc` |
| `recruiters/{id}` | `order, name, color, shape, logoURL?` |
| `achievements/{id}` | `order, group (students/faculty/events), year, title, desc, sample?` |
| `projects/{id}` | `order, title, tags[], desc, year, scene, sample?` |
| `site/placements` | `companies, placements, highestCTC` |
| `messages/{id}` | written by the Contact form (create-only; read it in the Console) |

## Deploy
`npm run deploy` (builds, then `firebase deploy`).

## Photos
Drop files into `public/images/` and set paths in `src/config.js → IMAGES` (e.g. `campus: '/images/campus.jpg'`).
Faculty photos: set `photoURL` on the faculty document (Firebase Storage URL or `/images/...`).
Hero video: put an MP4 in `public/media/` and set `SITE.heroVideo`.

## Placeholders to replace
Items tagged **Sample** (student/faculty totals, labs, infrastructure, projects, some achievements, student stories) are placeholders — replace them, then set `SITE.showSampleTags = false`. Placement figures, recruiters and Prof. S. G. Kulkarni's details were supplied by BMIT and should be confirmed. The HOD name was inferred from a published email address — confirm it. Brand colour (`tailwind.config.js`) and logo (`components/Logo.jsx`) are placeholders.
