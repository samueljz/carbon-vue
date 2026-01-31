<script setup lang="ts">
import '@carbon/web-components/es/components/text-input/index.js';
import type { TextInputSize, TextInputType } from '@/types';

export interface CvTextInputProps {
  /**
   * The input value
   */
  modelValue?: string;
  /**
   * Specify the label text
   */
  label?: string;
  /**
   * Specify the helper text
   */
  helperText?: string;
  /**
   * Specify the placeholder text
   */
  placeholder?: string;
  /**
   * Specify whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Specify whether the input is read-only
   */
  readOnly?: boolean;
  /**
   * Specify whether the input is invalid
   */
  invalid?: boolean;
  /**
   * Specify the invalid text
   */
  invalidText?: string;
  /**
   * Specify whether to show a warning
   */
  warn?: boolean;
  /**
   * Specify the warning text
   */
  warnText?: string;
  /**
   * Specify the input size
   */
  size?: TextInputSize;
  /**
   * Specify the input type
   */
  type?: TextInputType;
  /**
   * Specify the input name
   */
  name?: string;
  /**
   * Specify whether to hide the label
   */
  hideLabel?: boolean;
  /**
   * Specify whether the input should be light
   */
  light?: boolean;
  /**
   * Specify the max length
   */
  maxLength?: number;
  /**
   * Specify whether to show the character count
   */
  enableCounter?: boolean;
}

withDefaults(defineProps<CvTextInputProps>(), {
  modelValue: '',
  disabled: false,
  readOnly: false,
  invalid: false,
  warn: false,
  size: 'md',
  type: 'text',
  hideLabel: false,
  light: false,
  enableCounter: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
  change: [event: Event];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};

const handleChange = (event: Event) => {
  emit('change', event);
};
</script>

<template>
  <cds-text-input
    :value="modelValue"
    :label="label"
    :helper-text="helperText"
    :placeholder="placeholder"
    :disabled="disabled || undefined"
    :readonly="readOnly || undefined"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :warn="warn || undefined"
    :warn-text="warnText"
    :size="size"
    :type="type"
    :name="name"
    :hide-label="hideLabel || undefined"
    :light="light || undefined"
    :max-length="maxLength"
    :enable-counter="enableCounter || undefined"
    @input="handleInput"
    @change="handleChange"
    @blur="emit('blur', $event)"
    @focus="emit('focus', $event)"
  >
    <slot />
    <slot name="label-text" />
    <slot name="helper-text" />
    <slot name="ai-label" />
    <slot name="slug" />
  </cds-text-input>
</template>
