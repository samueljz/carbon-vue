# Property Binding Rules

> [!IMPORTANT]
> Check the web component source file for `@property()` decorators before binding props in Vue templates.

---

## Binding Pattern by Decorator

| Decorator Pattern | Vue Binding |
|------------------|-------------|
| `@property()` with NO `attribute:` | Use **camelCase**: `:isExpressive` |
| `@property({ attribute: 'kebab-name' })` | Use **kebab-case**: `:kebab-name` |

**Known camelCase properties:**
- `isExpressive`, `isSelected`, `isFlush`, `hideLabel`, `readonly`

**Known kebab-case properties:**
- `hide-close-button`, `low-contrast`, `helper-text`, `invalid-text`, `label-text`

---

## Boolean Attributes and the `reflect` Property

> [!WARNING]
> **Critical for styling:** Some web components rely on DOM attributes for CSS selectors, not just JavaScript properties.

### Understanding `reflect` in Web Components

When a web component property is defined with `@property()`, the `reflect` option controls attribute synchronization:

```typescript
// WITH reflect: true - property ↔ attribute (two-way sync)
@property({ type: Boolean, reflect: true })
disabled = false;

// WITHOUT reflect - attribute → property only (one-way sync)
@property({ type: Boolean })
invalid = false;
```

### How This Affects Vue Binding

| Scenario | Web Component Definition | Vue Template | Result |
|----------|-------------------------|--------------|--------|
| **With reflect** | `@property({ type: Boolean, reflect: true })` | `:disabled="isDisabled"` | ✅ Sets property AND attribute |
| **Without reflect** | `@property({ type: Boolean })` | `:invalid="isInvalid"` | ⚠️ Sets property only, NO attribute |
| **Force Attribute** | `@property({ type: Boolean })` | `:invalid.attr="isInvalid \|\| undefined"` | ✅ Forces attribute to DOM via Vue |

### When to Use Attribute Binding (`.attr`)

If the web component uses CSS attribute selectors like `[invalid]`, `[warn]`, `[href]`, you MUST ensure the HTML attribute is present in the DOM:

```vue
<!-- ❌ WRONG - Only sets DOM property, CSS [invalid] won't apply -->
<CvCheckbox :invalid="isInvalid">

<!-- ❌ HACKY - Using onMounted lifehooks to manually setAttribute -->

<!-- ✅ CORRECT - Forces Vue to bind as an HTML attribute. Use `|| undefined` to cleanly remove the attribute when false! -->
<CvCheckbox :invalid.attr="isInvalid || undefined">
```

### How to Check if You Need `.attr` Attribute Binding

1. **Check the web component source** for `@property()` decorator:
   ```typescript
   @property({ type: Boolean })  // NO reflect!
   invalid = false;
   ```

2. **Check the component's CSS** for attribute selectors:
   ```scss
   :host([invalid]) {  // Uses [invalid] attribute selector
     // styling
   }
   ```

3. **If both conditions are true**, use the `.attr` modifier in your Vue templates.

### Known Components Requiring Attribute Binding

| Component | Properties | Reason |
|-----------|-----------|--------|
| `cds-checkbox` | `invalid`, `warn` | CSS uses `[invalid]` and `[warn]` selectors |
