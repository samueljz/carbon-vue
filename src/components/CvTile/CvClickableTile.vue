<script setup lang="ts">
import '@carbon/web-components/es/components/tile/index.js';
import { TILE_COLOR_SCHEME } from '@carbon/web-components/es/components/tile/defs.js';

export interface CvClickableTileProps {
  /**
   * The color scheme.
   */
  colorScheme?: TILE_COLOR_SCHEME;
  /**
   * The a11y role for \`<a>\`.
   */
  linkRole?: string;
  /**
   * Specify if the \`ClickableTile\` component should be rendered with rounded corners.
   */
  hasRoundedCorners?: boolean;
  /**
   * The link href.
   */
  href?: string;
  /**
   * The link target.
   */
  target?: string;
  /**
   * The link rel.
   */
  rel?: string;
  /**
   * \`true\` if the clickable tile should be disabled.
   */
  disabled?: boolean;
  /**
   * The link download.
   */
  download?: string;
  /**
   * The link ping.
   */
  ping?: string;
  /**
   * The link hreflang.
   */
  hreflang?: string;
  /**
   * The link type.
   */
  type?: string;
}

withDefaults(defineProps<CvClickableTileProps>(), {
  colorScheme: TILE_COLOR_SCHEME.REGULAR,
  linkRole: 'button',
  hasRoundedCorners: false,
  href: '',
  target: '',
  rel: '',
  disabled: false,
  download: '',
  ping: '',
  hreflang: '',
  type: '',
});
</script>

<template>
  <cds-clickable-tile
    :color-scheme="colorScheme"
    :link-role="linkRole"
    :has-rounded-corners="hasRoundedCorners"
    :href="href"
    :target="target"
    :rel="rel"
    :disabled="disabled"
    :download="download"
    :ping="ping"
    :hreflang="hreflang"
    :type="type"
  >
    <slot />
    <slot name="decorator" slot="decorator" />
    <slot name="ai-label" slot="ai-label" />
    <slot name="slug" slot="slug" />
  </cds-clickable-tile>
</template>
