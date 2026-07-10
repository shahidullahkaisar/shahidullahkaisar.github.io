/* ╔══════════════════════════════════════════════════════════╗
   ║  site.js — shared magic for EVERY page ✨                  ║
   ║                                                            ║
   ║  This file automatically adds the menu, the painted        ║
   ║  scenery, and the footer to every page.                    ║
   ║                                                            ║
   ║  🪄 To add a NEW PAGE to the menu: add ONE line to the     ║
   ║     PAGES list below — the menu updates on every page!     ║
   ╚══════════════════════════════════════════════════════════╝ */

/* ══════ ✏️ EDIT: the menu — one line per page ══════ */
const PAGES = [
  { href: "index.html",   label: "🌿 home"  },
  { href: "skills.html",  label: "skills"   },
  { href: "works.html",   label: "works"    },
  { href: "gallery.html", label: "gallery"  },
  { href: "blog.html",    label: "blog"     },
  /* 🪄 add new pages here, e.g.:
  { href: "dft.html",      label: "dft"      },
  { href: "projects.html", label: "projects" },
  */
];

/* ══════ ✏️ EDIT: footer contact links ══════ */
const CONTACT = [
  { href: "mailto:your.email@example.com", label: "✉ email me" },
  { href: "https://github.com/shahidullahkaisar", label: "github" },
  { href: "https://www.linkedin.com/in/YOUR-LINKEDIN", label: "linkedin" },
  { href: "cv.pdf", label: "cv 📄" },
];
const FOOTER_TITLE = "Come say hi 🌻";
const FOOTER_TEXT  = "Whether it's physics, photos, or a good cup of tea — my inbox is open.";
const MY_NAME      = "Shahidullah Kaisar";

/* ════════════════════════════════════════════════════════════
   You don't need to touch anything below this line 🙂
   ════════════════════════════════════════════════════════════ */

(function(){
  // pages inside the blog/ folder need "../" in front of links
  const inSub = /\/blog\//.test(location.pathname);
  const pre = inSub ? "../" : "";
  const here = location.pathname.split("/").pop() || "index.html";

  /* ---- 1. painted scenery 🏞 (hills, clouds, floating motes) ---- */
  const sc = document.createElement("div");
  sc.className = "scenery"; sc.setAttribute("aria-hidden","true");
  sc.innerHTML = `
    <div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div>
    <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <!-- far misty ridge -->
      <path d="M0 260 Q 180 190 360 235 T 720 215 T 1080 245 T 1440 210 V 420 H 0 Z"
            fill="#A9CBA6" opacity=".55"/>
      <!-- middle forest ridge with tree bumps -->
      <path d="M0 300 Q 60 265 120 285 Q 150 250 190 278 Q 250 235 310 280 Q 370 250 430 290
               Q 470 258 530 288 Q 600 240 670 285 Q 720 260 780 292 Q 840 250 900 288
               Q 960 262 1020 295 Q 1080 248 1150 290 Q 1210 265 1270 296 Q 1330 258 1440 290
               V 420 H 0 Z" fill="#7FAE7C" opacity=".75"/>
      <!-- near dark treeline -->
      <path d="M0 350 Q 50 318 100 340 Q 140 305 185 336 Q 240 300 300 340 Q 350 312 410 342
               Q 460 306 520 340 Q 580 315 640 345 Q 700 308 760 342 Q 820 318 880 348
               Q 940 310 1000 344 Q 1060 320 1120 348 Q 1180 312 1250 344 Q 1310 322 1440 346
               V 420 H 0 Z" fill="#4E8A57" opacity=".85"/>
      <!-- meadow -->
      <path d="M0 392 Q 360 372 720 388 T 1440 384 V 420 H 0 Z" fill="#2C5E3F" opacity=".9"/>
    </svg>`;
  // floating light motes ✨
  for (let i = 0; i < 14; i++){
    const m = document.createElement("span");
    m.className = "mote";
    m.style.left = (Math.random()*100) + "vw";
    m.style.animationDuration = (14 + Math.random()*18) + "s";
    m.style.animationDelay = (-Math.random()*20) + "s";
    m.style.transform = "scale(" + (0.5 + Math.random()) + ")";
    sc.appendChild(m);
  }
  document.body.prepend(sc);

  /* ---- 2. menu ---- */
  const nav = document.createElement("nav");
  nav.innerHTML = PAGES.map(p =>
    `<a href="${pre}${p.href}" class="${p.href === here ? "here" : ""}">${p.label}</a>`
  ).join("");
  document.body.prepend(nav);

  /* ---- 3. footer ---- */
  const f = document.createElement("footer");
  f.id = "contact";
  f.innerHTML = `
    <div class="wrap">
      <h2>${FOOTER_TITLE}</h2>
      <p style="max-width:48ch">${FOOTER_TEXT}</p>
      <div class="f-links">
        ${CONTACT.map(c => `<a href="${c.href.startsWith("http") || c.href.startsWith("mailto") ? "" : pre}${c.href}"
            ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${c.label}</a>`).join("")}
      </div>
      <div class="f-end">
        <span>© ${new Date().getFullYear()} ${MY_NAME}</span>
        <span>grown with 🌱 + physics, hosted on GitHub Pages</span>
      </div>
    </div>`;
  document.body.appendChild(f);

  /* ---- 4. scroll reveal ---- */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

  /* ---- 5. gallery lightbox (only runs if the page has photos) ---- */
  const shots = document.querySelectorAll(".shot");
  if (shots.length){
    const lb = document.createElement("div");
    lb.id = "lightbox"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-label","Photo viewer");
    lb.innerHTML = "<img src='' alt=''><p></p>";
    document.body.appendChild(lb);
    const lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p");
    shots.forEach(fg => {
      const img = fg.querySelector("img");
      img.addEventListener("error", () => fg.style.display = "none");
      fg.addEventListener("click", () => {
        lbImg.src = img.src;
        lbCap.textContent = (fg.querySelector("figcaption")||{}).textContent || "";
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }

  /* ---- 6. skill ticker loop (home page) ---- */
  const tt = document.getElementById("tickerTrack");
  if (tt) tt.innerHTML += tt.innerHTML;
})();
