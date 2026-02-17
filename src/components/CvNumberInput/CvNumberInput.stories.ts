import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite';
import { CvNumberInput } from './index';

const args = {
    allowEmpty: false,
    decrementButtonDescription: 'decrease number input',
    incrementButtonDescription: 'increase number input',
    disabled: false,
    helperText: 'Optional helper text',
    hideLabel: false,
    hideSteppers: false,
    invalid: false,
    invalidText: 'Number is not valid',
    label: 'number-input label',
    readOnly: false,
    modelValue: '50',
    warn: false,
    warnText: 'Warning text',
    min: 0,
    max: 100,
    step: 1,
    size: 'md' as 'sm' | 'md' | 'lg',
};

const argTypes: ArgTypes = {
    allowEmpty: {
        control: 'boolean',
        description: 'true to allow empty string.',
    },
    decrementButtonDescription: {
        control: 'text',
        description: 'Decrement button assistive description (decrement-button-assistive-text)',
    },
    incrementButtonDescription: {
        control: 'text',
        description: 'Increment button assistive description (increment-button-assistive-text)',
    },
    disabled: {
        control: 'boolean',
        description: 'Specify if the control should be disabled, or not.',
    },
    helperText: {
        control: 'text',
        description: 'Provide text that is used alongside the control label for additional help.',
    },
    hideLabel: {
        control: 'boolean',
        description: 'Specify whether you want the underlying label to be visually hidden.',
    },
    hideSteppers: {
        control: 'boolean',
        description: 'Specify whether you want the steppers to be hidden.',
    },
    invalid: {
        control: 'boolean',
        description: 'Specify if the currently value is invalid.',
    },
    invalidText: {
        control: 'text',
        description: 'Message which is displayed if the value is invalid.',
    },
    label: {
        control: 'text',
        description: 'Generic label that will be used as the textual representation of what this field is for.',
    },
    readOnly: {
        control: 'boolean',
        description: 'Specify if the component should be read-only.',
    },
    modelValue: {
        control: 'text',
        description: 'Specify the value of the input.',
    },
    warn: {
        control: 'boolean',
        description: 'Specify whether the control is currently in warning state.',
    },
    warnText: {
        control: 'text',
        description: 'Provide the text that is displayed when the control is in warning state.',
    },
    min: {
        control: 'number',
        description: 'The minimum value.',
    },
    max: {
        control: 'number',
        description: 'The maximum value.',
    },
    step: {
        control: 'number',
        description: 'Specify how much the values should increase/decrease upon clicking on up/down button.',
    },
    size: {
        control: 'radio',
        options: ['sm', 'md', 'lg'],
        description: 'Specify the size of the Number Input.',
    },
};

const meta: Meta<typeof CvNumberInput> = {
    title: 'Components/Number Input',
    component: CvNumberInput,
};

export default meta;
type Story = StoryObj<typeof CvNumberInput>;

export const Default: Story = {
    render: () => ({
        components: { CvNumberInput },
        template: `
      <CvNumberInput
        value="50"
        min="0"
        max="100"
        step="1"
        label="number-input label"
        helper-text="Optional helper text"
      />
    `,
    }),
};

export const Playground: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvNumberInput },
        setup() {
            return { args };
        },
        template: '<CvNumberInput v-bind="args" />',
    }),
};

export const Skeleton: Story = {
    render: () => ({
        setup() {
            import('@carbon/web-components/es/components/number-input/number-input-skeleton.js');
        },
        template: `<cds-number-input-skeleton></cds-number-input-skeleton>`,
    }),
};
