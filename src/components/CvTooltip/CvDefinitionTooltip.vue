<script setup lang="ts">
import '@carbon/web-components/es/components/tooltip/index.js';
import type { TooltipAlignment, TooltipPosition } from '@/types';

export interface CvDefinitionTooltipProps {
  /**
   * Specify the alignment of the tooltip
   */
  align?: TooltipAlignment;
  /**
   * Specify the position of the tooltip
   */
  position?: TooltipPosition;
  /**
   * Specify the definition text
   */
  definition?: string;
}

withDefaults(defineProps<CvDefinitionTooltipProps>(), {
  align: 'center',
  position: 'bottom',
});
</script>

<template>
  <cds-definition-tooltip
    :align="align"
    :position="position"
    :definition="definition"
  >
    <slot />
  </cds-definition-tooltip>
</template>
