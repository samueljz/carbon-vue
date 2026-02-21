import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
// Provide a simple action logging function instead of using @storybook/addon-actions
const action = (name: string) => (...args: any[]) => console.log(name, ...args);
import { CvProgressIndicator, CvProgressStep } from './index';
import '@carbon/web-components/es/components/progress-indicator/progress-indicator-skeleton.js';
import '@carbon/web-components/es/components/progress-indicator/progress-step-skeleton.js';

const args = {
  currentIndex: 0,
  vertical: false,
  spaceEqually: false,
  iconLabel: '',
  secondaryLabel: 'Optional label',
};

const argTypes: ArgTypes = {
  currentIndex: {
    control: 'number',
    description: 'Optionally specify the current step array index.',
  },
  vertical: {
    control: 'boolean',
    description:
      'Determines whether or not the Progress Indicator should be rendered vertically.',
  },
  spaceEqually: {
    control: 'boolean',
    description:
      'Specify whether progress steps should be split equally in size (horizontal only).',
  },
  iconLabel: {
    table: {
      disable: true,
    },
  },
  secondaryLabel: {
    control: 'text',
    description: 'The secondary progress label.',
  },
};

const meta: Meta<typeof CvProgressIndicator> = {
  title: 'Components/Progress Indicator',
  component: CvProgressIndicator,
};

export default meta;
type Story = StoryObj<typeof CvProgressIndicator>;

export const Default: Story = {
  args,
  argTypes,
  render: (args) => ({
    components: { CvProgressIndicator, CvProgressStep },
    setup() { return { args }; },
    template: `
      <CvProgressIndicator
        :vertical="args.vertical"
        :space-equally="args.spaceEqually"
        :current-index="args.currentIndex"
      >
        <CvProgressStep
          description="Step 1: Getting started with Carbon Design System"
          label="First step"
          :secondary-label="args.secondaryLabel"
          complete
        ></CvProgressStep>
        <CvProgressStep
          description="Step 2: Getting started with Carbon Design System"
          label="Second step with tooltip"
          current
        ></CvProgressStep>
        <CvProgressStep
          description="Step 3: Getting started with Carbon Design System"
          label="Third step with tooltip"
        ></CvProgressStep>
        <CvProgressStep
          description="Step 4: Getting started with Carbon Design System"
          label="Fourth step"
          secondary-label="Example invalid step"
          invalid
        ></CvProgressStep>
        <CvProgressStep
          disabled
          description="Step 5: Getting started with Carbon Design System"
          label="Fifth step"
        ></CvProgressStep>
      </CvProgressIndicator>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    onChange: action('Clicked'),
  },
  argTypes: {
    ...argTypes,
    secondaryLabel: { table: { disable: true } },
    spaceEqually: { table: { disable: true } },
    vertical: { table: { disable: true } },
    iconLabel: { table: { disable: true } },
    currentIndex: { table: { disable: true } },
  },
  render: (args) => ({
    components: { CvProgressIndicator, CvProgressStep },
    setup() { return { args }; },
    template: `
      <CvProgressIndicator :current-index="1" :on-change="args.onChange">
        <CvProgressStep
          label="Click me"
          description="Step 1: Register an onChange event"
          complete
        ></CvProgressStep>
        <CvProgressStep
          label="Really long label"
          description="The progress indicator will listen for clicks on the steps"
          current
        ></CvProgressStep>
        <CvProgressStep
          label="Third step"
          description="The progress indicator will listen for clicks on the steps"
        ></CvProgressStep>
      </CvProgressIndicator>
    `,
  }),
};

export const Skeleton: Story = {
  render: () => ({
    template: `
      <cds-progress-indicator-skeleton>
        <cds-progress-step-skeleton></cds-progress-step-skeleton>
        <cds-progress-step-skeleton></cds-progress-step-skeleton>
        <cds-progress-step-skeleton></cds-progress-step-skeleton>
        <cds-progress-step-skeleton></cds-progress-step-skeleton>
      </cds-progress-indicator-skeleton>
    `,
  }),
};
