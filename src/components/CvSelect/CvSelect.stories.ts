import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite';
import { CvSelect, CvSelectItem, CvSelectItemGroup } from './index';

const args = {
    disabled: false,
    helperText: 'Optional helper text',
    hideLabel: false,
    inline: false,
    invalid: false,
    invalidText: 'Error message',
    labelText: 'Select an option',
    placeholder: '',
    size: 'md' as 'sm' | 'md' | 'lg',
    readOnly: false,
    warn: false,
    warnText: 'Warning message',
    modelValue: '',
    name: '',
};

const argTypes: ArgTypes = {
    disabled: {
        control: 'boolean',
        description: 'Specify if the select is disabled',
    },
    helperText: {
        control: 'text',
        description: 'Helper text',
    },
    hideLabel: {
        control: 'boolean',
        description: 'Specify if the label should be hidden',
    },
    inline: {
        control: 'boolean',
        description: 'Specify if the select is inline',
    },
    invalid: {
        control: 'boolean',
        description: 'Specify if the select is invalid',
    },
    invalidText: {
        control: 'text',
        description: 'Message to show if the select is invalid',
    },
    labelText: {
        control: 'text',
        description: 'Label text',
    },
    placeholder: {
        control: 'text',
        description: 'Placeholder text',
    },
    size: {
        control: 'radio',
        options: ['sm', 'md', 'lg'],
        description: 'Size of the select',
    },
    readOnly: {
        control: 'boolean',
        description: 'Specify if the select is read only',
    },
    warn: {
        control: 'boolean',
        description: 'Specify if the select is in warning state',
    },
    warnText: {
        control: 'text',
        description: 'Message to show if the select is in warning state',
    },
    modelValue: {
        control: 'text',
        description: 'Value of the selected option',
    },
    name: {
        control: 'text',
        description: 'Name of the select',
    },
};

const meta: Meta<typeof CvSelect> = {
    title: 'Components/Select',
    component: CvSelect,
    subcomponents: { CvSelectItem, CvSelectItemGroup },
    decorators: [(story) => ({
        components: { story },
        template: '<div style="width: 400px"><story /></div>'
    })],
};

export default meta;
type Story = StoryObj<typeof CvSelect>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvSelect, CvSelectItem, CvSelectItemGroup },
        setup() {
            return { args };
        },
        template: `
      <CvSelect v-bind="args">
        <CvSelectItem value=""></CvSelectItem>
        <CvSelectItem value="all">An example option that is really long to show what should be done to handle long text</CvSelectItem>
        <CvSelectItem value="cloudFoundry">Option 2</CvSelectItem>
        <CvSelectItem value="staging">Option 3</CvSelectItem>
        <CvSelectItem value="dea">Option 4</CvSelectItem>
      </CvSelect>
    `,
    }),
};

export const Inline: Story = {
    args: {
        ...args,
        inline: true,
    },
    argTypes,
    render: (args) => ({
        components: { CvSelect, CvSelectItem },
        setup() {
            return { args };
        },
        template: `
      <CvSelect v-bind="args">
        <CvSelectItem value=""></CvSelectItem>
        <CvSelectItem value="option-1">Option 1</CvSelectItem>
        <CvSelectItem value="option-2">Option 2</CvSelectItem>
      </CvSelect>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        setup() {
            import('@carbon/web-components/es/components/select/select-skeleton.js');
        },
        template: `<cds-select-skeleton></cds-select-skeleton>`,
    }),
};
