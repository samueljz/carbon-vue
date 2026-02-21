<script setup lang="ts">
import '@carbon/web-components/es/components/tabs/index.js';

export interface CvTabProps {
  /**
   * `true` if this tab should be highlighted.
   */
  highlighted?: boolean;
  /**
   * Tab type.
   */
  type?: string;
  /**
   * The tab text content.
   */
  tabTitle?: string;
  /**
   * The value of the tab.
   */
  value?: string;
  /**
   * Target tab panel
   */
  target?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvTabProps>(), {
  highlighted: false,
  type: 'regular',
});
</script>

<template>
  <cds-tab
    :highlighted="highlighted"
    :type="type"
    :tab-title="tabTitle"
    :value="value"
    :target="target"
    :disabled="disabled"
  >
    <slot />
  </cds-tab>
</template>
