import type { Meta, StoryObj } from '@storybook/vue3';
import { CvTooltip } from './index';
import type { TooltipAlignment } from '@/types';

const alignmentLabels = {
  top: 'Top',
  'top-start': 'Top Start',
  'top-end': 'Top End',
  bottom: 'Bottom',
  'bottom-start': 'Bottom Start',
  'bottom-end': 'Bottom End',
  left: 'Left',
  'left-start': 'Left Start',
  'left-end': 'Left End',
  right: 'Right',
  'right-start': 'Right Start',
  'right-end': 'Right End',
};
const alignmentOptions = Object.keys(alignmentLabels);

const meta: Meta<typeof CvTooltip> = {
  title: 'Components/Tooltip',
  component: CvTooltip,
  argTypes: {
    align: {
      control: { type: 'select', labels: alignmentLabels },
      options: alignmentOptions,
      description: 'Specify how the trigger should align with the tooltip',
    },
    enterDelay: {
      control: 'number',
      description: 'Specify the duration in milliseconds to delay before displaying the tooltip',
    },
    leaveDelay: {
      control: 'number',
      description: 'Specify the duration in milliseconds to delay before hiding the tooltip',
    },
  },
  args: {
    align: 'top' as TooltipAlignment,
    enterDelay: 100,
    leaveDelay: 300,
  },
};

export default meta;
type Story = StoryObj<typeof CvTooltip>;

export const Default: Story = {
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
        <CvTooltip v-bind="args">
          <button
            class="sb-tooltip-trigger"
            role="button"
            aria-labelledby="content"
            style="border: none; background: transparent; cursor: pointer;"
          >
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path></svg>
          </button>
          <template #content>
            <cds-tooltip-content id="content">Tooltip content</cds-tooltip-content>
          </template>
        </CvTooltip>
      </div>
    `,
  }),
};

export const Alignment: Story = {
  args: {
    align: 'bottom-start' as TooltipAlignment,
  },
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
        <CvTooltip v-bind="args">
          <button
            role="button"
            aria-labelledby="content"
            style="padding: 12px 24px; border: none; background: #0f62fe; color: white; cursor: pointer; border-radius: 4px;"
          >
            This button has a tooltip
          </button>
          <template #content>
            <cds-tooltip-content id="content">Tooltip alignment</cds-tooltip-content>
          </template>
        </CvTooltip>
      </div>
    `,
  }),
};

export const Duration: Story = {
  args: {
    enterDelay: 0,
    leaveDelay: 300,
  },
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
        <CvTooltip v-bind="args">
          <button
            role="button"
            aria-labelledby="content"
            style="padding: 12px 24px; border: none; background: #0f62fe; color: white; cursor: pointer; border-radius: 4px;"
          >
            This button has a tooltip
          </button>
          <template #content>
            <cds-tooltip-content id="content">Label one</cds-tooltip-content>
          </template>
        </CvTooltip>
      </div>
    `,
  }),
};
