<script setup lang="ts">
import '@carbon/web-components/es/components/progress-indicator/index.js';

export interface CvProgressIndicatorProps {
  /**
   * Determines whether or not the progress indicator should be rendered vertically.
   */
  vertical?: boolean;
  /**
   * Specify whether the progress steps should be split equally in size in the container (horizontal only).
   */
  spaceEqually?: boolean;
  /**
   * Optionally specify the current step array index.
   */
  currentIndex?: number;
  /**
   * React-like property handler. If set to a function, steps become clickable.
   */
  onChange?: (e: CustomEvent<{ index: number }>) => void;
}

withDefaults(defineProps<CvProgressIndicatorProps>(), {
  vertical: false,
  spaceEqually: false,
  currentIndex: 0,
});

const emit = defineEmits<{
  'change': [event: CustomEvent];
  'onChange': [event: CustomEvent];
}>();
</script>

<template>
  <cds-progress-indicator
    :vertical="vertical || undefined"
    :space-equally="spaceEqually || undefined"
    :current-index="currentIndex"
    .onChange="onChange"
    @change="emit('change', $event as CustomEvent)"
    @onChange="emit('onChange', $event as CustomEvent)"
  >
    <slot />
  </cds-progress-indicator>
</template>
