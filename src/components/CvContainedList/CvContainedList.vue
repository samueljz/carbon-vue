<script setup lang="ts">
import '@carbon/web-components/es/components/contained-list/index.js';

export type CvContainedListKind = 'on-page' | 'disclosed';
export type CvContainedListSize = 'sm' | 'md' | 'lg' | 'xl';

export interface CvContainedListProps {
  /**
   * Specify whether the dividing lines in between list items should be inset.
   */
  isInset?: boolean;
  /**
   * The kind of ContainedList you want to display
   */
  kind?: CvContainedListKind;
  /**
   * A label describing the contained list.
   */
  label?: string;
  /**
   * Specify the size of the contained list.
   */
  size?: CvContainedListSize;
}

withDefaults(defineProps<CvContainedListProps>(), {
  isInset: false,
  kind: 'on-page',
  label: '',
  size: 'lg',
});
</script>

<template>
  <cds-contained-list
    :is-inset="isInset ? 'true' : undefined"
    :kind="kind"
    :label="label"
    :size="size"
  >
    <slot name="label" slot="label" />
    <slot name="action" slot="action" />
    <slot />
  </cds-contained-list>
</template>
