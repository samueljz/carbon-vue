<script setup lang="ts">
import '@carbon/web-components/es/components/accordion/index.js';
import type { AccordionSize, AccordionAlignment } from '@/types';

export interface CvAccordionProps {
  /**
   * Accordion size should be sm, md, lg
   */
  size?: AccordionSize;
  /**
   * Specify the alignment of the accordion heading title and chevron
   */
  alignment?: AccordionAlignment;
  /**
   * Specify whether Accordion text should be flush, default is false
   */
  isFlush?: boolean;
  /**
   * Disable all accordion items inside this accordion
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvAccordionProps>(), {
  size: 'md',
  alignment: 'end',
  isFlush: false,
  disabled: false,
});
</script>

<template>
  <cds-accordion
    :size="size"
    :alignment="alignment"
    :isFlush="isFlush || undefined"
    :disabled="disabled || undefined"
  >
    <slot />
  </cds-accordion>
</template>
