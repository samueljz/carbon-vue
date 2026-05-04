<script setup lang="ts">
import '@carbon/web-components/es/components/list/index.js';

export interface CvListItemProps {
  /**
   * \`true\` if this list item is a child of a nested list.
   */
  nested?: boolean;
}

withDefaults(defineProps<CvListItemProps>(), {
  nested: false,
});
</script>

<template>
  <cds-list-item :nested="nested">
    <slot />
    <slot name="nested" />
  </cds-list-item>
</template>
