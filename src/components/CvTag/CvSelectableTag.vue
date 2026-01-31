<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagSize } from '@/types';

export interface CvSelectableTagProps {
  size?: TagSize;
  disabled?: boolean;
  selected?: boolean;
  text?: string;
}

withDefaults(defineProps<CvSelectableTagProps>(), {
  size: 'md',
  disabled: false,
  selected: false,
});

const emit = defineEmits<{
  'update:selected': [value: boolean];
  change: [event: CustomEvent];
}>();

const handleChange = (event: CustomEvent) => {
  emit('change', event);
  emit('update:selected', (event.target as HTMLElement).hasAttribute('selected'));
};
</script>

<template>
  <cds-selectable-tag
    :size="size"
    :disabled="disabled || undefined"
    :selected="selected || undefined"
    :text="text"
    @cds-selectable-tag-changed="handleChange"
  >
    <slot />
    <slot name="icon" />
    <slot name="decorator" />
    <slot name="ai-label" />
    <slot name="slug" />
  </cds-selectable-tag>
</template>
