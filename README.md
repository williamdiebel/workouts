# workouts

Local-first strength workout app for gym/home sessions that support distance running progression.

## What it includes

- Your full 2-week program
- Gym/Home toggle for each workout day
- Set-by-set logging (`weight`, `reps/seconds`, optional `RPE`)
- Integrated rest timer (auto-starts after logging a set)
- Progress tracking and session notes
- Installable web app behavior on iPhone (Home Screen icon)
- Offline support after first load

## Best everyday setup (iPhone app icon)

This is the lowest-friction routine setup.

Note on private repos:
- GitHub Pages supports private repositories on GitHub Pro/Team/Enterprise plans.
- If you're on GitHub Free, your Pages source repo needs to be public (or host elsewhere).

1. Push this repo to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save and wait for GitHub to publish your site URL.
5. On iPhone, open the site URL in Safari.
6. Tap `Share` -> `Add to Home Screen`.

After this, use the Home Screen icon like a normal app.

## Local testing on your phone (before publishing)

1. Start local server:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

2. In another terminal, get your Mac IP:

```bash
ipconfig getifaddr en0
```

3. On iPhone (same Wi-Fi), open:

```text
http://YOUR_IP:8000
```

## Local desktop run

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Basic use flow

1. Pick `Gym` or `Home`.
2. Pick workout card (Week/Day).
3. Enter set values and tap `Log Set`.
4. Follow rest timer.
5. Tap `Finish Session` when done.

## Data behavior

- Data is stored in browser storage for that device.
- If you use phone + laptop, each device keeps its own history.
- `Clear` removes all saved sessions on that device.

## Updating the app later

1. Change code.
2. Commit and push to `main`.
3. GitHub Pages redeploys.
4. On iPhone, reopen the app and refresh once if needed.
