<script setup lang="ts">
import '@carbon/web-components/es/components/toggle/index.js';
import type { ToggleSize } from '@/types';

export interface CvToggleSkeletonProps {
  size?: ToggleSize;
}

withDefaults(defineProps<CvToggleSkeletonProps>(), {
  size: 'md',
});
</script>

<template>
  <cds-toggle-skeleton :size="size" />
</template>
