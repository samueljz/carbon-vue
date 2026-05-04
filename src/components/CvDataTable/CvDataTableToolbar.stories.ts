import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
    CvDataTable,
    CvTableHead,
    CvTableHeaderRow,
    CvTableHeaderCell,
    CvTableBody,
    CvTableRow,
    CvTableCell,
    CvTableHeaderTitle,
    CvTableHeaderDescription,
    CvTableToolbar,
    CvTableToolbarContent,
    CvTableToolbarSearch,
} from './index';
// @ts-ignore
import { CvButton, CvLink } from '../../index';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';
import Settings16 from '@carbon/icons-vue/es/settings/16';
import OverflowMenuVertical16 from '@carbon/icons-vue/es/overflow-menu--vertical/16';

const sizes = {
    [`xs (${TABLE_SIZE.XS})`]: TABLE_SIZE.XS,
    [`sm (${TABLE_SIZE.SM})`]: TABLE_SIZE.SM,
    [`md (${TABLE_SIZE.MD})`]: TABLE_SIZE.MD,
    [`lg (${TABLE_SIZE.LG} - default)`]: TABLE_SIZE.LG,
    [`xl (${TABLE_SIZE.XL})`]: TABLE_SIZE.XL,
};

const args = {
    isSortable: false,
    locale: 'en',
    overflowMenuOnHover: false,
    radio: false,
    size: TABLE_SIZE.LG,
    useZebraStyles: false,
};

const argTypes: ArgTypes = {
    isSortable: {
        control: 'boolean',
        description: 'Is sortable',
    },
    locale: {
        control: 'text',
        description: 'Locale',
    },
    overflowMenuOnHover: {
        control: 'boolean',
        description: 'Overflow menu on hover',
    },
    radio: {
        control: 'boolean',
        description: 'Radio',
    },
    size: {
        control: 'select',
        description: 'Size',
        options: Object.keys(sizes),
        mapping: sizes,
    },
    useZebraStyles: {
        control: 'boolean',
        description: 'Use zebra styles',
    },
};

const meta: Meta<typeof CvDataTable> = {
    title: 'Components/DataTable/Toolbar',
    component: CvDataTable,
};

export default meta;
type Story = StoryObj<typeof CvDataTable>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: {
            CvDataTable,
            CvTableHead,
            CvTableHeaderRow,
            CvTableHeaderCell,
            CvTableBody,
            CvTableRow,
            CvTableCell,
            CvTableHeaderTitle,
            CvTableHeaderDescription,
            CvTableToolbar,
            CvTableToolbarContent,
            CvTableToolbarSearch,
            CvButton,
            CvLink,
            Settings16,
            OverflowMenuVertical16,
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args">
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With toolbar.</CvTableHeaderDescription>
        </template>

        <template #toolbar>
          <CvTableToolbar>
            <CvTableToolbarContent>
              <CvTableToolbarSearch placeholder="Filter table" />
              <cds-overflow-menu toolbar-action>
                <Settings16 slot="icon" class="cds--overflow-menu__icon" />
                <span slot="tooltip-content">Settings</span>
                <cds-overflow-menu-body>
                  <cds-overflow-menu-item>Action 1</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Action 2</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Action 3</cds-overflow-menu-item>
                </cds-overflow-menu-body>
              </cds-overflow-menu>
              <CvButton>Primary button</CvButton>
            </CvTableToolbarContent>
          </CvTableToolbar>
        </template>

        <CvTableHead>
          <CvTableHeaderRow selection-name="header">
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
            <CvTableHeaderCell></CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow selection-name="0">
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
            <CvTableCell>
              <cds-overflow-menu toolbar-action>
                <OverflowMenuVertical16 slot="icon" class="cds--overflow-menu__icon" />
                <span slot="tooltip-content">Options</span>
                <cds-overflow-menu-body flipped>
                  <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Rename</cds-overflow-menu-item>
                </cds-overflow-menu-body>
              </cds-overflow-menu>
            </CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
            <CvTableCell>
              <cds-overflow-menu toolbar-action>
                <OverflowMenuVertical16 slot="icon" class="cds--overflow-menu__icon" />
                <span slot="tooltip-content">Options</span>
                <cds-overflow-menu-body flipped>
                  <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Rename</cds-overflow-menu-item>
                </cds-overflow-menu-body>
              </cds-overflow-menu>
            </CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};

export const PersistentToolbar: Story = {
    render: () => ({
        components: {
            CvDataTable,
            CvTableHead,
            CvTableHeaderRow,
            CvTableHeaderCell,
            CvTableBody,
            CvTableRow,
            CvTableCell,
            CvTableHeaderTitle,
            CvTableHeaderDescription,
            CvTableToolbar,
            CvTableToolbarContent,
            CvTableToolbarSearch,
            CvButton,
            CvLink,
            Settings16,
        },
        template: `
      <CvDataTable>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With persistent toolbar</CvTableHeaderDescription>
        </template>

        <template #toolbar>
          <CvTableToolbar>
            <CvTableToolbarContent>
              <CvTableToolbarSearch persistent placeholder="Filter table" />
              <cds-overflow-menu toolbar-action>
                <Settings16 slot="icon" class="cds--overflow-menu__icon" />
                <span slot="tooltip-content">Settings</span>
                <cds-overflow-menu-body>
                  <cds-overflow-menu-item @click="() => alert('Alert 1')">Action 1</cds-overflow-menu-item>
                  <cds-overflow-menu-item @click="() => alert('Alert 2')">Action 2</cds-overflow-menu-item>
                  <cds-overflow-menu-item @click="() => alert('Alert 3')">Action 3</cds-overflow-menu-item>
                </cds-overflow-menu-body>
              </cds-overflow-menu>
              <CvButton>Primary button</CvButton>
            </CvTableToolbarContent>
          </CvTableToolbar>
        </template>

        <CvTableHead>
          <CvTableHeaderRow>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow>
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};

export const SmallPersistentToolbar: Story = {
    render: () => ({
        components: {
            CvDataTable,
            CvTableHead,
            CvTableHeaderRow,
            CvTableHeaderCell,
            CvTableBody,
            CvTableRow,
            CvTableCell,
            CvTableHeaderTitle,
            CvTableHeaderDescription,
            CvTableToolbar,
            CvTableToolbarContent,
            CvTableToolbarSearch,
            CvButton,
            CvLink,
            Settings16,
        },
        template: `
      <CvDataTable size="sm">
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With small persistent toolbar</CvTableHeaderDescription>
        </template>

        <template #toolbar>
          <CvTableToolbar>
            <CvTableToolbarContent>
              <CvTableToolbarSearch persistent placeholder="Filter table" />
              <cds-overflow-menu toolbar-action>
                <Settings16 slot="icon" class="cds--overflow-menu__icon" />
                <span slot="tooltip-content">Settings</span>
                <cds-overflow-menu-body>
                  <cds-overflow-menu-item>Action 1</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Action 2</cds-overflow-menu-item>
                  <cds-overflow-menu-item>Action 3</cds-overflow-menu-item>
                </cds-overflow-menu-body>
              </cds-overflow-menu>
              <CvButton>Primary button</CvButton>
            </CvTableToolbarContent>
          </CvTableToolbar>
        </template>

        <CvTableHead>
          <CvTableHeaderRow>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow>
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};
