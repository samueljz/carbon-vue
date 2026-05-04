<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { TABLE_SORT_CYCLE, TABLE_SORT_DIRECTION } from '@carbon/web-components/es/components/data-table/defs.js';

export interface CvTableHeaderCellProps {
  expandable?: boolean;
  isSelectable?: boolean;
  isSortable?: boolean;
  sortActive?: boolean;
  sortCycle?: TABLE_SORT_CYCLE;
  sortDirection?: TABLE_SORT_DIRECTION;
}

withDefaults(defineProps<CvTableHeaderCellProps>(), {
  expandable: false,
  isSelectable: false,
  isSortable: false,
  sortActive: false,
});

const emit = defineEmits<{
  'header-cell-sort': [event: CustomEvent];
}>();
</script>

<template>
  <cds-table-header-cell
    :expandable="expandable ? 'true' : undefined"
    :is-selectable="isSelectable ? 'true' : undefined"
    :is-sortable="isSortable ? 'true' : undefined"
    :sort-active="sortActive ? 'true' : undefined"
    :sort-cycle="sortCycle"
    :sort-direction="sortDirection"
    @cds-table-header-cell-sort="emit('header-cell-sort', $event)"
  >
    <slot />
  </cds-table-header-cell>
</template>
