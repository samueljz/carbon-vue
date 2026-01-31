<script setup lang="ts">
import '@carbon/web-components/es/components/notification/index.js';
import type { NotificationKind } from '@/types';

export interface CvCalloutNotificationProps {
  kind?: NotificationKind;
  title?: string;
  subtitle?: string;
  titleId?: string;
  lowContrast?: boolean;
  statusIconDescription?: string;
}

withDefaults(defineProps<CvCalloutNotificationProps>(), {
  kind: 'info',
  lowContrast: false,
});
</script>

<template>
  <cds-callout-notification
    :kind="kind"
    :title="title"
    :subtitle="subtitle"
    :title-id="titleId"
    :low-contrast="lowContrast || undefined"
    :status-icon-description="statusIconDescription"
  >
    <slot name="title" />
    <slot name="subtitle" />
    <slot />
    <slot name="action" />
  </cds-callout-notification>
</template>
