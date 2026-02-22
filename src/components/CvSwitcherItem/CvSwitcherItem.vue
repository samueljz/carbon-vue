<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/switcher-item.js';

export interface CvSwitcherItemProps {
  /**
   * Required props for accessibility label
   */
  ariaLabel?: string;

  /**
   * Props for accessibility labelled by
   */
  ariaLabelledby?: string;

  /**
   * Link `href`.
   */
  href?: string;

  /**
   * Specify if this is a large variation of the side nav link
   */
  selected?: boolean;

  /**
   * Specify if this is a large variation of the side nav link
   */
  tabIndex?: number;
}

withDefaults(defineProps<CvSwitcherItemProps>(), {
  href: '',
  selected: false,
  tabIndex: 0,
});
</script>

<template>
  <cds-switcher-item
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledby"
    :href="href"
    :selected="selected ? true : undefined"
    :tab-index="tabIndex"
  >
    <slot />
  </cds-switcher-item>
</template>
