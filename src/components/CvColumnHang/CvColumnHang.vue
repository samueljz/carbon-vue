<script setup lang="ts">
import '@carbon/web-components/es/components/grid/index.js';

export interface CvColumnHangProps {}

withDefaults(defineProps<CvColumnHangProps>(), {});
</script>

<template>
  <cds-column-hang>
    <slot />
  </cds-column-hang>
</template>
