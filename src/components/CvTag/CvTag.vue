<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagType, TagSize } from '@/types';

export interface CvTagProps {
  /**
   * Specify the type of the Tag
   */
  type?: TagType;
  /**
   * Specify the size of the Tag
   */
  size?: TagSize;
  /**
   * Specify whether the Tag is disabled
   */
  disabled?: boolean;
  /**
   * Set to true for a filter tag
   */
  filter?: boolean;
  /**
   * Provide a title for the tag
   */
  title?: string;
}

withDefaults(defineProps<CvTagProps>(), {
  type: 'gray',
  size: 'md',
  disabled: false,
  filter: false,
});

const emit = defineEmits<{
  close: [event: CustomEvent];
}>();
</script>

<template>
  <cds-tag
    :type="type"
    :size="size"
    :disabled="disabled || undefined"
    :filter="filter || undefined"
    :title="title"
    @cds-tag-closed="emit('close', $event)"
  >
    <slot />
  </cds-tag>
</template>
