<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';

export interface CvTableExpandedRowProps {
  /**
   * The colspan.
   */
  colSpan?: number;
  /**
   * `true` if the table row should be expanded.
   */
  expanded?: boolean;
  /**
   * `true` if the table row should be highlighted.
   */
  highlighted?: boolean;
  /**
   * `true` if the table row should be selected.
   */
  selected?: boolean;
}

withDefaults(defineProps<CvTableExpandedRowProps>(), {
  colSpan: 1,
  expanded: false,
  highlighted: false,
  selected: false,
});
</script>

<template>
  <cds-table-expanded-row
    :col-span="colSpan"
    :expanded="expanded"
    :highlighted="highlighted"
    :selected="selected"
  >
    <slot />
  </cds-table-expanded-row>
</template>
