/* ╔══════════════════════════════════════════════════════════╗
   ║  site.js — shared for EVERY page.                          ║
   ║  Builds the menu + footer so you edit them in ONE place.   ║
   ╚══════════════════════════════════════════════════════════╝ */

/* ══ ✏️ YOUR NAME (shown top-left on every page) ══ */
const MY_NAME = "Shahidullah Kaisar";

/* ══ ✏️ THE MENU — add a new page by adding ONE line here ══ */
const PAGES = [
  { href: "index.html",    label: "Home" },
  { href: "research.html", label: "Research" },
  { href: "projects.html", label: "Projects" },
  { href: "cv.html",       label: "CV" },
  { href: "blog.html",     label: "Blog" },
  { href: "gallery.html",  label: "Photos" },
  // 🪄 later, e.g.:
  // { href: "dft.html",         label: "DFT" },
  // { href: "publications.html", label: "Publications" },
];

/* ══ ✏️ YOUR CONTACT LINKS (footer of every page) ══ */
const CONTACT = [
  { href: "mailto:YOUR-EMAIL@example.com",                    label: "Email" },
  { href: "cv.pdf",                                            label: "CV (PDF)" },
  { href: "https://github.com/shahidullahkaisar",              label: "GitHub" },
  { href: "https://www.linkedin.com/in/YOUR-LINKEDIN",         label: "LinkedIn" },
  { href: "https://scholar.google.com/citations?user=YOUR-ID", label: "Google Scholar" },
  // delete any line you don't use
];
const FOOTER_LINE = "Open to PhD positions, research collaborations, and conversations about materials.";

/* ══════════ nothing below needs editing ══════════ */
(function(){
  const inSub = /\/blog\//.test(location.pathname);
  const pre = inSub ? "../" : "";
  const here = location.pathname.split("/").pop() || "index.html";

  /* menu */
  const nav = document.createElement("nav");
  nav.innerHTML = `<div class="nav-in">
      <a class="nav-name" href="${pre}index.html">${MY_NAME}</a>
      <div class="nav-links">
        ${PAGES.map(p => `<a href="${pre}${p.href}" class="${p.href === here ? "here" : ""}">${p.label}</a>`).join("")}
      </div>
    </div>`;
  document.body.prepend(nav);

  /* footer */
  const f = document.createElement("footer");
  f.innerHTML = `<div class="wrap">
      <h3>Get in touch</h3>
      <p>${FOOTER_LINE}</p>
      <div class="f-links">
        ${CONTACT.map(c => {
          const ext = c.href.startsWith("http");
          const href = (ext || c.href.startsWith("mailto")) ? c.href : pre + c.href;
          return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${c.label}</a>`;
        }).join("")}
      </div>
      <div class="f-end">
        <span>© ${new Date().getFullYear()} ${MY_NAME}</span>
        <span>Built with plain HTML · hosted on GitHub Pages</span>
      </div>
    </div>`;
  document.body.appendChild(f);

  /* fade-in on scroll */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

  /* filter buttons (blog + gallery) — filters anything with data-cat */
  const fBox = document.querySelector(".filters");
  if (fBox){
    const items = document.querySelectorAll("[data-cat]");
    const countEl = document.querySelector(".count");
    const show = cat => {
      let n = 0;
      items.forEach(it => {
        const ok = cat === "all" || it.dataset.cat === cat;
        it.style.display = ok ? "" : "none";
        if (ok) n++;
      });
      if (countEl) countEl.textContent = n + (n === 1 ? " item" : " items");
    };
    fBox.querySelectorAll("button").forEach(b => {
      b.addEventListener("click", () => {
        fBox.querySelectorAll("button").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        show(b.dataset.filter);
      });
    });
    show("all");
  }

  /* photo lightbox */
  const shots = document.querySelectorAll(".shot");
  if (shots.length){
    const lb = document.createElement("div");
    lb.id = "lightbox"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-label","Photo viewer");
    lb.innerHTML = "<img src='' alt=''><p></p>";
    document.body.appendChild(lb);
    const li = lb.querySelector("img"), lc = lb.querySelector("p");
    shots.forEach(s => {
      const img = s.querySelector("img");
      img.addEventListener("error", () => s.remove());   // missing photo → hidden
      s.addEventListener("click", () => {
        li.src = img.src;
        lc.textContent = (s.querySelector("figcaption") || {}).textContent || "";
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }
})();
