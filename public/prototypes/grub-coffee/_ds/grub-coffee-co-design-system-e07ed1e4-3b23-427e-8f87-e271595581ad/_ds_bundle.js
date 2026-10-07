/* @ds-bundle: {"format":4,"namespace":"GrubCoffeeCoDesignSystem_e07ed1","components":[{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Card.jsx":"45e4e8f5e7bb","components/feedback/Badge.jsx":"bcf793b1f334","components/feedback/Tag.jsx":"15933f5ad1c2","components/feedback/Toast.jsx":"0ab95322f9a4","components/feedback/Tooltip.jsx":"8eccb86b1ebf","components/forms/Button.jsx":"ace52ef8795f","components/forms/Checkbox.jsx":"15a067655567","components/forms/IconButton.jsx":"a763a7951b3e","components/forms/Input.jsx":"d6e94a9db042","components/forms/Radio.jsx":"74176e2206e8","components/forms/Select.jsx":"1408755ce8bb","components/forms/Switch.jsx":"6778665cf885","components/navigation/Tabs.jsx":"6cef2120b9aa","components/overlay/Dialog.jsx":"ee573153d070","ui_kits/coffee-app/Cart.jsx":"5b3a63728ffb","ui_kits/coffee-app/Checkout.jsx":"3a2bfc7ca6fc","ui_kits/coffee-app/Confirmation.jsx":"41ce78395a61","ui_kits/coffee-app/Home.jsx":"17ad58cc27e0","ui_kits/coffee-app/Menu.jsx":"b6e1e3289f99"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrubCoffeeCoDesignSystem_e07ed1 = window.GrubCoffeeCoDesignSystem_e07ed1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "20px"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      border: "1px solid var(--border-default)",
      padding,
      fontFamily: "var(--font-body)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "neutral"
}) {
  const tones = {
    neutral: {
      background: "var(--surface-muted)",
      color: "var(--green-700)"
    },
    brand: {
      background: "var(--green-700)",
      color: "var(--cream-50)"
    },
    cta: {
      background: "var(--cta-bg)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.02em",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      border: `2px solid ${selected ? "var(--green-700)" : "var(--border-default)"}`,
      background: selected ? "var(--green-700)" : "transparent",
      color: selected ? "var(--cream-50)" : "var(--green-700)",
      cursor: "pointer",
      transition: "background 150ms ease-out"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = "success",
  illustration
}) {
  const tones = {
    success: {
      background: "var(--green-700)",
      color: "var(--cream-50)"
    },
    error: {
      background: "var(--error)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 18px",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: 600,
      boxShadow: "var(--shadow-raised)",
      ...tones[tone]
    }
  }, illustration && /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: "",
    style: {
      height: 36
    }
  }), message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--green-900)",
      color: "var(--cream-50)",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  children,
  onClick,
  type = "button"
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "14px"
    },
    md: {
      padding: "12px 20px",
      fontSize: "16px"
    },
    lg: {
      padding: "16px 28px",
      fontSize: "18px"
    }
  };
  const variants = {
    primary: {
      background: "var(--surface-brand)",
      color: "var(--cream-50)",
      border: "none"
    },
    cta: {
      background: "var(--cta-bg)",
      color: "#fff",
      border: "none"
    },
    secondary: {
      background: "transparent",
      color: "var(--green-700)",
      border: "2px solid var(--green-700)"
    },
    ghost: {
      background: "transparent",
      color: "var(--green-700)",
      border: "none"
    }
  };
  const base = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 150ms ease-out, color 150ms ease-out",
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.9)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "6px",
      border: `2px solid ${checked ? "var(--green-700)" : "var(--border-default)"}`,
      background: checked ? "var(--green-700)" : "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "13px",
      transition: "background 150ms ease-out"
    }
  }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 40,
  variant = "ghost",
  onClick
}) {
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--green-700)"
    },
    filled: {
      background: "var(--surface-muted)",
      color: "var(--green-700)"
    },
    inverse: {
      background: "rgba(255,255,255,0.15)",
      color: "var(--cream-50)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.5,
      cursor: "pointer",
      transition: "background 150ms ease-out",
      ...variants[variant]
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--green-700)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      border: `2px solid ${error ? "var(--error)" : "var(--border-default)"}`,
      background: "var(--surface-card)",
      color: "var(--text-body)",
      outline: "none"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `2px solid ${checked ? "var(--green-700)" : "var(--border-default)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: checked ? "var(--green-700)" : "transparent"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--green-700)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      border: "2px solid var(--border-default)",
      background: "var(--surface-card)",
      color: "var(--text-body)"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--green-700)" : "var(--border-default)",
      position: "relative",
      transition: "background 150ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      transition: "left 150ms ease-out"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "2px solid var(--border-default)",
      fontFamily: "var(--font-display)"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => onChange(t.value),
    style: {
      padding: "10px 16px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontWeight: 800,
      fontSize: "15px",
      color: active === t.value ? "var(--green-700)" : "var(--text-muted)",
      borderBottom: active === t.value ? "3px solid var(--cta-bg)" : "3px solid transparent",
      marginBottom: "-2px"
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(11,34,17,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "28px",
      maxWidth: "420px",
      width: "90%",
      boxShadow: "var(--shadow-raised)",
      fontFamily: "var(--font-body)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "22px",
      color: "var(--green-700)",
      marginBottom: "12px"
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-app/Cart.jsx
try { (() => {
const {
  AppShell
} = window.CoffeeAppUI;
function Cart({
  Namespace,
  items,
  onRemove,
  onCheckout,
  onBack
}) {
  const {
    Card,
    Button,
    IconButton
  } = Namespace;
  const isEmpty = items.length === 0;
  return /*#__PURE__*/React.createElement(AppShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2190",
    label: "Back",
    variant: "inverse",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--cream-50)",
      fontSize: 18
    }
  }, "Your cart")), isEmpty ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/doodle-empty-cart.png",
    alt: "",
    style: {
      width: 150,
      filter: "invert(1) sepia(1) saturate(3) hue-rotate(70deg) brightness(.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--green-700)",
      fontSize: 18
    }
  }, "Oh no! The coffee cart is completely empty\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Head back to the menu and grab something.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--green-700)",
      fontSize: 15
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-body)",
      marginTop: 4
    }
  }, item.price)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "\xD7",
    label: "Remove",
    onClick: () => onRemove(i)
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: onCheckout
  }, "Checkout")));
}
Object.assign(window.CoffeeAppUI, {
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-app/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-app/Checkout.jsx
try { (() => {
const {
  useState
} = React;
const {
  AppShell
} = window.CoffeeAppUI;
function Checkout({
  Namespace,
  items,
  onConfirm,
  onBack
}) {
  const {
    Card,
    Button,
    IconButton,
    Radio,
    Input
  } = Namespace;
  const [fulfillment, setFulfillment] = useState("pickup");
  const total = items.length * 4.25;
  return /*#__PURE__*/React.createElement(AppShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2190",
    label: "Back",
    variant: "inverse",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--cream-50)",
      fontSize: 18
    }
  }, "Checkout")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--green-700)",
      marginBottom: 8
    }
  }, "Order summary"), items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      color: "var(--text-body)",
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", null, item.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 700,
      marginTop: 8,
      paddingTop: 8,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "fulfillment",
    label: "Pickup",
    checked: fulfillment === "pickup",
    onChange: () => setFulfillment("pickup")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "fulfillment",
    label: "Delivery",
    checked: fulfillment === "delivery",
    onChange: () => setFulfillment("delivery")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Promo code",
    placeholder: "e.g. GRUB10"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: onConfirm
  }, "Place order")));
}
Object.assign(window.CoffeeAppUI, {
  Checkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-app/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-app/Confirmation.jsx
try { (() => {
const {
  AppShell
} = window.CoffeeAppUI;
function Confirmation({
  Namespace,
  onHome
}) {
  const {
    Button
  } = Namespace;
  return /*#__PURE__*/React.createElement(AppShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      padding: "16px 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/doodle-checkout.png",
    alt: "",
    style: {
      width: 150,
      filter: "invert(1) sepia(1) saturate(3) hue-rotate(70deg) brightness(.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--green-700)",
      fontSize: 20
    }
  }, "Looking good! Order finalized. Ready to confirm to enjoy!"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onHome
  }, "Back to home")));
}
Object.assign(window.CoffeeAppUI, {
  Confirmation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-app/Confirmation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-app/Home.jsx
try { (() => {
function AppShell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      minHeight: 760,
      margin: "0 auto",
      background: "var(--surface-page)",
      fontFamily: "var(--font-body)",
      position: "relative",
      overflow: "hidden",
      boxShadow: "var(--shadow-raised)"
    }
  }, children);
}
function Header({
  Namespace,
  cartCount,
  onCart
}) {
  const {
    IconButton,
    Badge
  } = Namespace;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-secondary.png",
    alt: "Grub",
    style: {
      height: 22,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 5h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 8H6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "21",
      r: "1.2",
      fill: "currentColor",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "21",
      r: "1.2",
      fill: "currentColor",
      stroke: "none"
    })),
    label: "Cart",
    variant: "inverse",
    onClick: onCart
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cta"
  }, cartCount))));
}
function Home({
  Namespace,
  cartCount,
  onCart,
  onOrder
}) {
  const {
    Button,
    Tag
  } = Namespace;
  return /*#__PURE__*/React.createElement(AppShell, null, /*#__PURE__*/React.createElement(Header, {
    Namespace: Namespace,
    cartCount: cartCount,
    onCart: onCart
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 32,
      color: "var(--green-700)",
      lineHeight: 1.1
    }
  }, "Grab a cup,", /*#__PURE__*/React.createElement("br", null), "join the crew."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, "Community coffee, priced for everyone.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/doodle-hero.png",
    alt: "",
    style: {
      width: 160,
      alignSelf: "center",
      filter: "invert(1) sepia(1) saturate(3) hue-rotate(70deg) brightness(.5)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: onOrder
  }, "Order now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Iced"), /*#__PURE__*/React.createElement(Tag, null, "Hot"), /*#__PURE__*/React.createElement(Tag, null, "Decaf"), /*#__PURE__*/React.createElement(Tag, null, "Non-dairy"))));
}
window.CoffeeAppUI = {
  AppShell,
  Header,
  Home
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-app/Menu.jsx
try { (() => {
const {
  useState
} = React;
const {
  AppShell,
  Header
} = window.CoffeeAppUI;
const MENU = {
  coffee: [{
    id: "latte",
    name: "Iced Latte",
    price: "$4.50",
    desc: "Espresso, milk, ice"
  }, {
    id: "cold-brew",
    name: "Cold Brew",
    price: "$4.00",
    desc: "Slow-steeped, 18hr"
  }, {
    id: "americano",
    name: "Americano",
    price: "$3.25",
    desc: "Espresso, hot water"
  }],
  tea: [{
    id: "chai",
    name: "Chai Latte",
    price: "$4.25",
    desc: "Spiced black tea"
  }],
  food: [{
    id: "croissant",
    name: "Croissant",
    price: "$3.00",
    desc: "Baked fresh daily"
  }]
};
function Menu({
  Namespace,
  cartCount,
  onCart,
  onAdd,
  onBack
}) {
  const {
    Tabs,
    Card,
    Button,
    IconButton
  } = Namespace;
  const [cat, setCat] = useState("coffee");
  return /*#__PURE__*/React.createElement(AppShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2190",
    label: "Back",
    variant: "inverse",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Header, {
    Namespace: Namespace,
    cartCount: cartCount,
    onCart: onCart
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: "Coffee",
      value: "coffee"
    }, {
      label: "Tea",
      value: "tea"
    }, {
      label: "Food",
      value: "food"
    }],
    active: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, MENU[cat].map(item => /*#__PURE__*/React.createElement(Card, {
    key: item.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--green-700)",
      fontSize: 16
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-body)",
      marginTop: 6
    }
  }, item.price)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onAdd(item)
  }, "Add"))))));
}
Object.assign(window.CoffeeAppUI, {
  Menu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-app/Menu.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
