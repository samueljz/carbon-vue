import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { CvButton, CvButtonSet, CvButtonSkeleton } from './index';
import { Add16 } from '@carbon/icons-vue';

const kindLabels = {
    primary: 'Primary button (primary)',
    secondary: 'Secondary button (secondary)',
    tertiary: 'Tertiary button (tertiary)',
    danger: 'Danger button (danger)',
    'danger-tertiary': 'Danger tertiary button (danger-tertiary)',
    'danger-ghost': 'Danger ghost button (danger-ghost)',
    ghost: 'Ghost button (ghost)',
};
const kindOptions = Object.keys(kindLabels);

const sizeLabels = {
    xs: 'Extra small size (xs)',
    sm: 'Small size (sm)',
    md: 'Medium size (md)',
    lg: 'Large size (lg)',
    xl: 'XL size (xl)',
    '2xl': '2XL size (2xl)',
};
const sizeOptions = Object.keys(sizeLabels);

const typeLabels = {
    button: 'Button',
    reset: 'Reset',
    submit: 'Submit',
};
const typeOptions = Object.keys(typeLabels);

const tooltipAlignmentLabels = {
    start: 'Start',
    center: 'Center',
    end: 'End',
};
const tooltipAlignmentOptions = Object.keys(tooltipAlignmentLabels);

const tooltipPositionLabels = {
    top: 'Top',
    right: 'Right',
    bottom: 'Bottom',
    left: 'Left',
};
const tooltipPositionOptions = Object.keys(tooltipPositionLabels);

const meta: Meta<typeof CvButton> = {
    title: 'Components/Button',
    component: CvButton,
    argTypes: {
        kind: {
            control: { type: 'select', labels: kindLabels },
            options: kindOptions,
            description: 'Specify the kind of Button you want to create',
        },
        size: {
            control: { type: 'select', labels: sizeLabels },
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
            control: { type: 'radio', labels: typeLabels },
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
            control: { type: 'radio', labels: tooltipPositionLabels },
            options: tooltipPositionOptions,
            description: 'Specify the direction of the tooltip',
        },
        tooltipAlignment: {
            control: { type: 'radio', labels: tooltipAlignmentLabels },
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
        components: { CvButton, Add16 },
        setup() {
            return { args };
        },
        template: `
      <CvButton v-bind="args" tooltip-text="Icon Description">
        <template #icon>
          <Add16 />
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
