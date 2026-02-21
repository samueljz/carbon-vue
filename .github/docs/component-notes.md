# Notes for Completed Components

Key learnings and gotchas discovered during implementation. Refer to these before touching an existing component.

| Component | Key Learnings |
|-----------|---------------|
| Loading | Uses `active` (not `inactive`), `withOverlay` (not `overlay`) |
| Tag | Multiple variants: CvTag, CvDismissibleTag, CvSelectableTag, CvOperationalTag |
| Notification | 4 types: Actionable, Inline, Toast, Callout — each with own stories/MDX |
| Button | Uses camelCase: `isExpressive`, `isSelected` |
| Toggle | Uses camelCase: `hideLabel` |
| Icons | Integrated `@carbon/icons-vue` for stories (Tip: Button, Link, Tooltip used inline SVGs previously) |
| Radio Button | `labelText`/`hideLabel` properties need correct binding to work |
| Select | `readonly` prop interaction with Storybook controls |
| Checkbox | `invalid` and `warn` require the `.attr` modifier (e.g. `:invalid.attr="invalid || undefined"`) due to CSS selectors |
| Pagination | Use `|| undefined` on boolean properties (e.g. `:pages-unknown="pagesUnknown || undefined"`) to prevent `"false"` string serialization |
| Tree View (Node) | `href` and `id` require the `.attr` modifier (e.g. `:href.attr="href || undefined"`) to apply correct Web Component native styling |
| Text Area | Label visibility requires correct boolean attribute binding |
| Date Picker | Complex component with range support, requires custom type handling for stories |
| Time Picker | AM/PM and Timezone dropdowns need proper option handling |
| Search | Multiple story variants for different use cases |
| Layer | Layout component for managing design tokens across nested contexts |
