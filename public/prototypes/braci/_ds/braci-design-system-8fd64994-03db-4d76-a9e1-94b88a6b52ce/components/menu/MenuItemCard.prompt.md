One-line: the menu line used on the site menu and in the app's category lists.

```jsx
<MenuItemCard doodle="pizza" name="Margherita" price="£11.50" base=".."
  description="San Marzano, fior di latte, basil, 60 seconds at 480°C"
  badges={['Vegetariana']} action={<Button size="sm">Add</Button>} />
```

`layout="row"` for printed-menu lists (dotted leader), `layout="card"` inside a grid. Prices always carry the currency symbol and two decimals.
