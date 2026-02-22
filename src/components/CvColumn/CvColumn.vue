<script setup lang="ts">
import '@carbon/web-components/es/components/grid/index.js';

export interface CvColumnProps {
  /**
   * The span of the column at the small breakpoint.
   */
  sm?: number | string;

  /**
   * The span of the column at the medium breakpoint.
   */
  md?: number | string;

  /**
   * The span of the column at the large breakpoint.
   */
  lg?: number | string;

  /**
   * The span of the column at the extra large breakpoint.
   */
  xlg?: number | string;

  /**
   * The span of the column at the maximum breakpoint.
   */
  max?: number | string;
}

withDefaults(defineProps<CvColumnProps>(), {});
</script>

<template>
  <cds-column
    :sm="sm"
    :md="md"
    :lg="lg"
    :xlg="xlg"
    :max="max"
  >
    <slot />
  </cds-column>
</template>
