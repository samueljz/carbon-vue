<script setup lang="ts">
import '@carbon/web-components/es/components/select/index.js';

export interface CvSelectItemProps {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

const props = withDefaults(defineProps<CvSelectItemProps>(), {
  disabled: false,
  selected: false,
});
</script>

<template>
  <cds-select-item
    :disabled="props.disabled"
    :label="props.label"
    :selected="props.selected"
    :value="props.value"
  >
    <slot />
  </cds-select-item>
</template>
