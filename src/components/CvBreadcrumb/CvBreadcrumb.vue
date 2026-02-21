<script setup lang="ts">
import '@carbon/web-components/es/components/breadcrumb/index.js';

export interface CvBreadcrumbProps {
  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash?: boolean;
  /**
   * Specify the size of the Breadcrumb. Currently supports 'sm' & 'md'
   */
  size?: 'sm' | 'md';
}

withDefaults(defineProps<CvBreadcrumbProps>(), {
  noTrailingSlash: false,
  size: 'md',
});
</script>

<template>
  <cds-breadcrumb
    :no-trailing-slash="noTrailingSlash || undefined"
    :size="size"
  >
    <slot />
  </cds-breadcrumb>
</template>
