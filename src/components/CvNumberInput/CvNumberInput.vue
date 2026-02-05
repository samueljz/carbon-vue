<script setup lang="ts">
import '@carbon/web-components/es/components/number-input/index.js';

export interface CvNumberInputProps {
  allowEmpty?: boolean;
  autocomplete?: string;
  autofocus?: boolean;
  defaultValue?: string;
  decrementButtonAssistiveText?: string;
  disabled?: boolean;
  disableWheel?: boolean;
  helperText?: string;
  hideLabel?: boolean;
  hideSteppers?: boolean;
  iconDescription?: string;
  incrementButtonAssistiveText?: string;
  invalid?: boolean;
  invalidText?: string;
  isFluid?: boolean;
  label?: string; // Maps to label-text slot/prop
  max?: string | number;
  min?: string | number;
  name?: string;
  pattern?: string;
  readonly?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  step?: string | number;
  value?: string;
  modelValue?: string;
  warn?: boolean;
  warnText?: string;
}

const props = withDefaults(defineProps<CvNumberInputProps>(), {
  allowEmpty: false,
  autofocus: false,
  disabled: false,
  disableWheel: false,
  hideLabel: false,
  hideSteppers: false,
  invalid: false,
  isFluid: false,
  readonly: false,
  required: false,
  size: 'md',
  step: 1,
  warn: false,
});

const emit = defineEmits<{
  'cds-number-input': [event: CustomEvent];
  'update:modelValue': [value: string];
}>();

const handleInput = (event: CustomEvent) => {
  emit('cds-number-input', event);
  emit('update:modelValue', event.detail.value);
};
</script>

<template>
  <cds-number-input
    :allowEmpty="props.allowEmpty"
    :autocomplete="props.autocomplete"
    :autofocus="props.autofocus"
    :default-value="props.defaultValue"
    :decrement-button-assistive-text="props.decrementButtonAssistiveText"
    :disabled="props.disabled"
    :disableWheel="props.disableWheel"
    :helper-text="props.helperText"
    :hideLabel="props.hideLabel"
    :hideSteppers="props.hideSteppers"
    :icon-description="props.iconDescription"
    :increment-button-assistive-text="props.incrementButtonAssistiveText"
    :invalid="props.invalid"
    :invalid-text="props.invalidText"
    :isFluid="props.isFluid"
    :label="props.label"
    :max="props.max"
    :min="props.min"
    :name="props.name"
    :pattern="props.pattern"
    :readonly="props.readonly"
    :required="props.required"
    :size="props.size"
    :step="props.step"
    :value="props.modelValue ?? props.value"
    :warn="props.warn"
    :warn-text="props.warnText"
    @cds-number-input="handleInput"
  >
    <slot name="helper-text" slot="helper-text" />
    <slot name="label-text" slot="label-text" />
  </cds-number-input>
</template>
