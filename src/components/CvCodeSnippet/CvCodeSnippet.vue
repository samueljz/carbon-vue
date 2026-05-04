<script setup lang="ts">
import '@carbon/web-components/es/components/code-snippet/index.js';
import { CODE_SNIPPET_TYPE } from '@carbon/web-components/es/components/code-snippet/defs.js';

export interface CvCodeSnippetProps {
  /** Optional text to copy. If not specified, the children node's innerText will be used as the copy value. */
  copyText?: string;
  /** true if the button should be disabled. */
  disabled?: boolean;
  /** Specify the string displayed when the snippet is copied */
  feedback?: string;
  /** Specify the time it takes for the feedback message to timeout */
  feedbackTimeout?: number;
  /** Specify whether or not a copy button should be used/rendered. */
  hideCopyButton?: boolean;
  /** Specify the maximum number of rows to be shown when in collapsed view */
  maxCollapsedNumberOfRows?: number;
  /** Specify the maximum number of rows to be shown when in expanded view */
  maxExpandedNumberOfRows?: number;
  /** Specify the minimum number of rows to be shown when in collapsed view */
  minCollapsedNumberOfRows?: number;
  /** Specify the minimum number of rows to be shown when in expanded view */
  minExpandedNumberOfRows?: number;
  /** Specify a string that is displayed when the Code Snippet has been interacted with to show less lines */
  showLessText?: string;
  /** Specify a string that is displayed when the Code Snippet text is more than 15 lines */
  showMoreText?: string;
  /** Tooltip content for the copy button. */
  tooltipContent?: string;
  /** true if the text should wrap. */
  wrapText?: boolean;
  /** The type of code snippet. */
  type?: CODE_SNIPPET_TYPE;
}

withDefaults(defineProps<CvCodeSnippetProps>(), {
  copyText: '',
  disabled: false,
  feedback: 'Copied!',
  feedbackTimeout: 2000,
  hideCopyButton: false,
  maxCollapsedNumberOfRows: 15,
  maxExpandedNumberOfRows: 0,
  minCollapsedNumberOfRows: 3,
  minExpandedNumberOfRows: 16,
  showLessText: 'Show less',
  showMoreText: 'Show more',
  tooltipContent: 'Copy to clipboard',
  wrapText: false,
  type: CODE_SNIPPET_TYPE.SINGLE,
});
</script>

<template>
  <cds-code-snippet
    :copy-text="copyText"
    :disabled="disabled ? 'true' : undefined"
    :feedback="feedback"
    :feedback-timeout="feedbackTimeout"
    :hide-copy-button="hideCopyButton ? 'true' : undefined"
    :max-collapsed-number-of-rows="maxCollapsedNumberOfRows"
    :max-expanded-number-of-rows="maxExpandedNumberOfRows"
    :min-collapsed-number-of-rows="minCollapsedNumberOfRows"
    :min-expanded-number-of-rows="minExpandedNumberOfRows"
    :show-less-text="showLessText"
    :show-more-text="showMoreText"
    :tooltip-content="tooltipContent"
    :wrap-text="wrapText ? 'true' : undefined"
    :type="type"
  >
    <slot />
  </cds-code-snippet>
</template>
