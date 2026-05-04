import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
    CvDataTable,
    CvTableHead,
    CvTableHeaderRow,
    CvTableHeaderCell,
    CvTableBody,
    CvTableRow,
    CvTableCell,
    CvTableCellContent,
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
    locale: 'en',
    size: TABLE_SIZE.LG,
    useStaticWidth: false,
    useZebraStyles: false,
};

const argTypes: ArgTypes = {
    locale: {
        control: 'text',
        description: 'Provide a string for the current locale.',
    },
    size: {
        control: 'radio',
        description: 'Change the row height of table.',
        options: Object.keys(sizes),
        mapping: sizes,
    },
    useStaticWidth: {
        control: 'boolean',
        description: 'Use static width.',
    },
    useZebraStyles: {
        control: 'boolean',
        description: 'Use zebra styles.',
    },
};

const meta: Meta<typeof CvDataTable> = {
    title: 'Components/DataTable',
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
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args">
        <CvTableHead>
          <CvTableHeaderRow>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
            <CvTableHeaderCell>Other</CvTableHeaderCell>
            <CvTableHeaderCell>Example</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Active</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>Load Balancer 5</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};

export const XLWithTwoLines: Story = {
    ...Default,
    args: {
        ...args,
        size: TABLE_SIZE.XL,
    },
    render: (args) => ({
        components: {
            CvDataTable,
            CvTableHead,
            CvTableHeaderRow,
            CvTableHeaderCell,
            CvTableBody,
            CvTableRow,
            CvTableCell,
            CvTableCellContent,
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args">
        <CvTableHead>
          <CvTableHeaderRow>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>Status</CvTableHeaderCell>
            <CvTableHeaderCell>Other</CvTableHeaderCell>
            <CvTableHeaderCell>Example</CvTableHeaderCell>
          </CvTableHeaderRow>
        </CvTableHead>
        <CvTableBody>
          <CvTableRow>
            <CvTableCell>
              Load Balancer 1
              <CvTableCellContent>Austin, Tx</CvTableCellContent>
            </CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>
              Load Balancer 2
              <CvTableCellContent>Austin, Tx</CvTableCellContent>
            </CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Active</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
          <CvTableRow>
            <CvTableCell>
              Load Balancer 3
              <CvTableCellContent>Austin, Tx</CvTableCellContent>
            </CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
            <CvTableCell>Test</CvTableCell>
            <CvTableCell>22</CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};
