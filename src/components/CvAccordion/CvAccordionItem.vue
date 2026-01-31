<script setup lang="ts">
import '@carbon/web-components/es/components/accordion/index.js';

export interface CvAccordionItemProps {
  /**
   * The title of the accordion item
   */
  title?: string;
  /**
   * Whether the accordion item is open
   */
  open?: boolean;
  /**
   * Whether the accordion item is disabled
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvAccordionItemProps>(), {
  open: false,
  disabled: false,
});

const emit = defineEmits<{
  'cds-accordion-item-beingtoggled': [event: CustomEvent];
  'cds-accordion-item-toggled': [event: CustomEvent];
  'update:open': [value: boolean];
}>();

const handleBeforeToggle = (event: CustomEvent) => {
  emit('cds-accordion-item-beingtoggled', event);
};

const handleToggle = (event: CustomEvent) => {
  emit('cds-accordion-item-toggled', event);
  emit('update:open', (event.target as HTMLElement).hasAttribute('open'));
};
</script>

<template>
  <cds-accordion-item
    :title="title"
    :open="open || undefined"
    :disabled="disabled || undefined"
    @cds-accordion-item-beingtoggled="handleBeforeToggle"
    @cds-accordion-item-toggled="handleToggle"
  >
    <slot />
  </cds-accordion-item>
</template>
