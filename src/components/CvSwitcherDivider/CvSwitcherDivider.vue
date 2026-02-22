<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/switcher-divider.js';

export interface CvSwitcherDividerProps {}

withDefaults(defineProps<CvSwitcherDividerProps>(), {});
</script>

<template>
  <cds-switcher-divider>
    <slot />
  </cds-switcher-divider>
</template>
