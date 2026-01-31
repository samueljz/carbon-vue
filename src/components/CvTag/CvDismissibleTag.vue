<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagType, TagSize, PopoverAlignment } from '@/types';

export interface CvDismissibleTagProps {
  type?: TagType;
  size?: TagSize;
  disabled?: boolean;
  tagTitle?: string;
  text?: string;
  dismissTooltipAlignment?: PopoverAlignment;
  dismissTooltipLabel?: string;
}

withDefaults(defineProps<CvDismissibleTagProps>(), {
  type: 'gray',
  size: 'md',
  disabled: false,
  dismissTooltipAlignment: 'bottom',
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
    :tag-title="tagTitle"
    :text="text"
    :dismiss-tooltip-alignment="dismissTooltipAlignment"
    :dismiss-tooltip-label="dismissTooltipLabel"
    @cds-dismissible-tag-closed="emit('close', $event)"
  >
    <slot />
  </cds-dismissible-tag>
</template>
