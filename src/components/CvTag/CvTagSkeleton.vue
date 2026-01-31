<script setup lang="ts">
import '@carbon/web-components/es/components/tag/index.js';
import type { TagSize } from '@/types';

export interface CvTagSkeletonProps {
  size?: TagSize;
}

withDefaults(defineProps<CvTagSkeletonProps>(), {
  size: 'md',
});
</script>

<template>
  <cds-tag-skeleton :size="size" />
</template>
