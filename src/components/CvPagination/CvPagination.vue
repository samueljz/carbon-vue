<script setup lang="ts">
import '@carbon/web-components/es/components/pagination/index.js';

export interface CvPaginationProps {
  /**
   * The assistive text for the button to go to previous page.
   */
  backwardText?: string;
  /**
   * `true` if the pagination UI should be disabled.
   */
  disabled?: boolean;
  /**
   * The assistive text for the button to go to next page.
   */
  forwardText?: string;
  /**
   * `true` to explicitly state that user is at the last page.
   */
  isLastPage?: boolean;
  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText?: string;
  /**
   * The current page.
   */
  page?: number;
  /**
   * true if the select box to change the page should be disabled.
   */
  pageInputDisabled?: boolean;
  /**
   * Number of items per page.
   */
  pageSize?: number;
  /**
   * true if the select box to change the items per page should be disabled.
   */
  pageSizeInputDisabled?: boolean;
  /**
   * true if the total number of items is unknown.
   */
  pagesUnknown?: boolean;
  /**
   * Specify the size of the Pagination.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The number of total items.
   */
  totalItems?: number;
}

withDefaults(defineProps<CvPaginationProps>(), {
  backwardText: 'Previous page',
  disabled: false,
  forwardText: 'Next page',
  itemsPerPageText: 'Items per page:',
  page: 1,
  pageInputDisabled: false,
  pageSize: 10,
  pageSizeInputDisabled: false,
  pagesUnknown: false,
  size: 'md',
});

const emit = defineEmits<{
  'pagination-changed-current': [event: CustomEvent];
  'page-sizes-select-changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-pagination
    :backward-text="backwardText"
    :disabled="disabled || undefined"
    :forward-text="forwardText"
    :is-last-page="isLastPage || undefined"
    :items-per-page-text="itemsPerPageText"
    :page="page"
    :page-input-disabled="pageInputDisabled || undefined"
    :page-size="pageSize"
    :page-size-input-disabled="pageSizeInputDisabled || undefined"
    :pages-unknown="pagesUnknown || undefined"
    :size="size"
    :total-items="totalItems"
    @cds-pagination-changed-current="emit('pagination-changed-current', $event)"
    @cds-page-sizes-select-changed="emit('page-sizes-select-changed', $event)"
  >
    <slot name="label-text" />
    <slot />
  </cds-pagination>
</template>
