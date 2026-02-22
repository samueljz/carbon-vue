<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-menu-item.js';

export interface CvHeaderMenuItemProps {
  /**
   * Link `href`.
   */
  href?: string;

  /**
   * The link type.
   */
  rel?: string;

  /**
   * The link target.
   */
  target?: string;

  /**
   * The title.
   */
  title?: string;

  /**
   * Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`.
   */
  isActive?: boolean;

  /**
   * indicates that this element represents the current item
   */
  ariaCurrent?: string;

  /**
   * As child of <ul>, this element must have role of listitem
   */
  role?: string;
}

withDefaults(defineProps<CvHeaderMenuItemProps>(), {
  isActive: false,
  role: 'listitem',
});
</script>

<template>
  <cds-header-menu-item
    :href="href"
    :rel="rel"
    :target="target"
    :title="title"
    :is-active="isActive ? true : undefined"
    :aria-current="ariaCurrent"
    :role="role"
  >
    <slot />
  </cds-header-menu-item>
</template>
