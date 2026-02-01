<script setup lang="ts">
import '@carbon/web-components/es/components/select/index.js';

export interface CvSelectItemGroupProps {
  disabled?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<CvSelectItemGroupProps>(), {
  disabled: false,
});
</script>

<template>
  <cds-select-item-group
    :disabled="props.disabled"
    :label="props.label"
  >
    <slot />
  </cds-select-item-group>
</template>
