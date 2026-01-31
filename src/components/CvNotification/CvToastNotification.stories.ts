import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite';
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

const roleLabels = {
    alert: 'Alert',
    log: 'Log',
    status: 'Status',
};
const roleOptions = Object.keys(roleLabels);

const args = {
    caption: '00:00:00 AM',
    hideCloseButton: false,
    kind: 'info' as NotificationKind,
    lowContrast: false,
    role: 'status',
    statusIconDescription: 'notification',
    subtitle: 'Subtitle text goes here',
    timeout: 0,
    title: 'Notification title',
};

const argTypes: ArgTypes = {
    caption: {
        control: 'text',
        description: 'Specify the caption.',
    },
    hideCloseButton: {
        control: 'boolean',
        description: 'Specify the close button should be disabled, or not.',
    },
    kind: {
        control: { type: 'select', labels: kindLabels },
        options: kindOptions,
        description: 'Specify what state the notification represents.',
    },
    lowContrast: {
        control: 'boolean',
        description: 'Specify whether you are using the low contrast variant of the Toast Notification.',
    },
    role: {
        control: { type: 'select', labels: roleLabels },
        options: roleOptions,
        description: 'By default, this value is "status". You can also provide an alternate role if it makes sense from the accessibility-side.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
    },
    subtitle: {
        control: 'text',
        description: 'Specify the subtitle.',
    },
    timeout: {
        control: 'number',
        description: 'Specify an optional duration the notification should be closed in.',
    },
    title: {
        control: 'text',
        description: 'Specify the title.',
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
        kind="error"
        title="Notification title"
        subtitle="Subtitle text goes here"
        caption="00:00:00 AM"
        role="status"
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
