<script setup lang="ts">
import '@carbon/web-components/es/components/structured-list/index.js';

export interface CvStructuredListRowProps {
  /**
   * `true` if this structured list row should be selectable and selected.
   */
  selected?: boolean;
  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list row will be a selectable one.
   */
  selectionName?: string;
  /**
   * The `value` attribute for the `<input>` for selection.
   */
  selectionValue?: string;
  /**
   * The content to put into the `<title>` attribute of the selection icon.
   */
  selectionIconTitle?: string;
}

withDefaults(defineProps<CvStructuredListRowProps>(), {
  selected: false,
  selectionName: '',
  selectionValue: '',
  selectionIconTitle: '',
});
</script>

<template>
  <cds-structured-list-row
    :selected="selected"
    :selection-name="selectionName"
    :selection-value="selectionValue"
    :selection-icon-title="selectionIconTitle"
  >
    <slot />
  </cds-structured-list-row>
</template>
