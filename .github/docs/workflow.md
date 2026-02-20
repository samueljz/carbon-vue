# Component Implementation Workflow

> **INSTRUCTION**: When asked to implement or update a component, follow these steps **in order** exactly.
> **PRIORITY**: Feature parity with `@carbon/web-components` and exact Storybook reproduction are the top priorities.

For each component, follow these steps in order:

---

## Step 1: Research the Reference

```bash
# View the web component source to understand props
cat carbon/packages/web-components/src/components/{component}/{component}.ts

# View reference stories
cat carbon/packages/web-components/src/components/{component}/{component}.stories.ts

# View reference MDX
cat carbon/packages/web-components/src/components/{component}/{component}.mdx
```

---

## Step 2: Create Vue Component Wrapper

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

---

## Step 3: Create Stories File

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

---

## Step 4: Create MDX Documentation

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

---

## Step 5: Export Component

**File:** `carbon-vue/src/components/Cv{Component}/index.ts`

```typescript
export { default as Cv{Component} } from './Cv{Component}.vue';
```

---

## Step 6: Verify

```bash
# Build storybook to check for errors
cd carbon-vue && npm run storybook:build

# Run storybook to verify visually
npm run storybook  # http://localhost:7007
```
