<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableHeaderRowProps {
  batchExpansion?: boolean;
  expandable?: boolean;
  hideCheckbox?: boolean;
  selected?: boolean;
  selectionLabel?: string;
  selectionName?: string;
  selectionValue?: string;
}

withDefaults(defineProps<CvTableHeaderRowProps>(), {
  batchExpansion: false,
  expandable: false,
  hideCheckbox: false,
  selected: false,
  selectionLabel: 'Select all rows',
  selectionName: '',
  selectionValue: '',
});

const emit = defineEmits<{
  'change-selection-all': [event: CustomEvent];
}>();
</script>

<template>
  <cds-table-header-row
    :batch-expansion="batchExpansion ? 'true' : undefined"
    :expandable="expandable ? 'true' : undefined"
    :hide-checkbox="hideCheckbox ? 'true' : undefined"
    :selected="selected ? 'true' : undefined"
    :selection-label="selectionLabel"
    :selection-name="selectionName"
    :selection-value="selectionValue"
    @cds-table-change-selection-all="emit('change-selection-all', $event)"
  >
    <slot />
  </cds-table-header-row>
</template>
