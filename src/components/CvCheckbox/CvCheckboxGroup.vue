<script setup lang="ts">
import '@carbon/web-components/es/components/checkbox/index.js';

export interface CvCheckboxGroupProps {
  /**
   * fieldset `aria-labelledby`
   */
  ariaLabelledBy?: string;
  /**
   * Specify the legend text
   */
  legendText?: string;
  /**
   * Provide id for the fieldset <legend> which corresponds to the fieldset
   * `aria-labelledby`
   */
  legendId?: string;
  /**
   * Specify the helper text
   */
  helperText?: string;
  /**
   * Specify whether the group is invalid
   */
  invalid?: boolean;
  /**
   * Specify the invalid text
   */
  invalidText?: string;
  /**
   * Specify whether to show a warning
   */
  warn?: boolean;
  /**
   * Specify the warning text
   */
  warnText?: string;
  /**
   * Specify whether the group is read-only
   */
  readOnly?: boolean;
  /**
   * Specify whether the group is disabled
   */
  disabled?: boolean;
  /**
   * Specify the orientation
   */
  orientation?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<CvCheckboxGroupProps>(), {
  invalid: false,
  warn: false,
  readOnly: false,
  disabled: false,
  orientation: 'vertical',
});
</script>

<template>
  <cds-checkbox-group
    :aria-labelledby="ariaLabelledBy"
    :legend-text="legendText"
    :legend-id="legendId"
    :helper-text="helperText"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :warn="warn || undefined"
    :warn-text="warnText"
    :readonly="readOnly || undefined"
    :disabled="disabled || undefined"
    :orientation="orientation"
  >
    <slot />
  </cds-checkbox-group>
</template>
