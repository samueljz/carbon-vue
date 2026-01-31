import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { CvCheckbox, CvCheckboxGroup, CvCheckboxSkeleton } from './index';

const orientationLabels = {
    vertical: 'Vertical',
    horizontal: 'Horizontal',
};
const orientationOptions = Object.keys(orientationLabels);

const meta: Meta<typeof CvCheckboxGroup> = {
    title: 'Components/Checkbox',
    component: CvCheckboxGroup,
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Specify whether the checkbox should be disabled.',
        },
        helperText: {
            control: 'text',
            description: 'Provide text for the form group for additional help.',
        },
        invalid: {
            control: 'boolean',
            description: 'Specify whether the form group is currently invalid.',
        },
        invalidText: {
            control: 'text',
            description: 'Provide the text that is displayed when the form group is in an invalid state.',
        },
        legendText: {
            control: 'text',
            description: 'Provide the text to be rendered inside of the fieldset.',
        },
        orientation: {
            control: { type: 'select', labels: orientationLabels },
            options: orientationOptions,
            description: 'Provide how checkbox should be displayed.',
        },
        readOnly: {
            control: 'boolean',
            description: 'Specify whether the checkbox group is read-only.',
        },
        warn: {
            control: 'boolean',
            description: 'Specify whether the form group is currently in warning state.',
        },
        warnText: {
            control: 'text',
            description: 'Provide the text that is displayed when the form group is in warning state.',
        },
    },
    args: {
        disabled: false,
        helperText: 'Helper text goes here',
        invalid: false,
        invalidText: 'Invalid message goes here',
        legendText: 'Group label',
        readOnly: false,
        warn: false,
        warnText: 'Warn message goes here',
        orientation: 'vertical',
    },
};

export default meta;
type Story = StoryObj<typeof CvCheckboxGroup>;

export const Default: Story = {
    render: (args) => ({
        components: { CvCheckbox, CvCheckboxGroup },
        setup() {
            return { args };
        },
        template: `
      <CvCheckboxGroup v-bind="args">
        <CvCheckbox>Checkbox label</CvCheckbox>
        <CvCheckbox>Checkbox label</CvCheckbox>
      </CvCheckboxGroup>
    `,
    }),
};

export const Horizontal: Story = {
    render: (args) => ({
        components: { CvCheckbox, CvCheckboxGroup },
        setup() {
            return { args };
        },
        template: `
      <CvCheckboxGroup v-bind="args" orientation="horizontal">
        <CvCheckbox>Checkbox label</CvCheckbox>
        <CvCheckbox>Checkbox label</CvCheckbox>
      </CvCheckboxGroup>
    `,
    }),
};

export const Single: Story = {
    render: () => ({
        components: { CvCheckbox },
        template: `
      <div>
        <CvCheckbox helper-text="Helper text goes here">Checkbox label</CvCheckbox>
        <br /><br />
        <CvCheckbox invalid invalid-text="Invalid test goes here">Checkbox label</CvCheckbox>
        <br /><br />
        <CvCheckbox warn warn-text="Warning test goes here">Checkbox label</CvCheckbox>
        <br /><br />
        <CvCheckbox :read-only="true">Checkbox label</CvCheckbox>
      </div>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvCheckboxSkeleton },
        template: `
      <fieldset class="cds--fieldset">
        <CvCheckboxSkeleton />
      </fieldset>
    `,
    }),
};
