<script setup lang="ts">
import '@carbon/web-components/es/components/stack/index.js';

export interface CvStackProps {
  /**
   * Specify the orientation of the items in the Stack
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Provide either a custom value or a step from the spacing scale to be used
   * as the gap in the layout
   */
  gap?: string;

  /**
   * Turn on when passing in custom value to 'gap' attribute (ie. gap="2rem")
   */
  useCustomGapValue?: boolean;
}

withDefaults(defineProps<CvStackProps>(), {
  orientation: 'vertical',
  useCustomGapValue: false,
});
</script>

<template>
  <cds-stack
    :orientation="orientation"
    :gap="gap"
    :use-custom-gap-value="useCustomGapValue || undefined"
  >
    <slot />
  </cds-stack>
</template>
