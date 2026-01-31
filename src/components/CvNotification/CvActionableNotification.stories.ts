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

const args = {
    actionButtonLabel: 'Action',
    closeOnEscape: true,
    hasFocus: false,
    kind: 'error' as NotificationKind,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    hideCloseButton: false,
    inline: false,
    lowContrast: false,
    statusIconDescription: 'notification',
};

const argTypes: ArgTypes = {
    actionButtonLabel: {
        control: 'text',
        description: 'Pass in the action button label that will be rendered within the ActionableNotification.',
    },
    closeOnEscape: {
        control: 'boolean',
        description: 'Specify if pressing the escape key should close notifications.',
    },
    hasFocus: {
        control: 'boolean',
        description: 'Specify if focus should be moved to the component when the notification contains actions.',
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
    inline: {
        control: 'boolean',
        description: 'Specify whether the notification should be inline.',
    },
    lowContrast: {
        control: 'boolean',
        description: 'Specify whether you are using the low contrast variant of the ActionableNotification.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
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
