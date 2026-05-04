<script setup lang="ts">
import '@carbon/web-components/es/components/structured-list/index.js';

export interface CvStructuredListProps {
  /**
   * Specify if structured list is condensed, default is false
   */
  condensed?: boolean;
  /**
   * Specify if structured list is flush, default is false
   */
  flush?: boolean;
  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list will be a selectable one.
   */
  selectionName?: string;
}

withDefaults(defineProps<CvStructuredListProps>(), {
  condensed: false,
  flush: false,
  selectionName: '',
});
</script>

<template>
  <cds-structured-list
    :condensed="condensed"
    :flush="flush"
    :selection-name="selectionName"
  >
    <slot />
  </cds-structured-list>
</template>
