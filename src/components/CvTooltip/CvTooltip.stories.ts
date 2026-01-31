import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvTooltip } from './index';
import { Information16 } from '@carbon/icons-vue';
import type { TooltipAlignment } from '@/types';
import type { CvTooltipProps } from './CvTooltip.vue';

// Extended args type for stories that includes label for tooltip content
interface TooltipStoryArgs extends CvTooltipProps {
  label?: string;
}

const alignmentLabels: Record<string, string> = {
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

const defaultArgs: TooltipStoryArgs = {
  align: 'top' as TooltipAlignment,
  closeOnActivation: false,
  defaultOpen: false,
  dropShadow: false,
  enterDelayMs: 100,
  label: 'Options',
  leaveDelayMs: 300,
};

const argTypes: ArgTypes = {
  align: {
    control: { type: 'select', labels: alignmentLabels },
    options: alignmentOptions,
    description: 'Specify how the trigger should align with the tooltip',
  },
  closeOnActivation: {
    control: 'boolean',
    description:
      'Determines whether the tooltip should close when inner content is activated (click, Enter or Space)',
  },
  defaultOpen: {
    control: 'boolean',
    description:
      'Specify whether the tooltip should be open when it first renders',
  },
  dropShadow: {
    control: 'boolean',
    description: 'Specify whether a drop shadow should be rendered',
  },
  enterDelayMs: {
    control: 'number',
    description:
      'Specify the duration in milliseconds to delay before displaying the tooltip',
  },
  label: {
    control: 'text',
    description: 'Provide the label to be rendered inside of the Tooltip.',
  },
  leaveDelayMs: {
    control: 'number',
    description:
      'Specify the duration in milliseconds to delay before hiding the tooltip',
  },
  // Hide controls that shouldn't be exposed (to match reference's 7 controls)
  autoalign: {
    table: { disable: true },
  },
  content: {
    table: { disable: true },
  },
  default: {
    table: { disable: true },
  },
};

const meta: Meta<typeof CvTooltip> = {
  title: 'Components/Tooltip',
  component: CvTooltip,
  decorators: [
    () => ({
      template: '<div class="sb-tooltip-story" style="display: flex; align-items: center; justify-content: center; min-height: 300px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvTooltip, Information16 },
    setup() {
      return { args };
    },
    template: `
      <CvTooltip
        :align="args.align"
        :closeOnActivation="args.closeOnActivation"
        :defaultOpen="args.defaultOpen"
        :dropShadow="args.dropShadow"
        :enterDelayMs="args.enterDelayMs"
        :leaveDelayMs="args.leaveDelayMs"
      >
        <button
          class="sb-tooltip-trigger"
          role="button"
          aria-labelledby="content"
          style="border: none; background: transparent; cursor: pointer;"
        >
          <Information16 />
        </button>
        <template #content>
          <cds-tooltip-content id="content">{{ args.label }}</cds-tooltip-content>
        </template>
      </CvTooltip>
    `,
  }),
};

export const Alignment: Story = {
  args: {
    ...defaultArgs,
    align: 'bottom-start' as TooltipAlignment,
    label: 'Tooltip alignment',
  },
  argTypes,
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    template: `
      <CvTooltip
        :align="args.align"
        :closeOnActivation="args.closeOnActivation"
        :defaultOpen="args.defaultOpen"
        :dropShadow="args.dropShadow"
        :enterDelayMs="args.enterDelayMs"
        :leaveDelayMs="args.leaveDelayMs"
      >
        <button
          role="button"
          aria-labelledby="content"
          style="padding: 12px 24px; border: none; background: #0f62fe; color: white; cursor: pointer; border-radius: 4px;"
        >
          This button has a tooltip
        </button>
        <template #content>
          <cds-tooltip-content id="content">{{ args.label }}</cds-tooltip-content>
        </template>
      </CvTooltip>
    `,
  }),
};

export const Duration: Story = {
  args: {
    ...defaultArgs,
    enterDelayMs: 0,
    leaveDelayMs: 300,
    label: 'Label one',
  },
  argTypes,
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    template: `
      <CvTooltip
        :align="args.align"
        :closeOnActivation="args.closeOnActivation"
        :defaultOpen="args.defaultOpen"
        :dropShadow="args.dropShadow"
        :enterDelayMs="args.enterDelayMs"
        :leaveDelayMs="args.leaveDelayMs"
      >
        <button
          role="button"
          aria-labelledby="content"
          style="padding: 12px 24px; border: none; background: #0f62fe; color: white; cursor: pointer; border-radius: 4px;"
        >
          This button has a tooltip
        </button>
        <template #content>
          <cds-tooltip-content id="content">{{ args.label }}</cds-tooltip-content>
        </template>
      </CvTooltip>
    `,
  }),
};

export const ExperimentalAutoAlign: Story = {
  args: {
    ...defaultArgs,
    label:
      'Scroll the container up, down, left or right to observe how the tooltip will automatically change its position in attempt to stay within the viewport. This works on initial render in addition to on scroll.',
  },
  argTypes: {
    ...argTypes,
    align: { control: false },
  },
  render: (args) => ({
    components: { CvTooltip },
    setup() {
      return { args };
    },
    mounted() {
      this.$nextTick(() => {
        document.querySelector('cds-tooltip')?.scrollIntoView({
          block: 'center',
          inline: 'center',
        });
      });
    },
    template: `
      <div style="width: 5000px; height: 5000px;">
        <div style="position: absolute; top: 2500px; left: 2500px; padding-right: 2500px;">
          <CvTooltip
            :closeOnActivation="args.closeOnActivation"
            :defaultOpen="args.defaultOpen"
            :dropShadow="args.dropShadow"
            :enterDelayMs="args.enterDelayMs"
            :leaveDelayMs="args.leaveDelayMs"
            :autoalign="true"
          >
            <button
              role="button"
              aria-labelledby="content"
              style="padding: 12px 24px; border: none; background: #0f62fe; color: white; cursor: pointer; border-radius: 4px;"
            >
              This button has a tooltip
            </button>
            <template #content>
              <cds-tooltip-content id="content">{{ args.label }}</cds-tooltip-content>
            </template>
          </CvTooltip>
        </div>
      </div>
    `,
  }),
};
