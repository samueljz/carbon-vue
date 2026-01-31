<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagType, TagSize } from '@/types';

export interface CvDismissibleTagProps {
  type?: TagType;
  size?: TagSize;
  disabled?: boolean;
  title?: string;
  text?: string;
}

const props = withDefaults(defineProps<CvDismissibleTagProps>(), {
  type: 'gray',
  size: 'md',
  disabled: false,
});

const emit = defineEmits<{
  close: [event: CustomEvent];
}>();
</script>

<template>
  <cds-dismissible-tag
    :type="type"
    :size="size"
    :disabled="disabled || undefined"
    :title="title"
    :text="text"
    @cds-tag-closed="emit('close', $event)"
  >
    <slot />
  </cds-dismissible-tag>
</template>
