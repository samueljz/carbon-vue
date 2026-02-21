import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvBreadcrumb, CvBreadcrumbItem } from './index';
import '@carbon/web-components/es/components/breadcrumb/breadcrumb-link.js';
import '@carbon/web-components/es/components/breadcrumb/breadcrumb-overflow-menu.js';
import '@carbon/web-components/es/components/overflow-menu/overflow-menu-body.js';
import '@carbon/web-components/es/components/overflow-menu/overflow-menu-item.js';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import '@carbon/web-components/es/components/breadcrumb/breadcrumb-skeleton.js';
// Using hardcoded string for size instead of BREADCRUMB_SIZE import for simplicity
import OverflowMenuHorizontal16 from '@carbon/icons/es/overflow-menu--horizontal/16.js';
// Removed iconLoader import as we use raw SVG in template

const sizes = {
  'Small size (sm)': 'sm',
  'Medium size (md)': 'md',
};

const args = {
  ariaLabel: '',
  className: '',
  noTrailingSlash: false,
  size: 'md',
};

const argTypes: ArgTypes = {
  ariaLabel: {
    control: 'text',
    description: 'Specify the aria-label for the breadcrumb container.',
    name: 'aria-label',
  },
  className: {
    control: 'text',
    description: 'Specify an optional className to be applied to the container node.',
  },
  noTrailingSlash: {
    control: 'boolean',
    description: 'Optional prop to omit the trailing slash for the breadcrumbs.',
  },
  size: {
    control: 'select',
    description: 'Specify the size of the Accordion.',
    options: Object.values(sizes),
    mapping: sizes,
  },
};

const meta: Meta<typeof CvBreadcrumb> = {
  title: 'Components/Breadcrumb',
  component: CvBreadcrumb,
};

export default meta;
type Story = StoryObj<typeof CvBreadcrumb>;

export const Default: Story = {
  args,
  argTypes,
  render: (args) => ({
    components: { CvBreadcrumb, CvBreadcrumbItem },
    setup() { return { args: args || {} }; },
    template: `
      <CvBreadcrumb
        :no-trailing-slash="args.noTrailingSlash"
        :class="args.className"
        :size="args.size"
        :aria-label="args.ariaLabel || undefined"
      >
        <CvBreadcrumbItem>
          <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
        </CvBreadcrumbItem>
        <CvBreadcrumbItem>
          <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
        </CvBreadcrumbItem>
        <CvBreadcrumbItem>
          <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
        </CvBreadcrumbItem>
        <CvBreadcrumbItem>
          <cds-breadcrumb-link href="#">Breadcrumb 4</cds-breadcrumb-link>
        </CvBreadcrumbItem>
      </CvBreadcrumb>
    `,
  }),
};

export const BreadcrumbWithOverflowMenu: Story = {
  args,
  argTypes,
  render: (args) => {
    return {
      components: { CvBreadcrumb, CvBreadcrumbItem },
      setup() {
        return {
          args: args || {}
        };
      },
      template: `
        <CvBreadcrumb
          :no-trailing-slash="args.noTrailingSlash"
          :class="args.className"
          :size="args.size"
          :aria-label="args.ariaLabel || undefined"
        >
          <CvBreadcrumbItem>
            <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
          </CvBreadcrumbItem>
          <CvBreadcrumbItem>
            <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
          </CvBreadcrumbItem>
          <CvBreadcrumbItem>
            <cds-overflow-menu breadcrumb align="bottom">
              <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32" class="cds--overflow-menu__icon"><circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>
              <span slot="tooltip-content"> Options </span>
              <cds-overflow-menu-body>
                <cds-overflow-menu-item>Breadcrumb 3</cds-overflow-menu-item>
                <cds-overflow-menu-item>Breadcrumb 4</cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </CvBreadcrumbItem>
          <CvBreadcrumbItem>
            <cds-breadcrumb-link href="#">Breadcrumb 5</cds-breadcrumb-link>
          </CvBreadcrumbItem>
          <CvBreadcrumbItem>
            <cds-breadcrumb-link is-currentpage>Breadcrumb 6</cds-breadcrumb-link>
          </CvBreadcrumbItem>
        </CvBreadcrumb>
      `,
    };
  },
};

const skeletonArgs = { items: 3, ...args };
const skeletonArgTypes: ArgTypes = {
  items: {
    control: 'number',
    description: 'Specify the number of items',
  },
  ...argTypes,
};

export const Skeleton: Story = {
  args: skeletonArgs,
  argTypes: skeletonArgTypes,
  parameters: {
    controls: {
      exclude: ['aria-label'],
    },
  },
  render: (args) => ({
    setup() { return { args: args || {} }; },
    template: `
      <cds-breadcrumb-skeleton
        .size="args.size"
        :class="args.className"
        .noTrailingSlash="args.noTrailingSlash"
        .items="args.items"
      >
      </cds-breadcrumb-skeleton>
    `,
  }),
};
