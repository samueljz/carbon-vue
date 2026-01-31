<script setup lang="ts">
import '@carbon/web-components/es/components/loading/index.js';

export interface CvLoadingProps {
  /**
   * Specify the description of the loading
   */
  description?: string;
  /**
   * Specify whether the loading is active
   */
  active?: boolean;
  /**
   * Specify whether to use the overlay
   */
  withOverlay?: boolean;
  /**
   * Specify whether to use the small variant
   */
  small?: boolean;
}

withDefaults(defineProps<CvLoadingProps>(), {
  active: true,
  withOverlay: false,
  small: false,
});
</script>

<template>
  <cds-loading
    :description="description"
    :active="active || undefined"
    :overlay="withOverlay || undefined"
    :small="small || undefined"
  />
</template>
