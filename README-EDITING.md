# Editing guide

Your site, in plain files:

```
index.html      Home — photo, intro, 3 research directions, latest posts
research.html   Research & interests, methods, publications
projects.html   Projects & work
cv.html         Education, experience, achievements, skills (+ link to cv.pdf)
blog.html       List of posts, with category filters
gallery.html    Photos, with category filters
blog/           The actual blog posts (one file per post)
_template.html  Copy this to make ANY new page
style.css       All the styling (colors at the top)
site.js         The menu + footer + filters — edit these ONCE, applies everywhere
images/         profile.jpg, gallery/ photos
cv.pdf          Your CV
```

Everywhere you should change something is marked in the code with **`✏️ CHANGE`**.
On GitHub: open a file → pencil icon → Ctrl+F → search `✏️` → it jumps to each spot.

---

## First things to do (10 minutes)

1. **`site.js`** — put your real email, LinkedIn and Scholar links in the `CONTACT` list.
   Delete lines you don't have.
2. **`index.html`** — your status line, your intro paragraph, your email in the button.
3. **`cv.html`** — replace every `20XX` and `[bracketed]` placeholder with real dates and titles.
4. **`research.html`** — supervisor name, thesis wording.
5. Upload **`images/profile.jpg`** (your photo) and **`cv.pdf`**.

## Add a blog post

1. In `blog/`, copy `z-scan-explained.html` → **Add file → Create new file** →
   name it `blog/my-post.html` → paste → edit the title, date and text → Commit.
2. In `blog.html`, copy one `<a class="card rv" data-cat="…">` block, put it at the **top**,
   and update the link, tag, title and teaser.
   `data-cat` must be one of: `research`, `learning`, `life` — that's what the
   filter buttons use. (To add a new category, add a button in the filters row
   with a matching `data-filter`.)

## Add photos

1. Create the folder once: **Add file → Create new file** → name it
   `images/gallery/readme.txt` → anything inside → Commit.
2. Open `images/gallery/` → **Add file → Upload files** → drag your photos in.
   Use simple names, no spaces (`sunset.jpg`, `friends-trip.jpg`).
   Resize very large photos before uploading so the page loads fast.
3. In `gallery.html`, copy one `<figure class="shot rv" data-cat="…">` line per photo
   and change `data-cat`, the file name, and the caption.
   Categories: `nature`, `people`, `campus`, `travel`.

## Add a new page (DFT, Publications, Teaching…)

1. Copy `_template.html` → name it e.g. `dft.html` → edit the content
   (it contains ready-made blocks: cards, timeline, chips).
2. In `site.js`, add one line to `PAGES`:
   ```js
   { href: "dft.html", label: "DFT" },
   ```
   The menu now shows it on every page. That's the whole job.

## Colors

Top of `style.css`, the `:root` block. `--accent` is the green-teal used for links and
highlights — change that one line to re-tint the whole site.

---

## Uploading to GitHub

Repo: `shahidullahkaisar/shahidullahkaisar.github.io`

1. Delete the old `index.html` (and any old `style.css`, `site.js`, other stray pages).
2. **Add file → Upload files** → drag in: `index.html`, `research.html`, `projects.html`,
   `cv.html`, `blog.html`, `gallery.html`, `_template.html`, `style.css`, `site.js` → Commit.
3. **Add file → Create new file** → name it `blog/z-scan-explained.html` → paste that file's
   code → Commit. (Typing the `/` creates the folder.)
4. Keep `cv.pdf` and `images/` in place.
5. Open https://shahidullahkaisar.github.io and hard-refresh (Ctrl+Shift+R).

Broke something? On GitHub, open the file → **History** → view or restore any earlier version.
Nothing is ever permanently lost.

---

## Your brand: kaiserism

- The wordmark **kaiserism •** appears top-left on every page (with a small
  green dot that grows on hover). It's set in `site.js`:
  ```js
  const BRAND   = "kaiserism";
  const MY_NAME = "Shahidullah Kaisar";
  ```
  Change either one there and it updates everywhere.
- Your real name still appears as the big heading on the home page, with
  `@kaiserism` underneath — so a professor sees the name, and the site still
  has a handle.
- After you rename your GitHub account to `kaiserism` and rename the repo to
  `kaiserism.github.io`, the GitHub links in `site.js` and `projects.html`
  already point to `github.com/kaiserism`.
