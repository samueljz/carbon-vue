import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
  CvContainedList,
  CvContainedListItem,
  CvContainedListDescription,
} from './index';

import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/search/index.js';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';

import Add16 from '@carbon/icons-vue/es/add/16';
import Close16 from '@carbon/icons-vue/es/close/16';
import Apple16 from '@carbon/icons-vue/es/apple/16';
import Fish16 from '@carbon/icons-vue/es/fish/16';
import Strawberry16 from '@carbon/icons-vue/es/strawberry/16';
import Wheat16 from '@carbon/icons-vue/es/wheat/16';
import OverflowMenuVertical16 from '@carbon/icons-vue/es/overflow-menu--vertical/16';

const kinds = ['on-page', 'disclosed'];
const sizes = ['sm', 'md', 'lg', 'xl'];

const defaultArgs = {
  label: 'List title',
  kind: 'on-page',
  size: 'lg',
  isInset: false,
};

const argTypes: ArgTypes = {
  label: {
    control: 'text',
    description: 'A label describing the contained list',
  },
  kind: {
    control: 'select',
    options: kinds,
    description: 'The kind of contained list to display',
  },
  size: {
    control: 'select',
    options: sizes,
    description: 'Specify the size of the contained list',
  },
  isInset: {
    control: 'boolean',
    description:
      'Specify whether the dividing lines between list items should be inset',
  },
};

const meta: Meta<typeof CvContainedList> = {
  title: 'Components/Contained list',
  component: CvContainedList,
};

export default meta;
type Story = StoryObj<typeof CvContainedList>;

export const Default: Story = {
  args: defaultArgs as any,
  argTypes,
  render: (args) => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <CvContainedList
          v-for="i in 4"
          :key="i"
          :label="args.label"
          :kind="args.kind"
          :size="args.size"
          :is-inset="args.isInset"
        >
          <CvContainedListItem v-for="j in 8" :key="j">
            List item
          </CvContainedListItem>
        </CvContainedList>
      </div>
    `,
  }),
};

export const Disclosed: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    template: `
      <div>
        <CvContainedList label="List title" kind="disclosed">
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
        </CvContainedList>
        <CvContainedList label="List title" kind="disclosed">
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
        </CvContainedList>
      </div>
    `,
  }),
};

export const WithInteractiveItems: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    template: `
      <CvContainedList label="List title" kind="on-page">
        <CvContainedListItem clickable>List item</CvContainedListItem>
        <CvContainedListItem clickable disabled>
          List item
        </CvContainedListItem>
        <CvContainedListItem clickable>List item</CvContainedListItem>
        <CvContainedListItem clickable>List item</CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithActions: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
      Close16,
    },
    template: `
      <CvContainedList label="List title" kind="on-page">
        <CvContainedListItem>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem disabled>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithExpandableSearch: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    setup() {
      const items = ['List item 1', 'List item 2', 'List item 3', 'List item 4'];
      const onSearch = (e: any) => {
        const searchValue = e.detail.value.toLowerCase();
        const list = document.getElementById('list-expandable-search');
        const listItems = list?.querySelectorAll('cds-contained-list-item');
        listItems?.forEach((item: any, index: number) => {
          const text = items[index].toLowerCase();
          item.style.display = text.includes(searchValue) ? '' : 'none';
        });
      };
      return { items, onSearch };
    },
    template: `
      <CvContainedList id="list-expandable-search" label="List title" kind="on-page">
        <cds-search
          slot="action"
          expandable
          placeholder="Filter"
          label-text="Search"
          close-button-label-text="Clear search input"
          size="lg"
          @cds-search-input="onSearch"
        />
        <CvContainedListItem v-for="(item, index) in items" :key="index">
          {{ item }}
        </CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithPersistentSearch: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    setup() {
      const items = ['List item 1', 'List item 2', 'List item 3', 'List item 4'];
      const onSearch = (e: any) => {
        const searchValue = e.detail.value.toLowerCase();
        const list = document.getElementById('list-persistent-search');
        const listItems = list?.querySelectorAll('cds-contained-list-item');
        listItems?.forEach((item: any, index: number) => {
          const text = items[index].toLowerCase();
          item.style.display = text.includes(searchValue) ? '' : 'none';
        });
      };
      return { items, onSearch };
    },
    template: `
      <CvContainedList id="list-persistent-search" label="List title" kind="on-page">
        <cds-search
          placeholder="Filter"
          label-text="Filter search"
          close-button-label-text="Clear search input"
          size="lg"
          @cds-search-input="onSearch"
        />
        <CvContainedListItem v-for="(item, index) in items" :key="index">
          {{ item }}
        </CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithInteractiveItemsAndActions: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
      Close16,
    },
    template: `
      <CvContainedList label="List title" kind="on-page">
        <CvContainedListItem clickable>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem clickable>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem clickable>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
        <CvContainedListItem clickable>
          List item
          <cds-icon-button slot="action" kind="ghost" size="lg">
            <Close16 slot="icon" />
            <span slot="tooltip-content">Dismiss</span>
          </cds-icon-button>
        </CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithListTitleDecorators: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    template: `
      <CvContainedList kind="on-page">
        <template #label>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span>List title</span>
            <cds-tag size="sm">4</cds-tag>
          </div>
        </template>
        <CvContainedListItem>List item</CvContainedListItem>
        <CvContainedListItem>List item</CvContainedListItem>
        <CvContainedListItem>List item</CvContainedListItem>
        <CvContainedListItem>List item</CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
      Apple16,
      Wheat16,
      Strawberry16,
      Fish16,
    },
    template: `
      <CvContainedList label="List title" kind="on-page">
        <CvContainedListItem>
          <div slot="icon"><Apple16 /></div>
          List item
        </CvContainedListItem>
        <CvContainedListItem>
          <div slot="icon"><Wheat16 /></div>
          List item
        </CvContainedListItem>
        <CvContainedListItem>
          <div slot="icon"><Strawberry16 /></div>
          List item
        </CvContainedListItem>
        <CvContainedListItem>
          <div slot="icon"><Fish16 /></div>
          List item
        </CvContainedListItem>
      </CvContainedList>
    `,
  }),
};

export const _WithLayer: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
    },
    template: `
      <sb-template-layers>
        <CvContainedList label="List title" kind="on-page">
          <CvContainedListItem>List item</CvContainedListItem>
          <CvContainedListItem>List item</CvContainedListItem>
        </CvContainedList>
      </sb-template-layers>
    `,
  }),
};

export const UsageExamples: Story = {
  render: () => ({
    components: {
      CvContainedList,
      CvContainedListItem,
      CvContainedListDescription,
      Add16,
      OverflowMenuVertical16,
    },
    template: `
      <div>
        <CvContainedList label="List title">
          <cds-icon-button slot="action" kind="primary" align="left" size="lg">
            <Add16 slot="icon" />
            <span slot="tooltip-content">Add</span>
          </cds-icon-button>
          <CvContainedListItem v-for="i in 3" :key="'ue1-' + i">
            List item
            <cds-overflow-menu slot="action" size="lg">
              <OverflowMenuVertical16 class="cds--overflow-menu__icon" slot="icon" />
              <span slot="tooltip-content">Options</span>
              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item>View details</cds-overflow-menu-item>
                <cds-overflow-menu-item>Edit</cds-overflow-menu-item>
                <cds-overflow-menu-item danger>
                  <div class="cds--overflow-menu-item__divider"></div>
                  Remove
                </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </CvContainedListItem>
        </CvContainedList>

        <br /><br />

        <CvContainedList label="List title">
          <cds-icon-button slot="action" kind="ghost" size="lg" align="left">
            <Add16 slot="icon" />
            <span slot="tooltip-content">Add</span>
          </cds-icon-button>
          <CvContainedListItem v-for="i in 3" :key="'ue2-' + i">
            <div>
              List item<br />
              <CvContainedListDescription>
                Description text
              </CvContainedListDescription>
            </div>
          </CvContainedListItem>
        </CvContainedList>

        <br /><br />

        <CvContainedList label="List title">
          <CvContainedListItem v-for="i in 3" :key="'ue3-' + i">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 1rem;">
              <span>List item</span>
              <span>List item details</span>
              <span>List item details</span>
            </div>
          </CvContainedListItem>
        </CvContainedList>
      </div>
    `,
  }),
};
