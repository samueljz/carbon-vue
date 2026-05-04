import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvTableSkeleton } from './index';

const headers = [
    'Name',
    'Protocol',
    'Port',
    'Rule',
    'Attached groups',
    'Status',
];

const args = {
    compact: false,
    columnCount: 5,
    rowCount: 5,
    showHeader: true,
    showToolbar: true,
    zebra: false,
};

const argTypes: ArgTypes = {
    compact: {
        control: 'boolean',
        description: 'Compact',
    },
    columnCount: {
        control: 'number',
        description: 'Column count',
    },
    rowCount: {
        control: 'number',
        description: 'Row count',
    },
    showHeader: {
        control: 'boolean',
        description: 'Show header',
    },
    showToolbar: {
        control: 'boolean',
        description: 'Show toolbar',
    },
    zebra: {
        control: 'boolean',
        description: 'Use zebra styles',
    },
};

const meta: Meta<typeof CvTableSkeleton> = {
    title: 'Components/DataTable/Skeleton',
    component: CvTableSkeleton,
};

export default meta;
type Story = StoryObj<typeof CvTableSkeleton>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvTableSkeleton },
        setup() {
            const dynamicHeaders = headers.slice(0, args.columnCount);
            return { args, dynamicHeaders };
        },
        template: `
      <CvTableSkeleton
        :headers="dynamicHeaders"
        :compact="args.compact"
        :column-count="args.columnCount"
        :row-count="args.rowCount"
        :show-header="args.showHeader"
        :show-toolbar="args.showToolbar"
        :zebra="args.zebra"
      />
    `,
    }),
};
