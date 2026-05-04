<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';

export interface CvTableToolbarProps {
  /**
   * Toolbar size
   */
  size?: TABLE_SIZE;
}

withDefaults(defineProps<CvTableToolbarProps>(), {
  size: TABLE_SIZE.LG,
});
</script>

<template>
  <cds-table-toolbar slot="toolbar" :size="size">
    <slot />
  </cds-table-toolbar>
</template>
