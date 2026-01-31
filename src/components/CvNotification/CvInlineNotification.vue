<script setup lang="ts">
import '@carbon/web-components/es/components/notification/index.js';
import type { NotificationKind } from '@/types';

export interface CvInlineNotificationProps {
  kind?: NotificationKind;
  title?: string;
  subtitle?: string;
  hideCloseButton?: boolean;
  lowContrast?: boolean;
  statusIconDescription?: string;
}

withDefaults(defineProps<CvInlineNotificationProps>(), {
  kind: 'info',
  hideCloseButton: false,
  lowContrast: false,
});

const emit = defineEmits<{
  close: [event: CustomEvent];
}>();
</script>

<template>
  <cds-inline-notification
    :kind="kind"
    :title="title"
    :subtitle="subtitle"
    :hide-close-button="hideCloseButton || undefined"
    :low-contrast="lowContrast || undefined"
    :status-icon-description="statusIconDescription"
    @cds-notification-closed="emit('close', $event)"
  >
    <slot name="title" />
    <slot name="subtitle" />
    <slot />
  </cds-inline-notification>
</template>
