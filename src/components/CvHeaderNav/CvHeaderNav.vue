<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-nav.js';

export interface CvHeaderNavProps {
  /**
   * The `aria-label` attribute for the menu bar UI.
   */
  menuBarLabel?: string;
}

withDefaults(defineProps<CvHeaderNavProps>(), {
  menuBarLabel: '',
});
</script>

<template>
  <cds-header-nav :menu-bar-label="menuBarLabel">
    <slot />
  </cds-header-nav>
</template>
