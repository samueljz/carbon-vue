<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-side-nav-items.js';

export interface CvHeaderSideNavItemsProps {
  /**
   * Optionally specify if container will have a bottom divider to differentiate
   * between original sidenav items and header menu items. False by default.
   */
  hasDivider?: boolean;
}

withDefaults(defineProps<CvHeaderSideNavItemsProps>(), {
  hasDivider: false,
});
</script>

<template>
  <cds-header-side-nav-items :has-divider="hasDivider">
    <slot />
  </cds-header-side-nav-items>
</template>
