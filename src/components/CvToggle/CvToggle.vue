<script setup lang="ts">
import '@carbon/web-components/es/components/toggle/index.js';
import type { ToggleSize } from '@/types';

export interface CvToggleProps {
  /**
   * The current checked state
   */
  modelValue?: boolean;
  /**
   * Specify the label text
   */
  labelText?: string;
  /**
   * Specify the label for the checked state
   */
  labelA?: string;
  /**
   * Specify the label for the unchecked state
   */
  labelB?: string;
  /**
   * Specify whether the toggle is disabled
   */
  disabled?: boolean;
  /**
   * Specify whether to hide the label
   */
  hideLabel?: boolean;
  /**
   * Specify the toggle name
   */
  name?: string;
  /**
   * Specify the toggle size
   */
  size?: ToggleSize;
  /**
   * Specify whether the toggle is read-only
   */
  readOnly?: boolean;
}

withDefaults(defineProps<CvToggleProps>(), {
  modelValue: false,
  labelA: 'Off',
  labelB: 'On',
  disabled: false,
  hideLabel: false,
  size: 'md',
  readOnly: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [event: CustomEvent];
}>();

const handleChange = (event: CustomEvent) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
  emit('change', event);
};
</script>

<template>
  <cds-toggle
    :checked="modelValue || undefined"
    :label-text="labelText"
    :label-a="labelA"
    :label-b="labelB"
    :disabled="disabled || undefined"
    :name="name"
    :size="size"
    :read-only="readOnly || undefined"
    :hideLabel="hideLabel"
    @cds-toggle-changed="handleChange"
  >
    <slot />
  </cds-toggle>
</template>
