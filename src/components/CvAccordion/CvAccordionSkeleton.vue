<script setup lang="ts">
import '@carbon/web-components/es/components/accordion/index.js';
import type { AccordionAlignment } from '@/types';

export interface CvAccordionSkeletonProps {
  /**
   * Specify the alignment of the accordion heading title and chevron
   */
  alignment?: AccordionAlignment;
  /**
   * Specify whether Accordion text should be flush
   */
  isFlush?: boolean;
  /**
   * Number of accordion items to render
   */
  count?: number;
}

withDefaults(defineProps<CvAccordionSkeletonProps>(), {
  alignment: 'end',
  isFlush: false,
  count: 4,
});
</script>

<template>
  <cds-accordion-skeleton
    :alignment="alignment"
    :is-flush="isFlush || undefined"
    :count="count"
  />
</template>
