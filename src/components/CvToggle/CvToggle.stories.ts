import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CvToggle, CvToggleSkeleton } from './index';

const sizeOptions = {
    'Medium size (default)': 'md',
    'Small size (sm)': 'sm',
};

const meta: Meta<typeof CvToggle> = {
    title: 'Components/Toggle',
    component: CvToggle,
    argTypes: {
        labelText: {
            control: 'text',
            description: 'The text that is read for the control',
        },
        labelA: {
            control: 'text',
            description: 'Specify the label for the "on" position',
        },
        labelB: {
            control: 'text',
            description: 'Specify the label for the "off" position',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether this control should be disabled',
        },
        hideLabel: {
            control: 'boolean',
            description: "If true, the side labels will be replaced by labelText",
        },
        readOnly: {
            control: 'boolean',
            description: 'Whether the toggle should be read-only',
        },
        size: {
            control: 'radio',
            options: sizeOptions,
            description: "Specify the size of the Toggle. Currently only supports 'sm' or 'md' (default)",
        },
    },
    args: {
        labelA: 'Off',
        labelB: 'On',
        labelText: 'Label',
        disabled: false,
        hideLabel: false,
        readOnly: false,
        size: 'md',
    },
};

export default meta;
type Story = StoryObj<typeof CvToggle>;

export const Default: Story = {
    render: (args) => ({
        components: { CvToggle },
        setup() {
            const checked = ref(true);
            return { args, checked };
        },
        template: '<CvToggle v-bind="args" v-model="checked" />',
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvToggleSkeleton },
        template: '<CvToggleSkeleton />',
    }),
};

export const SmallToggle: Story = {
    render: (args) => ({
        components: { CvToggle },
        setup() {
            const checked = ref(true);
            return { args, checked };
        },
        template: '<CvToggle v-bind="args" v-model="checked" size="sm" />',
    }),
    args: {
        labelA: 'Off',
        labelB: 'On',
        labelText: 'Label',
        size: 'sm',
    },
};

export const WithAccessibleLabels: Story = {
    render: () => ({
        components: { CvToggle },
        setup() {
            const toggle1 = ref(false);
            const toggle2 = ref(false);
            const toggle3 = ref(false);
            const toggle4 = ref(false);
            return { toggle1, toggle2, toggle3, toggle4 };
        },
        template: `
      <div style="display: flex; flex-direction: column; gap: 1.75rem;">
        <CvToggle v-model="toggle1" label-text="Label" />
        <CvToggle v-model="toggle2" label-text="Label" hide-label />
        
        <div>
          <div id="toggle-3-label" style="margin-bottom: 0.5rem;">
            Internal aria-label toggle
          </div>
          <CvToggle v-model="toggle3" aria-labelledby="toggle-3-label" />
        </div>
        
        <div>
          <label id="toggle-4-label" for="toggle-4" style="display: block; margin-bottom: 0.5rem;">
            External toggle label
          </label>
          <CvToggle v-model="toggle4" aria-labelledby="toggle-4-label" id="toggle-4" />
        </div>
      </div>
    `,
    }),
};
