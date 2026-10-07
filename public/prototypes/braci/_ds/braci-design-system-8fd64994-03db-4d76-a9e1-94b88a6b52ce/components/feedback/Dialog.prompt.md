One-line: modal for customising an item or confirming an order.

```jsx
<Dialog open={open} title="Margherita" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="primary">Add — £11.50</Button></>}>
  Pick your extras.
</Dialog>
```
Footer actions are right-aligned; the commit action sits last.
