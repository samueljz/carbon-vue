<script setup lang="ts">
import { useSlots, cloneVNode } from 'vue';
import '@carbon/web-components/es/components/ui-shell/header-global-action.js';

export interface CvHeaderGlobalActionProps {
  /**
   * Specify whether the action is currently active
   */
  active?: boolean;

  /**
   * Specify which header panel the button is associated with.
   */
  panelId?: string;

  /**
   * The `aria-label` attribute for the button in its active state.
   */
  buttonLabelActive?: string;

  /**
   * The `aria-label` attribute for the button in its inactive state.
   */
  buttonLabelInactive?: string;
  
  /**
   * Specify whether the button should be disabled, or not
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvHeaderGlobalActionProps>(), {
  active: false,
  disabled: false,
});

const slots = useSlots();
const IconSlot = () => {
  if (slots.icon) {
    return slots.icon().map(vnode => cloneVNode(vnode, { slot: 'icon' }));
  }
  return null;
};
</script>

<template>
  <cds-header-global-action
    :active="active ? true : undefined"
    :panel-id="panelId"
    :button-label-active="buttonLabelActive"
    :button-label-inactive="buttonLabelInactive"
    :disabled="disabled ? true : undefined"
  >
    <IconSlot />
    <slot />
  </cds-header-global-action>
</template>
