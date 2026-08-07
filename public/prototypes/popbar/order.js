/* ============================================================
   POPBAR — order experience engine
   catalogue · cart store · hash router · loaders · confetti
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const CDN = "https://popbar.com.pk/cdn/shop/files/";
  const FALLBACK = "assets/pop-choc.png";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- catalogue ---------- */
  const ING = {
    chocolate: "assets/ing-brownie.jpg", strawberry: "assets/ing-strawberry.jpg",
    mango: "assets/ing-mango.jpg", blueberry: "assets/ing-blueberry.jpg",
    berry: "assets/ing-raspberry.jpg", coffee: "assets/ing-coffee.jpg",
    falsa: "assets/ing-falsa.jpg", pomegranate: "assets/ing-pomegranate.jpg",
    honey: "assets/ing-honey.jpg", matcha: "assets/flav-matcha.jpg",
  };
  // [slug, name, cat, flavs, img, price, was, blurb]
  const RAW = [
    ["belgian-choc", "Premium Belgian Chocolate Bar", "popbar", ["chocolate"], "file_2.png?v=1724148388&width=700", 435, 0, "Velvety Belgian chocolate on a stick — deep, dark and dreamy in every bite."],
    ["blackberry-raspberry", "Blackberry Raspberry", "popbar", ["berry"], "BlackBerryrasberry_1.png?v=1724147821&width=700", 196, 245, "A tart-sweet tangle of blackberries and raspberries, frozen at their peak."],
    ["blueberry-bar", "Blueberry Ice Cream Bar", "popbar", ["blueberry"], "BlueBerry.png?v=1724147854&width=700", 300, 375, "Creamy blueberry swirl bursting with real, hand-picked berries."],
    ["cafe-mocha", "Cafe Mocha Bar", "popbar", ["coffee"], "CafeMocha.png?v=1724147877&width=700", 348, 435, "Rich espresso meets smooth chocolate in this grown-up treat."],
    ["falsa", "Falsa", "popbar", ["falsa"], "file.png?v=1724148229&width=700", 196, 245, "The nostalgic tang of falsa, captured in an all-natural icy pop."],
    ["mango", "Mango", "popbar", ["mango"], "Mango.png?v=1724147807&width=700", 196, 245, "Sun-ripened mango pulp, frozen into a tropical bite of sunshine."],
    ["mango-bar", "Mango Ice Cream Bar", "popbar", ["mango"], "file_3.png?v=1724148512&width=700", 260, 325, "Creamy mango ice cream on a stick, made with real Pakistani mangoes."],
    ["matcha", "Matcha", "popbar", ["matcha"], "1755121388813_ee166ef0-5ec9-488a-ba58-cab51011aa3e.jpg?v=1755121488&width=700", 348, 435, "Stone-ground Japanese matcha, smooth, earthy and a little bit fancy."],
    ["mixed-berries", "Mixed Berries", "popbar", ["berry"], "file_1_3b271cfc-f984-45f0-a69d-09cb4f611441.png?v=1724839958&width=700", 196, 245, "A medley of summer berries in one vibrant, refreshing pop."],
    ["pomegranate", "Pure Pomegranate", "popbar", ["pomegranate"], "MixedBarries_24558826-4362-44ae-837f-d6c63af5fd46.png?v=1724839950&width=700", 245, 0, "Pure pressed pomegranate — jewel-bright, tangy and antioxidant-rich."],
    ["strawberry-raspberry", "Strawberry Raspberry Tub", "tub", ["strawberry", "berry"], "3.png?v=1724148735&width=700", 350, 0, "Two iconic berries churned into one luscious, all-natural tub."],
    ["chocolate-brownie", "Chocolate Brownie Tub", "tub", ["chocolate"], "6.png?v=1724148726&width=700", 360, 450, "Belgian chocolate ice cream loaded with fudgy brownie chunks."],
    ["coffee-tub", "Coffee Tub", "tub", ["coffee"], "4.png?v=1724148730&width=700", 360, 450, "Slow-brewed coffee ice cream for the serious caffeine lover."],
    ["honeycomb", "Honeycomb Tub", "tub", ["honey"], "5.png?v=1724148719&width=700", 280, 350, "Golden honey ice cream shot through with crunchy honeycomb shards."],
    ["mango-tub", "Mango Tub", "tub", ["mango"], "1.png?v=1724148722&width=700", 280, 350, "Experience tropical paradise with Popbar's Mango Ice Cream Pint, made from real mango pulp for a refreshingly fruity treat."],
    ["blueberry-tub", "Blueberry Ice Cream Tub", "tub", ["blueberry"], "7.png?v=1732882843&width=700", 280, 350, "Creamy blueberry ice cream by the tub — share it, or don't."],
    ["blackberries-iqf", "Blackberries (IQF)", "iqf", ["berry"], "BlackBerries-min.png?v=1724685507&width=700", 1320, 1650, "Individually quick-frozen blackberries, locked at peak ripeness."],
    ["blueberries-iqf", "Blueberries (IQF)", "iqf", ["blueberry"], "Blueberries-min.png?v=1724685509&width=700", 1320, 1650, "Individually quick-frozen blueberries — pure, frozen goodness anytime."],
  ];
  const CAT_LABEL = { popbar: "Pop Bars", tub: "Pop Bar Tubs", iqf: "IQF Fruits" };
  const PRODUCTS = {};
  RAW.forEach(([slug, name, cat, flavs, img, price, was, blurb], i) => {
    const sizes = cat === "tub"
      ? [{ label: "125 ML", price }, { label: "475 ML", price: price <= 300 ? 950 : Math.round(price * 2.6 / 10) * 10, note: "Contains 8 scoops" }]
      : cat === "iqf"
        ? [{ label: "500 G", price }, { label: "1 KG", price: price * 2 - 200, note: "Best value" }]
        : [{ label: "Single", price }];
    PRODUCTS[slug] = {
      slug, name, cat, flavs, price, was, blurb,
      img: CDN + img,
      swatch: ING[flavs[0]] || FALLBACK,
      sizes,
      rating: 3 + ((i * 7) % 3) * 0.5,
      reviews: 2 + ((i * 13) % 40),
      bullets: ["All Natural", "No Artificial Flavors", "No Artificial Colors"],
    };
  });
  window.POPBAR_PRODUCTS = PRODUCTS;
  /* real figures from the live store (belgian bar) */
  PRODUCTS["belgian-choc"].rating = 3.73;
  PRODUCTS["belgian-choc"].reviews = 11;

  const money = (n) => "Rs. " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const moneyShort = (n) => "Rs. " + Number(n).toLocaleString("en-US");

  /* ============================================================
     CART STORE  (single source of truth; persists)
  ============================================================ */
  const STORE_KEY = "popbar-cart-v1";
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { cart = []; }
  const saveCart = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) {} };
  const cartCount = () => cart.reduce((n, l) => n + l.qty, 0);
  const cartSubtotal = () => cart.reduce((n, l) => n + l.price * l.qty, 0);

  function addToCart(slug, sizeLabel, qty) {
    const p = PRODUCTS[slug];
    if (!p) return;
    const size = (p.sizes.find((s) => s.label === sizeLabel) || p.sizes[0]);
    const key = slug + "|" + size.label;
    const ex = cart.find((l) => l.key === key);
    if (ex) ex.qty += qty || 1;
    else cart.push({ key, slug, name: p.name, img: p.img, swatch: p.swatch, size: size.label, price: size.price, qty: qty || 1 });
    saveCart(); syncCart();
  }
  function setQty(key, delta) {
    const l = cart.find((x) => x.key === key);
    if (!l) return;
    l.qty += delta;
    if (l.qty <= 0) cart = cart.filter((x) => x.key !== key);
    saveCart(); syncCart();
  }
  function removeLine(key) { cart = cart.filter((x) => x.key !== key); saveCart(); syncCart(); }

  /* ---------- sync all cart-bound UI ---------- */
  const dockCount = $("#cartCount");
  const dockSum = $("#cartSum");
  const dockBtn = $("#cartBtn");
  function syncCart() {
    const n = cartCount(), sub = cartSubtotal();
    const nb = $("#navCartBadge");
    if (nb) { nb.textContent = n; nb.hidden = n === 0; }
    if (dockCount) { dockCount.textContent = n; dockCount.classList.toggle("show", n > 0); }
    if (dockBtn) dockBtn.classList.toggle("has-items", n > 0);
    if (dockSum) dockSum.textContent = moneyShort(sub);
    $$("[data-cart-count]").forEach((el) => { el.textContent = n; });
    renderCartPanel();
    if (location.hash.indexOf("#checkout") === 0) renderCheckout();
  }

  /* ============================================================
     CART MODAL
  ============================================================ */
  const FREE_AT = 2000;
  function renderCartPanel() {
    const items = $("#cartItems"), foot = $("#cartFoot"), bar = $("#freeBar"), note = $("#freeNote");
    if (!items) return;
    const sub = cartSubtotal();
    if (bar) bar.querySelector("i").style.width = Math.min(100, (sub / FREE_AT) * 100) + "%";
    if (note) {
      const left = FREE_AT - sub;
      note.innerHTML = left > 0 ? `Spend <b>${moneyShort(left)}</b> more to receive FREE DELIVERY` : `You&rsquo;ve unlocked <b>FREE DELIVERY!</b>`;
    }
    if (!cart.length) {
      items.innerHTML = '<div class="cart-empty-msg">No items yet — your first scoop is just a tap away.</div>';
    } else {
      items.innerHTML = cart.map((l) => `
        <div class="cart-line">
          <span class="ci-img" style="background-image:url('${l.img}')"></span>
          <span class="ci-name">${l.name}<small>${l.size}</small></span>
          <span class="stepper">
            <button data-dec="${l.key}" aria-label="Decrease">&minus;</button>
            <span class="q">${l.qty}</span>
            <button data-inc="${l.key}" aria-label="Increase">+</button>
          </span>
          <span class="ci-price">${moneyShort(l.price * l.qty)}</span>
        </div>`).join("");
    }
    if (foot) {
      foot.querySelector(".amt").textContent = moneyShort(sub);
      foot.querySelector(".btn-block").disabled = !cart.length;
    }
  }
  function openCart() { $("#cartOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeCart() { $("#cartOverlay").classList.remove("open"); document.body.style.overflow = ""; }

  document.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]"); if (inc) return setQty(inc.dataset.inc, 1);
    const dec = e.target.closest("[data-dec]"); if (dec) return setQty(dec.dataset.dec, -1);
    if (e.target.closest("#cartClose") || e.target.id === "cartOverlay") return closeCart();
    if (e.target.closest("#cartCheckout")) { closeCart(); go("#checkout"); }
  });
  if (dockBtn) dockBtn.addEventListener("click", (e) => { e.preventDefault(); openCart(); });
  const navCart = $("#navCart");
  if (navCart) navCart.addEventListener("click", (e) => { e.preventDefault(); openCart(); });

  /* ============================================================
     STARS helper
  ============================================================ */
  const starSvg = (on) => `<svg viewBox="0 0 24 24" class="${on ? "star-on" : "star-off"}"><path d="M12 2l2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 17.8 5.9 20.3l1.5-6.7L2.3 9l6.8-.7L12 2z"/></svg>`;
  const starsRow = (r) => { let h = ""; for (let i = 1; i <= 5; i++) h += starSvg(i <= Math.round(r)); return `<span class="stars">${h}</span>`; };

  /* ============================================================
     PRODUCT DETAIL
  ============================================================ */
  const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"></path></svg>';

  function renderDetail(slug) {
    const p = PRODUCTS[slug];
    const host = $("#detailView");
    if (!p) { go("#home"); return; }
    let curSize = p.sizes[0];
    let qty = 1;
    const related = Object.values(PRODUCTS).filter((x) => x.slug !== slug && x.flavs.some((f) => p.flavs.includes(f)));
    const others = Object.values(PRODUCTS).filter((x) => x.slug !== slug && !related.includes(x));
    const relPool = related.concat(others).slice(0, 8);

    host.innerHTML = `
      <section class="detail" data-screen-label="Product detail">
        <nav class="crumbs">
          <a href="#shop" data-home>PRODUCTS</a><span class="sep">${chev()}</span>
          <a href="#shop" data-home>${CAT_LABEL[p.cat]}</a><span class="sep">${chev()}</span>
          <span class="cur">${p.name}</span>
        </nav>
        <div class="detail-main">
          <div class="detail-thumbs">
            <button class="dthumb active" data-view="hero" style="background-image:url('${p.img}')" aria-label="Product photo"></button>
            <button class="dthumb" data-view="photo" style="background-image:url('${p.swatch}');background-size:cover" aria-label="Flavour close-up"></button>
            <button class="dthumb dthumb-nutri" data-view="nutri" aria-label="Nutrition facts"><span>Nutrition<br>Facts</span></button>
          </div>
          <div class="detail-stage" data-show="hero">
            <div class="halo"></div>
            <img class="detail-hero-img" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='${FALLBACK}'">
            <div class="stage-photo" style="background-image:url('${p.swatch}')"></div>
            ${nutriPanel(p)}
          </div>
          <div class="detail-info">
            <div class="detail-title-row">
              <h1 class="detail-title">${p.name}</h1>
              ${starsAvg(p.rating)}
              <a class="reviews" id="revJump" href="javascript:void(0)">${p.reviews} Reviews</a>
            </div>
            <p class="detail-desc">${p.blurb}</p>
            <ul class="detail-bullets">${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
            <div class="size-row" id="sizeRow">
              ${p.sizes.map((s, i) => `<button class="size-chip${i === 0 ? " active" : ""}" data-size="${s.label}">${s.label}</button>`).join("")}
              <span class="size-note">${p.sizes[0].note || ""}</span>
            </div>
            <div class="detail-price" id="detailPrice">${money(curSize.price)}${p.was ? `<span class="was">${money(p.was)}</span>` : ""}</div>
            <div class="qty-block">
              <span class="qty-label">Quantity</span>
              <div class="qty-stepper">
                <button id="qDec" aria-label="Decrease quantity">&minus;</button>
                <span class="q" id="qVal">1</span>
                <button id="qInc" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <div class="detail-cta">
              <button class="cta-pill" id="dAdd">
                <span class="cta-label">ADD TO CART</span>
                <span class="cta-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle><path d="M2 3h2.5l2.6 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6"></path></svg></span>
              </button>
              <button class="btn-lg btn-outline" id="dBuy">BUY IT NOW</button>
            </div>
            <button class="detail-share" id="dShare"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"></path><path d="M16 6l-4-4-4 4"></path><path d="M12 2v13"></path></svg>Share</button>
          </div>
        </div>
      </section>
      <section class="also">
        <div class="also-head">
          <h2>You may also like</h2>
          <div class="also-nav">
            <button class="also-arrow" id="alsoPrev" aria-label="Previous products"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"></path></svg></button>
            <button class="also-arrow" id="alsoNext" aria-label="Next products"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"></path></svg></button>
          </div>
        </div>
        <div class="also-grid" id="alsoTrack">${relPool.map(relCard).join("")}</div>
      </section>
      ${reviewsSection(p)}`;

    // size selection
    $$(".size-chip", host).forEach((c) => c.addEventListener("click", () => {
      $$(".size-chip", host).forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      curSize = p.sizes.find((s) => s.label === c.dataset.size);
      $("#detailPrice", host).innerHTML = money(curSize.price) + (p.was ? `<span class="was">${money(p.was)}</span>` : "");
      $(".size-note", host).textContent = curSize.note || "";
    }));
    $("#dAdd", host).addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const cta = btn.closest(".detail-cta");
      addToCart(slug, curSize.label, qty);
      flyToCart(btn);
      btn.classList.add("added");
      if (cta) cta.classList.add("confirming");
      $(".cta-label", btn).textContent = "ADDED TO CART";
      $(".cta-ic", btn).innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"></path></svg>';
      clearTimeout(btn._t);
      btn._t = setTimeout(() => {
        btn.classList.remove("added");
        if (cta) cta.classList.remove("confirming");
        $(".cta-label", btn).textContent = "ADD TO CART";
        $(".cta-ic", btn).innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle><path d="M2 3h2.5l2.6 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6"></path></svg>';
      }, 1600);
    });
    $("#dBuy", host).addEventListener("click", () => { addToCart(slug, curSize.label, qty); openCart(); });
    $$(".dthumb", host).forEach((t) => t.addEventListener("click", () => {
      $$(".dthumb", host).forEach((x) => x.classList.remove("active")); t.classList.add("active");
      $(".detail-stage", host).dataset.show = t.dataset.view;
    }));
    const qv = $("#qVal", host);
    $("#qInc", host).addEventListener("click", () => { qty = Math.min(12, qty + 1); qv.textContent = qty; });
    $("#qDec", host).addEventListener("click", () => { qty = Math.max(1, qty - 1); qv.textContent = qty; });
    $("#dShare", host).addEventListener("click", () => {
      if (navigator.share) navigator.share({ title: p.name, text: p.blurb, url: location.href }).catch(() => {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(() => toast("Link copied to clipboard"));
    });
    $("#revJump", host).addEventListener("click", () => {
      const sec = $("#reviewsSec", host);
      if (sec) window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
    });
    wireReviews(p, host);
    const track = $("#alsoTrack", host), aPrev = $("#alsoPrev", host), aNext = $("#alsoNext", host);
    const syncArrows = (left) => { const l = left != null ? left : track.scrollLeft; aPrev.disabled = l <= 4; aNext.disabled = l >= track.scrollWidth - track.clientWidth - 4; };
    const cardStep = () => { const c = track.firstElementChild; return c ? c.offsetWidth + 25 : track.clientWidth * 0.8; };
    let tweenId = 0;
    const glide = (to) => {
      const target = Math.max(0, Math.min(track.scrollWidth - track.clientWidth, to));
      syncArrows(target);
      if (reduced) { track.scrollLeft = target; return; }
      const from = track.scrollLeft, dist = target - from, t0 = Date.now(), id = ++tweenId;
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      (function step() {
        if (id !== tweenId) return;
        const t = Math.min(1, (Date.now() - t0) / 420);
        track.scrollLeft = from + dist * ease(t);
        if (t < 1) setTimeout(step, 16);
      })();
    };
    const jump = (dir) => { const s = cardStep(); glide(Math.round((track.scrollLeft + dir * s * 2) / s) * s); };
    aPrev.addEventListener("click", () => jump(-1));
    aNext.addEventListener("click", () => jump(1));
    track.addEventListener("scroll", () => syncArrows(), { passive: true });
    setTimeout(() => syncArrows(), 0);
    window.addEventListener("resize", () => syncArrows(), { passive: true });
    window.scrollTo(0, 0);
  }
  function chev() { return '<svg width="7" height="11" viewBox="0 0 8 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5L6.5 6.5L1.5 11.5"/></svg>'; }
  function tint(p) {
    const map = { chocolate: "#EAD9CB", berry: "#F3D3E3", blueberry: "#D6DEF0", coffee: "#E4D8CE", falsa: "#E6D6EC", mango: "#FBE6BE", pomegranate: "#F4CFD4", honey: "#FBEAC2", matcha: "#D8E6C8", strawberry: "#F6D2D8" };
    return map[p.flavs[0]] || "#F1E3EE";
  }
  function cube(p, x, y, delay) {
    return `<span class="detail-cube" style="left:${x};top:${y};background-image:url('${p.swatch}');animation-delay:${delay}"></span>`;
  }
  function relCard(p) {
    return `<article class="sku" data-product="${p.slug}" style="cursor:pointer">
      <div class="sku-img"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='${FALLBACK}'"></div>
      <div class="sku-meta">
        <div class="sku-name"><span>${p.name}</span></div>
        <div class="sku-price-row"><span class="sku-prices"><span class="sku-price">${money(p.price)}</span></span>
        <button class="sku-add" data-add="${p.slug}" aria-label="Add ${p.name}"><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M8 2.5v11M2.5 8h11"></path></svg></button></div>
      </div>
    </article>`;
  }

  /* ============================================================
     NUTRITION FACTS + CUSTOMER REVIEWS
  ============================================================ */
  const starsAvg = (r) => `<span class="stars stars-avg"><span class="row-off">${starSvg(false).repeat(5)}</span><span class="row-on" style="width:${((r / 5) * 100).toFixed(1)}%">${starSvg(true).repeat(5)}</span></span>`;
  const PIN = '<svg class="rev-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"></path><path d="M9 3h6l1 7 2 2H6l2-2 1-7z"></path></svg>';

  function nutriPanel(p) {
    const N = p.cat === "iqf"
      ? { serving: "100 g", cal: 57, rows: [["Total Fat", "0.5 g", "1%"], ["Sodium", "1 mg", "0%"], ["Total Carbohydrate", "14 g", "5%"], ["Dietary Fiber", "5 g", "18%"], ["Total Sugars", "7 g", ""], ["Protein", "1 g", "2%"]] }
      : { serving: p.cat === "tub" ? "2 scoops (100 g)" : "1 bar (70 g)", cal: 220, rows: [["Total Fat", "16 g", "24%"], ["Saturated Fat", "9.7 g", "49%"], ["Trans Fat", "0 g", ""], ["Cholesterol", "11 mg", "3%"], ["Sodium", "40 mg", "2%"], ["Total Carbohydrate", "17 g", "6%"], ["Dietary Fiber", "1 g", "4%"], ["Total Sugars", "15 g", ""], ["Protein", "5 g", "10%"]] };
    const SUB = ["Saturated Fat", "Trans Fat", "Dietary Fiber", "Total Sugars"];
    return `<div class="nutri-card">
      <div class="nutri-head">Nutrition Facts</div>
      <div class="nutri-body">
        <div class="nutri-serving">Serving size <b>${N.serving}</b></div>
        <div class="nutri-cal"><span>Calories</span><b>${N.cal}</b></div>
        <div class="nutri-dv">% Daily Value*</div>
        ${N.rows.map((r) => `<div class="nutri-row${SUB.includes(r[0]) ? " sub" : ""}"><span>${r[0]} ${r[1]}</span><b>${r[2]}</b></div>`).join("")}
        <div class="nutri-foot">*Percent Daily Values are based on a 2,000 calorie diet.</div>
      </div>
    </div>`;
  }

  const REVIEWS = {
    "belgian-choc": [
      { name: "Arifa Junaid", r: 5, v: 1, pin: 1, t: "The best", b: "Very tasty", d: "01/15/2025" },
      { name: "Adnan Asghar Ali Asghar Ali", r: 5, v: 1, pin: 1, t: "Belgian bar was fabulous.", b: "I am concerned: I order popbar month back and POP BAR asking of review after month.", d: "01/05/2026" },
      { name: "Dr Fatima Ahmed", r: 5, v: 1, t: "The best!", b: "LOVE LOVE LOOOVE!", d: "06/23/2026" },
      { name: "Imran iqbal", r: 1, v: 0, t: "Price not Mention on box", b: "Price not Mention on box Price to much High", d: "03/25/2026" },
      { name: "Asma Javed", r: 5, v: 1, t: "Awesome", b: "Awesome taste", d: "05/18/2026" },
      { name: "Kausar Nabi", r: 5, v: 1, t: "\ud83d\udc4d\ud83d\udc4c", b: "", d: "12/23/2025" },
    ],
  };
  const GENERIC_REVIEWS = [
    { name: "Hina Shah", r: 5, v: 1, t: "So creamy", b: "Tastes like real fruit, not essence.", d: "06/02/2026" },
    { name: "Bilal Khan", r: 4, v: 1, t: "Really good", b: "Quick delivery and it arrived still frozen solid.", d: "04/27/2026" },
    { name: "Maryam Tariq", r: 5, v: 1, t: "Repeat order", b: "Second time ordering \u2014 consistent every single time.", d: "03/14/2026" },
    { name: "Imran iqbal", r: 3, v: 0, t: "Decent", b: "Good taste but the price feels high for the size.", d: "02/09/2026" },
    { name: "Asma Javed", r: 5, v: 1, t: "Awesome", b: "Awesome taste", d: "05/18/2026" },
    { name: "Danish Raza", r: 4, v: 1, t: "Solid", b: "Kids finished the box in two days.", d: "01/21/2026" },
  ];
  function reviewsFor(p) {
    const base = REVIEWS[p.slug] || GENERIC_REVIEWS.slice(0, Math.max(1, Math.min(6, p.reviews)));
    return base.map((x) => Object.assign({ ts: +new Date(x.d) || 0 }, x));
  }
  function histFor(p) {
    if (p.slug === "belgian-choc") return [6, 1, 1, 1, 2];
    const n = p.reviews, r = p.rating;
    const w = [5, 4, 3, 2, 1].map((s) => Math.max(0.08, 1 - Math.abs(r - s) * 0.42));
    const tot = w.reduce((a, b) => a + b, 0);
    const c = w.map((x) => Math.floor((n * x) / tot));
    let rem = n - c.reduce((a, b) => a + b, 0);
    for (let i = 0; rem > 0; i = (i + 1) % 5) { c[i]++; rem--; }
    return c;
  }
  function reviewsSection(p) {
    const hist = histFor(p);
    const n = hist.reduce((a, b) => a + b, 0);
    const avg = n ? hist.reduce((a, c, i) => a + c * (5 - i), 0) / n : 0;
    const max = Math.max.apply(null, hist.concat(1));
    return `<section class="reviews-sec" id="reviewsSec" data-screen-label="Customer reviews">
      <h2>Customer Reviews</h2>
      <div class="rev-summary">
        <div class="rev-avg">
          ${starsAvg(avg)}
          <div class="rev-avg-num">${avg.toFixed(2)} out of 5</div>
          <div class="rev-avg-count">Based on ${n} review${n === 1 ? "" : "s"}</div>
        </div>
        <div class="rev-hist">
          ${hist.map((c, i) => `<div class="rev-hrow">${starsRow(5 - i)}<span class="rev-bar"><i style="width:${((c / max) * 100).toFixed(0)}%"></i></span><span class="rev-hcount">${c}</span></div>`).join("")}
        </div>
        <div class="rev-cta"><button class="btn-write" id="revWrite">Write a review</button></div>
      </div>
      <form class="rev-form" id="revForm" hidden novalidate>
        <div class="rev-form-row">
          <input class="field" id="rfName" placeholder="Your name">
          <div class="rev-pick" id="rfStars">${[1, 2, 3, 4, 5].map((i) => `<button type="button" data-star="${i}" aria-label="${i} star${i === 1 ? "" : "s"}">${starSvg(true)}</button>`).join("")}</div>
        </div>
        <input class="field" id="rfTitle" placeholder="Review title">
        <textarea class="field" id="rfBody" placeholder="Tell us what you think"></textarea>
        <div class="rev-form-actions">
          <button type="submit" class="btn-write">Submit review</button>
          <button type="button" class="rev-cancel" id="rfCancel">Cancel</button>
        </div>
      </form>
      <div class="rev-toolbar">
        <label class="rev-sort"><select id="revSort" aria-label="Sort reviews">
          <option value="recent">Most Recent</option>
          <option value="high">Highest Rating</option>
          <option value="low">Lowest Rating</option>
        </select></label>
        <span class="rev-showing" id="revShowing"></span>
      </div>
      <div class="rev-list" id="revList"></div>
    </section>`;
  }
  function reviewItem(rv) {
    const init = (rv.name || "A").trim().charAt(0).toUpperCase();
    return `<article class="rev">
      <div class="rev-top">${starsRow(rv.r)}<span class="rev-date">${rv.d}</span>${rv.pin ? PIN : ""}</div>
      <div class="rev-who"><span class="rev-ava">${init}</span><span class="rev-name">${rv.name}</span>${rv.v ? '<span class="rev-verified">Verified</span>' : ""}</div>
      ${rv.t ? `<div class="rev-title">${rv.t}</div>` : ""}
      ${rv.b ? `<p class="rev-body">${rv.b}</p>` : ""}
    </article>`;
  }
  function wireReviews(p, host) {
    const sec = $("#reviewsSec", host);
    if (!sec) return;
    const list = reviewsFor(p);
    const sel = $("#revSort", sec), listEl = $("#revList", sec);
    function paint() {
      const mode = sel.value;
      const arr = list.slice().sort((a, b) => mode === "high" ? (b.r - a.r || b.ts - a.ts) : mode === "low" ? (a.r - b.r || b.ts - a.ts) : b.ts - a.ts);
      arr.sort((a, b) => (b.pin || 0) - (a.pin || 0));
      listEl.innerHTML = arr.map(reviewItem).join("");
      const total = Math.max(p.reviews, arr.length);
      $("#revShowing", sec).textContent = total > arr.length ? `Showing ${arr.length} of ${total} reviews` : "";
    }
    sel.addEventListener("change", paint);
    paint();
    const form = $("#revForm", sec);
    let rfR = 5;
    const paintPick = () => $$("#rfStars button", sec).forEach((b, i) => { b.innerHTML = starSvg(i < rfR); });
    $("#revWrite", sec).addEventListener("click", () => { form.hidden = !form.hidden; if (!form.hidden) $("#rfName", sec).focus(); });
    $("#rfCancel", sec).addEventListener("click", () => { form.hidden = true; });
    $$("#rfStars button", sec).forEach((b) => b.addEventListener("click", () => { rfR = +b.dataset.star; paintPick(); }));
    paintPick();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = $("#rfTitle", sec).value.trim(), b = $("#rfBody", sec).value.trim(), name = $("#rfName", sec).value.trim();
      if (!t && !b) { toast("Tell us a little about it first"); return; }
      list.unshift({ name: name || "Anonymous", r: rfR, v: 0, t, b, d: "Just now", ts: Date.now() });
      form.hidden = true; form.reset(); rfR = 5; paintPick();
      sel.value = "recent"; paint();
      toast("Thanks! Your review has been added.");
    });
  }

  /* ============================================================
     CHECKOUT
  ============================================================ */
  function renderCheckout() {
    const host = $("#checkoutView");
    if (!host) return;
    const sub = cartSubtotal();
    const tax = Math.round(sub * 0.15);
    const delivery = sub >= FREE_AT || sub === 0 ? 0 : 260;
    const grand = sub + tax + delivery;
    const lines = cart.length ? cart.map((l) => `
      <div class="sum-line">
        <span class="si-img" style="background-image:url('${l.img}')"></span>
        <span class="si-name">${l.qty}× ${l.name} <small style="color:#909090">(${l.size})</small></span>
        <span class="si-price">${moneyShort(l.price * l.qty)}</span>
      </div>`).join("") : '<div class="cart-empty-msg">Your cart is empty.</div>';

    host.innerHTML = `
      <section class="checkout" data-screen-label="Checkout">
        <h1>Checkout</h1>
        <div class="checkout-grid">
          <form id="coForm" novalidate>
            <div class="co-section">Contact Details</div>
            <input class="field" type="email" placeholder="Enter Email Address" required>
            <div class="field-row">
              <select class="field field-sm" required><option value="" disabled selected>Title</option><option>Mr.</option><option>Ms.</option><option>Mx.</option></select>
              <input class="field" placeholder="Full Name" required>
            </div>
            <div class="field-row">
              <input class="field" placeholder="Enter Mobile Number" required>
              <input class="field" placeholder="Enter Alternate Mobile Number">
            </div>
            <input class="field" placeholder="Enter your complete delivery address" required>
            <div class="co-section">Delivery Instructions</div>
            <textarea class="field" placeholder="Write any instructions i.e. closest landmark"></textarea>
            <div class="co-section">Payment Details</div>
            <div class="pay-row" id="payRow">
              <button type="button" class="pay-card active" data-pay="cod"><div class="pay-emoji">💵</div><span>Cash on Delivery</span></button>
              <button type="button" class="pay-card" data-pay="card"><div class="pay-emoji">💳</div><span>Swipe Card on Delivery</span></button>
              <button type="button" class="pay-card" data-pay="online"><div class="pay-emoji">🏦</div><span>Online Payment</span></button>
            </div>
          </form>
          <aside class="summary">
            ${lines}
            <div class="sum-totals">
              <div class="row"><span class="lbl">${ic("wallet")} Total</span><span class="val">${moneyShort(sub)}</span></div>
              <div class="row"><span class="lbl">${ic("tax")} Estimated Tax (15%)</span><span class="val">${moneyShort(tax)}</span></div>
              <div class="row"><span class="lbl">${ic("truck")} Delivery Fee</span><span class="val">${delivery ? moneyShort(delivery) : "FREE"}</span></div>
              <div class="grand"><span class="lbl">Grand Total</span><span class="val">${moneyShort(grand)}</span></div>
            </div>
            <button class="btn-block" id="placeOrder" ${cart.length ? "" : "disabled"}>PLACE ORDER</button>
          </aside>
        </div>
      </section>`;

    $$(".pay-card", host).forEach((c) => c.addEventListener("click", () => {
      $$(".pay-card", host).forEach((x) => x.classList.remove("active")); c.classList.add("active");
    }));
    $("#placeOrder", host).addEventListener("click", () => {
      const form = $("#coForm", host);
      const reqs = $$("[required]", form);
      let ok = true;
      reqs.forEach((f) => { if (!f.value.trim()) { ok = false; f.style.borderColor = "var(--pink)"; } else { f.style.borderColor = ""; } });
      if (!ok) { toast("Please fill in your contact details"); form.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      placeOrder(grand);
    });
  }
  function ic(t) {
    const m = {
      wallet: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M16 12h.01"/>',
      tax: '<circle cx="12" cy="12" r="9"/><path d="M9 9h.01M15 15h.01M15 9l-6 6"/>',
      truck: '<path d="M3 7h11v8H3zM14 10h4l3 3v2h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${m[t]}</svg>`;
  }

  /* ============================================================
     DELIVERY AREA
  ============================================================ */
  (function () {
    const AREA_KEY = "popbar-area-v1";
    const overlay = $("#areaOverlay"), sel = $("#areaSelect"), goBtn = $("#areaGo");
    const fetchBtn = $("#areaFetch"), fetchTxt = $("#areaFetchTxt"), navBtn = $("#navArea"), navTxt = $("#navAreaTxt");
    if (!overlay) return;
    let saved = null;
    try { saved = localStorage.getItem(AREA_KEY); } catch (e) {}
    const paintNav = () => {
      if (saved) { navTxt.textContent = saved; navBtn.classList.add("set"); }
      else { navTxt.textContent = "Select area"; navBtn.classList.remove("set"); }
    };
    const openArea = () => {
      if (saved) sel.value = saved;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeArea = () => { overlay.classList.remove("open"); document.body.style.overflow = ""; };
    let fetchT;
    function startFetch() {
      clearTimeout(fetchT);
      fetchBtn.classList.add("busy");
      fetchTxt.textContent = "Fetching location…";
      fetchT = setTimeout(() => {
        fetchBtn.classList.remove("busy");
        fetchTxt.textContent = "Use Current Location";
        toast("Couldn't detect your area — pick below");
      }, reduced ? 400 : 1800);
    }
    sel.addEventListener("change", () => { goBtn.disabled = !sel.value; });
    goBtn.addEventListener("click", () => {
      if (!sel.value) return;
      saved = sel.value;
      try { localStorage.setItem(AREA_KEY, saved); } catch (e) {}
      paintNav(); closeArea();
      toast("Delivering to " + saved);
    });
    fetchBtn.addEventListener("click", startFetch);
    navBtn.addEventListener("click", () => { goBtn.disabled = !saved; openArea(); });
    overlay.addEventListener("click", (e) => { if (e.target === overlay && saved) closeArea(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && saved) closeArea(); });
    paintNav();
    if (!saved) setTimeout(openArea, reduced ? 200 : 900);
  })();

  /* ============================================================
     LOADER (churning popsicle) + ORDER CONFIRMATION
  ============================================================ */
  function showLoader(messages, totalMs, done) {
    const l = $("#loader"), txt = $("#loaderText"), bar = $("#loaderBar").querySelector("i");
    l.classList.add("show");
    let i = 0;
    txt.textContent = messages[0];
    bar.style.width = "8%";
    const step = totalMs / messages.length;
    const tick = setInterval(() => {
      i++;
      if (i < messages.length) {
        txt.style.opacity = "0";
        setTimeout(() => { txt.textContent = messages[i]; txt.style.opacity = "1"; }, 200);
        bar.style.width = Math.min(96, 8 + (i / (messages.length - 1)) * 88) + "%";
      }
    }, step);
    setTimeout(() => {
      clearInterval(tick);
      bar.style.width = "100%";
      setTimeout(() => { l.classList.remove("show"); bar.style.width = "0"; done && done(); }, 400);
    }, totalMs);
  }

  function placeOrder(grand) {
    showLoader(["Churning your order…", "Packing it cold…", "Calling the delivery rider…", "Almost there…"], reduced ? 600 : 3200, () => {
      const oid = "PB-" + Math.floor(100000 + Math.random() * 900000);
      cart = []; saveCart(); syncCart();
      renderOrder(oid, grand);
      go("#order", true);
      confetti();
    });
  }
  function renderOrder(oid, grand) {
    $("#orderView").innerHTML = `
      <section class="order" data-screen-label="Order confirmed">
        <div class="order-card">
          <div class="order-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"/></svg></div>
          <h1>Order confirmed!</h1>
          <p>Your frozen treats are on their way — kept perfectly cold.</p>
          <p>Order <span class="oid">#${oid}</span> &middot; ${moneyShort(grand)}</p>
          <a class="btn-pill" href="#home" data-home>BACK TO HOME ${ARROW}</a>
        </div>
      </section>`;
  }
  function confetti() {
    if (reduced) return;
    const c = document.createElement("div"); c.className = "confetti";
    const colors = ["#88186E", "#E21B57", "#FFC02E", "#A946C8", "#1F8A5B"];
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDuration = 2 + Math.random() * 2 + "s";
      s.style.animationDelay = Math.random() * 0.6 + "s";
      c.appendChild(s);
    }
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }

  /* ============================================================
     micro: button burst + toast
  ============================================================ */
  function burst(btn) {
    if (reduced) return;
    btn.animate([{ transform: "scale(1)" }, { transform: "scale(0.94)" }, { transform: "scale(1)" }], { duration: 260, easing: "cubic-bezier(.34,1.56,.64,1)" });
  }
  let toastT;
  function toast(msg) {
    let t = $("#pbToast");
    if (!t) { t = document.createElement("div"); t.id = "pbToast"; document.body.appendChild(t); t.style.cssText = "position:fixed;left:50%;bottom:104px;transform:translateX(-50%) translateY(20px);background:#1A1A1F;color:#fff;padding:13px 22px;border-radius:999px;font-size:14px;font-weight:600;z-index:140;opacity:0;transition:opacity .3s,transform .3s;box-shadow:0 12px 30px rgba(0,0,0,.25);pointer-events:none;"; }
    t.textContent = msg;
    requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(-50%) translateY(0)"; });
    clearTimeout(toastT);
    toastT = setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(-50%) translateY(20px)"; }, 1900);
  }
  window.PopbarToast = toast;

  /* ============================================================
     STORE LOCATIONS
  ============================================================ */
  const CITIES = [
    { slug: "karachi", name: "Karachi", sub: "4 locations", ph: "Karachi \u2014 city photo" },
    { slug: "lahore", name: "Lahore", sub: "3 locations", ph: "Lahore \u2014 city photo" },
    { slug: "islamabad", name: "Islamabad", sub: "2 locations", ph: "Islamabad \u2014 city photo" },
  ];
  const STORES = {
    karachi: [
      { name: "Popbar Bahadurabad", addr: "Shop 4, Adam Arcade, Alamgir Rd, Bahadurabad, Karachi", hours: "12 pm \u2013 12 am", tel: "+92 21 3413 0801", lat: 24.8791, lng: 67.0645 },
      { name: "Popbar Clifton", addr: "Boat Basin, Block 5 Clifton, Karachi", hours: "1 pm \u2013 1 am", tel: "+92 21 3583 0912", lat: 24.8138, lng: 67.0300 },
      { name: "Popbar DHA Phase 6", addr: "Bukhari Commercial Ln 5, DHA Phase 6, Karachi", hours: "12 pm \u2013 12 am", tel: "+92 21 3524 4470", lat: 24.7936, lng: 67.0553 },
      { name: "Popbar Gulshan", addr: "Main Rashid Minhas Rd, Gulshan-e-Iqbal Block 4, Karachi", hours: "12 pm \u2013 11 pm", tel: "+92 21 3481 6620", lat: 24.9180, lng: 67.0971 },
    ],
    lahore: [
      { name: "Popbar Gulberg", addr: "MM Alam Rd, Gulberg III, Lahore", hours: "12 pm \u2013 1 am", tel: "+92 42 3575 0410", lat: 31.5090, lng: 74.3441 },
      { name: "Popbar DHA Y-Block", addr: "Y-Block Commercial Market, DHA Phase 3, Lahore", hours: "12 pm \u2013 12 am", tel: "+92 42 3589 2231", lat: 31.4795, lng: 74.3843 },
      { name: "Popbar Johar Town", addr: "Khayaban-e-Firdousi, Johar Town, Lahore", hours: "1 pm \u2013 11 pm", tel: "+92 42 3517 8845", lat: 31.4676, lng: 74.2728 },
    ],
    islamabad: [
      { name: "Popbar F-7 Markaz", addr: "Jinnah Super Market, F-7 Markaz, Islamabad", hours: "12 pm \u2013 12 am", tel: "+92 51 265 4409", lat: 33.7195, lng: 73.0570 },
      { name: "Popbar Giga Mall", addr: "Giga Mall, DHA Phase 2, GT Rd, Islamabad", hours: "11 am \u2013 11 pm", tel: "+92 51 549 0112", lat: 33.5210, lng: 73.1580 },
    ],
  };
  const DIR_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3-8 3 8-3 10-3-10z" transform="rotate(45 12 12)"></path></svg>';
  const gmapsDir = (s) => "https://www.google.com/maps/dir/?api=1&destination=" + s.lat + "," + s.lng + "&destination_place_id=&travelmode=driving";
  let storesMap = null;
  function renderStores(citySlug) {
    const host = $("#storesView");
    if (storesMap) { storesMap.remove(); storesMap = null; }
    const city = CITIES.find((c) => c.slug === citySlug);
    if (!city) {
      host.innerHTML = `<section class="stores" data-screen-label="Store locations \u2014 cities">
        <div class="stores-crumbs"><a href="#home">Home</a> / <b>Store locations</b></div>
        <h2>find us in your city</h2>
        <p class="stores-intro">Pick your city to see every spot serving Popbar.</p>
        <div class="city-grid">
          ${CITIES.map((c) => `<button class="city-card" data-city="${c.slug}">
            <span class="city-img"><image-slot id="city-${c.slug}" shape="rect" placeholder="${c.ph}"></image-slot></span>
            <span class="city-meta"><span><span class="city-name">${c.name}</span><br><span class="city-sub">${c.sub}</span></span>
            <span class="city-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></span>
          </button>`).join("")}
        </div>
      </section>`;
      $$(".city-card", host).forEach((b) => b.addEventListener("click", () => go("#stores/" + b.dataset.city)));
      return;
    }
    const list = STORES[citySlug];
    host.innerHTML = `<section class="stores" data-screen-label="Store locations \u2014 ${city.name}">
      <div class="stores-crumbs"><a href="#home">Home</a> / <a href="#stores">Store locations</a> / <b>${city.name}</b></div>
      <h2 style="text-align: left">popbar in ${city.name.toLowerCase()}</h2>
      <p class="stores-intro" style="text-align: left">${list.length} spots to grab a bar \u2014 tap one to see it on the map.</p>
      <div class="stores-body">
        <div class="store-list">
          ${list.map((s, i) => `<button class="store-card${i === 0 ? " sel" : ""}" data-i="${i}">
            <div class="store-name">${s.name}</div>
            <div class="store-addr">${s.addr}</div>
            <div class="store-hours"><b>Open</b> \u00b7 ${s.hours}</div>
          </button>`).join("")}
        </div>
        <div class="stores-map" id="storesMap"></div>
      </div>
    </section>`;
    if (typeof L === "undefined") { $("#storesMap").innerHTML = '<p style="padding:20px;font-size:14px;color:#909090">Map unavailable offline.</p>'; return; }
    storesMap = L.map("storesMap", { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "\u00a9 OpenStreetMap contributors" }).addTo(storesMap);
    const pinIcon = (sel) => L.divIcon({ className: "", html: `<div class="pin-pop${sel ? " sel" : ""}"><svg viewBox="0 0 34 44"><path d="M17 1C8.2 1 1 8.2 1 17c0 11 16 26 16 26s16-15 16-26C33 8.2 25.8 1 17 1z" fill="#C42375" stroke="#88186E" stroke-width="1.5"/><circle cx="17" cy="16" r="6.5" fill="#fff"/></svg></div>`, iconSize: [34, 44], iconAnchor: [17, 44], popupAnchor: [0, -44] });
    const markers = list.map((s, i) => L.marker([s.lat, s.lng], { icon: pinIcon(i === 0) }).addTo(storesMap)
      .bindPopup(`<b>${s.name}</b>${s.addr}<br><a href="${gmapsDir(s)}" target="_blank" rel="noopener" style="color:#C42375;font-weight:700">Get directions \u2192</a>`));
    storesMap.fitBounds(L.latLngBounds(list.map((s) => [s.lat, s.lng])).pad(0.25));
    const select = (i) => {
      $$(".store-card", host).forEach((c, j) => c.classList.toggle("sel", j === i));
      markers.forEach((m, j) => m.setIcon(pinIcon(j === i)));
      storesMap.flyTo([list[i].lat, list[i].lng], Math.max(storesMap.getZoom(), 14), { duration: 0.6 });
      markers[i].openPopup();
    };
    $$(".store-card", host).forEach((c) => c.addEventListener("click", (e) => { if (!e.target.closest("a")) select(+c.dataset.i); }));
    markers.forEach((m, i) => m.on("click", () => select(i)));
    setTimeout(() => storesMap.invalidateSize(), 60);
  }

  /* ============================================================
     CATEGORY PAGES
  ============================================================ */
  const CAT_TITLE = { popbar: "Pop Bars", tub: "Pop Bar Tubs", iqf: "IQF Fruits & Vegetables" };
  const CAT_TAG = { popbar: "All-natural ice cream on a stick", tub: "Scoopable happiness by the tub", iqf: "Individually quick-frozen, farm to freezer" };
  const FLAV_LABEL = { chocolate: "Chocolate", berry: "Mixed Berries", blueberry: "Blueberry", coffee: "Coffee", falsa: "Falsa", mango: "Mango", pomegranate: "Pomegranate", honey: "Honeycomb", matcha: "Matcha", strawberry: "Strawberry" };
  function renderCategory(cat) {
    const host = $("#categoryView");
    const items = Object.values(PRODUCTS).filter((p) => p.cat === cat);
    if (!items.length) { go("#home"); return; }
    const flavs = [...new Set(items.flatMap((p) => p.flavs))];
    let curFlav = "all";
    host.innerHTML = `<section class="catpage" data-screen-label="Category \u2014 ${CAT_TITLE[cat]}">
      <div class="stores-crumbs"><a href="#home">Home</a> / <a href="#shop">Products</a> / <b>${CAT_TITLE[cat]}</b></div>
      <h2>${CAT_TITLE[cat].toLowerCase()}</h2>
      <p class="catpage-tag">${CAT_TAG[cat]}</p>
      <div class="cat-flav-wrap">
        <button class="cat-flav-nav" data-dir="-1" aria-label="Scroll flavours left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg></button>
        <div class="cat-flavs" id="catFlavs">
          <button class="cat-flav active" data-flav="all"><span class="cf-all">All</span><span class="cf-name">All flavours</span></button>
          ${flavs.map((f) => `<button class="cat-flav" data-flav="${f}"><span class="cf-swatch" style="background-image:url('${ING[f] || FALLBACK}')"></span><span class="cf-name">${FLAV_LABEL[f] || f}</span></button>`).join("")}
        </div>
        <button class="cat-flav-nav" data-dir="1" aria-label="Scroll flavours right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg></button>
      </div>
      <div class="sku-grid cat-grid" id="catGrid"></div>
    </section>`;
    const grid = $("#catGrid", host);
    const paint = () => {
      const list = curFlav === "all" ? items : items.filter((p) => p.flavs.includes(curFlav));
      grid.innerHTML = list.length ? list.map(relCard).join("") : '<p class="cat-empty">No ' + (FLAV_LABEL[curFlav] || "").toLowerCase() + " in this range yet \u2014 try another flavour.</p>";
    };
    $$(".cat-flav", host).forEach((b) => b.addEventListener("click", () => {
      curFlav = b.dataset.flav;
      $$(".cat-flav", host).forEach((x) => x.classList.toggle("active", x === b));
      paint();
    }));
    const row = $("#catFlavs", host);
    $$(".cat-flav-nav", host).forEach((b) => b.addEventListener("click", () => { row.scrollLeft += 280 * (+b.dataset.dir); }));
    paint();
    window.scrollTo(0, 0);
  }

  /* ============================================================
     FAQS PAGE
  ============================================================ */
  const FAQS = [
    ["What makes PopBar different from other ice cream brands?", "Popbar is all-natural, made from the freshest ingredients, including exotic fruits and berries. We\u2019re committed to quality and authentic flavors that set us apart."],
    ["Are Popbar ice creams really all-natural?", "Yes! We use only natural ingredients with no artificial flavors, colors, or preservatives, ensuring you enjoy the purest taste in every bite."],
    ["Where is your Shop?", "Popbar is available at 150+ marts and grocery stores across Karachi, Lahore and Islamabad/Rawalpindi, as well as online through our website. Check our store locator for the nearest spot!"],
    ["Do you have any dairy-free or vegan options?", "Yes, Popbar Ice Popsicles are a great choice! They are made from 100% fruit pulp, making them dairy-free, gluten-free, and suitable for a vegan diet."],
    ["What is the shelf life of Popbar ice cream?", "Unopened Popbar ice cream has a shelf life of up to 6 months when stored properly in the freezer."],
    ["Will my Ice cream melt if I order it through delivery?", "No It won\u2019t melt. We deliver our orders in a temperature controlled box."],
    ["How long does it take to deliver?", "We deliver orders within 4 hours after the order is confirmed."],
    ["Can I order Popbar for events or catering?", "Yes, we offer catering services for events, parties, and gatherings. Contact us for more details on how we can make your event extra special."],
    ["How do I contact customer support?", "You can reach out to us via our Contact Us page, email, or social media. We\u2019re here to help with any questions or concerns you may have."],
  ];
  function renderFaqs() {
    const host = $("#faqsView");
    if (host.dataset.done) { window.scrollTo(0, 0); return; }
    host.dataset.done = "1";
    host.innerHTML = `<section class="faqs" data-screen-label="FAQs">
      <div class="stores-crumbs"><a href="#home">Home</a> / <b>FAQs</b></div>
      <h2>things you wonder</h2>
      <div class="faqs-body">
        <div class="faq-grid">${FAQS.map((f) => `<div class="faq"><h3 style="height: 24px">${f[0]}</h3><p>${f[1]}</p></div>`).join("")}</div>
        <aside class="bts">
          <div class="bts-grid">
            <figure class="bts-item bts-tall"><img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80" alt="Colorful fruit popsicles held up" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=700&q=80'"></figure>
            <figure class="bts-item"><img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=700&q=80" alt="Berry smoothie being poured in the kitchen" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=80'"></figure>
            <figure class="bts-item"><img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=80" alt="Fresh berries and fruit prep" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80'"></figure>
            <figure class="bts-item bts-tall"><img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80" alt="Ice cream cone with sprinkles" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80'"></figure>
          </div>
        </aside>
      </div>
    </section>`;
    window.scrollTo(0, 0);
  }

  /* ============================================================
     ROUTER
  ============================================================ */
  function go(hash, replace) {
    if (replace) location.replace(hash);
    else location.hash = hash;
  }
  function route() {
    const h = location.hash || "#home";
    const body = document.body;
    body.classList.remove("route-detail", "route-checkout", "route-order", "route-stores", "route-category", "route-faqs");
    $$(".view").forEach((v) => v.classList.remove("active"));

    if (h.indexOf("#product/") === 0) {
      const slug = h.slice("#product/".length);
      body.classList.add("route-detail");
      renderDetail(slug);
      $("#detailView").classList.add("active");
    } else if (h === "#checkout") {
      body.classList.add("route-checkout");
      renderCheckout();
      $("#checkoutView").classList.add("active");
      window.scrollTo(0, 0);
    } else if (h === "#stores" || h.indexOf("#stores/") === 0) {
      body.classList.add("route-stores");
      renderStores(h.indexOf("#stores/") === 0 ? h.slice("#stores/".length) : null);
      $("#storesView").classList.add("active");
      window.scrollTo(0, 0);
    } else if (h.indexOf("#category/") === 0) {
      body.classList.add("route-category");
      renderCategory(h.slice("#category/".length));
      $("#categoryView").classList.add("active");
    } else if (h === "#faqs") {
      body.classList.add("route-faqs");
      renderFaqs();
      $("#faqsView").classList.add("active");
    } else if (h === "#order") {
      body.classList.add("route-order");
      $("#orderView").classList.add("active");
      window.scrollTo(0, 0);
    }
    // #home and in-page anchors (#shop, #deals…) fall through → home shown
  }
  window.addEventListener("hashchange", route);

  /* ============================================================
     global click wiring (products + add buttons)
  ============================================================ */
  function slugFromCard(card) {
    if (card.dataset.product) return card.dataset.product;
    const name = ($(".sku-name span", card) || {}).textContent || "";
    const hit = Object.values(PRODUCTS).find((p) => p.name === name);
    return hit ? hit.slug : null;
  }
  document.addEventListener("click", (e) => {
    // add-to-cart "+" buttons (shop grid, related, etc.)
    const add = e.target.closest(".sku-add, [data-add]");
    if (add) {
      e.preventDefault(); e.stopPropagation();
      const slug = add.dataset.add || slugFromCard(add.closest(".sku"));
      if (slug) { flyToCart(add); addToCart(slug, null, 1); }
      return;
    }
    // navigating to a product detail
    const card = e.target.closest("[data-product], .sku");
    if (card && !e.target.closest(".sku-add")) {
      const slug = slugFromCard(card);
      if (slug) { e.preventDefault(); routeWithLoad("#product/" + slug); }
      return;
    }
    // hero pop click
    const pop = e.target.closest(".hero-pop[data-product], #traveler[data-product]");
    if (pop) { e.preventDefault(); routeWithLoad("#product/" + pop.dataset.product); }
  });

  function routeWithLoad(hash) { go(hash); }

  /* ---------- fly-to-cart dot (shared) ---------- */
  function flyToCart(btn) {
    if (reduced || !dockBtn) return;
    const from = btn.getBoundingClientRect();
    const to = dockBtn.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.style.cssText = "position:fixed;width:14px;height:14px;border-radius:50%;background:var(--magenta);z-index:90;pointer-events:none;left:" + (from.left + from.width / 2 - 7) + "px;top:" + (from.top + from.height / 2 - 7) + "px;";
    document.body.appendChild(dot);
    const dx = to.left + 34 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    dot.animate([
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 80}px) scale(.9)`, opacity: 1, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(.4)`, opacity: 0.6 },
    ], { duration: 600, easing: "cubic-bezier(.45,.05,.55,.95)" }).onfinish = () => dot.remove();
  }

  /* ============================================================
     HERO ACTIONS: scroll-to-flavours + search
  ============================================================ */
  const scrollBtn = $("#scrollFlavours");
  if (scrollBtn) scrollBtn.addEventListener("click", () => {
    if (location.hash && location.hash !== "#home") { go("#home"); setTimeout(scrollToShop, 80); }
    else scrollToShop();
  });
  function scrollToShop() {
    const shop = $("#shop");
    if (!shop) return;
    window.scrollTo({ top: shop.offsetTop - 64, behavior: reduced ? "auto" : "smooth" });
  }

  const searchOverlay = $("#searchOverlay");
  const searchInput = $("#searchInput");
  const searchResults = $("#searchResults");
  let kbdIdx = -1;

  function openSearch() {
    searchOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    renderResults("");
    setTimeout(() => searchInput.focus(), 80);
  }
  function closeSearch() {
    searchOverlay.classList.remove("open");
    document.body.style.overflow = "";
    searchInput.value = "";
    kbdIdx = -1;
  }
  function renderResults(q) {
    const query = q.trim().toLowerCase();
    let list = Object.values(PRODUCTS);
    if (query) list = list.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.flavs.some((f) => f.includes(query)) ||
      CAT_LABEL[p.cat].toLowerCase().includes(query));
    kbdIdx = -1;
    if (!list.length) {
      searchResults.innerHTML = '<div class="search-empty">No flavours match &ldquo;' + q + '&rdquo; — try &ldquo;mango&rdquo; or &ldquo;chocolate&rdquo;.</div>';
      return;
    }
    const head = query ? "" : '<div class="search-section">Popular right now</div>';
    searchResults.innerHTML = head + list.map((p) => `
      <button class="sresult" data-go="${p.slug}">
        <span class="sr-img" style="background-image:url('${p.img}')"></span>
        <span class="sr-name">${p.name}<small>${CAT_LABEL[p.cat]}</small></span>
        <span class="sr-price">${money(p.price)}</span>
        <span class="sr-go">${ARROW}</span>
      </button>`).join("");
  }
  function searchPick(el) {
    const slug = el.dataset.go;
    closeSearch();
    routeWithLoad("#product/" + slug);
  }
  if ($("#searchBtn")) $("#searchBtn").addEventListener("click", openSearch);
  if ($("#navSearch")) $("#navSearch").addEventListener("click", openSearch);
  if ($("#navCart")) $("#navCart").addEventListener("click", openCart);
  if ($("#navProfile")) $("#navProfile").addEventListener("click", () => toast("Sign-in is coming soon"));
  if ($("#dockSearch")) $("#dockSearch").addEventListener("click", openSearch);
  if (searchInput) {
    searchInput.addEventListener("input", () => renderResults(searchInput.value));
    searchInput.addEventListener("keydown", (e) => {
      const items = $$(".sresult", searchResults);
      if (e.key === "ArrowDown") { e.preventDefault(); kbdIdx = Math.min(items.length - 1, kbdIdx + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); kbdIdx = Math.max(0, kbdIdx - 1); }
      else if (e.key === "Enter") { e.preventDefault(); const t = items[kbdIdx] || items[0]; if (t) searchPick(t); return; }
      else return;
      items.forEach((it, i) => it.classList.toggle("kbd", i === kbdIdx));
    });
  }
  document.addEventListener("click", (e) => {
    const r = e.target.closest(".sresult"); if (r) return searchPick(r);
    if (e.target.closest("#searchClose") || e.target.id === "searchOverlay") return closeSearch();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeSearch(); closeCart(); }
    else if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "") && !searchOverlay.classList.contains("open")) {
      e.preventDefault(); openSearch();
    }
  });

  /* ---------- boot ---------- */
  syncCart();
  route();
})();
