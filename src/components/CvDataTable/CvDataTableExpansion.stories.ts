import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
    CvDataTable,
    CvTableHead,
    CvTableHeaderRow,
    CvTableHeaderCell,
    CvTableBody,
    CvTableRow,
    CvTableExpandedRow,
    CvTableCell,
    CvTableHeaderTitle,
    CvTableHeaderDescription,
} from './index';
// @ts-ignore
import { CvLink } from '../../index';
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
    title: 'Components/DataTable/Expansion',
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
            CvTableExpandedRow,
            CvTableCell,
            CvTableHeaderTitle,
            CvTableHeaderDescription,
            CvLink,
        },
        setup() {
            return { args };
        },
        template: `
      <CvDataTable v-bind="args" expandable>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With expansion</CvTableHeaderDescription>
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
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          
          <CvTableRow>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 5</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Ronja's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};

export const BatchExpansion: Story = {
    render: () => ({
        components: {
            CvDataTable,
            CvTableHead,
            CvTableHeaderRow,
            CvTableHeaderCell,
            CvTableBody,
            CvTableRow,
            CvTableExpandedRow,
            CvTableCell,
            CvTableHeaderTitle,
            CvTableHeaderDescription,
            CvLink,
        },
        template: `
      <CvDataTable expandable batch-expansion>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With batch expansion</CvTableHeaderDescription>
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
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>

          <CvTableRow>
            <CvTableCell>Load Balancer 5</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Ronja's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>
        </CvTableBody>
      </CvDataTable>
    `,
    }),
};
