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
    CvTableBatchActions,
    CvTableToolbarContent,
    CvTableToolbarSearch,
} from './index';
import { ref, computed } from 'vue';
// @ts-ignore
import { CvButton, CvLink } from '../../index';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';
import TrashCan from '@carbon/icons-vue/es/trash-can/16';
import Save from '@carbon/icons-vue/es/save/16';
import Download16 from '@carbon/icons-vue/es/download/16';
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
    isSelectable: true,
    locale: 'en',
    size: TABLE_SIZE.LG,
    useStaticWidth: false,
    useZebraStyles: false,
    hasBatchActions: true,
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
    hasBatchActions: {
        control: 'boolean',
        description: 'Has batch actions',
    },
};

const meta: Meta<typeof CvDataTable> = {
    title: 'Components/DataTable/Batch Actions',
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
            CvTableBatchActions,
            CvTableToolbarContent,
            CvTableToolbarSearch,
            CvButton,
            CvLink,
            TrashCan,
            Save,
            Download16,
            Settings16,
        },
        setup() {
            const selectedRows = ref<string[]>([]);
            const handleRowSelected = (e: CustomEvent) => {
              if (e.detail.selected) {
                selectedRows.value.push(e.detail.name);
              } else {
                selectedRows.value = selectedRows.value.filter(n => n !== e.detail.name);
              }
            };
            const handleAllSelected = (e: CustomEvent) => {
              if (e.detail.selected) {
                 selectedRows.value = ['0', '1', '2', '3', '4', '5'];
              } else {
                 selectedRows.value = [];
              }
            };
            const handleCancel = () => {
              selectedRows.value = [];
            };
            const hasSelections = computed(() => selectedRows.value.length > 0);
            return { args, selectedRows, hasSelections, handleRowSelected, handleAllSelected, handleCancel };
        },
        template: `
      <CvDataTable v-bind="args" @row-selected="handleRowSelected" @change-selection-all="handleAllSelected">
        <CvTableHeaderTitle>DataTable</CvTableHeaderTitle>
        <CvTableHeaderDescription>With batch actions.</CvTableHeaderDescription>

        <CvTableToolbar>
            <CvTableBatchActions :active="hasSelections ? 'true' : undefined" :should-show-batch-actions="hasSelections ? 'true' : undefined" :selected-rows-count="selectedRows.length" total-rows-count="6" @cancel-clicked="handleCancel">
            <CvButton data-context="data-table">
              Delete
              <template #icon>
                <TrashCan class="cds--btn__icon" />
              </template>
            </CvButton>
            <CvButton data-context="data-table">
              Save
              <template #icon>
                <Save class="cds--btn__icon" />
              </template>
            </CvButton>
            <CvButton href="javascript:void 0" download="table-data.json" data-context="data-table">
              Download
              <template #icon>
                <Download16 class="cds--btn__icon" />
              </template>
            </CvButton>
          </CvTableBatchActions>
          <CvTableToolbarContent :has-batch-actions="hasSelections">
            <CvTableToolbarSearch placeholder="Filter table" />
            <cds-overflow-menu toolbar-action>
              <Settings16 slot="icon" class="cds--overflow-menu__icon" />
              <span slot="tooltip-content">Settings</span>
              <cds-overflow-menu-body>
                <cds-overflow-menu-item @click="() => alert('Alert 1')">Action 1</cds-overflow-menu-item>
                <cds-overflow-menu-item @click="() => alert('Alert 2')">Action 2</cds-overflow-menu-item>
                <cds-overflow-menu-item @click="() => alert('Alert 3')">Action 3</cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
            <CvButton>Add new</CvButton>
          </CvTableToolbarContent>
        </CvTableToolbar>

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
          <CvTableRow selection-name="0" :selected="selectedRows.includes('0')">
            <CvTableCell>Load Balancer 3</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Kevin's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="1" :selected="selectedRows.includes('1')">
            <CvTableCell>Load Balancer 1</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Maureen's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="2" :selected="selectedRows.includes('2')">
            <CvTableCell>Load Balancer 2</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>80</CvTableCell>
            <CvTableCell>DNS delegation</CvTableCell>
            <CvTableCell>Andrew's VM Groups</CvTableCell>
            <CvTableCell>Active</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="3" :selected="selectedRows.includes('3')">
            <CvTableCell>Load Balancer 6</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>3000</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Marc's VM Groups</CvTableCell>
            <CvTableCell>Disabled</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="4" :selected="selectedRows.includes('4')">
            <CvTableCell>Load Balancer 4</CvTableCell>
            <CvTableCell>HTTP</CvTableCell>
            <CvTableCell>443</CvTableCell>
            <CvTableCell>Round robin</CvTableCell>
            <CvTableCell>Mel's VM Groups</CvTableCell>
            <CvTableCell>Starting</CvTableCell>
          </CvTableRow>
          <CvTableRow selection-name="5" :selected="selectedRows.includes('5')">
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
