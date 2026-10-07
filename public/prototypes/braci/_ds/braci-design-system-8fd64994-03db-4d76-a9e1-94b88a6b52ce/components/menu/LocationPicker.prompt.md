One-line: the header field that answers "how are you getting it, and from where" in one control.

```jsx
<LocationPicker tone="onOrange" mode={mode} onModeChange={setMode}
  place="Shahrah-e-Faisal Branch" places={['Shahrah-e-Faisal Branch','11 Bank Street','Queen Square']}
  onPlaceChange={setPlace} />
```

One 36px line, not a stacked two-line field: `PICK UP | Shahrah-e-Faisal Branch`. The order type
uses the brand's ember uppercase micro-label and the branch uses body semibold, so the control
inherits the same eyebrow-plus-value rhythm as `SectionHeading`. Use `block` for the full-width
44px checkout placement and `tone="card"` on cream backgrounds.
