<script setup lang="ts">
import '@carbon/web-components/es/components/tile/index.js';

export interface CvTileGroupProps {
  /**
   * Provide an optional className to be applied to the component fieldset
   */
  fieldsetClassName?: string;
  /**
   * Specify whether the group is disabled
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvTileGroupProps>(), {
  fieldsetClassName: '',
  disabled: false,
});

const emit = defineEmits<{
  'current-radio-tile-selection': [event: CustomEvent];
  'current-selectable-tile-selections': [event: CustomEvent];
}>();
</script>

<template>
  <cds-tile-group
    :fieldset-class-name="fieldsetClassName"
    :disabled="disabled ? 'true' : undefined"
    @cds-current-radio-tile-selection="emit('current-radio-tile-selection', $event)"
    @cds-current-selectable-tile-selections="emit('current-selectable-tile-selections', $event)"
  >
    <slot name="legend" slot="legend" />
    <slot />
  </cds-tile-group>
</template>
