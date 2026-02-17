<script setup lang="ts">
import '@carbon/web-components/es/components/slider/index.js';

defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <cds-slider-skeleton :active="active" />
</template>
