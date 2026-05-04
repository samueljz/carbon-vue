<script setup lang="ts">
import '@carbon/web-components/es/components/structured-list/index.js';

export interface CvStructuredListHeaderRowProps {
  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list header row will show its selectable version of the UI.
   */
  selectionName?: string;
}

withDefaults(defineProps<CvStructuredListHeaderRowProps>(), {
  selectionName: '',
});
</script>

<template>
  <cds-structured-list-header-row
    :selection-name="selectionName"
  >
    <slot />
  </cds-structured-list-header-row>
</template>
