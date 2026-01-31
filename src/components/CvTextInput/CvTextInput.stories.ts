import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { CvTextInput, CvTextInputSkeleton } from './index';

const sizeLabels = {
    sm: 'Small (sm)',
    md: 'Medium (md)',
    lg: 'Large (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const typeLabels = {
    text: 'Text',
    email: 'Email',
    password: 'Password',
    tel: 'Tel',
    url: 'URL',
};
const typeOptions = Object.keys(typeLabels);

const meta: Meta<typeof CvTextInput> = {
    title: 'Components/Text Input',
    component: CvTextInput,
    argTypes: {
        label: {
            control: 'text',
            description: 'Specify the label text',
        },
        helperText: {
            control: 'text',
            description: 'Specify the helper text',
        },
        placeholder: {
            control: 'text',
            description: 'Specify the placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Specify whether the input is disabled',
        },
        readOnly: {
            control: 'boolean',
            description: 'Specify whether the input is read-only',
        },
        invalid: {
            control: 'boolean',
            description: 'Specify whether the input is invalid',
        },
        invalidText: {
            control: 'text',
            description: 'Specify the invalid text',
        },
        warn: {
            control: 'boolean',
            description: 'Specify whether to show a warning',
        },
        warnText: {
            control: 'text',
            description: 'Specify the warning text',
        },
        size: {
            control: { type: 'select', labels: sizeLabels },
            options: sizeOptions,
            description: 'Specify the input size',
        },
        type: {
            control: { type: 'select', labels: typeLabels },
            options: typeOptions,
            description: 'Specify the input type',
        },
        hideLabel: {
            control: 'boolean',
            description: 'Specify whether to hide the label',
        },
        enableCounter: {
            control: 'boolean',
            description: 'Specify whether to show the character count',
        },
        maxLength: {
            control: 'number',
            description: 'Specify the max length',
        },
    },
    args: {
        label: 'Label text',
        placeholder: 'Placeholder text',
        helperText: 'Helper text',
        disabled: false,
        readOnly: false,
        invalid: false,
        warn: false,
        size: 'md',
        type: 'text',
        hideLabel: false,
        enableCounter: false,
    },
};

export default meta;
type Story = StoryObj<typeof CvTextInput>;

export const Default: Story = {
    render: (args) => ({
        components: { CvTextInput },
        setup() {
            const value = ref('');
            return { args, value };
        },
        template: `
      <div style="width: 300px;">
        <CvTextInput v-bind="args" v-model="value" />
      </div>
    `,
    }),
};

export const ReadOnly: Story = {
    render: (args) => ({
        components: { CvTextInput },
        setup() {
            const value = ref("This is read only, you can't type more.");
            return { args, value };
        },
        template: `
      <div style="width: 300px;">
        <CvTextInput 
          v-bind="args" 
          v-model="value" 
          label="Read-only input"
          read-only
        />
      </div>
    `,
    }),
    parameters: {
        controls: {
            exclude: [
                'readOnly',
                'invalid',
                'invalidText',
                'warn',
                'warnText',
                'enableCounter',
                'disabled',
                'maxLength',
            ],
        },
    },
};

export const Skeleton: Story = {
    render: ({ hideLabel }) => ({
        components: { CvTextInputSkeleton },
        setup() {
            return { hideLabel };
        },
        template: `<CvTextInputSkeleton :hide-label="hideLabel" />`,
    }),
    args: {
        hideLabel: false,
    },
    argTypes: {
        hideLabel: {
            control: 'boolean',
            description: 'Hide label (hide-label)',
        },
    },
};

export const WithLayer: Story = {
    render: (args) => ({
        components: { CvTextInput },
        setup() {
            const value = ref('');
            return { args, value };
        },
        template: `
      <sb-template-layers>
        <div style="width: 300px;">
          <CvTextInput v-bind="args" v-model="value" />
        </div>
      </sb-template-layers>
    `,
    }),
};
