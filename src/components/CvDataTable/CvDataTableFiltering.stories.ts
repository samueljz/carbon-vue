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
    size: TABLE_SIZE.LG,
    useStaticWidth: false,
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
    size: {
        control: 'radio',
        description: 'Size',
        options: Object.keys(sizes),
        mapping: sizes,
    },
    useStaticWidth: {
        control: 'boolean',
        description: 'Use static width',
    },
    useZebraStyles: {
        control: 'boolean',
        description: 'Use zebra styles',
    },
};

const meta: Meta<typeof CvDataTable> = {
    title: 'Components/DataTable/Filtering',
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
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args">
        <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        <CvTableHeaderDescription>With filtering</CvTableHeaderDescription>

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
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 5</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Ronja's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};
