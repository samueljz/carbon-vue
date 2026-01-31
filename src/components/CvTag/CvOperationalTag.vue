<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagType, TagSize } from '@/types';

export interface CvOperationalTagProps {
  type?: TagType;
  size?: TagSize;
  disabled?: boolean;
  text?: string;
}

withDefaults(defineProps<CvOperationalTagProps>(), {
  type: 'gray',
  size: 'md',
  disabled: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <cds-operational-tag
    :type="type"
    :size="size"
    :disabled="disabled || undefined"
    :text="text"
    @click="emit('click', $event)"
  >
    <slot />
  </cds-operational-tag>
</template>
