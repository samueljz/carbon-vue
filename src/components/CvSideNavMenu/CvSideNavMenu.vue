<script setup lang="ts">
import { useSlots, cloneVNode } from 'vue';
import '@carbon/web-components/es/components/ui-shell/side-nav-menu.js';

export interface CvSideNavMenuProps {
  /**
   * `true` if the menu has active menu item.
   */
  active?: boolean;

  /**
   * `true` if the menu should be open.
   */
  expanded?: boolean;

  /**
   * Specify if this is a large variation of the side nav menu
   */
  large?: boolean;

  /**
   * `true` if the menu should be forced collapsed upon side nav's expanded state.
   */
  forceCollapsed?: boolean;

  /**
   * The title text.
   */
  title?: string;
}

withDefaults(defineProps<CvSideNavMenuProps>(), {
  active: false,
  expanded: false,
  large: false,
  forceCollapsed: false,
  title: '',
});

const emit = defineEmits<{
  'cds-side-nav-menu-beingtoggled': [event: CustomEvent<{ expanded: boolean }>];
  'cds-side-nav-menu-toggled': [event: CustomEvent<{ expanded: boolean }>];
}>();

const slots = useSlots();
const TitleIconSlot = () => {
  if (slots['title-icon']) {
    return slots['title-icon']().map(vnode => cloneVNode(vnode, { slot: 'title-icon' }));
  }
  return null;
};
</script>

<template>
  <cds-side-nav-menu
    :active="active ? true : undefined"
    :expanded="expanded ? true : undefined"
    :large="large ? true : undefined"
    :force-collapsed="forceCollapsed ? true : undefined"
    :title="title"
    @cds-side-nav-menu-beingtoggled="emit('cds-side-nav-menu-beingtoggled', $event)"
    @cds-side-nav-menu-toggled="emit('cds-side-nav-menu-toggled', $event)"
  >
    <TitleIconSlot />
    <slot />
  </cds-side-nav-menu>
</template>
