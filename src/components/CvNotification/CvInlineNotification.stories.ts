import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
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

const args = {
    kind: 'info' as NotificationKind,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    hideCloseButton: false,
    lowContrast: false,
    statusIconDescription: 'notification',
};

const argTypes: ArgTypes = {
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
        description: 'Specify whether you are using the low contrast variant of the InlineNotification.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
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
        kind="info"
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
