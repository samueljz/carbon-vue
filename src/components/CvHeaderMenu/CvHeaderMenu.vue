<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-menu.js';

export interface CvHeaderMenuProps {
  /**
   * `true` if the menu should be expanded.
   */
  expanded?: boolean;

  /**
   * Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`.
   */
  isActive?: boolean;

  /**
   * The content of the trigger button.
   */
  triggerContent?: string;

  /**
   * The `aria-label` attribute for the menu UI.
   */
  menuLabel?: string;
}

withDefaults(defineProps<CvHeaderMenuProps>(), {
  expanded: false,
  isActive: false,
  triggerContent: '',
});
</script>

<template>
  <cds-header-menu
    :expanded="expanded ? true : undefined"
    :is-active="isActive ? true : undefined"
    :trigger-content="triggerContent"
    :menu-label="menuLabel"
  >
    <slot />
  </cds-header-menu>
</template>
