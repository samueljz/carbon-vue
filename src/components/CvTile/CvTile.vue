<script setup lang="ts">
import '@carbon/web-components/es/components/tile/index.js';
import { TILE_COLOR_SCHEME } from '@carbon/web-components/es/components/tile/defs.js';

export interface CvTileProps {
  /**
   * The color scheme.
   */
  colorScheme?: TILE_COLOR_SCHEME;
  /**
   * Specify if the \`Tile\` component should be rendered with rounded corners.
   */
  hasRoundedCorners?: boolean;
}

withDefaults(defineProps<CvTileProps>(), {
  colorScheme: TILE_COLOR_SCHEME.REGULAR,
  hasRoundedCorners: false,
});
</script>

<template>
  <cds-tile
    :color-scheme="colorScheme"
    :has-rounded-corners="hasRoundedCorners"
  >
    <slot />
    <slot name="decorator" slot="decorator" />
    <slot name="ai-label" slot="ai-label" />
    <slot name="slug" slot="slug" />
  </cds-tile>
</template>
