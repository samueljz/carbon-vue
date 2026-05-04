import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvOrderedList, CvListItem } from './index';

const defaultArgs = {
    isExpressive: false,
    native: false,
};

const argTypes: ArgTypes = {
    isExpressive: {
        control: 'boolean',
        description: 'Specify whether this ordered list expressive or not.',
    },
    native: {
        control: 'boolean',
        description:
            'Specify whether this ordered list should use native list styles instead of custom counter.',
    },
};

const meta: Meta<typeof CvOrderedList> = {
    title: 'Components/Ordered list',
    component: CvOrderedList,
};

export default meta;
type Story = StoryObj<typeof CvOrderedList>;

export const Default: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: {
            CvOrderedList,
            CvListItem,
        },
        setup() {
            return { args };
        },
        template: `
      <CvOrderedList :is-expressive="args.isExpressive" :native="args.native">
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
      </CvOrderedList>
    `,
    }),
};

export const NativeListStyles: Story = {
    args: { ...defaultArgs, native: true },
    argTypes,
    render: (args) => ({
        components: {
            CvOrderedList,
            CvListItem,
        },
        setup() {
            return { args };
        },
        template: `
      <CvOrderedList :is-expressive="args.isExpressive" :native="args.native">
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>
          Ordered List level 1
          <template #nested>
            <CvOrderedList :is-expressive="args.isExpressive" :native="args.native">
              <CvListItem>Ordered List level 2</CvListItem>
              <CvListItem>Ordered List level 2</CvListItem>
              <CvListItem>Ordered List level 2</CvListItem>
              <CvListItem>Ordered List level 2</CvListItem>
            </CvOrderedList>
          </template>
        </CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
      </CvOrderedList>
    `,
    }),
};

export const Nested: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: {
            CvOrderedList,
            CvListItem,
        },
        setup() {
            return { args };
        },
        template: `
      <CvOrderedList :is-expressive="args.isExpressive" :native="args.native">
        <CvListItem>
          Ordered List level 1
          <template #nested>
            <CvOrderedList :is-expressive="args.isExpressive" :native="args.native">
              <CvListItem>Ordered List level 2</CvListItem>
              <CvListItem>
                Ordered List level 2
                <template #nested>
                  <CvOrderedList
                    :is-expressive="args.isExpressive"
                    :native="args.native"
                  >
                    <CvListItem>Ordered List level 3</CvListItem>
                    <CvListItem>Ordered List level 3</CvListItem>
                  </CvOrderedList>
                </template>
              </CvListItem>
            </CvOrderedList>
          </template>
        </CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
        <CvListItem>Ordered List level 1</CvListItem>
      </CvOrderedList>
    `,
    }),
};
