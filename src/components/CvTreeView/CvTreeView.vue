<script setup lang="ts">
import '@carbon/web-components/es/components/tree-view/index.js';

export interface CvTreeViewProps {
  /**
   * Specify whether or not the label should be hidden
   */
  hideLabel?: boolean;
  /**
   * Provide the label text that will be read by a screen reader
   */
  label?: string;
  /**
   * Specify the size of the tree from a list of available sizes.
   */
  size?: 'xs' | 'sm';
}

withDefaults(defineProps<CvTreeViewProps>(), {
  hideLabel: false,
  size: 'sm',
});
</script>

<template>
  <cds-tree-view
    :hide-label="hideLabel || undefined"
    :label="label"
    :size="size"
  >
    <slot />
  </cds-tree-view>
</template>
