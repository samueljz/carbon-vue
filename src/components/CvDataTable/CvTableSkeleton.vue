<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableSkeletonProps {
  /**
   * The number of columns.
   */
  columnCount?: number;
  /**
   * Specify whether the table should have a header
   */
  headers?: boolean;
  /**
   * The number of rows.
   */
  rowCount?: number;
  /**
   * `true` if the table should show the header.
   */
  showHeader?: boolean;
  /**
   * `true` if the table should show the toolbar.
   */
  showToolbar?: boolean;
  /**
   * `true` if the striped style should be used.
   */
  zebra?: boolean;
}

withDefaults(defineProps<CvTableSkeletonProps>(), {
  columnCount: 5,
  headers: false,
  rowCount: 5,
  showHeader: false,
  showToolbar: false,
  zebra: false,
});
</script>

<template>
  <cds-table-skeleton
    :column-count="columnCount"
    :headers="headers"
    :row-count="rowCount"
    :show-header="showHeader"
    :show-toolbar="showToolbar"
    :zebra="zebra"
  />
</template>
