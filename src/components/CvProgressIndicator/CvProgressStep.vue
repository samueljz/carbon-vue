<script setup lang="ts">
import '@carbon/web-components/es/components/progress-indicator/index.js';

export interface CvProgressStepProps {
  /**
   * `true` if the progress step should be disabled.
   */
  disabled?: boolean;
  /**
   * The a11y text for the icon.
   */
  iconLabel?: string;
  /**
   * The description for the progress step.
   */
  description?: string;
  /**
   * The label for the progress step.
   */
  label?: string;
  /**
   * The secondary progress label.
   */
  secondaryLabel?: string;
  /**
   * Specify whether the step has been completed.
   */
  complete?: boolean;
  /**
   * Specify whether the step is the current step.
   */
  current?: boolean;
  /**
   * Specify whether the step is invalid.
   */
  invalid?: boolean;
  /**
   * The state of the step (deprecated, but still an option). 
   */
  state?: string;
}

withDefaults(defineProps<CvProgressStepProps>(), {
  disabled: false,
  complete: false,
  current: false,
  invalid: false,
});
</script>

<template>
  <cds-progress-step
    :disabled="disabled || undefined"
    :icon-label="iconLabel"
    :description="description"
    :label="label"
    :secondary-label="secondaryLabel"
    :complete="complete || undefined"
    :current="current || undefined"
    :invalid="invalid || undefined"
    :state="state"
  >
    <slot name="label-text" />
    <slot name="secondary-label-text" />
  </cds-progress-step>
</template>
