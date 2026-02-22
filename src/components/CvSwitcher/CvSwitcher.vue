<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/switcher.js';

export interface CvSwitcherProps {
  /**
   * Required props for accessibility label on the underlying menu
   */
  ariaLabel?: string;

  /**
   * Prop for accessibility labelled by on the underlying menu
   */
  ariaLabelledby?: string;
}

withDefaults(defineProps<CvSwitcherProps>(), {});
</script>

<template>
  <cds-switcher :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby">
    <slot />
  </cds-switcher>
</template>
