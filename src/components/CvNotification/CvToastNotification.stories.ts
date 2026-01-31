import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvToastNotification } from './index';
import type { NotificationKind } from '@/types';

const kindLabels = {
    error: 'Error',
    info: 'Info',
    'info-square': 'Info Square',
    success: 'Success',
    warning: 'Warning',
    'warning-alt': 'Warning Alt',
};
const kindOptions = Object.keys(kindLabels);

const args = {
    caption: '00:00:00 AM',
    kind: 'info' as NotificationKind,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    hideCloseButton: false,
    lowContrast: false,
    statusIconDescription: 'notification',
    timeout: 0,
};

const argTypes: ArgTypes = {
    caption: {
        control: 'text',
        description: 'Specify the caption.',
    },
    kind: {
        control: { type: 'select', labels: kindLabels },
        options: kindOptions,
        description: 'Specify what state the notification represents.',
    },
    title: {
        control: 'text',
        description: 'Specify the title.',
    },
    subtitle: {
        control: 'text',
        description: 'Specify the subtitle.',
    },
    hideCloseButton: {
        control: 'boolean',
        description: 'Specify the close button should be disabled, or not.',
    },
    lowContrast: {
        control: 'boolean',
        description: 'Specify whether you are using the low contrast variant of the Toast Notification.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
    },
    timeout: {
        control: 'number',
        description: 'Specify an optional duration the notification should be closed in.',
    },
};

const meta: Meta<typeof CvToastNotification> = {
    title: 'Components/Notifications/Toast',
    component: CvToastNotification,
};

export default meta;
type Story = StoryObj<typeof CvToastNotification>;

export const Default: Story = {
    render: () => ({
        components: { CvToastNotification },
        template: `
      <CvToastNotification
        kind="info"
        title="Notification title"
        subtitle="Subtitle text goes here"
        caption="00:00:00 AM"
        :timeout="0"
      />
    `,
    }),
};

export const Playground: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvToastNotification },
        setup() {
            return { args };
        },
        template: '<CvToastNotification v-bind="args" />',
    }),
};
