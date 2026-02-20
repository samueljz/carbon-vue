# Tooling & Running the Project

## Running the Project

```bash
# Start carbon-vue Storybook
cd carbon-vue
npm run storybook  # http://localhost:7007

# Start reference @carbon/web-components Storybook
cd carbon/packages/web-components
yarn storybook     # http://localhost:6006

# Build to verify no errors
cd carbon-vue
npm run storybook:build
```

---

## Automated Verification Skills

We have automated agent skills to help with verification:

### `verify_ui_parity` Skill

Visually compares Carbon Vue components against the reference Carbon Web Components using Storybook to ensure UI parity.

**Usage:**
1. Ensure both Storybooks are running (ports 6006 and 7007).
2. Invoke the skill instructions located at `.agent/skills/verify_ui_parity/SKILL.md`.
3. The agent will spin up a browser, compare components, and log issues to `UI_DISCREPANCIES.md`.
