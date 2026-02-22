<script setup lang="ts">
import '@carbon/web-components/es/components/grid/index.js';

export interface CvGridProps {
  /**
   * Specify grid alignment. Default is center
   */
  align?: 'start' | 'center' | 'end';
  
  /**
   * Collapse the gutter to 1px. Useful for fluid layouts.
   * Rows have 1px of margin between them to match gutter.
   */
  condensed?: boolean;
  
  /**
   * Container hangs 16px into the gutter. Useful for
   * typographic alignment with and without containers.
   */
  narrow?: boolean;
  
  /**
   * Remove the default max width that the grid has set
   */
  fullWidth?: boolean;
}

withDefaults(defineProps<CvGridProps>(), {
  align: 'center',
  condensed: false,
  narrow: false,
  fullWidth: false,
});
</script>

<template>
  <cds-grid
    :align="align"
    :condensed="condensed ? true : undefined"
    :narrow="narrow ? true : undefined"
    :full-width="fullWidth ? true : undefined"
  >
    <slot />
  </cds-grid>
</template>
