/* @ds-bundle: {"format":4,"namespace":"BraciDesignSystem_8fd649","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CartLine","sourcePath":"components/menu/CartLine.jsx"},{"name":"Doodle","sourcePath":"components/menu/Doodle.jsx"},{"name":"LocationPicker","sourcePath":"components/menu/LocationPicker.jsx"},{"name":"Logo","sourcePath":"components/menu/Logo.jsx"},{"name":"MenuItemCard","sourcePath":"components/menu/MenuItemCard.jsx"},{"name":"OrderSummary","sourcePath":"components/menu/OrderSummary.jsx"},{"name":"QuantityStepper","sourcePath":"components/menu/QuantityStepper.jsx"},{"name":"SectionHeading","sourcePath":"components/menu/SectionHeading.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"97048eb787c4","components/core/Button.jsx":"7fe9732bd698","components/core/Card.jsx":"86e2b243320e","components/core/Icon.jsx":"0d1e1c10e1c6","components/core/IconButton.jsx":"6f0de7e5b50a","components/core/Tag.jsx":"2682aa475fea","components/feedback/Dialog.jsx":"471c5d139d96","components/feedback/Toast.jsx":"b0d746930e60","components/feedback/Tooltip.jsx":"ae04587a1937","components/forms/Checkbox.jsx":"29aa96473e27","components/forms/Input.jsx":"964aecdbac16","components/forms/Radio.jsx":"23e35b82cc66","components/forms/Select.jsx":"f02b787d7edd","components/forms/Switch.jsx":"0d498789c9eb","components/menu/CartLine.jsx":"a69ced4f629d","components/menu/Doodle.jsx":"8427635805d4","components/menu/LocationPicker.jsx":"6de39fba9b07","components/menu/Logo.jsx":"43092c1ca0d7","components/menu/MenuItemCard.jsx":"52d1745f5c15","components/menu/OrderSummary.jsx":"a6e4be54fe74","components/menu/QuantityStepper.jsx":"f4d5b38ecb39","components/menu/SectionHeading.jsx":"669910412789","components/navigation/Tabs.jsx":"4406fbdd066f","ui_kits/app/AppBasket.jsx":"06607fa7f846","ui_kits/app/AppMenu.jsx":"ed6ea12311ed","ui_kits/app/AppStatus.jsx":"764e66270ee3","ui_kits/app/ItemSheet.jsx":"01bafeb2eea5","ui_kits/app/Phone.jsx":"dbf595c1cfaa","ui_kits/website/CartDrawer.jsx":"22ddf14c4b09","ui_kits/website/Footer.jsx":"515bb89e9ed8","ui_kits/website/Header.jsx":"cb70331afb9b","ui_kits/website/Hero.jsx":"cb2ec31e7b2f","ui_kits/website/MenuSection.jsx":"9b3d4e16e92b","ui_kits/website/StorySection.jsx":"e12e4051e2cb","ui_kits/website/VisitSection.jsx":"637a67fb0de5","ui_kits/website/data.js":"d1b2405f30f0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BraciDesignSystem_8fd649 = window.BraciDesignSystem_8fd649 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'soft',
  icon,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['bc-badge', 'bc-badge--' + tone, className].filter(Boolean).join(' ')
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  sticker = false,
  block = false,
  iconLeft,
  iconRight,
  disabled = false,
  as = 'button',
  href,
  children,
  className = '',
  ...rest
}) {
  const cls = ['bc-btn', 'bc-btn--' + variant, 'bc-btn--' + size, sticker && 'bc-btn--sticker', block && 'bc-btn--block', disabled && 'bc-btn--disabled', className].filter(Boolean).join(' ');
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: as === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "bc-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "bc-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevation = 'card',
  strip = false,
  interactive = false,
  padded = true,
  title,
  text,
  children,
  className = '',
  ...rest
}) {
  const cls = ['bc-card', elevation === 'flat' && 'bc-card--flat', elevation === 'raised' && 'bc-card--raised', strip && 'bc-card--strip', interactive && 'bc-card--interactive', className].filter(Boolean).join(' ');
  const inner = title || text ? /*#__PURE__*/React.createElement("div", {
    className: "bc-card__body"
  }, title ? /*#__PURE__*/React.createElement("h4", {
    className: "bc-card__title"
  }, title) : null, text ? /*#__PURE__*/React.createElement("p", {
    className: "bc-card__text"
  }, text) : null, children) : padded ? /*#__PURE__*/React.createElement("div", {
    className: "bc-card__body"
  }, children) : children;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  weight = 'regular',
  color = 'currentColor',
  set = 'phosphor',
  className = '',
  ...rest
}) {
  const style = {
    fontSize: size,
    lineHeight: 1,
    color,
    display: 'inline-flex'
  };
  if (set === 'material') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: ['material-symbols-outlined', className].filter(Boolean).join(' '),
      style: {
        ...style,
        fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' " + size
      },
      "aria-hidden": "true"
    }, rest), name);
  }
  const family = weight === 'regular' ? 'ph' : 'ph-' + weight;
  return /*#__PURE__*/React.createElement("i", _extends({
    className: [family, 'ph-' + name, className].filter(Boolean).join(' '),
    style: style,
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'plain',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bc-iconbtn', 'bc-iconbtn--' + size, variant !== 'plain' && 'bc-iconbtn--' + variant, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  interactive = true,
  onRemove,
  children,
  className = '',
  ...rest
}) {
  const cls = ['bc-tag', selected && 'bc-tag--selected', !interactive && 'bc-tag--static', className].filter(Boolean).join(' ');
  const Tag_ = interactive ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    "aria-pressed": interactive ? selected : undefined
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "bc-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\u2715") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bc-dialog__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bc-dialog__title"
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    label: "Close",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-x"
    }),
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "bc-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "bc-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = 'neutral',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-toast', 'bc-toast--' + tone, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bc-toast__dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bc-toast__title"
  }, title), children ? /*#__PURE__*/React.createElement("div", {
    className: "bc-toast__text"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "bc-toast__close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, "\u2715") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['bc-tooltip', className].filter(Boolean).join(' '),
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, rest), children, on ? /*#__PURE__*/React.createElement("span", {
    className: ['bc-tooltip__bubble', placement === 'bottom' && 'bc-tooltip__bubble--bottom'].filter(Boolean).join(' ')
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bc-check', checked && 'bc-check--checked', disabled && 'bc-check--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bc-check__box",
    "aria-hidden": "true"
  }, "\u2713"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bc-check__label"
  }, label, description ? /*#__PURE__*/React.createElement("small", null, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  multiline = false,
  className = '',
  id,
  ...rest
}) {
  const fid = id || 'bc-' + (label || 'field').toString().toLowerCase().replace(/\W+/g, '-');
  const Tag = multiline ? 'textarea' : 'input';
  const cls = ['bc-input', multiline && 'bc-input--textarea', error && 'bc-input--invalid', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "bc-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    className: cls,
    "aria-invalid": !!error || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "bc-field__hint bc-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  description,
  name,
  value,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bc-check', checked && 'bc-check--checked', disabled && 'bc-check--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bc-check__box bc-check__box--radio",
    "aria-hidden": "true"
  }, "\u25CF"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bc-check__label"
  }, label, description ? /*#__PURE__*/React.createElement("small", null, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  className = '',
  id,
  children,
  ...rest
}) {
  const fid = id || 'bc-' + (label || 'select').toString().toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "bc-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: ['bc-select', error && 'bc-select--invalid', className].filter(Boolean).join(' ')
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }), children), error ? /*#__PURE__*/React.createElement("span", {
    className: "bc-field__hint bc-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bc-switch', checked && 'bc-switch--on', disabled && 'bc-switch--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bc-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bc-switch__knob"
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/menu/CartLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CartLine({
  name,
  options,
  price,
  qty,
  onQty,
  trailing,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-cartline', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bc-cartline__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-cartline__name"
  }, qty ? qty + '× ' : '', name), options ? /*#__PURE__*/React.createElement("div", {
    className: "bc-cartline__opts"
  }, options) : null), trailing, /*#__PURE__*/React.createElement("div", {
    className: "bc-cartline__price"
  }, price));
}
Object.assign(__ds_scope, { CartLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/CartLine.jsx", error: String((e && e.message) || e) }); }

// components/menu/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOODLES = {
  pizza: 'assets/doodle-pizza.png',
  pasta: 'assets/doodle-pasta.png',
  cake: 'assets/doodle-cake.png',
  drink: 'assets/doodle-drink.png'
};
function Doodle({
  name = 'pizza',
  size = 48,
  watermark = false,
  base = '',
  className = '',
  ...rest
}) {
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + DOODLES[name];
  return /*#__PURE__*/React.createElement("img", _extends({
    className: ['bc-doodle', watermark && 'bc-doodle--watermark', className].filter(Boolean).join(' '),
    src: src,
    width: size,
    height: size,
    alt: "",
    style: {
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }, rest));
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/menu/LocationPicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LocationPicker({
  mode = 'Pick Up',
  modes = ['Pick Up', 'Delivery'],
  place,
  places = [],
  onModeChange,
  onPlaceChange,
  tone = 'onOrange',
  block = false,
  className = '',
  ...rest
}) {
  const cls = ['bc-loc', tone === 'card' && 'bc-loc--onCream', block && 'bc-loc--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bc-loc__pin"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "bc-loc__lines"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bc-loc__mode"
  }, /*#__PURE__*/React.createElement("select", {
    value: mode,
    onChange: e => onModeChange && onModeChange(e.target.value),
    "aria-label": "Order type",
    style: {
      width: String(mode).length * 0.62 + 0.4 + 'em'
    }
  }, modes.map(m => /*#__PURE__*/React.createElement("option", {
    key: m,
    value: m
  }, m)))), /*#__PURE__*/React.createElement("span", {
    className: "bc-loc__rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bc-loc__place"
  }, /*#__PURE__*/React.createElement("select", {
    value: place,
    onChange: e => onPlaceChange && onPlaceChange(e.target.value),
    "aria-label": "Branch",
    style: {
      width: String(place).length * 0.47 + 0.4 + 'em'
    }
  }, places.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "caret-down",
    size: 12,
    className: "bc-loc__caret"
  }))));
}
Object.assign(__ds_scope, { LocationPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/LocationPicker.jsx", error: String((e && e.message) || e) }); }

// components/menu/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARKS = {
  primary: 'assets/logo-primary.png',
  slice: 'assets/logo-slice.png',
  wordmark: 'assets/logo-wordmark.png',
  'wordmark-shell': 'assets/logo-wordmark-shell.png'
};
function Logo({
  mark = 'slice',
  tone = 'char',
  height = 40,
  withWordmark = false,
  base = '',
  href,
  className = '',
  ...rest
}) {
  const key = mark === 'wordmark' && tone === 'shell' ? 'wordmark-shell' : mark;
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + MARKS[key];
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['bc-logo', className].filter(Boolean).join(' '),
    href: href,
    style: {
      ['--bc-logo-h']: height + 'px'
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    className: "bc-logo__mark",
    src: src,
    alt: "Braci"
  }), withWordmark ? /*#__PURE__*/React.createElement("span", {
    className: "bc-logo__word"
  }, "Braci") : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/Logo.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuItemCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MenuItemCard({
  name,
  description,
  price,
  doodle,
  badges = [],
  soldOut = false,
  layout = 'row',
  action,
  base = '',
  className = '',
  ...rest
}) {
  const cls = ['bc-item', layout === 'card' && 'bc-item--card', soldOut && 'bc-item--soldout', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), doodle ? /*#__PURE__*/React.createElement("div", {
    className: "bc-item__doodle"
  }, /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    name: doodle,
    size: 38,
    base: base
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "bc-item__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-item__top"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "bc-item__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "bc-item__dots"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bc-item__price"
  }, price)), description ? /*#__PURE__*/React.createElement("p", {
    className: "bc-item__desc"
  }, description) : null, badges.length || soldOut ? /*#__PURE__*/React.createElement("div", {
    className: "bc-item__meta"
  }, soldOut ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "error"
  }, "Sold out") : null, badges.map(b => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: b,
    tone: "soft"
  }, b))) : null), action ? /*#__PURE__*/React.createElement("div", {
    className: "bc-item__action"
  }, action) : null);
}
Object.assign(__ds_scope, { MenuItemCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuItemCard.jsx", error: String((e && e.message) || e) }); }

// components/menu/OrderSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OrderSummary({
  rows = [],
  total,
  totalLabel = 'Total',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-summary', className].filter(Boolean).join(' ')
  }, rest), rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "bc-summary__row",
    key: r.label
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", null, r.value))), total != null ? /*#__PURE__*/React.createElement("div", {
    className: "bc-summary__row bc-summary__row--total"
  }, /*#__PURE__*/React.createElement("span", null, totalLabel), /*#__PURE__*/React.createElement("span", null, total)) : null);
}
Object.assign(__ds_scope, { OrderSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/OrderSummary.jsx", error: String((e && e.message) || e) }); }

// components/menu/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 0,
  max = 99,
  onChange,
  tone = 'outline',
  className = '',
  ...rest
}) {
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-qty', tone === 'solid' && 'bc-qty--solid', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("button", {
    className: "bc-qty__btn",
    onClick: () => set(value - 1),
    disabled: value <= min,
    "aria-label": "One fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "bc-qty__val"
  }, value), /*#__PURE__*/React.createElement("button", {
    className: "bc-qty__btn",
    onClick: () => set(value + 1),
    disabled: value >= max,
    "aria-label": "One more"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/menu/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  aside,
  align = 'split',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-sechead', align === 'center' && 'bc-sechead--center', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "bc-sechead__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "bc-sechead__title"
  }, title)), aside ? /*#__PURE__*/React.createElement("div", {
    className: "bc-sechead__aside"
  }, aside) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bc-tabs', variant === 'pill' && 'bc-tabs--pill', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": v === value,
      className: ['bc-tab', v === value && 'bc-tab--active'].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppBasket.jsx
try { (() => {
const {
  CartLine,
  QuantityStepper,
  OrderSummary,
  Button,
  IconButton,
  Icon,
  Doodle,
  Select,
  Radio
} = window.BraciDesignSystem_8fd649;
function AppBasket({
  items,
  onQty,
  onBack,
  onPay
}) {
  const total = items.reduce((s, i) => s + parseFloat(i.total || i.price.replace('£', '')), 0);
  const [mode, setMode] = React.useState('pickup');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: 'var(--surface-page)',
      padding: '52px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Back",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left"
    }),
    onClick: onBack
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)'
    }
  }, "Your order")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '8px 20px 20px'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '80px 0',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "pizza",
    size: 80,
    base: "../..",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "Nothing in the box yet.")) : items.map((it, i) => /*#__PURE__*/React.createElement(CartLine, {
    key: it.name + i,
    qty: it.qty,
    name: it.name,
    options: it.desc,
    price: '£' + parseFloat(it.total || it.price.replace('£', '')).toFixed(2),
    trailing: /*#__PURE__*/React.createElement(QuantityStepper, {
      value: it.qty,
      min: 0,
      onChange: v => onQty(it, v)
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "mode",
    checked: mode === 'pickup',
    onChange: () => setMode('pickup'),
    label: "Pickup",
    description: "Ready in 20 minutes"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "mode",
    checked: mode === 'later',
    onChange: () => setMode('later'),
    label: "Later today"
  })), mode === 'later' ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Pickup time",
    options: ['19:45', '20:00', '20:15', '20:30']
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(OrderSummary, {
    rows: [{
      label: 'Subtotal',
      value: '£' + total.toFixed(2)
    }, {
      label: 'Pickup',
      value: 'Free'
    }],
    total: '£' + total.toFixed(2)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 20px 26px',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    sticker: true,
    disabled: !items.length,
    onClick: onPay
  }, "Pay and put it in the oven")));
}
Object.assign(window, {
  AppBasket
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppBasket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppMenu.jsx
try { (() => {
const {
  Logo,
  Tabs,
  MenuItemCard,
  Button,
  IconButton,
  Icon,
  Badge,
  SectionHeading,
  LocationPicker
} = window.BraciDesignSystem_8fd649;
function AppMenu({
  onOpenItem,
  cartCount,
  onCart
}) {
  const menu = window.BRACI_MENU;
  const cats = Object.keys(menu);
  const [cat, setCat] = React.useState('Pizza');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-identity)',
      color: 'var(--text-on-identity)',
      padding: '52px 20px 16px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    mark: "wordmark",
    tone: "shell",
    height: 44,
    base: "../.."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Basket",
    variant: "onOrange",
    icon: /*#__PURE__*/React.createElement(Icon, {
      set: "material",
      name: "shopping_bag",
      size: 24
    }),
    onClick: onCart
  }), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--braci-char)',
      color: 'var(--braci-shell)',
      fontSize: 11,
      fontWeight: 800,
      display: 'grid',
      placeItems: 'center'
    }
  }, cartCount) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(LocationPicker, {
    block: true,
    mode: "Pick Up",
    place: "Shahrah-e-Faisal Branch",
    places: ['Shahrah-e-Faisal Branch', '11 Bank Street', 'Queen Square']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '12px 20px 8px',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-hairline)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: cats,
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '8px 20px 96px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: cat === 'Pizza' ? 'From the brick oven' : 'Kitchen',
    title: cat,
    aside: cat === 'Pizza' ? '12 inch' : null
  }), menu[cat].map(it => /*#__PURE__*/React.createElement(MenuItemCard, {
    key: it.name,
    base: "../..",
    doodle: it.doodle,
    name: it.name,
    price: it.price,
    description: it.desc,
    badges: it.badges || [],
    soldOut: it.soldOut,
    action: it.soldOut ? null : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onOpenItem(it)
    }, "Add")
  }))));
}
Object.assign(window, {
  AppMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppStatus.jsx
try { (() => {
const {
  Button,
  Badge,
  Doodle,
  Card
} = window.BraciDesignSystem_8fd649;
function AppStatus({
  onDone
}) {
  const steps = [['In the oven', '480°C, sixty seconds', true], ['Boxed', 'We will text you', false], ['Collected', '11 Bank Street', false]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: 'var(--surface-identity)',
      color: 'var(--text-on-identity)',
      padding: '62px 24px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 96,
      height: 96,
      borderRadius: 999,
      background: 'var(--braci-shell)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "pizza",
    size: 64,
    base: "../.."
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontSize: 'var(--text-h2)'
    }
  }, "Order 4182 is in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      margin: '6px 0 0'
    }
  }, "Straight from the fire")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map(([t, d, done]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      flex: 'none',
      background: done ? 'var(--surface-action)' : 'transparent',
      border: done ? '0' : '1px solid var(--border-strong)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-on-action)',
      fontWeight: 900,
      fontSize: 13
    }
  }, done ? '✓' : ''), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    strip: true,
    title: "Ready around 19:24",
    text: "11 Bank Street, Wolverhampton. Come to the counter and say the order number."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Paid \xA329.50"), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "Pickup"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 20px 26px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    onClick: onDone
  }, "Back to the menu")));
}
Object.assign(window, {
  AppStatus
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppStatus.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ItemSheet.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Checkbox,
  Radio,
  QuantityStepper,
  Doodle,
  Badge,
  Input
} = window.BraciDesignSystem_8fd649;
function ItemSheet({
  item,
  onClose,
  onAdd
}) {
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState('12 inch');
  const [extras, setExtras] = React.useState({});
  if (!item) return null;
  const base = parseFloat(item.price.replace('£', ''));
  const extraCost = Object.keys(extras).filter(k => extras[k]).length * 1.5 + (size === '16 inch' ? 4 : 0);
  const total = ((base + extraCost) * qty).toFixed(2);
  const toggle = k => setExtras(e => ({
    ...e,
    [k]: !e[k]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: '88%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      boxShadow: 'var(--shadow-overlay)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: 'var(--surface-muted)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: item.doodle,
    size: 36,
    base: "../.."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)'
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, item.desc)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    }),
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '18px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    checked: size === '12 inch',
    onChange: () => setSize('12 inch'),
    label: "12 inch",
    description: "As it comes"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    checked: size === '16 inch',
    onChange: () => setSize('16 inch'),
    label: "16 inch",
    description: "+ \xA34.00"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 20
    }
  }, "Extras \xB7 \xA31.50 each"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 10
    }
  }, ['Extra fior di latte', 'Nduja', 'Basil', 'Chilli honey'].map(k => /*#__PURE__*/React.createElement(Checkbox, {
    key: k,
    checked: !!extras[k],
    onChange: () => toggle(k),
    label: k
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Note for the kitchen",
    placeholder: "Well fired, light on the cheese\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 22px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    min: 1,
    onChange: setQty
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    onClick: () => onAdd({
      ...item,
      qty,
      total
    })
  }, 'Add — £' + total)))));
}
Object.assign(window, {
  ItemSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ItemSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Phone.jsx
try { (() => {
function Phone({
  children,
  statusDark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 46,
      background: 'var(--braci-char)',
      padding: 9,
      boxShadow: 'var(--shadow-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 38,
      overflow: 'hidden',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      fontSize: 13,
      fontWeight: 800,
      color: statusDark ? 'var(--braci-shell)' : 'var(--braci-char)',
      zIndex: 30,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "19:04"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-cell-signal-full"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-wifi-high"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-battery-high"
  }))), children));
}
Object.assign(window, {
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
const {
  CartLine,
  QuantityStepper,
  OrderSummary,
  Button,
  IconButton,
  Icon,
  Doodle
} = window.BraciDesignSystem_8fd649;
function CartDrawer({
  open,
  items,
  onQty,
  onClose,
  onCheckout
}) {
  if (!open) return null;
  const total = items.reduce((s, i) => s + i.qty * parseFloat(i.price.replace('£', '')), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 400,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-overlay)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)'
    }
  }, "Your order"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    }),
    onClick: onClose
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 var(--space-5)'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-8) 0',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "pizza",
    size: 72,
    base: "../..",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Nothing in the box yet.")) : items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.name,
    qty: it.qty,
    name: it.name,
    options: it.desc,
    price: '£' + (it.qty * parseFloat(it.price.replace('£', ''))).toFixed(2),
    trailing: /*#__PURE__*/React.createElement(QuantityStepper, {
      value: it.qty,
      min: 0,
      onChange: v => onQty(it, v)
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(OrderSummary, {
    rows: [{
      label: 'Subtotal',
      value: '£' + total.toFixed(2)
    }, {
      label: 'Pickup',
      value: 'Free'
    }],
    total: '£' + total.toFixed(2)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    disabled: !items.length,
    onClick: onCheckout
  }, "Pay and put it in the oven")))));
}
Object.assign(window, {
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Logo,
  Icon
} = window.BraciDesignSystem_8fd649;
function SiteFooter() {
  const cols = [['Eat', ['Menu', 'Pizza', 'Pasta', 'Dolci']], ['Braci', ['Our story', 'The oven', 'Jobs']], ['Practical', ['Allergens', 'Gift cards', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-identity)',
      color: 'var(--text-on-identity)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)',
      display: 'grid',
      gridTemplateColumns: '1.2fr repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 196,
      height: 196,
      borderRadius: 999,
      background: 'var(--braci-shell)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    mark: "primary",
    height: 148,
    base: "../.."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-sm)',
      opacity: .9,
      maxWidth: '28ch'
    }
  }, "11 Bank Street, Wolverhampton. Wood-fired since 2019."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram-logo",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 22
  }))), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      opacity: .8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 'var(--space-3)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'var(--text-on-identity)',
      textDecoration: 'none',
      fontSize: 'var(--text-body-sm)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,248,240,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--gutter-page-lg)',
      fontSize: 'var(--text-body-xs)',
      opacity: .8,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Braci Pizza"), /*#__PURE__*/React.createElement("span", null, "Made where the fire is"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Logo,
  IconButton,
  Icon,
  LocationPicker
} = window.BraciDesignSystem_8fd649;
function SiteHeader({
  cartCount,
  onCart
}) {
  const [mode, setMode] = React.useState('Pick Up');
  const [place, setPlace] = React.useState('Shahrah-e-Faisal Branch');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-identity)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      height: 56,
      padding: '0 var(--gutter-page-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    mark: "wordmark",
    tone: "shell",
    height: 28,
    base: "../.."
  })), /*#__PURE__*/React.createElement(LocationPicker, {
    mode: mode,
    onModeChange: setMode,
    place: place,
    places: ['Shahrah-e-Faisal Branch', '11 Bank Street', 'Queen Square', 'Dudley Road'],
    onPlaceChange: setPlace
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      height: 40,
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Basket",
    variant: "onOrange",
    icon: /*#__PURE__*/React.createElement(Icon, {
      set: "material",
      name: "shopping_bag",
      size: 22
    }),
    onClick: onCart
  }), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--braci-char)',
      color: 'var(--braci-shell)',
      fontSize: 11,
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center'
    }
  }, cartCount) : null))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Doodle
} = window.BraciDesignSystem_8fd649;
function Hero({
  onOrder
}) {
  const board = [['Margherita', '£11.50'], ['Diavola', '£13.00'], ['Marinara', '£9.50']];
  const stats = [['480°C', 'oven floor'], ['60 sec', 'per pizza'], ['24 hr', 'cold prove'], ['12', 'tables']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-identity)',
      height: 'calc(100svh - 56px)',
      minHeight: 520,
      maxHeight: 880,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes braci-wheel{from{transform:translateX(-50%) rotate(0)}to{transform:translateX(-50%) rotate(360deg)}}
@keyframes braci-drift{0%,100%{transform:translateY(0) rotate(var(--tilt,0deg))}50%{transform:translateY(-12px) rotate(calc(var(--tilt,0deg) + 8deg))}}
.braci-hero-pizza{animation:braci-wheel 52s linear infinite}
.braci-hero-drift{animation:braci-drift 7s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.braci-hero-pizza,.braci-hero-drift{animation:none}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'clamp(12px,2.6vh,30px) var(--gutter-page-lg) clamp(10px,2vh,22px)',
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'flex-start',
      color: 'var(--braci-shell)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      padding: '5px 14px',
      borderRadius: 999,
      background: 'var(--braci-shell)',
      color: 'var(--braci-ember)',
      fontSize: 'var(--text-body-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "Brick oven, no gas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(46px,8.4vh,104px)',
      lineHeight: .86,
      letterSpacing: '-.01em',
      margin: 'clamp(6px,1.2vh,14px) 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Neapolitan"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Pizza")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '42ch',
      margin: 'clamp(8px,1.6vh,16px) 0 0',
      fontSize: 'var(--text-body-md)',
      opacity: .92
    }
  }, "Sixty seconds at 480\xB0C, straight out of the wood fire. Pudding is made in the morning and gone by nine."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'clamp(12px,2vh,22px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onOrange",
    onClick: onOrder
  }, "Explore menu"), /*#__PURE__*/React.createElement(Button, {
    variant: "onOrange",
    style: {
      background: 'transparent',
      color: 'var(--braci-shell)',
      boxShadow: 'inset 0 0 0 1px rgba(255,248,240,.55)'
    }
  }, "Book a table"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 280,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-raised)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-action)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h4)'
    }
  }, "On the board tonight"), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "22:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, board.map(([n, p], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      padding: '8px 0',
      borderBottom: i < board.length - 1 ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-body-lg)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: '1px dotted var(--border-strong)',
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)'
    }
  }, p))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 140,
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '5%',
      top: '14%',
      opacity: .4,
      filter: 'brightness(0) invert(1)',
      '--tilt': '-14deg'
    },
    className: "braci-hero-drift"
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "pizza",
    size: 54,
    base: "../.."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '5%',
      top: '20%',
      opacity: .35,
      filter: 'brightness(0) invert(1)',
      animationDelay: '1.8s',
      '--tilt': '16deg'
    },
    className: "braci-hero-drift"
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "pizza",
    size: 46,
    base: "../.."
  })), /*#__PURE__*/React.createElement("img", {
    className: "braci-hero-pizza",
    src: "../../assets/pizza-top.png",
    alt: "Wood-fired Neapolitan pizza, seen from above",
    style: {
      position: 'absolute',
      left: '50%',
      top: '8%',
      width: 'min(620px,58vw)',
      filter: 'drop-shadow(0 12px 34px rgba(23,17,14,.26))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      zIndex: 5,
      background: 'var(--braci-shell)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '11px var(--gutter-page-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 22,
      lineHeight: 1,
      color: 'var(--braci-ember)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, l))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuSection.jsx
try { (() => {
const {
  SectionHeading,
  MenuItemCard,
  Tabs,
  Button,
  Tag
} = window.BraciDesignSystem_8fd649;
function MenuSection({
  onAdd
}) {
  const menu = window.BRACI_MENU;
  const cats = Object.keys(menu);
  const [cat, setCat] = React.useState('All');
  const [vegOnly, setVegOnly] = React.useState(false);
  const shown = cat === 'All' ? cats : [cat];
  const veg = it => (it.badges || []).some(b => b === 'Vegetariana' || b === 'Vegan');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Served 12:00 \u2013 22:00",
    title: "The menu",
    aside: /*#__PURE__*/React.createElement("span", null, "Pizza is 12 inch. Everything is cooked to order.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      margin: 'var(--space-5) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['All', ...cats],
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: vegOnly,
    onClick: () => setVegOnly(!vegOnly)
  }, "Vegetarian only"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--space-8)'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      breakInside: 'avoid',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)',
      margin: '0 0 var(--space-2)'
    }
  }, c), menu[c].filter(it => !vegOnly || veg(it)).map(it => /*#__PURE__*/React.createElement(MenuItemCard, {
    key: it.name,
    base: "../..",
    doodle: it.doodle,
    name: it.name,
    price: it.price,
    description: it.desc,
    badges: it.badges || [],
    soldOut: it.soldOut,
    action: it.soldOut ? null : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onAdd(it)
    }, "Add")
  }))))));
}
Object.assign(window, {
  MenuSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StorySection.jsx
try { (() => {
const {
  Card,
  Doodle,
  SectionHeading
} = window.BraciDesignSystem_8fd649;
function StorySection() {
  const bits = [{
    t: 'Wood, not gas',
    d: 'One oven, oak and beech, lit at ten in the morning. It reaches 480°C by lunch and stays there.'
  }, {
    t: 'Dough at 24 hours',
    d: 'Mixed the day before, slow-proved cold, opened by hand. Nothing is rolled.'
  }, {
    t: 'A short menu',
    d: 'Four pizzas, two pastas, two puddings. When something runs out it stays out until tomorrow.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Since 2019",
    title: "How we cook"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, bits.map((b, i) => /*#__PURE__*/React.createElement(Card, {
    key: b.t,
    strip: i === 0,
    title: b.t,
    text: b.d
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-6)',
      background: 'var(--surface-identity)',
      color: 'var(--text-on-identity)',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "cake",
    size: 64,
    base: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      margin: 0
    }
  }, "Pudding is made in the morning and gone by nine.")));
}
Object.assign(window, {
  StorySection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StorySection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VisitSection.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Input,
  Select,
  Button,
  Badge
} = window.BraciDesignSystem_8fd649;
function VisitSection() {
  const hours = [['Monday', 'Closed'], ['Tuesday – Thursday', '12:00 – 22:00'], ['Friday – Saturday', '12:00 – 23:00'], ['Sunday', '12:00 – 20:00']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Twelve tables, no queue system",
    title: "Visit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-h4)',
      margin: 0
    }
  }, "11 Bank Street"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-sm)',
      marginTop: 'var(--space-2)'
    }
  }, "Wolverhampton, WV1 4AB \xB7 0902 118 999"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, h)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Open now"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-h4)',
      margin: '0 0 var(--space-4)'
    }
  }, "Book a table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "e.g. Nadia"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "07\u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "People",
    options: ['2', '3', '4', '5', '6']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Time",
    options: ['18:15', '18:30', '18:45', '19:00']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know",
    multiline: true,
    placeholder: "High chair, allergies, birthday\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true
  }, "Request the table")))));
}
Object.assign(window, {
  VisitSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VisitSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.BRACI_MENU = {
  Pizza: [{
    name: 'Margherita',
    price: '£11.50',
    doodle: 'pizza',
    desc: 'San Marzano, fior di latte, basil',
    badges: ['Vegetariana']
  }, {
    name: 'Diavola',
    price: '£13.00',
    doodle: 'pizza',
    desc: 'Spianata piccante, chilli honey, oregano'
  }, {
    name: 'Marinara',
    price: '£9.50',
    doodle: 'pizza',
    desc: 'San Marzano, garlic, oregano, no cheese',
    badges: ['Vegan']
  }, {
    name: 'Salsiccia e friarielli',
    price: '£14.50',
    doodle: 'pizza',
    desc: 'Fennel sausage, wild broccoli, provola',
    soldOut: true
  }],
  Pasta: [{
    name: 'Rigatoni all\u2019amatriciana',
    price: '£12.00',
    doodle: 'pasta',
    desc: 'Guanciale, tomato, pecorino romano'
  }, {
    name: 'Cacio e pepe',
    price: '£11.00',
    doodle: 'pasta',
    desc: 'Pecorino, black pepper, nothing else',
    badges: ['Vegetariana']
  }],
  Dolci: [{
    name: 'Tiramis\u00f9',
    price: '£6.50',
    doodle: 'cake',
    desc: 'Made this morning, gone by nine'
  }, {
    name: 'Torta caprese',
    price: '£6.00',
    doodle: 'cake',
    desc: 'Almond and dark chocolate, no flour'
  }],
  Drinks: [{
    name: 'Chinotto',
    price: '£3.50',
    doodle: 'drink',
    desc: 'Bitter orange, on ice'
  }, {
    name: 'Aglianico, glass',
    price: '£7.00',
    doodle: 'drink',
    desc: 'Campania, red, poured cold'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CartLine = __ds_scope.CartLine;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.LocationPicker = __ds_scope.LocationPicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.MenuItemCard = __ds_scope.MenuItemCard;

__ds_ns.OrderSummary = __ds_scope.OrderSummary;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
