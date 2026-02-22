<script setup lang="ts">
import '@carbon/web-components/es/components/ui-shell/header-panel.js';

export interface CvHeaderPanelProps {
  /**
   * Specify whether the panel is expanded
   */
  expanded?: boolean;
}

withDefaults(defineProps<CvHeaderPanelProps>(), {
  expanded: false,
});
</script>

<template>
  <cds-header-panel :expanded="expanded ? true : undefined">
    <slot />
  </cds-header-panel>
</template>
