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
  inactive?: boolean;
  /**
   * Specify whether to use the overlay
   */
  overlay?: boolean;
  /**
   * Specify whether to use the small variant
   */
  small?: boolean;
  /**
   * Specify the type (regular or small)
   */
  type?: 'regular' | 'small';
}

withDefaults(defineProps<CvLoadingProps>(), {
  inactive: false,
  overlay: false,
  small: false,
  type: 'regular',
});
</script>

<template>
  <cds-loading
    :description="description"
    :inactive="inactive || undefined"
    :overlay="overlay || undefined"
    :small="small || undefined"
    :type="type"
  />
</template>
