<script setup lang="ts">
import '@carbon/web-components/es/components/radio-button/index.js';

export interface CvRadioButtonGroupProps {
  defaultSelected?: string;
  disabled?: boolean;
  labelPosition?: 'left' | 'right';
  legendText?: string;
  helperText?: string;
  warn?: boolean;
  warnText?: string;
  invalid?: boolean;
  invalidText?: string;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  readOnly?: boolean;
  required?: boolean;
  modelValue?: string;
}

const props = withDefaults(defineProps<CvRadioButtonGroupProps>(), {
  disabled: false,
  labelPosition: 'right',
  warn: false,
  invalid: false,
  orientation: 'horizontal',
  readOnly: false,
  required: false,
});

const emit = defineEmits<{
  'cds-radio-button-group-changed': [event: CustomEvent];
  'update:modelValue': [value: string];
}>();

const handleChanged = (event: CustomEvent) => {
  emit('cds-radio-button-group-changed', event);
  emit('update:modelValue', event.detail.value);
};
</script>

<template>
  <cds-radio-button-group
    :default-selected="props.defaultSelected"
    :disabled="props.disabled"
    :label-position="props.labelPosition"
    :legend-text="props.legendText"
    :helper-text="props.helperText"
    :warn="props.warn"
    :warn-text="props.warnText"
    :invalid="props.invalid"
    :invalid-text="props.invalidText"
    :name="props.name"
    :orientation="props.orientation"
    :readonly="props.readOnly"
    :required="props.required"
    :value="props.modelValue"
    @cds-radio-button-group-changed="handleChanged"
  >
    <slot />
  </cds-radio-button-group>
</template>
