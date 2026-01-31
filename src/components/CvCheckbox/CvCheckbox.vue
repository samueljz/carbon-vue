<script setup lang="ts">
import '@carbon/web-components/es/components/checkbox/index.js';
import { ref, onUpdated, onMounted } from 'vue';

export interface CvCheckboxProps {
  /**
   * The current checked state
   */
  modelValue?: boolean;
  /**
   * Specify whether the checkbox is indeterminate
   */
  indeterminate?: boolean;
  /**
   * Specify the label text
   */
  labelText?: string;
  /**
   * Specify whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Specify whether to hide the label
   */
  hideLabel?: boolean;
  /**
   * Specify the checkbox name
   */
  name?: string;
  /**
   * Specify the checkbox value
   */
  value?: string;
  /**
   * Specify whether the checkbox is read-only
   */
  readOnly?: boolean;
  /**
   * Specify whether the checkbox is invalid
   */
  invalid?: boolean;
  /**
   * Specify the invalid text
   */
  invalidText?: string;
  /**
   * Specify the helper text
   */
  helperText?: string;
  /**
   * Specify whether to show a warning
   */
  warn?: boolean;
  /**
   * Specify the warning text
   */
  warnText?: string;
}

const props = withDefaults(defineProps<CvCheckboxProps>(), {
  modelValue: false,
  indeterminate: false,
  disabled: false,
  hideLabel: false,
  readOnly: false,
  invalid: false,
  warn: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [event: CustomEvent];
}>();

const checkboxRef = ref<HTMLElement | null>(null);

const updateAttributes = () => {
  if (checkboxRef.value) {
    // Set invalid attribute
    if (props.invalid) {
      checkboxRef.value.setAttribute('invalid', '');
    } else {
      checkboxRef.value.removeAttribute('invalid');
    }
    
    // Set warn attribute
    if (props.warn) {
      checkboxRef.value.setAttribute('warn', '');
    } else {
      checkboxRef.value.removeAttribute('warn');
    }
  }
};

onMounted(updateAttributes);
onUpdated(updateAttributes);

const handleChange = (event: CustomEvent) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
  emit('change', event);
};
</script>

<template>
  <cds-checkbox
    ref="checkboxRef"
    :checked="modelValue || undefined"
    :indeterminate="indeterminate || undefined"
    :label-text="labelText"
    :disabled="disabled || undefined"
    :hide-label="hideLabel || undefined"
    :name="name"
    :value="value"
    :readonly="readOnly || undefined"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :helper-text="helperText"
    :warn="warn || undefined"
    :warn-text="warnText"
    @cds-checkbox-changed="handleChange"
  >
    <slot />
    <slot name="ai-label" />
    <slot name="decorator" />
    <slot name="slug" />
  </cds-checkbox>
</template>
