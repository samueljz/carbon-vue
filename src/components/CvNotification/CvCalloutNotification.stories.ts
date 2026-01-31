import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvCalloutNotification } from './index';
import type { NotificationKind } from '@/types';

const kindLabels = {
    info: 'Info',
    warning: 'Warning',
};
const kindOptions = Object.keys(kindLabels);

const args = {
    kind: 'info' as NotificationKind,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    lowContrast: false,
    statusIconDescription: 'notification',
    titleId: '',
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
    lowContrast: {
        control: 'boolean',
        description: 'Specify whether you are using the low contrast variant of the Callout.',
    },
    statusIconDescription: {
        control: 'text',
        description: 'Provide a description for "status" icon that can be read by screen readers.',
    },
    titleId: {
        control: 'text',
        description: 'Specify the id for the title element.',
    },
};

const meta: Meta<typeof CvCalloutNotification> = {
    title: 'Components/Notifications/Callout',
    component: CvCalloutNotification,
};

export default meta;
type Story = StoryObj<typeof CvCalloutNotification>;

export const Default: Story = {
    render: () => ({
        components: { CvCalloutNotification },
        template: `
      <CvCalloutNotification
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
        components: { CvCalloutNotification },
        setup() {
            return { args };
        },
        template: '<CvCalloutNotification v-bind="args" />',
    }),
};

export const WithInteractiveElements: Story = {
    render: () => ({
        components: { CvCalloutNotification },
        template: `
      <CvCalloutNotification
        kind="info"
        title="Notification title"
        title-id="callout-title-interactive"
        :low-contrast="true"
      >
        <div class="cds--actionable-notification__subtitle">
          Additional text can describe the notification, or a link to
          <a href="#" aria-describedby="callout-title-interactive">learn more</a>
        </div>
      </CvCalloutNotification>
    `,
    }),
};
