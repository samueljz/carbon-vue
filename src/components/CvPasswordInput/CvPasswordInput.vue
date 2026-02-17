<script setup lang="ts">
import '@carbon/web-components/es/components/password-input/index.js';

export interface CvPasswordInputProps {
  disabled?: boolean;
  helperText?: string;
  hideLabel?: boolean;
  hidePasswordLabel?: string;
  inline?: boolean;
  invalid?: boolean;
  invalidText?: string;
  labelText?: string;
  placeholder?: string;
  readonly?: boolean;
  showPasswordLabel?: string;
  size?: string;
  tooltipAlignment?: string;
  tooltipDirection?: string;
  type?: string;
  value?: string;
  warn?: boolean;
  warnText?: string;
}

withDefaults(defineProps<CvPasswordInputProps>(), {
  disabled: false,
  helperText: undefined,
  hideLabel: false,
  hidePasswordLabel: 'Hide password',
  inline: false,
  invalid: false,
  invalidText: '',
  labelText: '',
  placeholder: '',
  readonly: false,
  showPasswordLabel: 'Show password',
  size: 'md',
  tooltipAlignment: 'center',
  tooltipDirection: 'bottom',
  type: 'password',
  value: '',
  warn: false,
  warnText: '',
});

const emit = defineEmits<{
  'cds-password-input-toggle': [event: CustomEvent];
  input: [event: Event];
}>();
</script>

<template>
  <cds-password-input
    :disabled="disabled || undefined"
    :helper-text="helperText"
    :hide-label="hideLabel || undefined"
    :hide-password-label="hidePasswordLabel"
    :inline="inline || undefined"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :label="labelText"
    :placeholder="placeholder"
    :readonly="readonly || undefined"
    :show-password-label="showPasswordLabel"
    :size="size"
    :tooltip-alignment="tooltipAlignment"
    :tooltip-position="tooltipDirection"
    :type="type"
    :value="value"
    :warn="warn || undefined"
    :warn-text="warnText"
    @cds-password-input-toggle="emit('cds-password-input-toggle', $event)"
    @input="emit('input', $event)"
  >
    <slot name="helper-text" />
    <slot name="label-text" />
    <slot name="validity-message" />
    <slot />
  </cds-password-input>
</template>
