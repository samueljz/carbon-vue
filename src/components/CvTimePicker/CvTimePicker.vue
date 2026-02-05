<script setup lang="ts">
import '@carbon/web-components/es/components/time-picker/index.js';

export interface CvTimePickerProps {
  disabled?: boolean;
  hideLabel?: boolean;
  invalid?: boolean;
  invalidText?: string;
  labelText?: string;
  maxLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  requiredValidityMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  validityMessage?: string;
  value?: string;
  modelValue?: string;
  warning?: boolean; // Note: 'warning' property, while 'warn' is common in other components. Checking usage.
  warningText?: string;
}

const props = withDefaults(defineProps<CvTimePickerProps>(), {
  disabled: false,
  hideLabel: false,
  invalid: false,
  maxLength: 5,
  placeholder: 'hh:mm',
  readonly: false,
  required: false,
  size: 'md',
  type: 'text',
  warning: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
  change: [event: Event];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};

const handleChange = (event: Event) => {
    emit('change', event);
}
</script>

<template>
  <cds-time-picker
    :disabled="props.disabled"
    :hide-label="props.hideLabel"
    :invalid="props.invalid"
    :invalid-text="props.invalidText"
    :label-text="props.labelText"
    :max-length="props.maxLength"
    :name="props.name"
    :pattern="props.pattern"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :required="props.required"
    :required-validity-message="props.requiredValidityMessage"
    :size="props.size"
    :type="props.type"
    :validity-message="props.validityMessage"
    :value="props.modelValue ?? props.value"
    :warning="props.warning"
    :warning-text="props.warningText"
    @input="handleInput"
    @change="handleChange"
  >
    <slot />
  </cds-time-picker>
</template>
