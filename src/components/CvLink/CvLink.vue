<script setup lang="ts">
import '@carbon/web-components/es/components/link/index.js';
import type { Size } from '@/types';

export interface CvLinkProps {
  /**
   * Link URL
   */
  href?: string;
  /**
   * Specify the size of the Link
   */
  size?: Size;
  /**
   * Specify whether the link is disabled
   */
  disabled?: boolean;
  /**
   * Specify whether the link is inline
   */
  inline?: boolean;
  /**
   * Specify whether the link is visited
   */
  visited?: boolean;
  /**
   * The link target
   */
  target?: string;
  /**
   * The link rel attribute
   */
  rel?: string;
}

withDefaults(defineProps<CvLinkProps>(), {
  size: 'md',
  disabled: false,
  inline: false,
  visited: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <cds-link
    :href="href"
    :size="size"
    :disabled="disabled || undefined"
    :inline="inline || undefined"
    :visited="visited || undefined"
    :target="target"
    :rel="rel"
    @click="emit('click', $event)"
  >
    <slot />
    <slot name="icon" />
  </cds-link>
</template>
