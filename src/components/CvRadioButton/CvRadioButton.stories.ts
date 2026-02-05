import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvRadioButton, CvRadioButtonGroup } from './index';
import '@carbon/web-components/es/components/radio-button/radio-button-skeleton.js';

const args = {
  disabled: false,
  readOnly: false,
  helperText: 'Helper text',
  invalid: false,
  invalidText: 'Invalid selection',
  labelPosition: 'right' as 'right' | 'left',
  orientation: 'horizontal' as 'horizontal' | 'vertical',
  name: 'radio-group',
  required: false,
  modelValue: 'radio-2',
  warn: false,
  warnText: 'Please notice the warning',
  checked: false,
  hideLabel: false,
  labelText: 'Radio button label',
};

const argTypes: ArgTypes = {
  disabled: {
    control: 'boolean',
    description: 'Specify if the radio button is disabled',
  },
  readOnly: {
    control: 'boolean',
    description: 'Specify if the radio button is read only',
  },
  required: {
    control: 'boolean',
    description: 'Specify if the radio button is required',
  },
  helperText: {
    control: 'text',
    description: 'Helper text',
  },
  hideLabel: {
    control: 'boolean',
    description: 'Specify if the label should be hidden',
  },
  invalid: {
    control: 'boolean',
    description: 'Specify if the radio button is invalid',
  },
  invalidText: {
    control: 'text',
    description: 'Message to show if the radio button is invalid',
  },
  labelPosition: {
    control: 'radio',
    options: ['left', 'right'],
    description: 'Position of the label',
  },
  orientation: {
    control: 'radio',
    options: ['horizontal', 'vertical'],
    description: 'Orientation of the radio group',
  },
  warn: {
    control: 'boolean',
    description: 'Specify if the radio button is in warning state',
  },
  warnText: {
    control: 'text',
    description: 'Message to show if the radio button is in warning state',
  },
  modelValue: {
    control: 'text',
    description: 'Value of the selected radio button',
  },
  name: {
    control: 'text',
    description: 'Name of the radio group',
  },
  labelText: {
    control: 'text',
    description: 'Label for the radio group (legend)',
  },
  checked: {
    control: 'boolean',
    description: 'Checked (checked) - for individual button in Default story',
  },
};

const meta: Meta<typeof CvRadioButtonGroup> = {
  title: 'Components/Radio Button',
  component: CvRadioButtonGroup,
  subcomponents: { CvRadioButton },
};

export default meta;
type Story = StoryObj<typeof CvRadioButtonGroup>;

export const Default: Story = {
  args,
  argTypes,
  render: (args) => ({
    components: { CvRadioButtonGroup, CvRadioButton },
    setup() {
      return { args };
    },
    template: `
      <CvRadioButtonGroup
        v-bind="args"
        legend-text="Radio Button group"
      >
        <CvRadioButton
          :checked="args.checked"
          :hide-label="args.hideLabel"
          :label-text="args.labelText"
          value="radio-1"
        />
        <CvRadioButton
          :hide-label="args.hideLabel"
          :label-text="args.labelText"
          value="radio-2"
        />
        <CvRadioButton
          :hide-label="args.hideLabel"
          :label-text="args.labelText"
          value="radio-3"
        />
      </CvRadioButtonGroup>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    components: { CvRadioButtonGroup, CvRadioButton },
    template: `
      <CvRadioButtonGroup
        legend-text="Group label"
        name="radio-group-vertical"
        modelValue="radio-1"
        orientation="vertical"
      >
        <CvRadioButton
          label-text="Radio button label"
          value="radio-1"
        />
        <CvRadioButton
          label-text="Radio button label"
          value="radio-2"
        />
        <CvRadioButton
          label-text="Radio button label"
          value="radio-3"
          disabledItem
        />
      </CvRadioButtonGroup>
    `,
  }),
};

export const Skeleton: Story = {
  render: () => ({
    template: `<cds-radio-button-skeleton></cds-radio-button-skeleton>`,
  }),
};
