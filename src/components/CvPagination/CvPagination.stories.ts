import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvPagination } from './index';
// Need select-item for pagination sizes
import '@carbon/web-components/es/components/select/index.js';

const sizes = {
    'Small size (sm)': 'sm',
    'Medium size (md)': 'md',
    'Large size (lg)': 'lg',
};

const args = {
    backwardText: 'Previous',
    disabled: false,
    forwardText: 'Next',
    isLastPage: false,
    itemsPerPageText: 'Items per page:',
    page: 1,
    pageSize: 10,
    pageInputDisabled: false,
    pageSizeInputDisabled: false,
    pagesUnknown: false,
    size: 'md',
    totalItems: 103,
};

const argTypes: ArgTypes = {
    backwardText: {
        control: 'text',
        description: 'The description for the backward icon.',
    },
    disabled: {
        control: 'boolean',
        description:
            '<code>true</code> if the backward/forward buttons, as well as the page select elements, should be disabled.',
    },
    forwardText: {
        control: 'text',
        description: 'The description for the forward icon.',
    },
    isLastPage: {
        control: 'boolean',
        description: '<code>true</code> if the current page should be the last page.',
    },
    itemsPerPageText: {
        control: 'text',
        description: 'The text indicating the number of items per page.',
    },
    page: {
        control: 'number',
        description: 'The current page.',
    },
    pageSize: {
        control: 'number',
        description: 'The number dictating how many items a page contains.',
    },
    pageInputDisabled: {
        control: 'boolean',
        description:
            '<code>true</code> if the select box to change the page should be disabled.',
    },
    pageSizeInputDisabled: {
        control: 'boolean',
        description:
            '<code>true</code> if the select box to change the items per page should be disabled.',
    },
    pagesUnknown: {
        control: 'boolean',
        description: '<code>true</code> if the total number of items is unknown.',
    },
    size: {
        control: 'select',
        description: 'Specify the size of the Pagination.',
        options: Object.values(sizes),
        mapping: sizes,
    },
    totalItems: {
        control: 'number',
        description: 'The total number of items.',
    },
};

const meta: Meta<typeof CvPagination> = {
    title: 'Components/Pagination',
    component: CvPagination,
    decorators: [() => ({ template: '<div style="max-width: 800px"><story/></div>' })]
};

export default meta;
type Story = StoryObj<typeof CvPagination>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvPagination },
        setup() { return { args }; },
        template: `
      <CvPagination
        :backward-text="args.backwardText"
        :disabled="args.disabled"
        :forward-text="args.forwardText"
        :is-last-page="args.isLastPage"
        :items-per-page-text="args.itemsPerPageText"
        :page="args.page"
        :page-size="args.pageSize"
        :page-input-disabled="args.pageInputDisabled"
        :page-size-input-disabled="args.pageSizeInputDisabled"
        :size="args.size"
        :pages-unknown="args.pagesUnknown"
        :total-items="args.totalItems"
      >
        <cds-select-item value="10">10</cds-select-item>
        <cds-select-item value="20">20</cds-select-item>
        <cds-select-item value="30">30</cds-select-item>
        <cds-select-item value="40">40</cds-select-item>
        <cds-select-item value="50">50</cds-select-item>
      </CvPagination>
    `,
    }),
};

export const MultiplePaginationComponents: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvPagination },
        setup() { return { args }; },
        template: `
      <div>
        <CvPagination
          :backward-text="args.backwardText"
          :disabled="args.disabled"
          :forward-text="args.forwardText"
          :is-last-page="args.isLastPage"
          :items-per-page-text="args.itemsPerPageText"
          :page="args.page"
          :page-size="args.pageSize"
          :page-input-disabled="args.pageInputDisabled"
          :page-size-input-disabled="args.pageSizeInputDisabled"
          :size="args.size"
          :pages-unknown="args.pagesUnknown"
          :total-items="args.totalItems"
        >
          <cds-select-item value="10">10</cds-select-item>
          <cds-select-item value="20">20</cds-select-item>
          <cds-select-item value="30">30</cds-select-item>
          <cds-select-item value="40">40</cds-select-item>
          <cds-select-item value="50">50</cds-select-item>
        </CvPagination>
        <CvPagination
          :backward-text="args.backwardText"
          :disabled="args.disabled"
          :forward-text="args.forwardText"
          :is-last-page="args.isLastPage"
          :items-per-page-text="args.itemsPerPageText"
          :page="args.page"
          :page-size="args.pageSize"
          :page-input-disabled="args.pageInputDisabled"
          :page-size-input-disabled="args.pageSizeInputDisabled"
          :size="args.size"
          :pages-unknown="args.pagesUnknown"
          :total-items="args.totalItems"
        >
          <cds-select-item value="10">10</cds-select-item>
          <cds-select-item value="20">20</cds-select-item>
          <cds-select-item value="30">30</cds-select-item>
          <cds-select-item value="40">40</cds-select-item>
          <cds-select-item value="50">50</cds-select-item>
        </CvPagination>
      </div>
    `,
    }),
};

export const PaginationUnknownPages: Story = {
    name: 'Unknown pages and items',
    args: {
        ...args,
        pagesUnknown: true,
        totalItems: undefined,
    },
    argTypes,
    render: (args) => ({
        components: { CvPagination },
        setup() { return { args }; },
        template: `
      <CvPagination
        :backward-text="args.backwardText"
        :disabled="args.disabled"
        :forward-text="args.forwardText"
        :is-last-page="args.isLastPage"
        :items-per-page-text="args.itemsPerPageText"
        :page="args.page"
        :page-size="args.pageSize"
        :page-input-disabled="args.pageInputDisabled"
        :page-size-input-disabled="args.pageSizeInputDisabled"
        :size="args.size"
        :pages-unknown="args.pagesUnknown"
        :total-items="args.totalItems"
      >
        <cds-select-item value="10">10</cds-select-item>
        <cds-select-item value="20">20</cds-select-item>
        <cds-select-item value="30">30</cds-select-item>
        <cds-select-item value="40">40</cds-select-item>
        <cds-select-item value="50">50</cds-select-item>
      </CvPagination>
    `,
    }),
};

export const PaginationWithCustomPageSizesLabel: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvPagination },
        setup() { return { args }; },
        template: `
      <CvPagination
        :backward-text="args.backwardText"
        :disabled="args.disabled"
        :forward-text="args.forwardText"
        :is-last-page="args.isLastPage"
        :items-per-page-text="args.itemsPerPageText"
        :page="args.page"
        :page-size="args.pageSize"
        :page-input-disabled="args.pageInputDisabled"
        :page-size-input-disabled="args.pageSizeInputDisabled"
        :size="args.size"
        :pages-unknown="args.pagesUnknown"
        :total-items="args.totalItems"
      >
        <cds-select-item value="10">Ten</cds-select-item>
        <cds-select-item value="20">Twenty</cds-select-item>
        <cds-select-item value="30">Thirty</cds-select-item>
        <cds-select-item value="40">Forty</cds-select-item>
        <cds-select-item value="50">Fifty</cds-select-item>
      </CvPagination>
    `,
    }),
};
