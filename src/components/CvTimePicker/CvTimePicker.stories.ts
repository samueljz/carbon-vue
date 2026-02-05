import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvTimePicker, CvTimePickerSelect } from './index';
import CvSelectItem from '../CvSelect/CvSelectItem.vue';

const args = {
    disabled: false,
    hideLabel: false,
    invalid: false,
    invalidText: 'Invalid time format',
    labelText: 'Select a time',
    placeholder: 'hh:mm',
    readOnly: false,
    size: 'md' as 'sm' | 'md' | 'lg',
    value: '',
    warning: false,
    warningText: 'This is a warning message.',
    maxLength: 5,
    type: 'text',
};

const argTypes: ArgTypes = {
    disabled: {
        control: 'boolean',
        description: 'Disabled (disabled)',
    },
    hideLabel: {
        control: 'boolean',
        description: 'Hide label (hide-label)',
    },
    invalid: {
        control: 'boolean',
        description: 'Invalid (invalid)',
    },
    invalidText: {
        control: 'text',
        description: 'Invalid text (invalid-text)',
    },
    labelText: {
        control: 'text',
        description: 'Label text (label)',
    },
    placeholder: {
        control: 'text',
        description: 'Placeholder text (placeholder)',
    },
    readOnly: {
        control: 'boolean',
        description: 'Read only (readOnly)',
    },
    size: {
        options: ['sm', 'md', 'lg'],
        control: 'radio',
        description: 'Size (size)',
    },
    value: {
        control: 'text',
        description: 'Value (value)',
    },
    warning: {
        control: 'boolean',
        description: 'Warning (warning)',
    },
    warningText: {
        control: 'text',
        description: 'Warn text (warning-text)',
    },
    maxLength: {
        control: 'number',
        description: 'Max length (max-length)',
    },
    type: {
        control: 'text',
        description: 'Type (type)',
    },
};

const meta: Meta<typeof CvTimePicker> = {
    title: 'Components/Time Picker',
    component: CvTimePicker,
    subcomponents: { CvTimePickerSelect, CvSelectItem },
};

export default meta;
type Story = StoryObj<typeof CvTimePicker>;

export const Default: Story = {
    args,
    argTypes,
    render: (args: any) => ({
        components: { CvTimePicker, CvTimePickerSelect, CvSelectItem },
        setup() { return { args }; },
        template: `
      <CvTimePicker
        :disabled="args.disabled"
        :hide-label="args.hideLabel"
        :invalid="args.invalid"
        :invalid-text="args.invalidText"
        :label-text="args.labelText"
        :max-length="args.maxLength"
        :placeholder="args.placeholder"
        :readonly="args.readOnly"
        :size="args.size"
        :value="args.value"
        :warning="args.warning"
        :warning-text="args.warningText"
        :type="args.type"
      >
        <CvTimePickerSelect
          default-value="AM"
          aria-label="Select AM/PM"
          id="time-picker-select-1"
        >
          <CvSelectItem value="AM" label="AM" />
          <CvSelectItem value="PM" label="PM" />
        </CvTimePickerSelect>
        <CvTimePickerSelect
          default-value="Time zone 1"
          aria-label="Select timezone"
          id="time-picker-select-2"
        >
          <CvSelectItem value="Time zone 1" label="Time zone 1" />
          <CvSelectItem value="Time zone 2" label="Time zone 2" />
        </CvTimePickerSelect>
      </CvTimePicker>
    `,
    }),
};
