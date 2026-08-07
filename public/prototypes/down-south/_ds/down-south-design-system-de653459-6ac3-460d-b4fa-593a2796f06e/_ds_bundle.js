/* @ds-bundle: {"format":3,"namespace":"DownSouthDesignSystem_de6534","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"ProductShot","sourcePath":"components/core/ProductShot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"acdd27d2e7b2","components/core/Button.jsx":"6a63bad5662f","components/core/Card.jsx":"aeaa871b382c","components/core/IconButton.jsx":"2619219a9236","components/core/Input.jsx":"c14e44cc99b4","components/core/ProductCard.jsx":"402b2235091a","components/core/ProductShot.jsx":"50bcc691f445","components/core/Tag.jsx":"6ff899967481","ui_kits/marketing-site/sections.jsx":"638ad28e7a48","ui_kits/ordering-app/data.js":"c72d02fffdae","ui_kits/ordering-app/screens.jsx":"d413a0b2d157"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DownSouthDesignSystem_de6534 = window.DownSouthDesignSystem_de6534 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South Badge — small status / category pill.
 * tones: yellow, blue, sand, ink, outline.
 */
function Badge({
  children,
  tone = "yellow",
  style = {},
  ...rest
}) {
  const tones = {
    yellow: {
      background: "var(--ds-yellow)",
      color: "var(--ds-ink)",
      border: "none"
    },
    blue: {
      background: "var(--ds-blue)",
      color: "var(--ds-ink)",
      border: "none"
    },
    sand: {
      background: "var(--ds-sand-300)",
      color: "var(--ds-ink)",
      border: "none"
    },
    ink: {
      background: "var(--ds-ink)",
      color: "var(--ds-cream)",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "2px solid var(--ds-ink)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South Button — chunky, rounded, confident.
 * Variants: primary (yellow), ink (black), ghost, outline.
 * The signature `pop` style gives the hard-offset shadow for hero CTAs.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pop = false,
  full = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "14px",
      gap: "6px"
    },
    md: {
      padding: "12px 24px",
      fontSize: "16px",
      gap: "8px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "19px",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--text-on-primary)",
      border: "var(--border-bold)"
    },
    ink: {
      background: "var(--ds-ink)",
      color: "var(--ds-cream)",
      border: "2.5px solid var(--ds-ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "var(--border-bold)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "2.5px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    padding: sizes[size].padding,
    width: full ? "100%" : "auto",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    boxShadow: pop ? "var(--shadow-pop)" : "none",
    transition: "transform var(--dur) var(--ease-spring), box-shadow var(--dur) var(--ease-out), background var(--dur-fast) var(--ease-out)",
    WebkitTapHighlightColor: "transparent",
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "scale(0.96)";
    if (pop) e.currentTarget.style.boxShadow = "1px 1px 0 var(--ds-ink)";
  };
  const reset = e => {
    e.currentTarget.style.transform = "scale(1)";
    if (pop) e.currentTarget.style.boxShadow = "var(--shadow-pop)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: onDown,
    onMouseUp: reset,
    onMouseLeave: reset
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South Card — rounded surface with soft warm shadow.
 * variants: soft (shadow), pop (bold outline + hard offset), flat (hairline).
 */
function Card({
  children,
  variant = "soft",
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-subtle)"
    },
    pop: {
      border: "var(--border-bold)",
      boxShadow: "var(--shadow-pop)"
    },
    flat: {
      border: "1px solid var(--border-subtle)",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South IconButton — round tappable control for Lucide icons.
 * Pass a Lucide node (or any 24px glyph) as children.
 * variants: solid (yellow), ink, ghost.
 */
function IconButton({
  children,
  variant = "ghost",
  size = 44,
  label,
  style = {},
  ...rest
}) {
  const variants = {
    solid: {
      background: "var(--ds-yellow)",
      color: "var(--ds-ink)",
      border: "var(--border-bold)"
    },
    ink: {
      background: "var(--ds-ink)",
      color: "var(--ds-cream)",
      border: "2.5px solid var(--ds-ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "2.5px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "transform var(--dur-fast) var(--ease-spring), background var(--dur-fast) var(--ease-out)",
      ...variants[variant],
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.9)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South Input — friendly rounded field with bold focus.
 * Pass `label` and optional `hint`. Forwards remaining props to <input>.
 */
function Input({
  label,
  hint,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "6px"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--text-primary)",
      padding: "12px 16px",
      background: "var(--surface-card)",
      border: focus ? "2.5px solid var(--ds-ink)" : "2.5px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focus ? "0 0 0 4px var(--ds-yellow-300)" : "none",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South ProductCard — a drink/menu item card.
 * Composes Badge. `image` is a url; `onAdd` fires the add-to-cart action.
 */
function ProductCard({
  name,
  blurb,
  price,
  image,
  tag,
  onAdd,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "all var(--dur) var(--ease-out)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      background: `var(--ds-sand-100) center/cover url("${image}")`
    }
  }, tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "yellow"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "22px",
      margin: 0,
      lineHeight: 1.05,
      color: "var(--text-primary)"
    }
  }, name), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "14px",
      color: "var(--text-muted)",
      lineHeight: 1.45,
      flex: 1
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "20px",
      color: "var(--text-primary)"
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAdd,
    "aria-label": `add ${name}`,
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--ds-yellow)",
      border: "var(--border-bold)",
      color: "var(--ds-ink)",
      fontSize: "22px",
      cursor: "pointer",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform var(--dur-fast) var(--ease-spring)"
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.88)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, "+"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductShot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South ProductShot — hero product image on a pale-sunlight field that
 * swaps to the brand straw-stripe on hover (yellow + white diagonal). Soft lift
 * and shadow bloom on hover. Pure presentational; pass the product `image`.
 */
function ProductShot({
  image,
  name,
  price,
  tag,
  alt = "",
  ratio = "1 / 1",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      margin: 0,
      borderRadius: "var(--radius-lg)",
      border: "var(--border-bold)",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: hover ? "var(--shadow-pop)" : "var(--shadow-md)",
      transition: "box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-spring)",
      transform: hover ? "translateY(-3px)" : "none",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-sunlight)",
      transition: "opacity var(--dur) var(--ease-out)",
      opacity: hover ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--pattern-straw)",
      transition: "opacity var(--dur) var(--ease-out)",
      opacity: hover ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--texture-sand)",
      backgroundSize: "180px",
      opacity: 0.5,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt || name,
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      display: "block",
      filter: hover ? "drop-shadow(0 14px 24px rgba(58,36,23,.30))" : "drop-shadow(0 8px 16px rgba(58,36,23,.18))",
      transform: hover ? "scale(1.04) rotate(-1.5deg)" : "none",
      transition: "transform var(--dur) var(--ease-spring), filter var(--dur) var(--ease-out)"
    }
  })), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      background: "var(--ds-ink)",
      color: "var(--ds-cream)",
      lineHeight: 1.1
    }
  }, tag)), (name || price) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "14px 18px",
      background: "var(--surface-card)",
      borderTop: "var(--border-bold)"
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-primary)",
      lineHeight: 1
    }
  }, name), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--text-primary)"
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductShot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductShot.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Down South Tag — selectable chip (drink sizes, filters, add-ons).
 * Controlled via `selected`.
 */
function Tag({
  children,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "14px",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      lineHeight: 1,
      border: selected ? "2.5px solid var(--ds-ink)" : "2.5px solid var(--border-subtle)",
      background: selected ? "var(--ds-yellow)" : "var(--surface-card)",
      color: "var(--text-primary)",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/sections.jsx
try { (() => {
// Down South marketing site — bohemian editorial, brand-pure palette.
// Cream + sand ground, filmic-grain photography, palm-mask hero, staggered collage.
// Palette: Mellow Yellow, Ocean Breeze, Warm Sand, Midnight Palm (+ coffee browns). No red.
const DSM = window.DownSouthDesignSystem_de6534;
const {
  Button,
  Badge,
  ProductShot
} = DSM;
const PHOTO = {
  surf: "../../assets/photos/beach-surf-swimmers.png",
  palms: "../../assets/photos/palms-blue-sky.png",
  coast: "../../assets/photos/beach-coastline.png",
  cup: "../../assets/merch/iced-coffee-cup.png",
  cupCut: "../../assets/merch/iced-coffee-cup-cutout.png",
  tote: "../../assets/merch/tote-bag.png"
};
const CUP = "../../assets/merch/iced-coffee-cup-cutout.png";
const LOGO_WHITE = "../../assets/logos/downsouth-stacked-white.png";
const SUB_INK = "../../assets/logos/downsouth-submark-black.png";
const PALM_SVG = "../../assets/logos/downsouth-palm.svg";
const FILMIC = "saturate(1.05) contrast(1.04) sepia(0.10) brightness(1.02)";
const GRAIN = "../../assets/textures/sand-grain.png";
const SAND = "../../assets/textures/beach-sand.png";
function MIcon({
  name,
  size = 20,
  color
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color
    }
  });
}

// Filmic photo frame: warm grade + grain + optional tilt.
function Frame({
  src,
  pos = "center",
  rotate = 0,
  radius = 6,
  style = {},
  objectFit = "cover",
  tint = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radius,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "0 14px 40px rgba(58,36,23,.22)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit,
      objectPosition: pos,
      display: "block",
      filter: FILMIC
    }
  }), tint && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(170deg, rgba(58,36,23,.04), rgba(58,36,23,.16))",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "180px",
      opacity: .85,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      boxShadow: "inset 0 0 70px rgba(58,36,23,.20)",
      pointerEvents: "none"
    }
  }));
}
function Cap({
  children,
  align = "center"
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--text-caption)",
      textAlign: align,
      lineHeight: 1.5,
      margin: "14px 4px 0"
    }
  }, children);
}
function Display({
  children,
  size = 92,
  color = "var(--text-main)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: .9,
      letterSpacing: "-.02em",
      color,
      margin: 0,
      ...style
    }
  }, children);
}

// PARALLAX banner: the sand image is pinned to the viewport (background-attachment:
// fixed) so this section acts as a moving "window" onto a static picture as you scroll.
function Parallax() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 480,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "var(--ds-cream)",
      borderTop: "var(--border-bold)",
      borderBottom: "var(--border-bold)",
      backgroundImage: `linear-gradient(rgba(58,36,23,.42), rgba(58,36,23,.58)), url(${SAND})`,
      backgroundAttachment: "fixed, fixed",
      backgroundPosition: "center, center",
      backgroundSize: "cover, cover",
      backgroundRepeat: "no-repeat, no-repeat"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "200px",
      opacity: .6,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 28px",
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Cap, null, "feet in the sand"), /*#__PURE__*/React.createElement(Display, {
    size: 84,
    color: "var(--ds-cream)",
    style: {
      margin: "10px auto 0"
    }
  }, "go slow"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 20,
      lineHeight: 1.55,
      color: "rgba(254,251,238,.92)",
      maxWidth: 460,
      margin: "18px auto 0"
    }
  }, "the tide keeps its own time. so do we.")));
}

// Brand device: the palm submark as a window into imagery (crisp SVG mask).
function PalmMask({
  src,
  pos = "center",
  height = 460,
  style = {}
}) {
  const mask = {
    WebkitMaskImage: `url(${PALM_SVG})`,
    maskImage: `url(${PALM_SVG})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: height * 0.98,
      height,
      maxWidth: "100%",
      background: `url(${src}) ${pos}/cover`,
      filter: FILMIC,
      ...mask,
      ...style
    }
  });
}
function Nav() {
  const links = ["about", "menu", "destinations", "journal", "contact"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "26px 56px 6px",
      gap: 18,
      position: "relative",
      zIndex: 5
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i === 2 && /*#__PURE__*/React.createElement("img", {
    src: SUB_INK,
    alt: "Down South",
    style: {
      height: 30,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--ds-espresso)",
      textDecoration: "none"
    }
  }, l))));
}

// Hero category carousel — browse by category, not individual products.
function MenuCarousel() {
  const items = [{
    name: "Iced",
    note: "cold, slow & sweet",
    from: "from $4.80"
  }, {
    name: "Hot",
    note: "small, strong, sunny",
    from: "from $3.50"
  }, {
    name: "Cold Brew",
    note: "18-hour slow steep",
    from: "from $5.20"
  }, {
    name: "Non-Coffee",
    note: "matcha, lemonade & more",
    from: "from $4.20"
  }];
  const [i, setI] = React.useState(0);
  const go = d => setI(v => (v + d + items.length) % items.length);
  const it = items[i];
  const round = {
    width: 42,
    height: 42,
    flex: "none",
    borderRadius: "var(--radius-pill)",
    border: "var(--border-bold)",
    background: "var(--surface-card)",
    color: "var(--text-main)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "previous",
    onClick: () => go(-1),
    style: round
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: "var(--surface-card)",
      border: "var(--border-bold)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-pop)",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      animation: "ds-fade .35s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-main)",
      lineHeight: 1
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-caption)",
      marginTop: 4
    }
  }, it.note)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontStyle: "italic",
      fontSize: 14,
      color: "var(--text-main)",
      whiteSpace: "nowrap"
    }
  }, it.from)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "next",
    onClick: () => go(1),
    style: round
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-right",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 12,
      paddingLeft: 54
    }
  }, items.map((_, d) => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    "aria-label": "category " + (d + 1),
    onClick: () => setI(d),
    style: {
      width: d === i ? 22 : 8,
      height: 8,
      borderRadius: 999,
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: d === i ? "var(--text-main)" : "var(--ds-blue-300)",
      transition: "all var(--dur) var(--ease-out)"
    }
  }))));
}

// FIRST FOLD — punchy hero; enlarged palm anchored to the bottom edge.
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      background: "var(--surface-sunlight)",
      padding: "10px 56px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "200px",
      opacity: .4,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "end",
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 80,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Display, {
    size: 132
  }, "let's get", /*#__PURE__*/React.createElement("br", null), "coffee"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 20,
      lineHeight: 1.55,
      color: "var(--text-main)",
      maxWidth: 380,
      margin: "20px 0 0"
    }
  }, "the kind of coffee that makes time feel softer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    pop: true,
    style: {
      alignSelf: "flex-start"
    }
  }, "order ahead"), /*#__PURE__*/React.createElement(MenuCarousel, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "end",
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PalmMask, {
    src: PHOTO.surf,
    pos: "center 42%",
    height: 680,
    style: {
      display: "block"
    }
  }))));
}

// Full-bleed photo BANNER with a punchy, compact statement.
function Banner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
      color: "var(--ds-cream)",
      borderTop: "var(--border-bold)",
      borderBottom: "var(--border-bold)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO.coast,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 60%",
      filter: FILMIC
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(rgba(58,36,23,.30), rgba(58,36,23,.52))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "200px",
      opacity: .7,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement(Cap, null, "the daily ritual, unwound"), /*#__PURE__*/React.createElement(Display, {
    size: 72,
    color: "var(--ds-cream)",
    style: {
      margin: "8px auto 18px"
    }
  }, "stay a while"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    pop: true
  }, "plan a visit")));
}
function Marquee() {
  const words = ["iced &amp; slow", "✺", "beach roasted", "✺", "no pressure", "✺", "stay a while", "✺", "down south", "✺"];
  const run = [...words, ...words];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ds-ink)",
      color: "var(--ds-yellow)",
      overflow: "hidden",
      padding: "13px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      whiteSpace: "nowrap",
      animation: "ds-marquee 24s linear infinite",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 23,
      letterSpacing: ".02em"
    }
  }, run.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    dangerouslySetInnerHTML: {
      __html: w
    }
  }))));
}

// FEATURED — sliding carousel of ProductShots (pale-yellow → straw-stripe on hover).
function Featured() {
  const items = [{
    image: CUP,
    name: "Summer Latte",
    price: "$5.50",
    tag: "new"
  }, {
    image: CUP,
    name: "Slow Cold Brew",
    price: "$5.20",
    tag: "iced"
  }, {
    image: CUP,
    name: "Beach Mocha",
    price: "$5.00"
  }, {
    image: CUP,
    name: "Iced Latte",
    price: "$4.80",
    tag: "iced"
  }, {
    image: PHOTO.tote,
    name: "Beach Tote",
    price: "$24"
  }];
  const per = 3;
  const maxStart = Math.max(0, items.length - per);
  const [start, setStart] = React.useState(0);
  const go = d => setStart(v => Math.min(maxStart, Math.max(0, v + d)));
  const arrow = (dir, disabled) => ({
    width: 46,
    height: 46,
    flex: "none",
    borderRadius: "var(--radius-pill)",
    border: "var(--border-bold)",
    background: "var(--surface-card)",
    color: "var(--text-main)",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.35 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity var(--dur) var(--ease-out)"
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "78px 56px 64px",
      background: "transparent",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: 86
  }, "featured pours"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 19,
      color: "var(--text-caption)"
    }
  }, "cups that stay with you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "previous",
    onClick: () => go(-1),
    style: arrow("l", start === 0)
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "next",
    onClick: () => go(1),
    style: arrow("r", start === maxStart)
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "arrow-right",
    size: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      transform: `translateX(calc(${-start} * (100% + 26px) / ${per}))`,
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: `0 0 calc((100% - ${(per - 1) * 26}px) / ${per})`
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    image: it.image,
    name: it.name,
    price: it.price,
    tag: it.tag
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--text-caption)",
      textDecoration: "underline",
      textUnderlineOffset: 5
    }
  }, "view the menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, Array.from({
    length: maxStart + 1
  }).map((_, d) => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    "aria-label": "page " + (d + 1),
    onClick: () => setStart(d),
    style: {
      width: d === start ? 24 : 9,
      height: 9,
      borderRadius: 999,
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: d === start ? "var(--text-main)" : "var(--ds-blue-300)",
      transition: "all var(--dur) var(--ease-out)"
    }
  })))));
}
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "96px 56px",
      overflow: "hidden",
      background: "linear-gradient(rgba(217,180,157,.16), rgba(194,152,111,.30)), url(" + SAND + ") center/cover"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(" + GRAIN + ")",
      backgroundSize: "200px",
      opacity: .6,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Cap, {
    align: "left"
  }, "our story \xB7 est. down the coast"), /*#__PURE__*/React.createElement(Display, {
    size: 66,
    color: "var(--text-main)",
    style: {
      marginTop: 12
    }
  }, "slow down"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: 1.7,
      color: "var(--text-main)",
      maxWidth: 460,
      margin: "22px 0 0"
    }
  }, "we roast slow, pour slower, and believe the best ideas show up somewhere around the second cup. sand on the floor, salt in the air \u2014 unwind, it's part of the deal."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(MIcon, {
      name: "arrow-right",
      size: 18
    })
  }, "read more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 460
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    src: PHOTO.palms,
    pos: "center 35%",
    rotate: 3,
    style: {
      position: "absolute",
      right: 30,
      top: 0,
      width: 300,
      height: 400
    }
  }), /*#__PURE__*/React.createElement(Frame, {
    src: PHOTO.tote,
    pos: "center",
    rotate: -4,
    tint: false,
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 240,
      height: 250,
      background: "var(--ds-cream)",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SUB_INK,
    alt: "",
    style: {
      position: "absolute",
      right: 0,
      bottom: 10,
      width: 70,
      opacity: .45,
      transform: "rotate(-8deg)",
      zIndex: 3
    }
  }))));
}
function Locations() {
  const spots = [["Bondi Beach", "30 Campbell Pde", "open till 6", -2.5], ["Manly Wharf", "1 The Esplanade", "open till 5", 1.5], ["Byron Bay", "4 Jonson St", "open till 6", -1]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "84px 56px",
      background: "transparent",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Cap, null, "find us down the coast"), /*#__PURE__*/React.createElement(Display, {
    size: 70,
    style: {
      margin: "10px auto 44px"
    }
  }, "find us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, spots.map(([n, a, h, rot]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 250,
      padding: "30px 26px",
      borderRadius: "var(--radius-md)",
      border: "var(--border-bold)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-pop)",
      transform: `rotate(${rot}deg)`
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "map-pin",
    size: 26,
    color: "var(--ds-blue-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 27,
      margin: "10px 0 8px",
      color: "var(--text-main)"
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: "0 0 4px"
    }
  }, a), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--ds-blue-600)",
      margin: 0
    }
  }, h)))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ds-espresso)",
      color: "var(--ds-cream)",
      padding: "60px 56px 40px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "200px",
      opacity: .5,
      mixBlendMode: "soft-light",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 30,
      borderBottom: "1px solid rgba(251,247,240,.18)",
      paddingBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_WHITE,
    alt: "Down South",
    style: {
      height: 92
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 15,
      color: "rgba(251,247,240,.78)",
      lineHeight: 1.6,
      marginTop: 16
    }
  }, "no pressure, no hurry \u2014 the kind of coffee that makes time feel softer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56
    }
  }, [["explore", ["menu", "our story", "locations"]], ["shop", ["beans", "totes", "gift cards"]], ["say hi", ["instagram", "tiktok", "newsletter"]]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      margin: "0 0 14px",
      color: "var(--ds-yellow)"
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      color: "rgba(251,247,240,.8)",
      textDecoration: "none",
      fontSize: 14,
      marginBottom: 9
    }
  }, l)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "rgba(251,247,240,.55)",
      marginTop: 22,
      letterSpacing: ".04em"
    }
  }, "\xA9 Down South Cafe \xB7 @downsouthcoffee"));
}
function Postcard() {
  const shimmer = {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,.5), transparent 38%), radial-gradient(90% 80% at 75% 70%, rgba(255,255,255,.4), transparent 42%), linear-gradient(160deg, #4fa9a3 0%, #6fc3bb 34%, #8fd3c9 60%, #5fb1ac 100%)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "96px 56px 110px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: shimmer
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1.6px)",
      backgroundSize: "26px 26px",
      opacity: .35,
      animation: "ds-shimmer 7s ease-in-out infinite",
      mixBlendMode: "screen",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1.4px)",
      backgroundSize: "40px 40px",
      backgroundPosition: "13px 9px",
      opacity: .25,
      animation: "ds-shimmer 9s ease-in-out infinite reverse",
      mixBlendMode: "screen",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(rgba(58,36,23,.10), rgba(58,36,23,.20))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(720px, 100%)",
      aspectRatio: "16/10",
      background: "#f2ead8",
      borderRadius: 14,
      boxShadow: "0 30px 70px rgba(0,0,0,.35)",
      transform: "rotate(-2.5deg)",
      padding: "30px 34px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${GRAIN})`,
      backgroundSize: "180px",
      opacity: .5,
      mixBlendMode: "multiply",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 30,
      color: "var(--ds-mocha)",
      margin: "0 0 18px",
      position: "relative"
    }
  }, "postcards from down south"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.15fr 1px 1fr",
      gap: 26,
      height: "calc(100% - 64px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 23,
      lineHeight: 1.5,
      color: "var(--ds-espresso)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px"
    }
  }, "hi love,"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "came for one cold brew and stayed the whole afternoon. sand on my feet, salt in my hair, the best iced latte of my life. no pressure, no hurry \u2014 just exactly what i needed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ds-mocha)",
      opacity: .55,
      width: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "var(--font-script)",
      color: "var(--ds-espresso)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-end",
      width: 92,
      height: 108,
      background: `url(${PHOTO.palms}) center 30%/cover`,
      filter: FILMIC,
      border: "4px solid #fff",
      boxShadow: "0 4px 12px rgba(0,0,0,.2)",
      transform: "rotate(3deg)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 26,
      margin: "0 0 8px",
      borderBottom: "1.5px solid var(--ds-mocha)",
      paddingBottom: 8
    }
  }, "Romy & the regulars"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      margin: 0,
      borderBottom: "1.5px solid var(--ds-mocha)",
      paddingBottom: 8
    }
  }, "Gold Coast, QLD")))))));
}
Object.assign(window, {
  DSSite: {
    Nav,
    Hero,
    Banner,
    Marquee,
    Featured,
    Story,
    Parallax,
    Locations,
    Postcard,
    Footer
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ordering-app/data.js
try { (() => {
// Down South ordering app — sample menu data. Registers on window for the UI kit.
window.DS_MENU = {
  categories: ["iced", "hot", "cold brew", "non-coffee"],
  featured: {
    id: "summer-latte",
    name: "Iced Summer Latte",
    blurb: "espresso, oat milk, a little brown sugar — over a tall glass of ice.",
    price: 5.5,
    image: "../../assets/merch/iced-coffee-cup.png",
    tag: "summer"
  },
  drinks: [{
    id: "iced-latte",
    name: "Iced Latte",
    cat: "iced",
    blurb: "double shot, cold milk, ice",
    price: 4.8,
    tone: "var(--ds-latte)",
    tag: "iced"
  }, {
    id: "summer-latte",
    name: "Summer Latte",
    cat: "iced",
    blurb: "oat milk + brown sugar",
    price: 5.5,
    tone: "var(--ds-sand-300)",
    tag: "new"
  }, {
    id: "cold-brew",
    name: "Slow Cold Brew",
    cat: "cold brew",
    blurb: "18-hour steep, no rush",
    price: 5.2,
    tone: "var(--ds-mocha)",
    tag: null
  }, {
    id: "espresso",
    name: "Double Espresso",
    cat: "hot",
    blurb: "small, strong, sunny",
    price: 3.5,
    tone: "var(--ds-espresso)",
    tag: null
  }, {
    id: "flat-white",
    name: "Flat White",
    cat: "hot",
    blurb: "silky microfoam",
    price: 4.5,
    tone: "var(--ds-latte)",
    tag: null
  }, {
    id: "mocha",
    name: "Beach Mocha",
    cat: "hot",
    blurb: "dark chocolate + espresso",
    price: 5.0,
    tone: "var(--ds-mocha)",
    tag: null
  }, {
    id: "matcha",
    name: "Iced Matcha",
    cat: "non-coffee",
    blurb: "ceremonial grade, oat milk",
    price: 5.5,
    tone: "#7fa86a",
    tag: "vegan"
  }, {
    id: "lemonade",
    name: "Salt Lemonade",
    cat: "non-coffee",
    blurb: "sea salt + citrus",
    price: 4.2,
    tone: "var(--ds-yellow-300)",
    tag: null
  }],
  sizes: [{
    id: "S",
    label: "S",
    oz: "12oz",
    delta: -0.5
  }, {
    id: "M",
    label: "M",
    oz: "16oz",
    delta: 0
  }, {
    id: "L",
    label: "L",
    oz: "20oz",
    delta: 0.8
  }],
  milks: ["whole", "oat", "almond", "none"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ordering-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/ordering-app/screens.jsx
try { (() => {
// Down South ordering app — screens. Composes design-system primitives.
const DS = window.DownSouthDesignSystem_de6534;
const {
  Button,
  Badge,
  Tag,
  IconButton,
  Input
} = DS;
const money = n => "$" + n.toFixed(2);
const SUBMARK = "../../assets/logos/downsouth-submark-white.png";
const SUBMARK_INK = "../../assets/logos/downsouth-submark-black.png";
function Icon({
  name,
  size = 22,
  color
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color
    }
  });
}

// --- A drink tile painted with a brand color + palm watermark (honest, no fake photos)
function DrinkTile({
  d,
  onOpen,
  onAdd
}) {
  const [hover, setHover] = React.useState(false);
  const dark = ["var(--ds-mocha)", "var(--ds-espresso)"].includes(d.tone);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onOpen(d),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "all var(--dur) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1/1",
      background: d.tone,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? SUBMARK : SUBMARK_INK,
    alt: "",
    style: {
      width: "42%",
      opacity: dark ? 0.55 : 0.28
    }
  }), d.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tag === "new" ? "yellow" : d.tag === "vegan" ? "blue" : "ink"
  }, d.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 13px 14px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      margin: 0,
      lineHeight: 1.05,
      color: "var(--text-primary)"
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 12.5,
      color: "var(--text-muted)",
      lineHeight: 1.4,
      minHeight: 34
    }
  }, d.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--text-primary)"
    }
  }, money(d.price)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "add " + d.name,
    onClick: e => {
      e.stopPropagation();
      onAdd(d);
    },
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      background: "var(--ds-yellow)",
      border: "var(--border-bold)",
      color: "var(--ds-ink)",
      fontSize: 22,
      lineHeight: 1,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(.85)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, "+"))));
}
function TopBar({
  cartCount,
  onCart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--ds-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SUBMARK,
    alt: "Down South",
    style: {
      width: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, "Down South"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), " Bondi Beach \xB7 open till 6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    label: "cart",
    onClick: onCart
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      borderRadius: 999,
      background: "var(--ds-ink)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box"
    }
  }, cartCount)));
}
function HomeScreen({
  menu,
  cat,
  setCat,
  onOpen,
  onAdd
}) {
  const list = menu.drinks.filter(d => cat === "all" || d.cat === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "4px 18px 18px",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      position: "relative",
      background: "var(--ds-ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: menu.featured.image,
    alt: "",
    style: {
      position: "absolute",
      right: -20,
      bottom: -10,
      height: "118%",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "22px 20px 24px",
      maxWidth: "66%"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, menu.featured.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 0.98,
      color: "var(--ds-cream)",
      margin: "12px 0 8px"
    }
  }, "no pressure,", /*#__PURE__*/React.createElement("br", null), "no hurry."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "rgba(251,247,240,.82)",
      lineHeight: 1.45,
      margin: "0 0 16px"
    }
  }, menu.featured.blurb), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    pop: true,
    onClick: () => onOpen(menu.drinks.find(d => d.id === "summer-latte"))
  }, "order it \xB7 ", money(menu.featured.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "0 18px 16px",
      scrollbarWidth: "none"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: cat === "all",
    onClick: () => setCat("all")
  }, "all"), menu.categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      padding: "0 18px 24px"
    }
  }, list.map(d => /*#__PURE__*/React.createElement(DrinkTile, {
    key: d.id,
    d: d,
    onOpen: onOpen,
    onAdd: onAdd
  }))));
}
function DetailScreen({
  menu,
  drink,
  onBack,
  onAdd
}) {
  const [size, setSize] = React.useState("M");
  const [milk, setMilk] = React.useState("oat");
  const sz = menu.sizes.find(s => s.id === size);
  const price = drink.price + sz.delta;
  const dark = ["var(--ds-mocha)", "var(--ds-espresso)"].includes(drink.tone);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 280,
      background: drink.tone,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? SUBMARK : SUBMARK_INK,
    alt: "",
    style: {
      width: 130,
      opacity: dark ? 0.5 : 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ink",
    label: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, drink.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, money(price))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      lineHeight: 1.5,
      margin: "10px 0 22px"
    }
  }, drink.blurb, ". sourced from the finest beans, crafted with passion \u2014 the kind of coffee that makes time feel softer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 10px"
    }
  }, "size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22
    }
  }, menu.sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    type: "button",
    onClick: () => setSize(s.id),
    style: {
      flex: 1,
      padding: "12px 0",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      background: size === s.id ? "var(--ds-yellow)" : "var(--surface-card)",
      border: size === s.id ? "var(--border-bold)" : "2.5px solid var(--border-subtle)",
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--text-primary)"
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, s.oz)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 10px"
    }
  }, "milk"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, menu.milks.map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    selected: milk === m,
    onClick: () => setMilk(m)
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      left: 0,
      right: 0,
      marginTop: -100,
      padding: "14px 18px 22px",
      background: "linear-gradient(to top, var(--surface-base) 72%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    pop: true,
    full: true,
    onClick: () => onAdd({
      ...drink,
      size,
      milk,
      price
    })
  }, "add to bag \xB7 ", money(price))));
}
function CartScreen({
  cart,
  onBack,
  onRemove,
  onCheckout
}) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 18px 8px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "your bag")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 18px"
    }
  }, cart.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 20px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SUBMARK_INK,
    alt: "",
    style: {
      width: 56,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--text-primary)",
      margin: "14px 0 4px"
    }
  }, "nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0
    }
  }, "no pressure \u2014 grab something cold.")), cart.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      padding: "14px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: i.tone,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SUBMARK_INK,
    alt: "",
    style: {
      width: 24,
      opacity: 0.4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-primary)",
      lineHeight: 1
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, i.size, " \xB7 ", i.milk, " \xB7 \xD7", i.qty)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, money(i.price * i.qty)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: 34,
    label: "remove",
    onClick: () => onRemove(idx)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  }))))), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 24px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--text-primary)"
    }
  }, money(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    full: true,
    onClick: onCheckout,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "checkout")));
}
function BottomNav({
  tab,
  onTab
}) {
  const items = [["home", "home"], ["search", "menu"], ["heart", "saved"], ["user", "you"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 8px 14px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, items.map(([ic, key]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    onClick: () => onTab(key),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      padding: "4px 14px",
      color: tab === key ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.03em",
      fontFamily: "var(--font-body)"
    }
  }, key))));
}
Object.assign(window, {
  DSApp: {
    HomeScreen,
    DetailScreen,
    CartScreen,
    TopBar,
    BottomNav
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ordering-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductShot = __ds_scope.ProductShot;

__ds_ns.Tag = __ds_scope.Tag;

})();
