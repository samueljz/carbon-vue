<script setup lang="ts">
import '@carbon/web-components/es/components/checkbox/index.js';

export interface CvCheckboxGroupProps {
  /**
   * Specify the legend text
   */
  legendText?: string;
  /**
   * Specify whether the legend is hidden
   */
  legendHidden?: boolean;
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
  legendHidden: false,
  invalid: false,
  warn: false,
  readOnly: false,
  disabled: false,
  orientation: 'vertical',
});
</script>

<template>
  <cds-checkbox-group
    :legend-text="legendText"
    :legend-hidden="legendHidden || undefined"
    :helper-text="helperText"
    :invalid="invalid || undefined"
    :invalid-text="invalidText"
    :warn="warn || undefined"
    :warn-text="warnText"
    :read-only="readOnly || undefined"
    :disabled="disabled || undefined"
    :orientation="orientation"
  >
    <slot />
  </cds-checkbox-group>
</template>
