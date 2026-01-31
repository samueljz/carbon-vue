<script setup lang="ts">
import '@carbon/web-components/es/components/tooltip/index.js';
import type { TooltipAlignment } from '@/types';

export interface CvDefinitionTooltipProps {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align?: TooltipAlignment;
  /**
   * Specify whether the tooltip should be open when it first renders
   */
  defaultOpen?: boolean;
  /**
   * Specifies whether the DefinitionTooltip should open on hover or not
   */
  openOnHover?: boolean;
  /**
   * Specify whether auto align functionality should be applied
   */
  autoalign?: boolean;
  /**
   * Specify the definition text
   */
  definition?: string;
}

withDefaults(defineProps<CvDefinitionTooltipProps>(), {
  align: 'bottom',
  defaultOpen: false,
  openOnHover: false,
  autoalign: false,
});
</script>

<template>
  <cds-definition-tooltip
    :align="align"
    :default-open="defaultOpen"
    :open-on-hover="openOnHover"
    :autoalign="autoalign"
  >
    <slot />
    <template v-if="definition">
      <span slot="definition">{{ definition }}</span>
    </template>
    <slot name="definition" />
  </cds-definition-tooltip>
</template>
