/* ============================================================
   POPBAR — interaction engine
   - scroll-driven hero→story ice-cream travel
   - flavour cycle (docked state)
   - shop filtering, cart fly, deals carousel
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- tweaks (live values) ---------- */
  const tweaks = { motion: 1, cycleSec: 2.8 };
  window.addEventListener("popbar-tweaks", (e) => {
    Object.assign(tweaks, e.detail);
  });

  /* ============================================================
     1+2. SHOP — static markup; wire up icons + filtering
  ============================================================ */
  const flavGrid = $("#flavGrid");
  const skuGrid = $("#skuGrid");

  const FICONS = {
    cup: '<span class="fi fi-cup"></span>',
    flake: '<span class="fi fi-snow"></span>',
    pop: '<span class="fi fi-lolly"></span>',
  };
  $$(".ficons", flavGrid).forEach((row) => {
    const keys = (row.dataset.icons || "cup,flake,pop").split(",");
    row.innerHTML = keys.map((k) => FICONS[k.trim()] || "").join("");
  });
  $$(".flav", flavGrid).forEach((b) => {
    b.addEventListener("click", () => setFlavour(b.dataset.key, b));
  });

  let activeFlav = "all";
  let activeType = "all";
  let query = "";

  function applyFilters() {
    $$(".sku", skuGrid).forEach((card, i) => {
      const okF = activeFlav === "all" || card.dataset.flavs.split(",").includes(activeFlav);
      const okT = activeType === "all" || card.dataset.type === activeType;
      const name = ((card.querySelector(".sku-name span") || {}).textContent || "").toLowerCase();
      const okQ = !query || name.includes(query) || card.dataset.flavs.toLowerCase().includes(query) || card.dataset.type.toLowerCase().includes(query);
      const show = okF && okT && okQ;
      if (show && card.classList.contains("hide")) {
        card.classList.remove("hide");
        card.style.visibility = "";
        card.style.position = "";
        card.animate(
          [{ opacity: 0, transform: "translateY(16px) scale(.95)" }, { opacity: 1, transform: "none" }],
          { duration: 380, delay: i * 45, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" }
        );
      } else if (!show && !card.classList.contains("hide")) {
        card.classList.add("hide");
      }
    });
  }
  // when searching, hide type/flavour chips that have no matching products
  function updateChips() {
    const typeChips = $$(".type-chip");
    const flavChips = $$(".flav", flavGrid);
    if (!query) {
      typeChips.forEach((c) => c.classList.remove("chip-hidden"));
      flavChips.forEach((c) => c.classList.remove("chip-hidden"));
      return;
    }
    const matched = $$(".sku", skuGrid).filter((card) => {
      const name = ((card.querySelector(".sku-name span") || {}).textContent || "").toLowerCase();
      return name.includes(query) || card.dataset.flavs.toLowerCase().includes(query) || card.dataset.type.toLowerCase().includes(query);
    });
    const types = new Set(matched.map((c) => c.dataset.type));
    const flavs = new Set();
    matched.forEach((c) => c.dataset.flavs.split(",").forEach((f) => flavs.add(f)));
    typeChips.forEach((c) => c.classList.toggle("chip-hidden", c.dataset.type !== "all" && !types.has(c.dataset.type)));
    flavChips.forEach((c) => c.classList.toggle("chip-hidden", c.dataset.key !== "all" && !flavs.has(c.dataset.key)));
    // if the active chip got hidden, fall back to "all"
    const atc = typeChips.find((c) => c.dataset.type === activeType);
    if (activeType !== "all" && (!atc || atc.classList.contains("chip-hidden"))) {
      activeType = "all";
      typeChips.forEach((c) => c.classList.toggle("active", c.dataset.type === "all"));
    }
    const afc = flavChips.find((c) => c.dataset.key === activeFlav);
    if (activeFlav !== "all" && (!afc || afc.classList.contains("chip-hidden"))) {
      activeFlav = "all";
      flavChips.forEach((c) => c.classList.toggle("active", c.dataset.key === "all"));
    }
  }
  function setFlavour(key, btn) {
    activeFlav = key;
    $$(".flav", flavGrid).forEach((b) => b.classList.toggle("active", b === btn));
    applyFilters();
  }
  $$(".type-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeType = chip.dataset.type;
      $$(".type-chip").forEach((c) => c.classList.toggle("active", c === chip));
      applyFilters();
    });
  });
  const shopSearch = $("#shopSearch");
  if (shopSearch) {
    shopSearch.addEventListener("input", () => { query = shopSearch.value.trim().toLowerCase(); updateChips(); applyFilters(); });
  }

  /* ============================================================
     3. CART (count + fly-to-cart)
  ============================================================ */
  let cartN = 0, cartTotal = 0;
  const cartBtn = $("#cartBtn");
  const cartCount = $("#cartCount");
  const cartDock = $("#cartDock");
  const cartSum = $("#cartSum");

  // reveal the dock once the shop is reached; hide it back at the very top / in the footer
  const shopEl = $("#shop");
  const footerEl = $("#footer");
  function syncDock() {
    const shopTop = shopEl.getBoundingClientRect().top;
    const footTop = footerEl.getBoundingClientRect().top;
    const show = shopTop < window.innerHeight * 0.6 && footTop > window.innerHeight * 0.4;
    cartDock.classList.toggle("show", show);
    cartDock.setAttribute("aria-hidden", show ? "false" : "true");
  }

  /* cart adds + fly-to-cart are owned by order.js (window.PopbarCart). */

  /* ============================================================
     4. ABOUT CAROUSEL (compact — arrow + dots)
  ============================================================ */
  const aboutTrack = $("#aboutTrack");
  let aIdx = 0;
  let goAbout = function () {};
  if (aboutTrack) {
    const aSlides = $$(".about-slide", aboutTrack);
    const aDots = $$("#aboutDots span");
    goAbout = (i) => {
      aIdx = (i + aSlides.length) % aSlides.length;
      aboutTrack.style.transform = `translateX(${-aIdx * 100}%)`;
      aDots.forEach((d, j) => d.classList.toggle("active", j === aIdx));
    };
    const an = $("#aboutNext"); if (an) an.addEventListener("click", () => goAbout(aIdx + 1));
    const ap = $("#aboutPrev"); if (ap) ap.addEventListener("click", () => goAbout(aIdx - 1));
    aDots.forEach((d, j) => d.addEventListener("click", () => goAbout(j)));
  }

  /* masked flavour popsicle (carousel slide 1) — gentle flat crossfade */
  const aboutPop = $("#aboutPop");
  if (aboutPop && !reduced) {
    const layers = $$("[data-skin]", aboutPop);
    const TEX = ["assets/ing-falsa.jpg", "assets/ing-mango.jpg", "assets/ing-strawberry.jpg", "assets/ing-blueberry.jpg", "assets/ing-brownie.jpg", "assets/ing-pomegranate.jpg"];
    TEX.forEach((s) => { const im = new Image(); im.src = s; });
    let fi = 0, lf = 0;
    setInterval(() => {
      fi = (fi + 1) % TEX.length;
      const nxt = layers[1 - lf], cur = layers[lf];
      nxt.style.backgroundImage = "url('" + TEX[fi] + "')";
      nxt.classList.add("on");
      cur.classList.remove("on");
      lf = 1 - lf;
    }, 2000);
  }

  /* ============================================================
     5. SCROLL TRAVELER — leftmost hero pop flies down to the
        about fold, scales down, hands off to the flat masking.
  ============================================================ */
  const traveler = $("#traveler");
  const firstPop = $(".hero-pop");
  if (traveler && firstPop && aboutPop && !reduced) {
    const AR = 0.406; // crop-pop-ice aspect (w / h)
    let startR = null, endR = null, travelEnd = 1, p = -1, target = 0, running = false, docked = null;

    const rectDoc = (el) => { const r = el.getBoundingClientRect(); return { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height }; };
    function measure() {
      startR = rectDoc(firstPop);
      const ab = rectDoc(aboutPop);
      travelEnd = Math.max(260, ab.y + ab.h / 2 - innerHeight * 0.5);
    }
    function apply() {
      if (!startR) return;
      // while the lolly is travelling, keep its carousel slide (0) in view so it always lands
      if (p < 0.9 && aIdx !== 0) goAbout(0);
      const ab = rectDoc(aboutPop);
      endR = { cx: ab.x + ab.w / 2, cy: ab.y + ab.h / 2, w: ab.w };
      const t = easeInOut(p);
      const w = lerp(startR.w, endR.w, t);
      const h = w / AR;
      const cx = lerp(startR.x + startR.w / 2, endR.cx, t);
      const cy = lerp(startR.y + startR.h / 2, endR.cy, t);
      traveler.style.width = w + "px";
      traveler.style.transform = `translate(${cx - w / 2 - scrollX}px, ${cy - h / 2 - scrollY}px)`;
      const isDocked = p > 0.97;
      traveler.classList.toggle("active", p > 0.03 && !isDocked);
      if (isDocked !== docked) {
        docked = isDocked;
        aboutPop.classList.toggle("holding", !isDocked);
      }
    }
    function frame() {
      target = clamp(scrollY / travelEnd, 0, 1);
      p += (target - p) * 0.18;
      if (Math.abs(target - p) < 0.0008) p = target;
      apply();
      if (p !== target) requestAnimationFrame(frame); else running = false;
    }
    function wake() { if (!running) { running = true; requestAnimationFrame(frame); } }
    function init() { measure(); p = clamp(scrollY / travelEnd, 0, 1); apply(); }
    aboutPop.classList.add("holding");
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", () => { measure(); wake(); });
    if (document.readyState === "complete") init();
    else window.addEventListener("load", init);
  }

  /* ============================================================
     6. HERO — per-popsicle hover handled in CSS; click → detail
        handled by order.js. (mouse parallax below.)
  ============================================================ */
  const heroEl = $("#hero");

  /* ============================================================
     7. MOBILE NAV
  ============================================================ */
  const navToggle = $("#navToggle");
  const navTabs = $("#navTabs");
  const navScrim = $("#navScrim");
  const closeDrawer = () => { navTabs.classList.remove("open"); document.body.classList.remove("drawer-open"); };
  navToggle.addEventListener("click", () => {
    navTabs.classList.toggle("open");
    document.body.classList.toggle("drawer-open", navTabs.classList.contains("open"));
  });
  navTabs.addEventListener("click", (e) => { if (e.target.closest(".nav-tab") || e.target.closest(".nav-sub") || e.target.closest("#navClose")) closeDrawer(); });
  if (navScrim) navScrim.addEventListener("click", closeDrawer);

  /* ============================================================
     8. SECTION REVEALS
  ============================================================ */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("inview"); }),
    { threshold: 0.18 }
  );
  ["#story", "#shop", "#deals"].forEach((s) => { const el = $(s); if (el) io.observe(el); });

  $$(".type-chip").forEach((c, i) => c.style.setProperty("--d", i * 0.05 + "s"));

  /* ============================================================
     7. DEALS CAROUSEL
  ============================================================ */
  const rail = $("#dealsRail");
  const dots = $$(".deal-dot");
  let dealIdx = 0;
  const dealCount = $$(".deal-card", rail).length;

  function goDeal(i) {
    dealIdx = clamp(i, 0, dealCount - 1);
    const card = $(".deal-card", rail);
    const step = card.offsetWidth + 46;
    rail.style.transform = `translateX(${-dealIdx * step}px)`;
    dots.forEach((d, j) => d.classList.toggle("active", j === dealIdx));
  }
  $("#dealPrev").addEventListener("click", () => goDeal(dealIdx - 1));
  $("#dealNext").addEventListener("click", () => goDeal(dealIdx + 1));
  dots.forEach((d, j) => d.addEventListener("click", () => goDeal(j)));

  /* ============================================================
     8. SUBSCRIBE
  ============================================================ */
  const subForm = $("#subscribe");
  subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("input", subForm);
    if (!input.value.trim()) { input.focus(); return; }
    subForm.classList.add("done");
    $(".sub-label", subForm).textContent = "YOU'RE IN";
    input.value = "";
    input.placeholder = "Thanks! Sweet news coming soon";
    input.disabled = true;
  });

  /* ============================================================
     9. HERO MOUSE PARALLAX (subtle)
  ============================================================ */
  const hero = $("#hero");
  const heroPops = $$(".hero-pop");
  if (!reduced) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      heroPops.forEach((pop, i) => {
        const depth = (i % 3 + 1) * 4 * tweaks.motion;
        const fl = $(".float", pop);
        if (fl) fl.style.setProperty("translate", `${nx * depth}px ${ny * depth}px`);
      });
    });
    hero.addEventListener("mouseleave", () => heroPops.forEach((pop) => {
      const fl = $(".float", pop);
      if (fl) fl.style.removeProperty("translate");
    }));
  }

  /* ============================================================
     boot
  ============================================================ */
  function boot() {
    syncDock();
  }
  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot);
  window.addEventListener("resize", syncDock);
  window.addEventListener("scroll", syncDock, { passive: true });
})();
