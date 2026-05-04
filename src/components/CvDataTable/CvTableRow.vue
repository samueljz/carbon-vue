<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableRowProps {
  batchExpansion?: boolean;
  disabled?: boolean;
  even?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  filtered?: boolean;
  hideCheckbox?: boolean;
  highlighted?: boolean;
  odd?: boolean;
  overflowMenuOnHover?: boolean;
  radio?: boolean;
  selected?: boolean;
  selectionLabel?: string;
  selectionName?: string;
  selectionValue?: string;
}

withDefaults(defineProps<CvTableRowProps>(), {
  batchExpansion: false,
  disabled: false,
  even: false,
  expandable: false,
  expanded: false,
  filtered: false,
  hideCheckbox: false,
  highlighted: false,
  odd: false,
  overflowMenuOnHover: false,
  radio: false,
  selected: false,
  selectionLabel: 'Select row',
  selectionName: '',
  selectionValue: '',
});

const emit = defineEmits<{
  'row-change-selection': [event: CustomEvent];
  'row-expando-beingtoggled': [event: CustomEvent];
  'row-expando-toggled': [event: CustomEvent];
}>();
</script>

<template>
  <cds-table-row
    :batch-expansion="batchExpansion ? 'true' : undefined"
    :disabled="disabled ? 'true' : undefined"
    :even="even ? 'true' : undefined"
    :expandable="expandable ? 'true' : undefined"
    :expanded="expanded ? 'true' : undefined"
    :filtered="filtered ? 'true' : undefined"
    :hide-checkbox="hideCheckbox ? 'true' : undefined"
    :highlighted="highlighted ? 'true' : undefined"
    :odd="odd ? 'true' : undefined"
    :overflow-menu-on-hover="overflowMenuOnHover ? 'true' : undefined"
    :radio="radio ? 'true' : undefined"
    :selected="selected ? 'true' : undefined"
    :selection-label="selectionLabel"
    :selection-name="selectionName"
    :selection-value="selectionValue"
    @cds-table-row-change-selection="emit('row-change-selection', $event)"
    @cds-table-row-expando-beingtoggled="emit('row-expando-beingtoggled', $event)"
    @cds-table-row-expando-toggled="emit('row-expando-toggled', $event)"
  >
    <slot />
    <!-- slots for ai-label and slug if needed can be mapped via standard slot mechanics -->
    <slot name="ai-label" slot="ai-label" />
    <slot name="slug" slot="slug" />
  </cds-table-row>
</template>
