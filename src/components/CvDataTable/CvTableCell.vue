<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';

export interface CvTableCellProps {
  /**
   * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
   */
  overflowMenuOnHover?: boolean;
  /**
   * The table size.
   */
  size?: TABLE_SIZE;
}

withDefaults(defineProps<CvTableCellProps>(), {
  overflowMenuOnHover: false,
  size: TABLE_SIZE.LG,
});
</script>

<template>
  <cds-table-cell :overflow-menu-on-hover="overflowMenuOnHover" :size="size">
    <slot />
  </cds-table-cell>
</template>
