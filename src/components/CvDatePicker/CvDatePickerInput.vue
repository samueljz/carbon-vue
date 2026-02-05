<script setup lang="ts">
import '@carbon/web-components/es/components/date-picker/index.js';
import type { DatePickerInputKind } from '@/types';

export interface CvDatePickerInputProps {
  colorScheme?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  invalid?: boolean;
  invalidText?: string;
  kind?: DatePickerInputKind;
  labelText?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  short?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  value?: string;
  modelValue?: string;
  warn?: boolean;
  warnText?: string;
}

const props = withDefaults(defineProps<CvDatePickerInputProps>(), {
  disabled: false,
  hideLabel: false,
  invalid: false,
  kind: 'simple',
  readonly: false,
  required: false,
  short: false,
  size: 'md',
  warn: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};
</script>

<template>
  <cds-date-picker-input
    :color-scheme="props.colorScheme"
    :disabled="props.disabled"
    :hide-label="props.hideLabel"
    :invalid="props.invalid"
    :invalid-text="props.invalidText"
    :kind="props.kind"
    :label-text="props.labelText"
    :pattern="props.pattern"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :required="props.required"
    :short="props.short"
    :size="props.size"
    :type="props.type"
    :value="props.modelValue ?? props.value"
    :warn="props.warn"
    :warn-text="props.warnText"
    @input="handleInput"
  >
    <slot name="helper-text" slot="helper-text" />
    <slot name="label-text" slot="label-text" />
  </cds-date-picker-input>
</template>
