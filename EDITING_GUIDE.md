# 🌿 Editing Guide v2 — multi-page forest edition

Your site is now **multiple pages** that all share one look:

```
index.html        ← home (hero, about, motivation, "doors" to other pages)
skills.html       ← skills page
works.html        ← works page
gallery.html      ← photo gallery page
blog.html         ← list of blog posts
blog/…            ← the actual blog post pages
_template.html    ← 🪄 copy this to create ANY new page
style.css         ← the look of everything (colors, fonts, scenery)
site.js           ← the menu + footer + scenery (edit ONCE, applies everywhere)
images/           ← profile.jpg + gallery/ photos
```

**The two magic files:**
- `style.css` — change a color here → whole site changes
- `site.js` — the menu and footer live here → edit once, every page updates ✨

Everything editable is marked `✏️ EDIT` — on GitHub, open a file → pencil icon →
Ctrl+F → search `✏️ EDIT`.

---

## 1. 🪄 Add a NEW PAGE (e.g. DFT details, Projects) — 3 steps, 2 minutes

1. **Copy the template:** open `_template.html` → copy all its code →
   **Add file → Create new file** → name it `dft.html` → paste → edit the
   title, heading and content → Commit.
   (The template includes ready-made building blocks: text panels, icon cards,
   chips — just copy the block you like.)

2. **Add it to the menu:** open `site.js` → find the `PAGES` list at the top →
   add one line:
   ```js
   { href: "dft.html", label: "dft" },
   ```
   → the menu now shows "dft" on **every** page automatically. That's the magic.

3. *(Optional)* add a "door" card for it on the home page — in `index.html`,
   find the EXPLORE DOORS section and copy one `<a class="door …">` block.

Same recipe for `projects.html`, `publications.html`, anything.

## 2. ✍️ Edit your info

| What | File |
|---|---|
| Name, intro, about, motivation | `index.html` (search `✏️ EDIT`) |
| Skills | `skills.html` |
| Works/projects | `works.html` |
| Email, GitHub, LinkedIn, footer text | `site.js` (the `CONTACT` list at the top) ← **do this first!** |
| Menu items | `site.js` (the `PAGES` list) |

## 3. 📸 Gallery photos

1. Create the folder once: **Add file → Create new file** → name it
   `images/gallery/readme.txt` → write anything → Commit.
2. Open `images/gallery/` → **Add file → Upload files** → drag photos in.
   Use simple names, no spaces: `photo1.jpg`, `sunset.jpg`, `friends.jpg`.
3. In `gallery.html`, copy one `<figure>` line per photo and set the
   file name + caption. Missing files hide automatically; clicking opens fullscreen.

## 4. 📝 Blog posts

1. Copy `blog/z-scan-explained.html` → **Create new file** →
   `blog/my-new-post.html` → paste → edit title, date, heading, paragraphs.
2. In `blog.html`, copy one `<a class="panel post rv">` card, put it FIRST
   (newest on top), update the link, date, title, teaser.

⚠️ Only for files inside `blog/`: they use `../style.css` and `../site.js`
(with the `../`). The template post already has this — just copy it.

## 5. 🎨 The scenery & colors

- **Colors:** top of `style.css` → the `:root` block. Try changing `--moss`
  or the sky colors and refresh!
- **The painted hills / clouds / floating lights** live in `site.js`
  (the scenery section). You don't need to touch them, but the number of
  floating motes is the `14` in the loop if you want more ✨
- **Clouds too fast/slow?** In `style.css`, the `.cloud` animation-durations.

## 6. 🚀 Uploading this version

1. In your repo, delete the old `index.html`.
2. Upload: `index.html`, `skills.html`, `works.html`, `gallery.html`,
   `blog.html`, `_template.html`, `style.css`, `site.js`
   (drag them all in one **Upload files** step).
3. Replace `blog/z-scan-explained.html` with the new version
   (open the old one → pencil → select all → paste the new code → Commit).
4. Keep `cv.pdf` and `images/` — still used.
5. Hard-refresh the site: **Ctrl+Shift+R**.

💡 If something ever looks broken after an edit, GitHub keeps every version —
open the file → History → you can view and restore the previous one.
