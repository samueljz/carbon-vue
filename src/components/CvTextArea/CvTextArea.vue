<script setup lang="ts">
import '@carbon/web-components/es/components/textarea/index.js';

export interface CvTextAreaProps {
  autocomplete?: string;
  autofocus?: boolean;
  cols?: number;
  counterMode?: 'character' | 'word';
  disabled?: boolean;
  enableCounter?: boolean;
  helperText?: string;
  hideLabel?: boolean;
  id?: string;
  invalid?: boolean;
  invalidText?: string;
  isFluid?: boolean;
  label?: string;
  maxCount?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string;
  modelValue?: string;
  warn?: boolean;
  warnText?: string;
}

const props = withDefaults(defineProps<CvTextAreaProps>(), {
  autofocus: false,
  counterMode: 'character',
  disabled: false,
  enableCounter: true,
  hideLabel: false,
  invalid: false,
  isFluid: false,
  readonly: false,
  required: false,
  rows: 4,
  warn: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};
</script>

<template>
  <cds-textarea
    :autocomplete="props.autocomplete"
    :autofocus="props.autofocus || undefined"
    :cols="props.cols"
    :counter-mode="props.counterMode"
    :disabled="props.disabled || undefined"
    :enable-counter="props.enableCounter || undefined"
    :helper-text="props.helperText"
    :hide-label="props.hideLabel || undefined"
    :id="props.id"
    :invalid="props.invalid || undefined"
    :invalid-text="props.invalidText"
    :is-fluid="props.isFluid || undefined"
    :label="props.label"
    :max-count="props.maxCount"
    :name="props.name"
    :pattern="props.pattern"
    :placeholder="props.placeholder"
    :readonly="props.readonly || undefined"
    :required="props.required || undefined"
    :rows="props.rows"
    :value="props.modelValue ?? props.value"
    :warn="props.warn || undefined"
    :warn-text="props.warnText"
    @input="handleInput"
  >
    <slot name="helper-text" slot="helper-text" />
    <slot name="label-text" slot="label-text" />
  </cds-textarea>
</template>
