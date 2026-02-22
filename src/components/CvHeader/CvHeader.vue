<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header.js';

export interface CvHeaderProps {}

withDefaults(defineProps<CvHeaderProps>(), {});
</script>

<template>
  <cds-header>
    <slot />
  </cds-header>
</template>
