<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/side-nav-divider.js';

export interface CvSideNavDividerProps {}

withDefaults(defineProps<CvSideNavDividerProps>(), {});
</script>

<template>
  <cds-side-nav-divider>
    <slot />
  </cds-side-nav-divider>
</template>
