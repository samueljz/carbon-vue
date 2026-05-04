<script setup lang="ts">
import '@carbon/web-components/es/components/tile/index.js';
import { TILE_COLOR_SCHEME } from '@carbon/web-components/es/components/tile/defs.js';

export interface CvExpandableTileProps {
  /**
   * The color scheme.
   */
  colorScheme?: TILE_COLOR_SCHEME;
  /**
   * \`true\` to expand this expandable tile.
   */
  expanded?: boolean;
  /**
   * Specify if the \`ExpandableTile\` component should be rendered with rounded corners.
   */
  hasRoundedCorners?: boolean;
  /**
   * \`true\` to expand this expandable tile.
   */
  withInteractive?: boolean;
}

withDefaults(defineProps<CvExpandableTileProps>(), {
  colorScheme: TILE_COLOR_SCHEME.REGULAR,
  expanded: false,
  hasRoundedCorners: false,
  withInteractive: false,
});

const emit = defineEmits<{
  'beingtoggled': [event: CustomEvent];
  'toggled': [event: CustomEvent];
}>();
</script>

<template>
  <cds-expandable-tile
    :color-scheme="colorScheme"
    :expanded="expanded"
    :has-rounded-corners="hasRoundedCorners"
    :with-interactive="withInteractive"
    @cds-expandable-tile-beingtoggled="emit('beingtoggled', $event)"
    @cds-expandable-tile-toggled="emit('toggled', $event)"
  >
    <slot name="above-the-fold-content" slot="above-the-fold-content" />
    <slot />
    <slot name="decorator" slot="decorator" />
    <slot name="ai-label" slot="ai-label" />
    <slot name="slug" slot="slug" />
  </cds-expandable-tile>
</template>
