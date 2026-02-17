import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { ArgTypesConfig } from '../../types/storybook';
import { CvSlider, CvSliderSkeleton } from './index';

const args = {
    ariaLabelInput: 'Lower bound',
    disabled: false,
    hideLabel: false,
    hideTextInput: false,
    labelText: 'Slider (must be an increment of 5)',
    invalid: false,
    invalidText: 'Invalid message goes here',
    max: 100,
    min: 0,
    maxLabel: '',
    minLabel: '',
    readonly: false,
    required: false,
    step: 5,
    stepMultiplier: 5,
    warn: false,
    warnText: 'Warning message goes here',
    value: 50,
};

const argsTwoHandle = {
    ariaLabelInput: 'Lower bound',
    disabled: false,
    hideLabel: false,
    hideTextInput: false,
    labelText: 'Slider label',
    invalid: false,
    invalidText: 'Invalid message goes here',
    max: 100,
    min: 0,
    maxLabel: '',
    minLabel: '',
    readonly: false,
    required: false,
    step: 1,
    stepMultiplier: 1,
    warn: false,
    warnText: 'Warning message goes here',
    value: 10,
    valueUpper: 90,
    ariaLabelInputUpper: 'Upper bound',
};

const sliderArgTypes: ArgTypesConfig = {
    ariaLabelInput: {
        control: 'text',
        description: 'The `ariaLabel` for the `<input>`.',
    },
    disabled: {
        control: 'boolean',
        description: '`true` to disable this slider.',
    },
    hideLabel: {
        control: 'boolean',
        description: 'Hide label (hide-label)',
    },
    hideTextInput: {
        control: 'boolean',
        description: '`true` to hide the number input box.',
    },
    labelText: {
        control: 'text',
        description: 'Provide the text for the slider label.',
    },
    invalid: {
        control: 'boolean',
        description: 'Specify whether the Slider is currently invalid.',
    },
    invalidText: {
        control: 'text',
        description:
            'Provide the text that is displayed when the Slider is in an invalid state.',
    },
    max: {
        control: 'number',
        description: 'The maximum value.',
    },
    min: {
        control: 'number',
        description: 'The minimum value.',
    },
    maxLabel: {
        control: 'text',
        description: 'The label associated with the maximum value.',
    },
    minLabel: {
        control: 'text',
        description: 'The label associated with the minimum value.',
    },
    readonly: {
        control: 'boolean',
        description: 'Whether the slider should be read-only.',
    },
    required: {
        control: 'boolean',
        description: '`true` to specify if the control is required.',
    },
    step: {
        control: 'number',
        description:
            'A value determining how much the value should increase/decrease by moving the thumb by mouse.',
    },
    stepMultiplier: {
        control: 'number',
        description:
            'A value determining how much the value should increase/decrease by Shift+arrow keys.',
    },
    warn: {
        control: 'boolean',
        description: 'Specify whether the control is currently in warning state.',
    },
    warnText: {
        control: 'text',
        description:
            'Provide the text that is displayed when the control is in warning state.',
    },
    value: {
        control: 'number',
        description:
            'The value of the slider. When there are two handles, value is the lower bound.',
    },
    valueUpper: {
        control: 'number',
        description: 'The upper bound when there are two handles.',
    },
    ariaLabelInputUpper: {
        control: 'text',
        description:
            'The `ariaLabel` for the upper bound `<input>` when there are two handles.',
    },
    onChange: {},
    onInput: {},
};

const meta: Omit<Meta<typeof CvSlider>, 'argTypes'> & {
    argTypes: ArgTypesConfig;
} = {
    title: 'Components/Slider',
    component: CvSlider,
    argTypes: sliderArgTypes,
};

export default meta;
type Story = StoryObj<typeof CvSlider>;

export const Default: Story = {
    args,
    render: (args) => ({
        components: { CvSlider },
        setup() {
            return { args };
        },
        template: `
      <CvSlider v-bind="args">
        <cds-slider-input
          :aria-label="args.ariaLabelInput"
          type="number"
        />
      </CvSlider>
    `,
    }),
};

export const ControlledSlider: Story = {
    args,
    render: () => ({
        components: { CvSlider },
        setup() {
            return {
                value: 87,
                randomize() {
                    this.value = Math.round(Math.random() * 100);
                },
            };
        },
        template: `
      <div>
        <button type="button" @click="randomize">randomize value</button>
        <CvSlider
          label-text="Slider label"
          :max="100"
          :min="0"
          :step="1"
          :value="value"
        >
          <cds-slider-input
            aria-label="Slider value"
            type="number"
          />
        </CvSlider>
        <h1>{{ value }}</h1>
      </div>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvSliderSkeleton },
        template: '<CvSliderSkeleton />',
    }),
};

export const SliderWithCustomValueLabel: Story = {
    args: {
        ...args,
        hideTextInput: true,
        step: 1,
        stepMultiplier: 50,
    },
    render: (args) => ({
        components: { CvSlider },
        setup() {
            return { args };
        },
        template: `
      <CvSlider v-bind="args">
        <cds-slider-input
          :aria-label="args.ariaLabelInput"
          type="number"
        />
      </CvSlider>
    `,
    }),
};

export const SliderWithHiddenInputs: Story = {
    args: {
        ...args,
        hideTextInput: true,
        labelText: 'Slider label',
        step: 1,
        stepMultiplier: 10,
    },
    render: (args) => ({
        components: { CvSlider },
        setup() {
            return { args };
        },
        template: `
      <CvSlider v-bind="args">
        <cds-slider-input
          :aria-label="args.ariaLabelInput"
          type="number"
        />
      </CvSlider>
    `,
    }),
};

export const TwoHandleSkeleton: Story = {
    render: () => ({
        components: { CvSliderSkeleton },
        template: '<CvSliderSkeleton />',
    }),
};

export const TwoHandleSlider: Story = {
    args: argsTwoHandle,
    render: (args) => ({
        components: { CvSlider },
        setup() {
            return { args };
        },
        template: `
      <CvSlider v-bind="args">
        <cds-slider-input
          :aria-label="args.ariaLabelInput"
          type="number"
          id="lower"
          slot="lower-input"
        />
        <cds-slider-input
          :aria-label="args.ariaLabelInputUpper"
          type="number"
          id="upper"
        />
      </CvSlider>
    `,
    }),
};

export const TwoHandleSliderWithHiddenInputs: Story = {
    args: {
        ...argsTwoHandle,
        hideTextInput: true,
    },
    render: (args) => ({
        components: { CvSlider },
        setup() {
            return { args };
        },
        template: `
      <CvSlider v-bind="args">
        <cds-slider-input
          :aria-label="args.ariaLabelInput"
          type="number"
          id="lower"
          slot="lower-input"
        />
        <cds-slider-input
          :aria-label="args.ariaLabelInputUpper"
          type="number"
          id="upper"
        />
      </CvSlider>
    `,
    }),
};
