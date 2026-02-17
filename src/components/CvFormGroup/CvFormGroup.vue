<script setup lang="ts">
import '@carbon/web-components/es/components/form-group/index.js';

export interface CvFormGroupProps {
  invalid?: boolean;
  legendText?: string;
  message?: boolean;
  messageText?: string;
}

withDefaults(defineProps<CvFormGroupProps>(), {
  invalid: false,
  legendText: '',
  message: false,
  messageText: '',
});
</script>

<template>
  <cds-form-group
    :invalid="invalid || undefined"
    :legend-text="legendText"
    :message="message || undefined"
    :message-text="messageText"
  >
    <slot />
  </cds-form-group>
</template>
