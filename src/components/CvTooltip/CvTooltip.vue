<script setup lang="ts">
import '@carbon/web-components/es/components/tooltip/index.js';
import type { TooltipAlignment } from '@/types';

export interface CvTooltipProps {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align?: TooltipAlignment;
  /**
   * Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
   */
  closeOnActivation?: boolean;
  /**
   * Specify whether the tooltip should be open when it first renders
   */
  defaultOpen?: boolean;
  /**
   * Specify whether a drop shadow should be rendered
   */
  dropShadow?: boolean;
  /**
   * Specify the duration in milliseconds to delay before displaying the tooltip
   */
  enterDelayMs?: number;
  /**
   * Specify the duration in milliseconds to delay before hiding the tooltip
   */
  leaveDelayMs?: number;
  /**
   * Specify whether auto align functionality should be applied
   */
  autoalign?: boolean;
}

withDefaults(defineProps<CvTooltipProps>(), {
  align: 'top',
  closeOnActivation: false,
  defaultOpen: false,
  dropShadow: false,
  enterDelayMs: 100,
  leaveDelayMs: 300,
  autoalign: false,
});
</script>

<template>
  <cds-tooltip
    :align="align"
    :closeOnActivation="closeOnActivation"
    :defaultOpen="defaultOpen"
    :dropShadow="dropShadow"
    :enter-delay-ms="enterDelayMs"
    :leave-delay-ms="leaveDelayMs"
    :autoalign="autoalign"
  >
    <slot />
    <slot name="content" />
  </cds-tooltip>
</template>
