<script setup lang="ts">
import '@carbon/web-components/es/components/layer/index.js';

export interface CvLayerProps {
  /**
   * Specify the layer level and override any existing levels based on hierarchy
   */
  level?: number;
  /**
   * Add a background color using the $layer-background token
   */
  withBackground?: boolean;
}

withDefaults(defineProps<CvLayerProps>(), {
  level: 0,
  withBackground: false,
});

const emit = defineEmits<{
  'cds-use-layer': [event: CustomEvent<{ layer: HTMLElement; level: number }>];
}>();
</script>

<template>
  <cds-layer
    :level="level"
    :with-background="withBackground || undefined"
    @cds-use-layer="emit('cds-use-layer', $event)"
  >
    <slot />
  </cds-layer>
</template>
