<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-header-description slot="description">
    <slot />
  </cds-table-header-description>
</template>
