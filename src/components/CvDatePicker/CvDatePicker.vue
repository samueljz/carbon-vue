<script setup lang="ts">
import '@carbon/web-components/es/components/date-picker/index.js';

export interface CvDatePickerProps {
  allowInput?: boolean;
  closeOnSelect?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  enabledRange?: string;
  locale?: any; // strict type is difficult here without dragging in flatpickr types
  maxDate?: string;
  minDate?: string;
  name?: string;
  open?: boolean;
  readonly?: boolean;
  value?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<CvDatePickerProps>(), {
  allowInput: true,
  closeOnSelect: true,
  disabled: false,
  open: false,
  readonly: false,
});

const emit = defineEmits<{
  'cds-date-picker-changed': [event: CustomEvent];
  'cds-date-picker-flatpickr-error': [event: CustomEvent];
  'update:modelValue': [value: string];
}>();

const handleChange = (event: CustomEvent) => {
  emit('cds-date-picker-changed', event);
  // event.detail.selectedDates is available, but the component updates its `value` prop probably?
  // The 'value' prop of cds-date-picker is updated to slash separated string.
  // Using the value from the element might be better or constructing it.
  // The reference implementation updates _value on change.
  // We can emit the event.detail maybe? 
  // But standard v-model for string value:
  // Let's assume the user binds v-model to the string representation.
  
  // cds-date-picker-changed event detail has selectedDates (Array of Date).
  // We should convert it to the format or just trust the event?
  // Actually, standard practice for wrapper is to emit update:modelValue with the new value.
  // cds-date-picker updates its own value property.
  // So we can read it from the target?
  const target = event.target as HTMLElement & { value: string };
  emit('update:modelValue', target.value);
};
</script>

<template>
  <cds-date-picker
    :allow-input="props.allowInput"
    :close-on-select="props.closeOnSelect"
    :date-format="props.dateFormat"
    :disabled="props.disabled"
    :enabled-range="props.enabledRange"
    :locale="props.locale"
    :max-date="props.maxDate"
    :min-date="props.minDate"
    :name="props.name"
    :open="props.open"
    :readonly="props.readonly"
    :value="props.modelValue ?? props.value"
    @cds-date-picker-changed="handleChange"
    @cds-date-picker-flatpickr-error="emit('cds-date-picker-flatpickr-error', $event)"
  >
    <slot />
  </cds-date-picker>
</template>
