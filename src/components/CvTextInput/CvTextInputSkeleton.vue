<script setup lang="ts">
import '@carbon/web-components/es/components/text-input/index.js';

export interface CvTextInputSkeletonProps {
  /**
   * Specify whether to hide the label
   */
  hideLabel?: boolean;
}

withDefaults(defineProps<CvTextInputSkeletonProps>(), {
  hideLabel: false,
});
</script>

<template>
  <cds-text-input-skeleton :hide-label="hideLabel || undefined" />
</template>
