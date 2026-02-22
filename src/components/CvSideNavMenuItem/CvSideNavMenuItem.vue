<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/side-nav-menu-item.js';

export interface CvSideNavMenuItemProps {
  /**
   * `true` if the menu item should be active.
   */
  active?: boolean;

  /**
   * Link `href`.
   */
  href?: string;

  /**
   * Link `target`.
   */
  target?: string;

  /**
   * The title.
   */
  title?: string;
}

withDefaults(defineProps<CvSideNavMenuItemProps>(), {
  active: false,
  href: '',
});
</script>

<template>
  <cds-side-nav-menu-item
    :active="active ? true : undefined"
    :href="href"
    :target="target"
    :title="title"
  >
    <slot />
  </cds-side-nav-menu-item>
</template>
