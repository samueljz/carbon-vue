<script setup lang="ts">
import '@carbon/web-components/es/components/slider/index.js';

export interface CvSliderProps {
  disabled?: boolean;
  hideLabel?: boolean;
  hideTextInput?: boolean;
  invalid?: boolean;
  invalidText?: string;
  labelText?: string;
  max?: number | string;
  min?: number | string;
  maxLabel?: string;
  minLabel?: string;
  readonly?: boolean;
  required?: boolean;
  step?: number | string;
  stepMultiplier?: number | string;
  value?: number | string;
  valueUpper?: number | string;
  warn?: boolean;
  warnText?: string;
}

withDefaults(defineProps<CvSliderProps>(), {
  disabled: false,
  hideLabel: false,
  hideTextInput: false,
  invalid: false,
  invalidText: '',
  labelText: '',
  max: 100,
  min: 0,
  maxLabel: '',
  minLabel: '',
  readonly: false,
  required: false,
  step: 1,
  stepMultiplier: 4,
  value: undefined,
  valueUpper: undefined,
  warn: false,
  warnText: '',
});

const emit = defineEmits<{
  'cds-slider-changed': [event: CustomEvent];
  'cds-slider-input-changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-slider
    :disabled="disabled || undefined"
    :hide-label="hideLabel || undefined"
    :hide-text-input="hideTextInput || undefined"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :label-text="labelText"
    :max="max"
    :min="min"
    :max-label="maxLabel"
    :min-label="minLabel"
    :readonly="readonly || undefined"
    :required="required || undefined"
    :step="step"
    :step-multiplier="stepMultiplier"
    :value="value"
    :value-upper="valueUpper"
    :warn="warn || undefined"
    :warn-text="warnText"
    @cds-slider-changed="emit('cds-slider-changed', $event)"
    @cds-slider-input-changed="emit('cds-slider-input-changed', $event)"
  >
    <slot name="label-text" />
    <slot name="max-text" />
    <slot name="min-text" />
    
    <!-- Slider inputs - provided as slotted children -->
    <slot />
  </cds-slider>
</template>
