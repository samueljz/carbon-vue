<script setup lang="ts">
import '@carbon/web-components/es/components/select/index.js';

export interface CvSelectProps {
  autofocus?: boolean;
  disabled?: boolean;
  helperText?: string;
  hideLabel?: boolean;
  id?: string;
  inline?: boolean;
  invalid?: boolean;
  invalidText?: string;
  isFluid?: boolean;
  labelText?: string;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  requiredValidityMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  modelValue?: string;
  warn?: boolean;
  warnText?: string;
}

const props = withDefaults(defineProps<CvSelectProps>(), {
  autofocus: false,
  disabled: false,
  hideLabel: false,
  inline: false,
  invalid: false,
  isFluid: false,
  readOnly: false,
  required: false,
  size: 'md',
  warn: false,
});

const emit = defineEmits<{
  'cds-select-selected': [event: CustomEvent];
  'update:modelValue': [value: string];
}>();

const handleSelected = (event: CustomEvent) => {
  emit('cds-select-selected', event);
  emit('update:modelValue', event.detail.value);
};
</script>

<template>
  <cds-select
    :autofocus="props.autofocus"
    :disabled="props.disabled"
    :helper-text="props.helperText"
    :hide-label="props.hideLabel"
    :id="props.id"
    :inline="props.inline"
    :invalid="props.invalid"
    :invalid-text="props.invalidText"
    :is-fluid="props.isFluid"
    :label-text="props.labelText"
    :name="props.name"
    :pattern="props.pattern"
    :placeholder="props.placeholder"
    :readonly="props.readOnly"
    :required="props.required"
    :required-validity-message="props.requiredValidityMessage"
    :size="props.size"
    :value="props.modelValue || props.value"
    :warn="props.warn"
    :warn-text="props.warnText"
    @cds-select-selected="handleSelected"
  >
    <slot name="helper-text" slot="helper-text" />
    <slot name="label-text" slot="label-text" />
    <slot />
  </cds-select>
</template>
