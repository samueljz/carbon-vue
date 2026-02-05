<script setup lang="ts">
import '@carbon/web-components/es/components/time-picker/index.js';

export interface CvTimePickerSelectProps {
  ariaLabel?: string;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<CvTimePickerSelectProps>(), {
  disabled: false,
  readonly: false,
  size: 'md',
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
  <cds-time-picker-select
    :aria-label="props.ariaLabel"
    :default-value="props.defaultValue"
    :disabled="props.disabled"
    :id="props.id"
    :name="props.name"
    :readonly="props.readonly"
    :size="props.size"
    :value="props.modelValue ?? props.value"
    @cds-select-selected="handleSelected"
  >
    <slot />
  </cds-time-picker-select>
</template>
