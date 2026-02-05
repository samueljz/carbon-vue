<script setup lang="ts">
import '@carbon/web-components/es/components/search/index.js';

export interface CvSearchSkeletonProps {
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<CvSearchSkeletonProps>(), {
  size: 'md',
});
</script>

<template>
  <cds-search-skeleton :size="props.size">
  </cds-search-skeleton>
</template>
