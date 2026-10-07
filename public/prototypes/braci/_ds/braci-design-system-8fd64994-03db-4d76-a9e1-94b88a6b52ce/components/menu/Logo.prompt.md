One-line: renders the supplied Braci mark at a given height — the header uses the brush wordmark,
the footer uses the full flame lockup.

```jsx
<Logo mark="wordmark" tone="shell" height={72} base=".." href="#" />  {/* header, on orange */}
<Logo mark="wordmark" height={72} base=".." />                        {/* on cream */}
<Logo mark="primary" height={140} base=".." />            {/* footer */}
<Logo mark="slice" height={30} base=".." />               {/* small square placements */}
```

On the orange identity band the mark needs a `--braci-shell` disc behind it — the supplied art is
orange with a white halo and disappears on #FF610E:

```jsx
<span style={{display:'grid',placeItems:'center',width:46,height:46,borderRadius:999,background:'var(--braci-shell)'}}>
  <Logo mark="slice" height={30} base=".." />
</span>
```

Clear space: at least half the mark's height on every side. Never recolour, outline or add effects to the mark.
