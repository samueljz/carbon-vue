---
name: implementation-guidelines
description: Strict guidelines and workflow for implementing Carbon Vue 11 components.
---

# Carbon Vue 11 Migration - Implementation Guidelines

> **CONTEXT**: This document outlines the strict rules, patterns, and status for the Carbon Vue 11 migration project.
> **INSTRUCTION**: When asked to implement or update a component, YOU MUST follow the workflow, naming conventions, and file structures defined here exactly.
> **PRIORITY**: Feature parity with `@carbon/web-components` and exact Storybook reproduction are the top priorities.

## Project Objective

Create a **Vue 3 component library** (`carbon-vue`) that wraps `@carbon/web-components` (Carbon Design System 11), achieving feature parity with `carbon-components-vue` (Carbon 10).

### Key Goals
- Wrap Carbon web components as Vue 3 components with `Cv` prefix
- Ensure proper Vue integration (v-model, events, props)
- Match Storybook stories and MDX documentation exactly with `@carbon/web-components`

---

## Quick Reference Paths

| Resource | Path |
|----------|------|
| **Reference components** | `carbon/packages/web-components/src/components/{component}/` |
| **Reference stories** | `carbon/packages/web-components/src/components/{component}/{component}.stories.ts` |
| **Reference MDX** | `carbon/packages/web-components/src/components/{component}/{component}.mdx` |
| **Vue components** | `carbon-vue/src/components/Cv{Component}/` |
| **Vue stories** | `carbon-vue/src/components/Cv{Component}/Cv{Component}.stories.ts` |
| **Vue MDX** | `carbon-vue/src/components/Cv{Component}/Cv{Component}.mdx` |
| **Storybook config** | `carbon-vue/.storybook/` |

---

## Component Implementation Workflow

For each component, follow these steps in order:

### Step 1: Research the Reference
```bash
# View the web component source to understand props
cat carbon/packages/web-components/src/components/{component}/{component}.ts

# View reference stories
cat carbon/packages/web-components/src/components/{component}/{component}.stories.ts

# View reference MDX
cat carbon/packages/web-components/src/components/{component}/{component}.mdx
```

### Step 2: Create Vue Component Wrapper

**File:** `carbon-vue/src/components/Cv{Component}/Cv{Component}.vue`

```vue
<script setup lang="ts">
import '@carbon/web-components/es/components/{component}/index.js';

export interface Cv{Component}Props {
  // Copy props from web component @property() decorators
  propName?: string;
}

withDefaults(defineProps<Cv{Component}Props>(), {
  // Set defaults matching web component
});

const emit = defineEmits<{
  eventName: [event: CustomEvent];
}>();
</script>

<template>
  <cds-{component}
    :prop-name="propName"
    @cds-{component}-event="emit('eventName', $event)"
  >
    <!-- Named slots: check reference @slot JSDoc comments and <slot name="..."> in render() -->
    <slot name="title" />
    <slot name="subtitle" />
    <!-- Default slot -->
    <slot />
  </cds-{component}>
</template>
```

> [!IMPORTANT]
> **Slot Mapping:** Check the reference web component for `<slot name="...">` elements in the `render()` method and `@slot` JSDoc comments. All named slots from the reference should be exposed in the Vue wrapper.

### Step 3: Create Stories File

**File:** `carbon-vue/src/components/Cv{Component}/Cv{Component}.stories.ts`

```typescript
import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { Cv{Component} } from './index';

// Copy args from reference stories
const args = {
  // Match reference defaultArgs exactly
};

// Copy argTypes from reference stories  
const argTypes: ArgTypes = {
  propName: {
    control: 'boolean', // or 'text', 'select', 'radio'
    description: 'Copy description from reference',
  },
};

const meta: Meta<typeof Cv{Component}> = {
  title: 'Components/{Component}',
  component: Cv{Component},
};

export default meta;
type Story = StoryObj<typeof Cv{Component}>;

// Copy story structure from reference
export const Default: Story = {
  args,
  argTypes,
  render: (args) => ({
    components: { Cv{Component} },
    setup() { return { args }; },
    template: '<Cv{Component} v-bind="args" />',
  }),
};
```

### Step 4: Create MDX Documentation

**File:** `carbon-vue/src/components/Cv{Component}/Cv{Component}.mdx`

```mdx
import { ArgTypes, Canvas, Meta } from '@storybook/addon-docs/blocks';
import * as {Component}Stories from './Cv{Component}.stories';

<Meta of={{Component}Stories} />

# {Component}

[Source code](https://github.com/carbon-design-system/carbon/tree/main/packages/web-components/src/components/{component})
&nbsp;|&nbsp;
[Usage guidelines](https://www.carbondesignsystem.com/components/{component}/usage)
&nbsp;|&nbsp;
[Accessibility](https://www.carbondesignsystem.com/components/{component}/accessibility)

## Overview

{Copy overview text from reference MDX}

<Canvas of={{Component}Stories.Default} />

## Component API

<ArgTypes of={{Component}Stories} />

## Feedback

Help us improve this component by providing feedback on
[GitHub](https://github.com/nicholaslee119/carbon-vue).
```

### Step 5: Export Component

**File:** `carbon-vue/src/components/Cv{Component}/index.ts`

```typescript
export { default as Cv{Component} } from './Cv{Component}.vue';
```

### Step 6: Verify

```bash
# Build storybook to check for errors
cd carbon-vue && npm run storybook:build

# Run storybook to verify visually
npm run storybook  # http://localhost:7007
```

---

## Property Binding Rules

> [!IMPORTANT]
> Check the web component source file for `@property()` decorators.

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
| **With reflect** | `@property({ type: Boolean, reflect: true })` | `:disabled="true"` | ✅ Sets property AND attribute |
| **Without reflect** | `@property({ type: Boolean })` | `:invalid="true"` | ⚠️ Sets property only, NO attribute |
| **Without reflect** | `@property({ type: Boolean })` | `invalid` (no colon) | ✅ Sets attribute (and property via attribute) |

### When to Use Attribute Binding (No Colon)

If the web component uses CSS attribute selectors like `[invalid]` or `[warn]`, you MUST ensure the attribute is in the DOM:

```vue
<!-- ❌ WRONG - Only sets property, CSS won't work -->
<CvCheckbox :invalid="true" invalid-text="Error">

<!-- ✅ CORRECT - Sets attribute in DOM -->
<CvCheckbox invalid invalid-text="Error">
```

### How to Check if You Need Attribute Binding

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

3. **If both conditions are true**, use attribute binding (no colon) in stories for boolean `true` values

### Known Components Requiring Attribute Binding

| Component | Properties | Reason |
|-----------|-----------|--------|
| `cds-checkbox` | `invalid`, `warn` | CSS uses `[invalid]` and `[warn]` selectors |

---

## Story & MDX Verification Checklist

> [!IMPORTANT]
> Complete ALL checks before marking a component as done.

- [ ] **Args match** - Compare `args` object with reference `defaultArgs`
- [ ] **ArgTypes match** - All controls present with same types (boolean, text, select, radio)
- [ ] **Story names match** - Same stories in same order (Default, Playground, etc.)
- [ ] **Default values match** - e.g., `kind="error"` not `kind="info"`
- [ ] **MDX sections match** - Overview, variants, Component API, Feedback
- [ ] **Props work** - Test each control in Storybook UI
- [ ] **Build passes** - `npm run storybook:build` succeeds

---

## Implementation Phases

### Phase 1: Core Components ✅ COMPLETED

| Component | Wrapper | Stories | MDX | Status |
|-----------|---------|---------|-----|--------|
| Accordion | ✅ | ✅ | ✅ | Complete |
| Button | ✅ | ✅ | ✅ | Complete |
| Checkbox | ✅ | ✅ | ✅ | Complete |
| Link | ✅ | ✅ | ✅ | Complete |
| Loading | ✅ | ✅ | ✅ | Complete |
| Tag | ✅ | ✅ | ✅ | Complete |
| Text Input | ✅ | ✅ | ✅ | Complete |
| Toggle | ✅ | ✅ | ✅ | Complete |
| Tooltip | ✅ | ✅ | ✅ | Complete |
| Notification | ✅ | ✅ | ✅ | Complete |

---

### Phase 2: Form Components 🔄 NEXT

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Radio Button | ✅ | ✅ | ✅ | `cds-radio-button`, `cds-radio-button-group` |
| Select | ✅ | ✅ | ✅ | `cds-select`, `cds-select-item` |
| Number Input | ✅ | ✅ | ✅ | `cds-number-input` |
| Text Area | ⬜ | ⬜ | ⬜ | `cds-textarea` |
| Date Picker | ⬜ | ⬜ | ⬜ | `cds-date-picker` (complex) |
| Time Picker | ⬜ | ⬜ | ⬜ | `cds-time-picker` |
| Search | ⬜ | ⬜ | ⬜ | `cds-search` |
| Password Input | ⬜ | ⬜ | ⬜ | `cds-password-input` |
| File Uploader | ⬜ | ⬜ | ⬜ | `cds-file-uploader` (complex) |
| Slider | ⬜ | ⬜ | ⬜ | `cds-slider`, `cds-slider-input` |
| Form Group | ⬜ | ⬜ | ⬜ | `cds-form-group` |

---

### Phase 3: Selection Components

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Dropdown | ⬜ | ⬜ | ⬜ | `cds-dropdown` |
| Combo Box | ⬜ | ⬜ | ⬜ | `cds-combo-box` |
| Multi Select | ⬜ | ⬜ | ⬜ | `cds-multi-select` |
| Content Switcher | ⬜ | ⬜ | ⬜ | `cds-content-switcher` |

---

### Phase 4: Navigation Components

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Tabs | ⬜ | ⬜ | ⬜ | `cds-tabs`, `cds-tab` |
| Breadcrumb | ⬜ | ⬜ | ⬜ | `cds-breadcrumb`, `cds-breadcrumb-item` |
| Pagination | ⬜ | ⬜ | ⬜ | `cds-pagination` |
| Progress Indicator | ⬜ | ⬜ | ⬜ | `cds-progress-indicator`, `cds-progress-step` |
| Tree View | ⬜ | ⬜ | ⬜ | `cds-tree`, `cds-tree-node` |

---

### Phase 5: UI Shell & Layout

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Header | ⬜ | ⬜ | ⬜ | `cds-header` (10+ sub-components) |
| Side Nav | ⬜ | ⬜ | ⬜ | `cds-side-nav` |
| Grid | ⬜ | ⬜ | ⬜ | `cds-grid`, `cds-row`, `cds-column` |
| Stack | ⬜ | ⬜ | ⬜ | `cds-stack` |

---

### Phase 6: Data Display

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Data Table | ⬜ | ⬜ | ⬜ | `cds-table` (20+ sub-components) |
| Structured List | ⬜ | ⬜ | ⬜ | `cds-structured-list` |
| List | ⬜ | ⬜ | ⬜ | `cds-ordered-list`, `cds-unordered-list` |
| Contained List | ⬜ | ⬜ | ⬜ | `cds-contained-list` |
| Tile | ⬜ | ⬜ | ⬜ | `cds-tile`, `cds-clickable-tile` |
| Code Snippet | ⬜ | ⬜ | ⬜ | `cds-code-snippet` |

---

### Phase 7: Overlays & Feedback

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| Modal | ⬜ | ⬜ | ⬜ | `cds-modal`, `cds-modal-header` |
| Overflow Menu | ⬜ | ⬜ | ⬜ | `cds-overflow-menu` |
| Context Menu | ⬜ | ⬜ | ⬜ | `cds-menu` |
| Popover | ⬜ | ⬜ | ⬜ | `cds-popover` |
| Toggle Tip | ⬜ | ⬜ | ⬜ | `cds-toggletip` |
| Progress Bar | ⬜ | ⬜ | ⬜ | `cds-progress-bar` |
| Inline Loading | ⬜ | ⬜ | ⬜ | `cds-inline-loading` |

---

### Phase 8: Advanced & AI Components

| Component | Wrapper | Stories | MDX | Web Component |
|-----------|---------|---------|-----|---------------|
| AI Label | ⬜ | ⬜ | ⬜ | `cds-ai-label` |
| AI Skeleton | ⬜ | ⬜ | ⬜ | `cds-ai-skeleton` |
| Copy Button | ⬜ | ⬜ | ⬜ | `cds-copy-button` |
| Menu Button | ⬜ | ⬜ | ⬜ | `cds-menu-button` |
| Combo Button | ⬜ | ⬜ | ⬜ | `cds-combo-button` |
| Icon Button | ⬜ | ⬜ | ⬜ | `cds-icon-button` |
| Skeleton components | ⬜ | ⬜ | ⬜ | `cds-skeleton-icon`, `cds-skeleton-text` |

**Pending AI Label Stories** (add after AI Label is implemented):
- [ ] Checkbox - WithAILabel story
- [ ] Tag - WithAILabel story
- [ ] Text Input - WithAILabel story
- [ ] Toggle - WithAILabel story

---

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

## Tooling & Verification Skills

We have automated agent skills to help with verification:

### `verify_ui_parity` Skill
Visually compares Carbon Vue components against the reference Carbon Web Components using Storybook to ensure UI parity.

**Usage:**
1. Ensure both Storybooks are running (ports 6006 and 7007).
2. Invoke the skill instructions located at `.agent/skills/verify_ui_parity/SKILL.md`.
3. The agent will spin up a browser, compare components, and log issues to `UI_DISCREPANCIES.md`.

---

## Notes for Completed Components

| Component | Key Learnings |
|-----------|---------------|
| Loading | Uses `active` (not `inactive`), `withOverlay` (not `overlay`) |
| Tag | Multiple variants: CvTag, CvDismissibleTag, CvSelectableTag, CvOperationalTag |
| Notification | 4 types: Actionable, Inline, Toast, Callout - each with own stories/MDX |
| Button | Uses camelCase: `isExpressive`, `isSelected` |
| Toggle | Uses camelCase: `hideLabel` |
| Icons | Integrated `@carbon/icons-vue` for stories (Tip: Button, Link, Tooltip used inline SVGs previously) |
| Radio Button | labelText/hideLabel properties need correct binding to work |
| Select | readonly prop interaction with Storybook controls |
| Checkbox | `invalid` and `warn` require attribute binding (no colon) due to CSS selectors |
