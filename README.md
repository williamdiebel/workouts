# Runner Strength Log

A lightweight workout app inspired by StrongLifts-style logging, tailored for strength work that supports distance running.

This project is intentionally simple: no backend, no account creation, fast to open, and optimized for phone use during real sessions.

## Features

- Structured 2-week program templates
- Gym/Home workout variants
- Set-by-set logging (`weight`, `reps/seconds`, optional `RPE`)
- Built-in rest timer that auto-starts after each logged set
- Session notes and completion status
- Progress tracking by total planned vs completed sets
- Installable iPhone web app (Home Screen icon)
- Offline support after first load

## iPhone Setup (Recommended)

### 1) Publish with GitHub Pages

1. Open this repo on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save and wait for your site URL to appear.

Note:
- GitHub Free: Pages generally requires a public repo.
- GitHub Pro/Team/Enterprise: private repo Pages is supported.

### 2) Install on iPhone

1. Open the Pages URL in Safari.
2. Tap `Share` -> `Add to Home Screen`.
3. Launch from the icon like a normal app.

## Local Run

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Phone Testing on Local Network

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then find your local IP:

```bash
ipconfig getifaddr en0
```

Open `http://YOUR_IP:8000` on your phone (same Wi-Fi).

## Privacy and Data

- Data is stored locally in browser storage on each device.
- No user accounts.
- No analytics/tracking by default.
- Phone and laptop data are separate unless sync is added later.

## Tech Stack

- HTML/CSS/JavaScript (vanilla)
- PWA manifest + service worker for install/offline behavior

## Planned Improvements

- Optional cloud sync across devices
- Export/import of workout history
- Deeper progression analytics tied to run training phases
