<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-name.js';

export interface CvHeaderNameProps {
  /**
   * Link `href`.
   */
  href?: string;

  /**
   * The product name prefix.
   */
  prefix?: string;
}

withDefaults(defineProps<CvHeaderNameProps>(), {});
</script>

<template>
  <cds-header-name :href="href" :prefix="prefix">
    <slot />
  </cds-header-name>
</template>
