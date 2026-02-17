<script setup lang="ts">
import '@carbon/web-components/es/components/search/index.js';

export interface CvSearchProps {
  autoComplete?: string;
  closeButtonLabelText?: string;
  disabled?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  labelText?: string;
  name?: string;
  placeholder?: string;
  role?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  value?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<CvSearchProps>(), {
  autoComplete: 'off',
  disabled: false,
  expandable: false,
  expanded: false,
  labelText: 'Search',
  placeholder: 'Search',
  role: 'searchbox',
  size: 'md',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'cds-search-input': [event: CustomEvent];
  input: [event: Event];
}>();

const handleInput = (event: CustomEvent) => {
  emit('cds-search-input', event);
  emit('update:modelValue', event.detail.value);
};

// Also listen to native input event if needed, but cds-search emits cds-search-input
// Actually, cds-search emits cds-search-input when the value changes.
// Let's check cds-search event documentation again from search.ts.
// It fires cds-search-input.
</script>

<template>
  <cds-search
    :autocomplete="props.autoComplete"
    :close-button-label-text="props.closeButtonLabelText"
    :disabled="props.disabled"
    :expandable="props.expandable"
    :expanded="props.expanded"
    :label-text="props.labelText"
    :name="props.name"
    :placeholder="props.placeholder"
    :role="props.role"
    :size="props.size"
    :type="props.type"
    :value="props.modelValue ?? props.value"
    @cds-search-input="handleInput"
  >
    <slot />
    <slot name="icon" />
  </cds-search>
</template>
