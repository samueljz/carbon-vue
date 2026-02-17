<script setup lang="ts">
import '@carbon/web-components/es/components/radio-button/index.js';

export interface CvRadioButtonProps {
  checked?: boolean;
  dataTable?: boolean;
  defaultChecked?: boolean;
  disabledItem?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  invalid?: boolean;
  warn?: boolean;
  warnText?: string;
  labelPosition?: 'left' | 'right';
  labelText?: string;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  readOnly?: boolean;
  required?: boolean;
  value?: string;
}

const props = withDefaults(defineProps<CvRadioButtonProps>(), {
  checked: false,
  dataTable: false,
  defaultChecked: false,
  disabledItem: false,
  disabled: false,
  hideLabel: false,
  invalid: false,
  warn: false,
  labelPosition: 'right',
  orientation: 'horizontal',
  readOnly: false,
  required: false,
});

const emit = defineEmits<{
  'cds-radio-button-changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-radio-button
    :checked="props.checked || undefined"
    :data-table="props.dataTable || undefined"
    :default-checked="props.defaultChecked || undefined"
    :disabled-item="props.disabledItem || undefined"
    :disabled="props.disabled || undefined"
    :hide-label="props.hideLabel || undefined"
    :invalid="props.invalid || undefined"
    :warn="props.warn || undefined"
    :warn-text="props.warnText"
    :label-text="props.labelText"
    :label-position="props.labelPosition"
    :name="props.name"
    :orientation="props.orientation"
    :readonly="props.readOnly || undefined"
    :required="props.required || undefined"
    :value="props.value"
    @cds-radio-button-changed="emit('cds-radio-button-changed', $event)"
  />
</template>
