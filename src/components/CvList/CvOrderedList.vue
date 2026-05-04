<script setup lang="ts">
import '@carbon/web-components/es/components/list/index.js';

export interface CvOrderedListProps {
  /**
   * \`true\` if expressive theme enabled.
   */
  isExpressive?: boolean;
  /**
   * Specify whether the list is nested, or not
   */
  nested?: boolean;
  /**
   * Specify whether the ordered list should use native list styles instead of custom counter
   */
  native?: boolean;
}

withDefaults(defineProps<CvOrderedListProps>(), {
  isExpressive: false,
  nested: false,
  native: false,
});
</script>

<template>
  <cds-ordered-list
    :is-expressive="isExpressive ? 'true' : undefined"
    :nested="nested ? 'true' : undefined"
    :native="native ? 'true' : undefined"
  >
    <slot />
  </cds-ordered-list>
</template>
