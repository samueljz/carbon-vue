<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/side-nav-items.js';

export interface CvSideNavItemsProps {}

withDefaults(defineProps<CvSideNavItemsProps>(), {});
</script>

<template>
  <cds-side-nav-items>
    <slot />
  </cds-side-nav-items>
</template>
