<script setup lang="ts">
import '@carbon/web-components/es/components/button/index.js';

export interface CvButtonSetProps {
  /**
   * Specify whether the buttons should be stacked vertically
   */
  stacked?: boolean;
}

withDefaults(defineProps<CvButtonSetProps>(), {
  stacked: false,
});
</script>

<template>
  <cds-button-set :stacked="stacked || undefined">
    <slot />
  </cds-button-set>
</template>
