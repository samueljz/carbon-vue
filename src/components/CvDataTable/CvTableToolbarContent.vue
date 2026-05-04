<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';

export interface CvTableToolbarContentProps {
  /**
   * `true` if this batch actions bar is active.
   */
  hasBatchActions?: boolean;
  /**
   * Table toolbar contents size
   */
  size?: TABLE_SIZE;
}

withDefaults(defineProps<CvTableToolbarContentProps>(), {
  hasBatchActions: false,
  size: TABLE_SIZE.LG,
});
</script>

<template>
  <cds-table-toolbar-content
    :has-batch-actions="hasBatchActions ? 'true' : undefined"
    :size="size"
  >
    <slot />
  </cds-table-toolbar-content>
</template>
