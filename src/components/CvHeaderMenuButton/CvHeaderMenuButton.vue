<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-menu-button.js';

export interface CvHeaderMenuButtonProps {
  /**
   * `true` if the button should represent its active state.
   */
  active?: boolean;

  /**
   * The `aria-label` attribute for the button in its active state.
   */
  buttonLabelActive?: string;

  /**
   * The `aria-label` attribute for the button in its inactive state.
   */
  buttonLabelInactive?: string;

  /**
   * Collapse mode of the side nav.
   */
  collapseMode?: 'fixed' | 'responsive';

  /**
   * `true` if the button should be disabled.
   */
  disabled?: boolean;

  /**
   * If `true` will style the side nav to sit below the header
   */
  isNotChildOfHeader?: boolean;
}

withDefaults(defineProps<CvHeaderMenuButtonProps>(), {
  active: false,
  buttonLabelActive: 'Close navigation menu',
  buttonLabelInactive: 'Open navigation menu',
  collapseMode: 'responsive',
  disabled: false,
  isNotChildOfHeader: false,
});

const emit = defineEmits<{
  'cds-header-menu-button-toggled': [event: CustomEvent<{ active: boolean }>];
}>();
</script>

<template>
  <cds-header-menu-button
    :active="active ? true : undefined"
    :button-label-active="buttonLabelActive"
    :button-label-inactive="buttonLabelInactive"
    :collapse-mode="collapseMode"
    :disabled="disabled ? true : undefined"
    :is-not-child-of-header="isNotChildOfHeader ? true : undefined"
    @cds-header-menu-button-toggled="emit('cds-header-menu-button-toggled', $event)"
  />
</template>
