# Carbon Vue 11 Migration — Project Overview

> **CONTEXT**: This document describes the project objective, key goals, and quick reference file paths for the Carbon Vue 11 migration.
> **INSTRUCTION**: Read this document first to understand the project before implementing any component.

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
