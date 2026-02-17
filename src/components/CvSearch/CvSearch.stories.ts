import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite';
import { CvSearch } from './index';

const args = {
  autoComplete: 'off',
  closeButtonLabelText: 'Clear search input',
  disabled: false,
  labelText: 'Search',
  placeholder: 'Placeholder text',
  role: 'searchbox',
  size: 'lg' as 'sm' | 'md' | 'lg',
  type: 'text',
  value: '',
  expandable: false,
  expanded: false,
};

const argTypes: ArgTypes = {
  autoComplete: { control: 'text', description: 'Specify an optional value for the autocomplete property on the underlying input' },
  closeButtonLabelText: { control: 'text', description: 'Specify a label to be read by screen readers on the "close" button' },
  disabled: { control: 'boolean', description: 'Specify whether the input should be disabled' },
  labelText: { control: 'text', description: 'Provide the label text for the Search icon' },
  placeholder: { control: 'text', description: 'Provide an optional placeholder text for the Search' },
  role: { control: 'text', description: 'Specify the role for the underlying input' },
  size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Specify the size of the Search' },
  type: { control: 'text', description: 'Optional prop to specify the type of the input' },
  value: { control: 'text', description: 'Specify the value of the input' },
  expandable: { control: 'boolean', description: 'Optional prop to specify if the search is expandable' },
  expanded: { control: 'boolean', description: 'Optional prop to specify if the search is expanded' },
};

const meta: Meta<typeof CvSearch> = {
  title: 'Components/CvSearch',
  component: CvSearch,
  tags: ['autodocs'],
  argTypes,
};

export default meta;
type Story = StoryObj<typeof CvSearch>;

export const Default: Story = {
  render: () => ({
    components: { CvSearch },
    template: `
      <CvSearch
        size="lg"
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"
      />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { CvSearch },
    template: `
      <CvSearch
        size="lg"
        disabled
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"
      />
    `,
  }),
};

export const Expandable: Story = {
  render: () => ({
    components: { CvSearch },
    template: `
      <CvSearch
        size="lg"
        expandable
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"
      />
    `,
  }),
};

export const Playground: Story = {
  args,
  argTypes,
  render: (args: any) => ({
    components: { CvSearch },
    setup() {
      return { args };
    },
    template: `
      <CvSearch
        :size="args.size"
        :autocomplete="args.autoComplete"
        :close-button-label-text="args.closeButtonLabelText"
        :disabled="args.disabled"
        :label-text="args.labelText"
        :placeholder="args.placeholder"
        :role="args.role"
        :type="args.type"
        :value="args.value"
        :expandable="args.expandable"
        :expanded="args.expanded"
      />
    `,
  }),
};
