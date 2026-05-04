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
} from './index';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';

const sizes = {
    [`xs (${TABLE_SIZE.XS})`]: TABLE_SIZE.XS,
    [`sm (${TABLE_SIZE.SM})`]: TABLE_SIZE.SM,
    [`md (${TABLE_SIZE.MD})`]: TABLE_SIZE.MD,
    [`lg (${TABLE_SIZE.LG} - default)`]: TABLE_SIZE.LG,
    [`xl (${TABLE_SIZE.XL})`]: TABLE_SIZE.XL,
};

const args = {
    isSortable: false,
    isSelectable: true,
    locale: 'en',
    radio: false,
    size: TABLE_SIZE.LG,
    useStaticWidth: false,
    useZebraStyles: false,
};

const argTypes: ArgTypes = {
    isSortable: {
        control: 'boolean',
        description: 'Is sortable',
    },
    isSelectable: {
        control: 'boolean',
        description: 'Is selectable',
    },
    locale: {
        control: 'text',
        description: 'Locale',
    },
    radio: {
        control: 'boolean',
        description: 'Radio',
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
    title: 'Components/DataTable/Selection',
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
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args">
        <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        <CvTableHeaderDescription>With selection</CvTableHeaderDescription>

        <CvTableHead>
          <CvTableHeaderRow selection-name="header">
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow selection-name="0">
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3">
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4">
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5">
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

export const WithRadioSelection: Story = {
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
        },
        template: `
      <CvDataTable is-selectable radio>
        <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        <CvTableHeaderDescription>With radio selection</CvTableHeaderDescription>

        <CvTableHead>
          <CvTableHeaderRow selection-name="header" hide-checkbox>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow selection-name="0">
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3">
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4">
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5">
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

export const WithSelectionAndSorting: Story = {
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
        },
        template: `
      <CvDataTable is-selectable is-sortable>
        <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        <CvTableHeaderDescription>With selection and sorting</CvTableHeaderDescription>

        <CvTableHead>
          <CvTableHeaderRow selection-name="header">
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Attached groups</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow selection-name="0">
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3">
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4">
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5">
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
