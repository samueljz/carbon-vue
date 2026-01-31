<script setup lang="ts">
import '@carbon/web-components/es/components/notification/index.js';
import type { NotificationKind } from '@/types';

export interface CvToastNotificationProps {
  /**
   * Specify the kind of notification
   */
  kind?: NotificationKind;
  /**
   * Specify the title of the notification
   */
  title?: string;
  /**
   * Specify the subtitle of the notification
   */
  subtitle?: string;
  /**
   * Specify the caption of the notification
   */
  caption?: string;
  /**
   * Specify the timeout for auto-closing (in milliseconds)
   */
  timeout?: number;
  /**
   * Specify whether to hide the close button
   */
  hideCloseButton?: boolean;
  /**
   * Specify whether the notification is low contrast
   */
  lowContrast?: boolean;
  /**
   * Specify the status icon description
   */
  statusIconDescription?: string;
}

withDefaults(defineProps<CvToastNotificationProps>(), {
  kind: 'info',
  timeout: 0,
  hideCloseButton: false,
  lowContrast: false,
});

const emit = defineEmits<{
  close: [event: CustomEvent];
}>();
</script>

<template>
  <cds-toast-notification
    :kind="kind"
    :title="title"
    :subtitle="subtitle"
    :caption="caption"
    :timeout="timeout"
    :hide-close-button="hideCloseButton || undefined"
    :low-contrast="lowContrast || undefined"
    :status-icon-description="statusIconDescription"
    @cds-notification-closed="emit('close', $event)"
  >
    <slot name="title" />
    <slot name="subtitle" />
    <slot name="caption" />
    <slot />
  </cds-toast-notification>
</template>
