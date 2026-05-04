<script setup lang="ts">
import '@carbon/web-components/es/components/contained-list/index.js';

export interface CvContainedListItemProps {
  /**
   * Whether this item is clickable
   */
  clickable?: boolean;
  /**
   * Whether this item is disabled.
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvContainedListItemProps>(), {
  clickable: false,
  disabled: false,
});

const emit = defineEmits<{
  click: [event: CustomEvent];
}>();
</script>

<template>
  <cds-contained-list-item
    :clickable="clickable"
    :disabled="disabled"
    @cds-contained-list-item-click="emit('click', $event)"
  >
    <slot name="icon" slot="icon" />
    <slot name="action" slot="action" />
    <slot />
  </cds-contained-list-item>
</template>
