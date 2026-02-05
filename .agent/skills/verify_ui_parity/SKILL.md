---
name: verify_ui_parity
description: Visually compares Carbon Vue components against the reference Carbon Web Components using Storybook to ensure UI parity.
---

# UI Parity Verification Skill

This skill is designed to verify that the implementation of `carbon-vue` components achieves exact visual and functional parity with the reference to `carbon/packages/web-components` within the workspace.

## Workflow

### 1. Ensure Environments are Running

Before comparing, ensure both Storybook environments are active.

- **Target (Carbon Vue)**: `http://localhost:7007`
  - Source: `carbon-vue` directory
  - Command: `npm run storybook`
- **Reference (Carbon Web Components)**: `http://localhost:6006`
  - Source: `carbon/packages/web-components` directory
  - Command: `npm run storybook` or `yarn storybook`

**Action:** Check if ports 6006 and 7007 are active. If not, start the respective servers in background terminals.

### 2. Launch Browser Subagent

Use the `browser_subagent` to orchestrate the comparison. Pass a task description that explicitly asks to compare specific components.

**Prompt Template for Browser Agent:**
> "I need to verify UI parity for the [Component Name] component.
> 1. Open `http://localhost:6006` and search for the '[Component Name]' story under Components.
> 2. Open `http://localhost:7007` in a new tab and search for the 'Cv[Component Name]' story.
> 3. Arrange tabs or toggle between them to compare:
>    - Initial rendering (spacing, fonts, colors, alignment).
>    - Hover states (background changes, cursor).
>    - Focus states (outline style, color).
>    - Disabled state (opacity, interaction).
>    - Variations (e.g., sizes, kinds) using the Controls panel.
> 4. Take screenshots of any discrepancies.
> 5. Return a report detailing any differences found or confirming parity."

### 3. Analyze & Document

Based on the browser agent's findings, document the results in `UI_DISCREPANCIES.md` in the root of `carbon-vue`.

**File Structure: `UI_DISCREPANCIES.md`**

```markdown
# UI Discrepancy Report

## [CvComponent Name] - <YYYY-MM-DD>

### Status: 🔴 FAILED / 🟢 PASSED

### Findings
- **[Attribute/State]**:
  - Reference: [Description of correct behavior]
  - Actual: [Description of current behavior]
  - Severity: [High/Medium/Low]

### Action Items
- [ ] Fix [Specific CSS/Logic issue]
```

### 4. Remediation (Optional)

If the discrepancy is small (e.g., CSS token mismatch), you may attempt to fix it immediately in the `carbon-vue` codebase and verifying again.

## Tips for Parity

- **Token Usage**: Ensure `carbon-vue` uses Carbon tokens (var(--cds-*)) rather than hardcoded values.
- **Shadow DOM**: Remember that reference components use Shadow DOM. Vue components might scope styles differently.
- **Attributes**: Check if attributes like `aria-label`, `disabled`, `data-invalid` are correctly reflected in the DOM.
