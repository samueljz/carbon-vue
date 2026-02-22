<script setup lang="ts">
import { useSlots, cloneVNode } from 'vue';
import '@carbon/web-components/es/components/ui-shell/side-nav-link.js';

export interface CvSideNavLinkProps {
  /**
   * `true` if the menu item should be active.
   */
  active?: boolean;

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
   * Specify if this is a large variation of the side nav link
   */
  large?: boolean;

  /**
   * The title.
   */
  title?: string;
}

withDefaults(defineProps<CvSideNavLinkProps>(), {
  active: false,
  href: '',
  large: false,
});

const slots = useSlots();
const TitleIconSlot = () => {
  if (slots['title-icon']) {
    return slots['title-icon']().map(vnode => cloneVNode(vnode, { slot: 'title-icon' }));
  }
  return null;
};
</script>

<template>
  <cds-side-nav-link
    :active="active ? true : undefined"
    :href="href"
    :rel="rel"
    :target="target"
    :large="large ? true : undefined"
    :title="title"
  >
    <TitleIconSlot />
    <slot />
  </cds-side-nav-link>
</template>
