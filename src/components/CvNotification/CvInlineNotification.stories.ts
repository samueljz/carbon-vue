import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite';
import { CvInlineNotification } from './index';
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
    hideCloseButton: false,
    kind: 'info' as NotificationKind,
    lowContrast: false,
    role: 'status',
    statusIconDescription: 'notification',
    subtitle: 'Subtitle text goes here',
    title: 'Notification title',
};

const argTypes: ArgTypes = {
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
        description: 'Specify whether you are using the low contrast variant of the InlineNotification.',
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
    title: {
        control: 'text',
        description: 'Specify the title.',
    },
};

const meta: Meta<typeof CvInlineNotification> = {
    title: 'Components/Notifications/Inline',
    component: CvInlineNotification,
};

export default meta;
type Story = StoryObj<typeof CvInlineNotification>;

export const Default: Story = {
    render: () => ({
        components: { CvInlineNotification },
        template: `
      <CvInlineNotification
        kind="error"
        title="Notification title"
        subtitle="Subtitle text goes here"
      />
    `,
    }),
};

export const Playground: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvInlineNotification },
        setup() {
            return { args };
        },
        template: '<CvInlineNotification v-bind="args" />',
    }),
};
