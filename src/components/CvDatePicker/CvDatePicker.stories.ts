import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvDatePicker, CvDatePickerInput, type DatePickerInputKind } from './index';
import type { CvDatePickerProps } from './CvDatePicker.vue';
import type { CvDatePickerInputProps } from './CvDatePickerInput.vue';

type BaseStoryArgs = CvDatePickerProps &
  CvDatePickerInputProps & {
    helperText?: string;
  };

type RangeStoryArgs = Omit<BaseStoryArgs, 'kind'> & {
  kind?: DatePickerInputKind | 'range';
};

const defaultArgs: BaseStoryArgs = {
  dateFormat: 'm/d/Y',
  disabled: false,
  allowInput: true,
  closeOnSelect: true,
  minDate: '',
  maxDate: '',
  readonly: false,
  short: false,
  helperText: '',
  invalid: false,
  invalidText: '',
  warn: false,
  warnText: '',
  placeholder: 'mm/dd/yyyy',
  size: 'md',
  kind: 'single',
};

const defaultRangeArgs: RangeStoryArgs = {
  ...defaultArgs,
};

const controls: ArgTypes = {
  allowInput: {
    control: 'boolean',
    description: 'Flatpickr prop passthrough enables direct date input.',
  },
  closeOnSelect: {
    control: 'boolean',
    description: 'Flatpickr prop passthrough. Controls whether the calendar dropdown closes upon selection.',
  },
  dateFormat: {
    control: 'text',
    description: 'The date format.',
  },
  disabled: { control: 'boolean', description: 'Specify if the date picker is disabled' },
  helperText: { control: 'text', description: 'Helper text' },
  invalid: {
    control: 'boolean',
    description: 'Specify if the currently value is invalid.',
  },
  invalidText: {
    control: 'text',
    description: 'Message which is displayed if the value is invalid.',
  },
  maxDate: {
    control: 'text',
    description: 'The maximum date that a user can pick to.',
  },
  minDate: {
    control: 'text',
    description: 'The minimum date that a user can start picking from.',
  },
  placeholder: { control: 'text', description: 'Placeholder text' },
  readonly: {
    control: 'boolean',
    description: 'Whether the DatePicker is to be readOnly',
  },
  short: {
    control: 'boolean',
    description: 'true to use the short version.',
  },
  size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the input' },
  warn: {
    control: 'boolean',
    description: 'Specify whether the control is currently in warning state.',
  },
  warnText: {
    control: 'text',
    description: 'Provide the text that is displayed when the control is in warning state.',
  },
};

const meta: Meta<typeof CvDatePicker> = {
  title: 'Components/Date picker',
  component: CvDatePicker,
  subcomponents: { CvDatePickerInput },
};

export default meta;

// BaseStoryArgs and RangeStoryArgs defined at top

type StrictStory = StoryObj<BaseStoryArgs>;
type RangeStory = StoryObj<RangeStoryArgs>;

export const Default: RangeStory = {
  args: defaultRangeArgs,
  argTypes: {
    ...controls,
    kind: {
      control: 'radio',
      options: ['single', 'simple', 'range'],
      description: 'The type of the date picker',
    },
  },
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() {
      return { args };
    },
    template: `
      <CvDatePicker
        :allow-input="args.allowInput"
        :close-on-select="args.closeOnSelect"
        :date-format="args.dateFormat"
        :disabled="args.disabled"
        :max-date="args.maxDate"
        :min-date="args.minDate"
        :readonly="args.readonly"
      >
        <CvDatePickerInput
          :kind="args.kind === 'range' ? 'from' : args.kind"
          label-text="Date Picker label"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
          :short="args.short"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :helper-text="args.helperText"
        />
        <CvDatePickerInput
          v-if="args.kind === 'range'"
          kind="to"
          label-text="End date"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
          :short="args.short"
          :disabled="args.disabled"
          :readonly="args.readonly"
        />
      </CvDatePicker>
    `,
  }),
};

export const SingleWithCalendar: StrictStory = {
  args: { ...defaultArgs, kind: 'single' },
  argTypes: {
    ...controls,
    kind: {
      control: false,
    },
  },
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() { return { args }; },
    template: `
      <CvDatePicker
        :allow-input="args.allowInput"
        :close-on-select="args.closeOnSelect"
        :date-format="args.dateFormat"
        :disabled="args.disabled"
        :max-date="args.maxDate"
        :min-date="args.minDate"
        :readonly="args.readonly"
      >
        <CvDatePickerInput
          kind="single"
          label-text="Date Picker label"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
           :short="args.short"
        />
      </CvDatePicker>
    `,
  }),
};

export const RangeWithCalendar: RangeStory = {
  args: { ...defaultRangeArgs, kind: 'range' },
  argTypes: {
    ...controls,
    kind: {
      control: false,
    },
  },
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() { return { args }; },
    template: `
      <CvDatePicker
        :allow-input="args.allowInput"
        :close-on-select="args.closeOnSelect"
        :date-format="args.dateFormat"
        :disabled="args.disabled"
        :max-date="args.maxDate"
        :min-date="args.minDate"
        :readonly="args.readonly"
      >
        <CvDatePickerInput
          kind="from"
          label-text="Start date"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
           :short="args.short"
        />
        <CvDatePickerInput
          kind="to"
          label-text="End date"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
          :short="args.short"
        />
      </CvDatePicker>
    `,
  }),
};


export const RangeWithCalendarWithLayer: RangeStory = {
  args: { ...defaultRangeArgs, kind: 'range' },
  argTypes: {
    ...controls,
    kind: {
      control: false,
    },
  },
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() {
      import('../../../.storybook/templates/with-layer');
      return { args };
    },
    template: `
      <sb-template-layers>
        <CvDatePicker
          :allow-input="args.allowInput"
          :close-on-select="args.closeOnSelect"
          :date-format="args.dateFormat"
          :disabled="args.disabled"
          :max-date="args.maxDate"
          :min-date="args.minDate"
          :readonly="args.readonly"
        >
          <CvDatePickerInput
            kind="from"
            label-text="Start date"
            :placeholder="args.placeholder"
            :size="args.size"
            :invalid="args.invalid"
            :invalid-text="args.invalidText"
            :warn="args.warn"
            :warn-text="args.warnText"
            :short="args.short"
            :disabled="args.disabled"
            :readonly="args.readonly"
          />
          <CvDatePickerInput
            kind="to"
            label-text="End date"
            :placeholder="args.placeholder"
            :size="args.size"
            :invalid="args.invalid"
            :invalid-text="args.invalidText"
            :warn="args.warn"
            :warn-text="args.warnText"
            :short="args.short"
            :disabled="args.disabled"
            :readonly="args.readonly"
          />
        </CvDatePicker>
      </sb-template-layers>
    `,
  }),
};

export const Simple: StrictStory = {
  args: { ...defaultArgs, kind: 'simple' },
  argTypes: controls,
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() { return { args }; },
    template: `
      <CvDatePicker
        :allow-input="args.allowInput"
        :close-on-select="args.closeOnSelect"
        :date-format="args.dateFormat"
        :disabled="args.disabled"
        :max-date="args.maxDate"
        :min-date="args.minDate"
        :readonly="args.readonly"
      >
        <CvDatePickerInput
          kind="simple"
          label-text="Date Picker label"
          :placeholder="args.placeholder"
          :size="args.size"
          :invalid="args.invalid"
          :invalid-text="args.invalidText"
          :warn="args.warn"
          :warn-text="args.warnText"
           :short="args.short"
           :disabled="args.disabled"
           :readonly="args.readonly"
        />
      </CvDatePicker>
    `,
  }),
};

export const SimpleWithLayer: StrictStory = {
  args: { ...defaultArgs, kind: 'simple' },
  argTypes: controls,
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() {
      import('../../../.storybook/templates/with-layer');
      return { args };
    },
    template: `
      <sb-template-layers>
        <CvDatePicker
          :allow-input="args.allowInput"
          :close-on-select="args.closeOnSelect"
          :date-format="args.dateFormat"
          :disabled="args.disabled"
          :max-date="args.maxDate"
          :min-date="args.minDate"
          :readonly="args.readonly"
        >
          <CvDatePickerInput
            kind="simple"
            label-text="Date Picker label"
            :placeholder="args.placeholder"
            :size="args.size"
            :invalid="args.invalid"
            :invalid-text="args.invalidText"
            :warn="args.warn"
            :warn-text="args.warnText"
             :short="args.short"
             :disabled="args.disabled"
             :readonly="args.readonly"
          />
        </CvDatePicker>
      </sb-template-layers>
    `,
  }),
};

export const SingleWithCalendarWithLayer: StrictStory = {
  args: { ...defaultArgs, kind: 'single' },
  argTypes: {
    ...controls,
    kind: {
      control: false,
    },
  },
  render: (args: any) => ({
    components: { CvDatePicker, CvDatePickerInput },
    setup() {
      import('../../../.storybook/templates/with-layer');
      return { args };
    },
    template: `
      <sb-template-layers>
        <CvDatePicker
          :allow-input="args.allowInput"
          :close-on-select="args.closeOnSelect"
          :date-format="args.dateFormat"
          :disabled="args.disabled"
          :max-date="args.maxDate"
          :min-date="args.minDate"
          :readonly="args.readonly"
        >
          <CvDatePickerInput
            kind="single"
            label-text="Date Picker label"
            :placeholder="args.placeholder"
            :size="args.size"
            :invalid="args.invalid"
            :invalid-text="args.invalidText"
            :warn="args.warn"
            :warn-text="args.warnText"
             :short="args.short"
          />
        </CvDatePicker>
      </sb-template-layers>
    `,
  }),
};

const skeletonControls = {
  hideLabel: {
    control: 'boolean',
    description: 'Specify whether the label should be hidden, or not',
  },
  range: {
    control: 'boolean',
    description: 'Specify whether the skeleton should be of range date picker.',
  },
};

export const Skeleton: StoryObj<any> = {
  args: { hideLabel: false, range: true },
  argTypes: skeletonControls,
  render: (args: any) => ({
    setup() {
      import('@carbon/web-components/es/components/date-picker/date-picker-input-skeleton.js');
      return { args };
    },
    template: `<cds-date-picker-input-skeleton :hide-label="args.hideLabel" :range="args.range"></cds-date-picker-input-skeleton>`,
  }),
};
