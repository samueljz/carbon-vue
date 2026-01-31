<script setup lang="ts">
import '@carbon/web-components/es/components/notification/index.js';
import type { NotificationKind } from '@/types';

export interface CvActionableNotificationProps {
  kind?: NotificationKind;
  title?: string;
  subtitle?: string;
  actionButtonLabel?: string;
  hideCloseButton?: boolean;
  lowContrast?: boolean;
  inline?: boolean;
  statusIconDescription?: string;
}

withDefaults(defineProps<CvActionableNotificationProps>(), {
  kind: 'info',
  hideCloseButton: false,
  lowContrast: false,
  inline: false,
});

const emit = defineEmits<{
  close: [event: CustomEvent];
  action: [event: CustomEvent];
}>();
</script>

<template>
  <cds-actionable-notification
    :kind="kind"
    :title="title"
    :subtitle="subtitle"
    :action-button-label="actionButtonLabel"
    :hide-close-button="hideCloseButton || undefined"
    :low-contrast="lowContrast || undefined"
    :inline="inline || undefined"
    :status-icon-description="statusIconDescription"
    @cds-notification-action-clicked="emit('action', $event)"
  >
    <slot name="action" />
    <slot />
  </cds-actionable-notification>
</template>
