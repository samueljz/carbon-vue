<script setup lang="ts">
import '@carbon/web-components/es/components/list/index.js';

export interface CvUnorderedListProps {
  /**
   * \`true\` if expressive theme enabled.
   */
  isExpressive?: boolean;
  /**
   * Specify whether the list is nested, or not
   */
  nested?: boolean;
}

withDefaults(defineProps<CvUnorderedListProps>(), {
  isExpressive: false,
  nested: false,
});
</script>

<template>
  <cds-unordered-list
    :is-expressive="isExpressive ? 'true' : undefined"
    :nested="nested ? 'true' : undefined"
  >
    <slot />
  </cds-unordered-list>
</template>
