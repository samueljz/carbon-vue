# Story & MDX Verification Checklist

> [!IMPORTANT]
> Complete ALL checks before marking a component as done.

## Pre-merge Checklist

- [ ] **Args match** — Compare `args` object with reference `defaultArgs`
- [ ] **ArgTypes match** — All controls present with same types (boolean, text, select, radio)
- [ ] **Story names match** — Same stories in same order (Default, Playground, etc.)
- [ ] **Default values match** — e.g., `kind="error"` not `kind="info"`
- [ ] **MDX sections match** — Overview, variants, Component API, Feedback
- [ ] **Props work** — Test each control in Storybook UI
- [ ] **Build passes** — `npm run storybook:build` succeeds
