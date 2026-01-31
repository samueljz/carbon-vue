<script setup lang="ts">
import '@carbon/web-components/es/components/button/index.js';
import type { ButtonSize } from '@/types';

export interface CvButtonSkeletonProps {
  /**
   * Specify the size of the button skeleton
   */
  size?: ButtonSize;
  /**
   * Specify whether the skeleton should have a small width
   */
  small?: boolean;
}

withDefaults(defineProps<CvButtonSkeletonProps>(), {
  size: 'lg',
  small: false,
});
</script>

<template>
  <cds-button-skeleton :size="size" :small="small || undefined" />
</template>
