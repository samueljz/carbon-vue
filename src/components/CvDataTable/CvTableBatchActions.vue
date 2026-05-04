<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableBatchActionsProps {
  /**
   * `true` to make this batch actions bar active.
   */
  active?: boolean;
  /**
   * The formatter for selected items.
   */
  formatSelectedItemsCount?: (count: number) => string;
  /**
   * Numeric representation of the total number of items selected in a table.
   * This number is used to derive the selection message.
   */
  selectedRowsCount?: number;
  /**
   * Numeric representation of the total number of items in a table.
   */
  totalRowsCount?: number;
}

withDefaults(defineProps<CvTableBatchActionsProps>(), {
  active: false,
  selectedRowsCount: 0,
  totalRowsCount: 0,
});

const emit = defineEmits<{
  'cancel-clicked': [event: CustomEvent];
}>();
</script>

<template>
  <cds-table-batch-actions
    :active="active ? 'true' : undefined"
    :format-selected-items-count="formatSelectedItemsCount"
    :selected-rows-count="selectedRowsCount"
    :total-rows-count="totalRowsCount"
    @cds-table-batch-actions-cancel-clicked="emit('cancel-clicked', $event)"
  >
    <slot />
  </cds-table-batch-actions>
</template>
