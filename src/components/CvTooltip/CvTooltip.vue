<script setup lang="ts">
import '@carbon/web-components/es/components/tooltip/index.js';
import type { TooltipAlignment, TooltipPosition } from '@/types';

export interface CvTooltipProps {
  /**
   * Specify the alignment of the tooltip
   */
  align?: TooltipAlignment;
  /**
   * Specify the position of the tooltip
   */
  position?: TooltipPosition;
  /**
   * Specify whether to use enter delay
   */
  enterDelay?: number;
  /**
   * Specify whether to use leave delay
   */
  leaveDelay?: number;
}

withDefaults(defineProps<CvTooltipProps>(), {
  align: 'center',
  position: 'top',
  enterDelay: 100,
  leaveDelay: 300,
});
</script>

<template>
  <cds-tooltip
    :align="align"
    :position="position"
    :enter-delay-ms="enterDelay"
    :leave-delay-ms="leaveDelay"
  >
    <slot />
    <slot name="content" />
  </cds-tooltip>
</template>
