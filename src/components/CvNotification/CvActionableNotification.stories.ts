import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvActionableNotification } from './index';
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
    alertdialog: 'Alert Dialog',
    alert: 'Alert',
    status: 'Status',
};
const roleOptions = Object.keys(roleLabels);

const args = {
    actionButtonLabel: 'Action',
    caption: '',
    closeOnEscape: true,
    hasFocus: false,
    hideCloseButton: false,
    inline: false,
    kind: 'error' as NotificationKind,
    lowContrast: false,
    role: 'alertdialog',
    subtitle: 'Subtitle text goes here',
    statusIconDescription: 'notification',
    title: 'Notification title',
};

const argTypes: ArgTypes = {
    actionButtonLabel: {
        control: 'text',
        description: 'Pass in the action button label that will be rendered within the ActionableNotification.',
    },
    caption: {
        control: 'text',
        description: 'Specify the caption.',
    },
    closeOnEscape: {
        control: 'boolean',
        description: 'Specify if pressing the escape key should close notifications.',
    },
    hasFocus: {
        control: 'boolean',
        description: 'Specify if focus should be moved to the component when the notification contains actions.',
    },
    hideCloseButton: {
        control: 'boolean',
        description: 'Specify the close button should be disabled, or not.',
    },
    inline: {
        control: 'boolean',
        description: 'Specify whether the notification should be inline.',
    },
    kind: {
        control: { type: 'select', labels: kindLabels },
        options: kindOptions,
        description: 'Specify what state the notification represents.',
    },
    lowContrast: {
        control: 'boolean',
        description: 'Specify whether you are using the low contrast variant of the ActionableNotification.',
    },
    role: {
        control: { type: 'select', labels: roleLabels },
        options: roleOptions,
        description: 'By default, this value is "alertdialog". You can also provide an alternate role if it makes sense from an accessibility perspective.',
    },
    subtitle: {
        control: 'text',
        description: 'Specify the subtitle.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
    },
    title: {
        control: 'text',
        description: 'Specify the title.',
    },
};

const meta: Meta<typeof CvActionableNotification> = {
    title: 'Components/Notifications/Actionable',
    component: CvActionableNotification,
};

export default meta;
type Story = StoryObj<typeof CvActionableNotification>;

export const Default: Story = {
    render: () => ({
        components: { CvActionableNotification },
        template: `
      <CvActionableNotification
        kind="error"
        title="Notification title"
        subtitle="Subtitle text goes here"
      >
        <template #action>
          <cds-actionable-notification-button slot="action">Action</cds-actionable-notification-button>
        </template>
      </CvActionableNotification>
    `,
    }),
};

export const Playground: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvActionableNotification },
        setup() {
            return { args };
        },
        template: `
      <CvActionableNotification v-bind="args">
        <template #action>
          <cds-actionable-notification-button slot="action">{{ args.actionButtonLabel }}</cds-actionable-notification-button>
        </template>
      </CvActionableNotification>
    `,
    }),
};
