# Signal & Soil

A plain HTML, CSS and vanilla JavaScript Environmental Science repository for EXTC engineering students. It is designed for free hosting on GitHub Pages and has no build step or paid dependency.

## Preview locally

From the repository root, run one of these commands:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. Opening `index.html` directly also works, but a local server is closer to GitHub Pages behavior.

## Personalise before submission

1. Review the completed member names, roles and contribution map in `team.html`.
2. Review the completed AI-use notes in `reflection.html`, the six unit pages and `ai-use.html`.
3. Recheck every outcome in `ai-use.html` against the linked sources and course material.
4. Review `VERIFY_CHECKLIST.md` and add exact line references if you make further edits.
5. Add your institute, course section and team details if required by your instructor.

## Deploy to GitHub Pages

1. Create a new public repository on GitHub, for example `environmental-science-extc`.
2. In this folder, run `git init`, `git add .`, `git commit -m "Create Environmental Science repository"`, `git branch -M main`, then `git remote add origin https://github.com/<username>/<repo>.git` and `git push -u origin main`.
3. On GitHub open **Settings → Pages**, set **Source** to **GitHub Actions**, and wait for the workflow named “Deploy static site to GitHub Pages” to finish.
4. Open `https://<username>.github.io/<repo>/`. The exact URL also appears under the workflow's environment deployment.
5. Test the link on a phone, rotate the screen, open every unit, use Focus mode, and check keyboard focus.

The workflow is in `.github/workflows/pages.yml`; `.nojekyll` keeps the site as a straightforward static artifact.