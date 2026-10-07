One-line: the Braci action pill — use for every commit action (Add to order, Checkout, Book a table).

```jsx
<Button variant="primary" size="lg" sticker>Order now</Button>
<Button variant="secondary">See the menu</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="onOrange">Order now</Button>   {/* on the orange header/footer only */}
```

Geometry is fixed by the client's button reference: 12px radius (`--radius-button`), 10px vertical
and 8px horizontal padding, Asap Condensed 16px semibold. Size modifiers widen the horizontal
padding only. Add `className="bc-btn--pill"` for the older fully-rounded shape.

Variants: `primary` (ember #C24200 fill, shell text), `secondary` (hairline outline, hovers to orange tint), `ghost` (ember text), `onOrange` (shell fill — the only correct button on an orange band). `sticker` adds the hard offset shadow; use once per screen. Sizes sm/md/lg map to 36/44/54px.
