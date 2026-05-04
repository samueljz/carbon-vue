import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvUnorderedList, CvListItem } from './index';

const defaultArgs = {
    isExpressive: false,
    nested: false,
};

const argTypes: ArgTypes = {
    isExpressive: {
        control: 'boolean',
        description: 'Specify whether this ordered list expressive or not.',
    },
    nested: {
        control: 'boolean',
        description: 'Specify whether to use nested styling for child lists.',
    },
};

const meta: Meta<typeof CvUnorderedList> = {
    title: 'Components/Unordered list',
    component: CvUnorderedList,
};

export default meta;
type Story = StoryObj<typeof CvUnorderedList>;

export const Default: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: {
            CvUnorderedList,
            CvListItem,
        },
        setup() {
            return { args };
        },
        template: `
      <CvUnorderedList :is-expressive="args.isExpressive" :nested="args.nested">
        <CvListItem>Unordered List level 1</CvListItem>
        <CvListItem>Unordered List level 1</CvListItem>
        <CvListItem>Unordered List level 1</CvListItem>
      </CvUnorderedList>
    `,
    }),
};

export const Nested: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: {
            CvUnorderedList,
            CvListItem,
        },
        setup() {
            return { args };
        },
        template: `
      <CvUnorderedList :is-expressive="args.isExpressive" :nested="args.nested">
        <CvListItem>
          Unordered List level 1
          <template #nested>
            <CvUnorderedList>
              <CvListItem>Unordered List level 2</CvListItem>
              <CvListItem>
                Unordered List level 2
                <template #nested>
                  <CvUnorderedList>
                    <CvListItem>Unordered List level 3</CvListItem>
                    <CvListItem>Unordered List level 3</CvListItem>
                  </CvUnorderedList>
                </template>
              </CvListItem>
            </CvUnorderedList>
          </template>
        </CvListItem>
        <CvListItem>Unordered List level 1</CvListItem>
        <CvListItem>Unordered List level 1</CvListItem>
      </CvUnorderedList>
    `,
    }),
};
