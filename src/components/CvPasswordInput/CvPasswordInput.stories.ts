import type { Meta, StoryObj } from '@storybook/vue3';
import { CvPasswordInput } from './index';


const sizes = {
    'Small size (sm)': 'sm',
    'Medium size (md)': 'md',
    'Large size (lg)': 'lg',
};

const args = {
    disabled: false,
    helperText: 'Optional help text',
    hideLabel: false,
    hidePasswordLabel: 'Hide password',
    inline: false,
    invalid: false,
    invalidText: 'Error message goes here',
    labelText: 'Text input label',
    placeholder: 'Placeholder text',
    readonly: false,
    showPasswordLabel: 'Show password',
    size: 'md',
    tooltipAlignment: 'end',
    tooltipDirection: 'bottom',
    type: 'password',
    value: '',
    warn: false,
    warnText:
        'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

const argTypes = {
    disabled: {
        control: 'boolean',
        description: 'Specify whether the control is disabled',
    },
    helperText: {
        control: 'text',
        description:
            'Provide text that is used alongside the control label for additional help',
    },
    hideLabel: {
        control: 'boolean',
        description:
            'Specify whether or not the underlying label is visually hidden',
    },
    hidePasswordLabel: {
        control: 'text',
        description: '"Hide password" tooltip text on password visibility toggle',
    },
    inline: {
        control: 'boolean',
        description: 'true to use the inline version',
    },
    invalid: {
        control: 'boolean',
        description: 'Specify whether the control is currently invalid',
    },
    invalidText: {
        control: 'text',
        description:
            'Provide the text that is displayed when the control is in an invalid state',
    },
    labelText: {
        control: 'text',
        description:
            'Provide the text that will be read by a screen reader when visiting this control',
    },
    placeholder: {
        control: 'text',
        description: 'Placeholder (placeholder)',
    },
    readonly: {
        control: 'boolean',
        description: 'Read only (readonly)',
    },
    showPasswordLabel: {
        control: 'text',
        description: '"Hide password" tooltip text on password visibility toggle',
    },
    size: {
        control: 'select',
        description: 'Size (size)',
        options: sizes,
    },
    tooltipAlignment: {
        options: ['start', 'center', 'end'],
        control: { type: 'radio' },
        description:
            'Specify the alignment of the tooltip to the icon-only button. Can be one of: `start`, `center`, or `end`.',
    },
    tooltipDirection: {
        options: ['top', 'right', 'bottom', 'left'],
        control: { type: 'radio' },
        description:
            'Specify the direction of the tooltip for the icon-only button. Can be either `top`, `right`, `bottom`, or `left`',
    },
    type: {
        options: ['password', 'text'],
        control: { type: 'radio' },
        description: 'The input type, either `password` or `text`',
    },
    value: {
        control: 'text',
        description: 'Provide the current value of the `<input>`',
    },
    warn: {
        control: 'boolean',
        description: 'Specify whether the control is currently in warning state',
    },
    warnText: {
        control: 'text',
        description:
            'Provide the text that is displayed when the control is in warning state',
    },
    onInput: {},
    onToggle: {},
};

const meta: Meta<typeof CvPasswordInput> = {
    title: 'Components/Password Input',
    component: CvPasswordInput,
};

export default meta;
type Story = StoryObj<typeof CvPasswordInput>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvPasswordInput },
        setup() {
            return {
                args,
                onInput: () => { },
                onToggle: () => { },
            };
        },
        template: `
      <CvPasswordInput
        v-bind="args"
        @input="onInput"
        @cds-password-input-toggle="onToggle"
      />
    `,
    }),
};
