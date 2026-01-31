import type { Meta, StoryObj } from '@storybook/vue3';
import { CvButton, CvButtonSet, CvButtonSkeleton } from './index';

const kindOptions = {
    'Primary button (primary)': 'primary',
    'Secondary button (secondary)': 'secondary',
    'Tertiary button (tertiary)': 'tertiary',
    'Danger button (danger)': 'danger',
    'Danger tertiary button (danger-tertiary)': 'danger-tertiary',
    'Danger ghost button (danger-ghost)': 'danger-ghost',
    'Ghost button (ghost)': 'ghost',
};

const sizeOptions = {
    'Extra small size (xs)': 'xs',
    'Small size (sm)': 'sm',
    'Medium size (md)': 'md',
    'Large size (lg)': 'lg',
    'XL size (xl)': 'xl',
    '2XL size (2xl)': '2xl',
};

const typeOptions = {
    Button: 'button',
    Reset: 'reset',
    Submit: 'submit',
};

const tooltipAlignmentOptions = {
    Start: 'start',
    Center: 'center',
    End: 'end',
};

const tooltipPositionOptions = {
    Top: 'top',
    Right: 'right',
    Bottom: 'bottom',
    Left: 'left',
};

const meta: Meta<typeof CvButton> = {
    title: 'Components/Button',
    component: CvButton,
    argTypes: {
        kind: {
            control: 'select',
            options: kindOptions,
            description: 'Specify the kind of Button you want to create',
        },
        size: {
            control: 'select',
            options: sizeOptions,
            description: 'Specify the size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Specify whether the Button should be disabled',
        },
        href: {
            control: 'text',
            description: 'Optionally specify an href for your Button to become an anchor element',
        },
        type: {
            control: 'radio',
            options: typeOptions,
            description: 'Optional prop to specify the type of the Button',
        },
        isExpressive: {
            control: 'boolean',
            description: 'Specify whether the Button is expressive',
        },
        isSelected: {
            control: 'boolean',
            description: 'Specify whether the Button is currently selected (only applies to Ghost variant)',
        },
        tooltipText: {
            control: 'text',
            description: 'Specify the text to be rendered in the tooltip',
        },
        tooltipPosition: {
            control: 'radio',
            options: tooltipPositionOptions,
            description: 'Specify the direction of the tooltip',
        },
        tooltipAlignment: {
            control: 'radio',
            options: tooltipAlignmentOptions,
            description: 'Specify the alignment of the tooltip',
        },
        dangerDescription: {
            control: 'text',
            description: 'Specify the message read by screen readers for the danger button variant',
        },
    },
    args: {
        kind: 'primary',
        size: 'lg',
        disabled: false,
        type: 'button',
        isExpressive: false,
        isSelected: false,
        tooltipPosition: 'top',
        tooltipAlignment: 'center',
    },
};

export default meta;
type Story = StoryObj<typeof CvButton>;

// Stories sorted alphabetically (with Default/Overview first)
export const Default: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: '<CvButton v-bind="args">Button</CvButton>',
    }),
};

export const Danger: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <CvButton v-bind="args" kind="danger">Danger</CvButton>
        <CvButton v-bind="args" kind="danger-tertiary">Danger tertiary</CvButton>
        <CvButton v-bind="args" kind="danger-ghost">Danger ghost</CvButton>
      </div>
    `,
    }),
};

export const Ghost: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: '<CvButton v-bind="args" kind="ghost">Button</CvButton>',
    }),
};

export const IconButton: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: `
      <CvButton v-bind="args" tooltip-text="Icon Description">
        <template #icon>
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            slot="icon"
          >
            <path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
          </svg>
        </template>
      </CvButton>
    `,
    }),
};

export const Secondary: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: '<CvButton v-bind="args" kind="secondary">Button</CvButton>',
    }),
};

export const SetOfButtons: Story = {
    render: (args) => ({
        components: { CvButton, CvButtonSet },
        setup() {
            return { args };
        },
        template: `
      <CvButtonSet>
        <CvButton v-bind="args" kind="secondary">Secondary button</CvButton>
        <CvButton v-bind="args" kind="primary">Primary button</CvButton>
      </CvButtonSet>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvButtonSkeleton },
        template: `
      <div style="display: flex; gap: 1rem;">
        <CvButtonSkeleton />
        <CvButtonSkeleton size="sm" />
      </div>
    `,
    }),
};

export const StackedButtons: Story = {
    render: (args) => ({
        components: { CvButton, CvButtonSet },
        setup() {
            return { args };
        },
        template: `
      <CvButtonSet stacked>
        <CvButton v-bind="args" kind="secondary">Secondary button</CvButton>
        <CvButton v-bind="args" kind="primary">Primary button</CvButton>
      </CvButtonSet>
    `,
    }),
};

export const Tertiary: Story = {
    render: (args) => ({
        components: { CvButton },
        setup() {
            return { args };
        },
        template: '<CvButton v-bind="args" kind="tertiary">Button</CvButton>',
    }),
};
