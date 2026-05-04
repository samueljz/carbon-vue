<script setup lang="ts">
import '@carbon/web-components/es/components/code-snippet/index.js';
import { CODE_SNIPPET_TYPE } from '@carbon/web-components/es/components/code-snippet/defs.js';

export interface CvCodeSnippetSkeletonProps {
  /**
   * The type of code snippet.
   */
  type?: CODE_SNIPPET_TYPE;
}

withDefaults(defineProps<CvCodeSnippetSkeletonProps>(), {
  type: CODE_SNIPPET_TYPE.SINGLE,
});
</script>

<template>
  <cds-code-snippet-skeleton :type="type">
    <slot />
  </cds-code-snippet-skeleton>
</template>
