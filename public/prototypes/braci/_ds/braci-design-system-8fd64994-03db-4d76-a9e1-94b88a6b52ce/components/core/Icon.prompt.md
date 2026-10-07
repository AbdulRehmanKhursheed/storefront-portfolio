One-line: renders one Phosphor glyph; requires the Phosphor CSS on the page.

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
```
```jsx
<Icon name="fire" size={22} color="var(--braci-orange)" />
<Icon name="shopping-bag" />
```
Regular weight at 20px is the default everywhere. Use `fill` only inside solid ember/orange fills.

Google Material Symbols are available as a second set for the few glyphs the client specified
directly (the cart bag). Load the font, then pass `set="material"` with the Material glyph name:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
```
```jsx
<Icon set="material" name="shopping_bag" size={28} />
<Icon set="material" name="search" size={28} />
```
