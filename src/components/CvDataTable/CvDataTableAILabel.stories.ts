import type { Meta, StoryObj } from '@storybook/vue3';
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
  CvTableExpandedRow,
} from './index';
// @ts-ignore
import { CvLink } from '../../index';
import '@carbon/web-components/es/components/ai-label/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import View16 from '@carbon/icons-vue/es/view/16';
import FolderOpen16 from '@carbon/icons-vue/es/folder--open/16';
import Folders16 from '@carbon/icons-vue/es/folders/16';

const content = `
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr />
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>
`;

const actions = `
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    <View16 slot="icon" />
    <span slot="tooltip-content">View</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    <FolderOpen16 slot="icon" />
    <span slot="tooltip-content">Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    <Folders16 slot="icon" />
    <span slot="tooltip-content">Folders</span>
  </cds-icon-button>
  <cds-ai-label-action-button>View Literature</cds-ai-label-action-button>
`;

const meta: Meta<typeof CvDataTable> = {
  title: 'Components/DataTable/WithAILabel',
  component: CvDataTable,
};

export default meta;
type Story = StoryObj<typeof CvDataTable>;

export const _AILabelWithExpansion: Story = {
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
      CvTableExpandedRow,
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable with-row-ai-labels expandable batch-expansion>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With sorting</CvTableHeaderDescription>
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
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>
        </CvTableBody>
      </CvDataTable>
    `,
  }),
};

export const _AILabelWithRadioSelection: Story = {
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
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable radio with-row-ai-labels>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With selection</CvTableHeaderDescription>
        </template>

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
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5">
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

export const _AILabelWithSelection: Story = {
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
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable with-row-ai-labels>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With selection</CvTableHeaderDescription>
        </template>

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
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Active</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell><CvLink>Starting</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5">
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

export const AILabelWithSelectionAndExpansion: Story = {
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
      CvTableExpandedRow,
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable expandable batch-expansion with-row-ai-labels>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With selection</CvTableHeaderDescription>
        </template>

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
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>
          <CvTableRow selection-name="1">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
          <CvTableRow selection-name="2">
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
          <CvTableRow selection-name="3">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
          <CvTableRow selection-name="4">
            <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
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
          <CvTableRow selection-name="5">
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

export const _ColumnAILabelSort: Story = {
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
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable is-sortable>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With sorting</CvTableHeaderDescription>
        </template>

        <CvTableHead>
          <CvTableHeaderRow>
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>
              Attached groups
              <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            </CvTableHeaderCell>
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

export const _ColumnAILabelWithSelectionAndExpansion: Story = {
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
      CvTableExpandedRow,
      CvLink,
      View16,
      FolderOpen16,
      Folders16,
    },
    template: `
      <CvDataTable expandable batch-expansion>
        <template #title>
          <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        </template>
        <template #description>
          <CvTableHeaderDescription>With expansion</CvTableHeaderDescription>
        </template>

        <CvTableHead>
          <CvTableHeaderRow selection-name="header">
            <CvTableHeaderCell>Name</CvTableHeaderCell>
            <CvTableHeaderCell>Protocol</CvTableHeaderCell>
            <CvTableHeaderCell>Port</CvTableHeaderCell>
            <CvTableHeaderCell>Rule</CvTableHeaderCell>
            <CvTableHeaderCell>
              Attached groups
              <cds-ai-label alignment="bottom-left">${content}${actions}</cds-ai-label>
            </CvTableHeaderCell>
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
            <CvTableCell><CvLink disabled>Disabled</CvLink></CvTableCell>
          </CvTableRow>
          <CvTableExpandedRow>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </CvTableExpandedRow>
          <CvTableRow selection-name="1">
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
          <CvTableRow selection-name="2">
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
          <CvTableRow selection-name="3">
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
          <CvTableRow selection-name="4">
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
          <CvTableRow selection-name="5">
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
