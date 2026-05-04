<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableBodyProps {
  /**
   * The color scheme.
   */
  useZebraStyles?: boolean;
}

withDefaults(defineProps<CvTableBodyProps>(), {
  useZebraStyles: false,
});
</script>

<template>
  <cds-table-body :use-zebra-styles="useZebraStyles">
    <slot />
  </cds-table-body>
</template>
