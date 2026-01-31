# Carbon Vue 11 Migration - Implementation Plan

## Project Objective

Create a **Vue 3 component library** (`carbon-vue`) that wraps `@carbon/web-components` (Carbon Design System 11), achieving feature parity with the existing `carbon-components-vue` library (Carbon 10).

Also create story book that replicates all existing documentations from @carbon/web-components but with the new vue wrapper components.

### Key Goals
- Wrap Carbon web components as Vue 3 components with `Cv` prefix
- Ensure proper Vue integration (v-model, events, props)
- Match Storybook stories and MDX documentation with `@carbon/web-components`
- Maintain consistent property binding patterns

### Rules and Responsibilities
- Implement the new wrapper components
- Ensure proper Vue integrations
- Exact Storybook stories and MDX documentations with `@carbon/web-components` (You SHOULD reference and modify a copy for the new story book)
- Ensure all controls are working by testing it on the browser
    - You can start the story books in both carbon-vue using `npm run storybook` and `@carbon/web-components` by going to `carbon/package/web-components` folder and run `yarn storybook`
---

## Project Structure

```
carbon-migration/
├── carbon/                    # @carbon/web-components source (reference)
│   └── packages/web-components/src/components/
└── carbon-vue/                # Vue 3 wrapper library
    ├── src/components/        # Vue component wrappers
    ├── .storybook/            # Storybook configuration
    │   ├── templates/         # Story templates (with-layer.ts)
    │   └── preview.ts
    └── package.json
```

---

## Implementation Phases

### Phase 1: Core Components ✅ COMPLETED

| Component | Wrapper | Stories | MDX | Status |
|-----------|---------|---------|-----|--------|
| Accordion | ✅ | ✅ | ✅ | Complete |
| Button | ✅ | ✅ | ✅ | Complete |
| Checkbox | ✅ | ⬜ | ⬜ | Partial |
| Link | ✅ | ⬜ | ⬜ | Partial |
| Loading | ✅ | ⬜ | ⬜ | Partial |
| Tag | ✅ | ✅ | ✅ | Complete |
| Text Input | ✅ | ✅ | ✅ | Complete |
| Toggle | ✅ | ✅ | ✅ | Complete |
| Tooltip | ✅ | ⬜ | ⬜ | Partial |
| Notification | ✅ | ⬜ | ⬜ | Partial |

---

### Phase 2: Form Components 🔄 NEXT

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Radio Button | ⬜ | ⬜ | ⬜ | `cds-radio-button`, `cds-radio-button-group` |
| Select | ⬜ | ⬜ | ⬜ | `cds-select`, `cds-select-item` |
| Number Input | ⬜ | ⬜ | ⬜ | Regular + Fluid variants |
| Text Area | ⬜ | ⬜ | ⬜ | `cds-textarea` + Fluid |
| Date Picker | ⬜ | ⬜ | ⬜ | Complex - multiple sub-components |
| Time Picker | ⬜ | ⬜ | ⬜ | `cds-time-picker` |
| Search | ⬜ | ⬜ | ⬜ | Regular + Fluid variants |
| Password Input | ⬜ | ⬜ | ⬜ | `cds-password-input` |
| File Uploader | ⬜ | ⬜ | ⬜ | Multiple sub-components |
| Slider | ⬜ | ⬜ | ⬜ | `cds-slider`, `cds-slider-input` |
| Form Group | ⬜ | ⬜ | ⬜ | `cds-form-group` |

---

### Phase 3: Selection Components

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Dropdown | ⬜ | ⬜ | ⬜ | `cds-dropdown` |
| Combo Box | ⬜ | ⬜ | ⬜ | `cds-combo-box` |
| Multi Select | ⬜ | ⬜ | ⬜ | `cds-multi-select` |
| Content Switcher | ⬜ | ⬜ | ⬜ | `cds-content-switcher` |

---

### Phase 4: Navigation Components

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Tabs | ⬜ | ⬜ | ⬜ | `cds-tabs`, `cds-tab` |
| Breadcrumb | ⬜ | ⬜ | ⬜ | `cds-breadcrumb`, `cds-breadcrumb-item` |
| Pagination | ⬜ | ⬜ | ⬜ | `cds-pagination` |
| Progress Indicator | ⬜ | ⬜ | ⬜ | `cds-progress-indicator`, `cds-progress-step` |
| Tree View | ⬜ | ⬜ | ⬜ | `cds-tree`, `cds-tree-node` |

---

### Phase 5: UI Shell & Layout

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Header | ⬜ | ⬜ | ⬜ | Complex - 10+ sub-components |
| Side Nav | ⬜ | ⬜ | ⬜ | Multiple sub-components |
| Grid | ⬜ | ⬜ | ⬜ | `cds-grid`, `cds-row`, `cds-column` |
| Stack | ⬜ | ⬜ | ⬜ | `cds-stack` |
| Page Header | ⬜ | ⬜ | ⬜ | IBM pattern |

---

### Phase 6: Data Display

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Data Table | ⬜ | ⬜ | ⬜ | **COMPLEX** - 20+ sub-components |
| Structured List | ⬜ | ⬜ | ⬜ | Multiple row/cell components |
| List | ⬜ | ⬜ | ⬜ | Ordered/Unordered |
| Contained List | ⬜ | ⬜ | ⬜ | `cds-contained-list` |
| Tile | ⬜ | ⬜ | ⬜ | Multiple variants |
| Code Snippet | ⬜ | ⬜ | ⬜ | Single, Multi, Inline |

---

### Phase 7: Overlays & Feedback

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| Modal | ⬜ | ⬜ | ⬜ | `cds-modal`, header, body, footer |
| Overflow Menu | ⬜ | ⬜ | ⬜ | `cds-overflow-menu` |
| Context Menu | ⬜ | ⬜ | ⬜ | `cds-menu` component |
| Popover | ⬜ | ⬜ | ⬜ | `cds-popover` |
| Toggle Tip | ⬜ | ⬜ | ⬜ | `cds-toggletip` |
| Progress Bar | ⬜ | ⬜ | ⬜ | `cds-progress-bar` |
| Inline Loading | ⬜ | ⬜ | ⬜ | `cds-inline-loading` |
| Side Panel | ⬜ | ⬜ | ⬜ | IBM pattern |
| Tearsheet | ⬜ | ⬜ | ⬜ | IBM pattern |

---

### Phase 8: Advanced & AI Components

| Component | Wrapper | Stories | MDX | Notes |
|-----------|---------|---------|-----|-------|
| AI Label | ⬜ | ⬜ | ⬜ | `cds-ai-label` |
| AI Skeleton | ⬜ | ⬜ | ⬜ | AI-specific skeleton |
| Copy Button | ⬜ | ⬜ | ⬜ | `cds-copy-button` |
| Menu Button | ⬜ | ⬜ | ⬜ | `cds-menu-button` |
| Combo Button | ⬜ | ⬜ | ⬜ | `cds-combo-button` |
| Icon Button | ⬜ | ⬜ | ⬜ | `cds-icon-button` |
| Skeleton components | ⬜ | ⬜ | ⬜ | Icon, Text, Placeholder |

---

## Validation Checklist

> [!IMPORTANT]
> Check these for every component implementation.

### 1. Property Binding Rules

Check source at: `carbon/packages/web-components/src/components/{component}/{component}.ts`

| Decorator | Vue Binding |
|-----------|-------------|
| `@property()` with NO `attribute:` | Use **camelCase**: `:isExpressive` |
| `@property({ attribute: 'kebab-name' })` | Use **kebab-case**: `:kebab-name` |

**Known camelCase (no `attribute:`):**
- `isExpressive`, `isSelected`, `isFlush`, `hideLabel` (Toggle), `readonly`

**Known kebab-case (has `attribute:`):**
- `hide-close-button`, `low-contrast`, `helper-text`, `invalid-text`, `label-text`

### 2. With Layer Template

Uses `deepCloneWithProperties()` - must preserve these properties when cloning:
```typescript
['titleText', 'labelText', 'helperText', 'placeholder', 'value', 
 'checked', 'disabled', 'readonly', 'open', 'expanded', 'size', 'kind']
```

### 3. Story Parity
- Match story order from `@carbon/web-components`
- Include "With Layer" story using `<sb-template-layers>`
- Expose all props in Storybook controls

---

## Completed Work

### Files Modified
| File | Change |
|------|--------|
| `with-layer.ts` | Rebuilt with `deepCloneWithProperties()` |
| `CvAccordion.vue` | Fixed `:isFlush` |
| `CvButton.vue` | Fixed `:isExpressive`, `:isSelected` |
| `CvToggle.vue` | Fixed `:hideLabel` |
| `CvTextInput.vue` | Fixed `:readonly` |
| `CvCheckbox.vue` | Fixed `:readonly` |

---

## Running the Project

```bash
cd carbon-vue
npm run storybook  # http://localhost:7007
```

---

## Next Steps

1. Complete Phase 1 MDX docs (Checkbox, Link, Loading, Tooltip, Notification)
2. Begin Phase 2: Form Components - Radio Button, Select, Number Input
3. For each component:
   - Check `@property()` decorators for binding format
   - Create stories matching original order
   - Add With Layer story if applicable
   - Create MDX documentation
