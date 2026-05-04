<script setup lang="ts">
import '@carbon/web-components/es/components/tile/index.js';
import { TILE_COLOR_SCHEME } from '@carbon/web-components/es/components/tile/defs.js';

export interface CvSelectableTileProps {
  /**
   * The a11y text for the checkmark icon of the selected state.
   */
  checkmarkLabel?: string;
  /**
   * The color scheme.
   */
  colorScheme?: TILE_COLOR_SCHEME;
  /**
   * \`true\` if the selectable tile should be disabled.
   */
  disabled?: boolean;
  /**
   * Specify if the \`SelectableTile\` component should be rendered with rounded corners.
   */
  hasRoundedCorners?: boolean;
  /**
   * The \`name\` attribute.
   */
  name?: string;
  /**
   * \`true\` to show the selected state.
   */
  selected?: boolean;
  /**
   * The \`value\` attribute.
   */
  value?: string;
}

withDefaults(defineProps<CvSelectableTileProps>(), {
  checkmarkLabel: '',
  colorScheme: TILE_COLOR_SCHEME.REGULAR,
  disabled: false,
  hasRoundedCorners: false,
  name: '',
  selected: false,
  value: '',
});

const emit = defineEmits<{
  'changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-selectable-tile
    :checkmark-label="checkmarkLabel"
    :color-scheme="colorScheme"
    :disabled="disabled ? 'true' : undefined"
    :has-rounded-corners="hasRoundedCorners ? 'true' : undefined"
    :name="name"
    :selected="selected ? 'true' : undefined"
    :value="value"
    @cds-selectable-tile-changed="emit('changed', $event)"
  >
    <slot />
    <slot name="decorator" slot="decorator" />
    <slot name="ai-label" slot="ai-label" />
    <slot name="slug" slot="slug" />
  </cds-selectable-tile>
</template>
