<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/side-nav.js';

export interface CvSideNavProps {
  /**
   * Collapse mode of the side nav.
   */
  collapseMode?: 'fixed' | 'responsive' | 'rail';

  /**
   * `true` to expand the side nav.
   */
  expanded?: boolean;

  /**
   * If `true` will style the side nav to sit below the header
   */
  isNotChildOfHeader?: boolean;

  /**
   * Specify if the side-nav will be persistent above the lg breakpoint
   */
  isNotPersistent?: boolean;
}

withDefaults(defineProps<CvSideNavProps>(), {
  collapseMode: 'responsive',
  expanded: false,
  isNotChildOfHeader: false,
  isNotPersistent: false,
});
</script>

<template>
  <cds-side-nav
    :collapse-mode="collapseMode"
    :expanded="expanded ? true : undefined"
    :is-not-child-of-header="isNotChildOfHeader ? true : undefined"
    :is-not-persistent="isNotPersistent ? true : undefined"
  >
    <slot />
  </cds-side-nav>
</template>
