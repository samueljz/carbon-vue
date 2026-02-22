import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvStack } from './index';

const orientationOptions = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
};

const defaultArgs = {
    gap: '0',
    orientation: 'vertical',
    useCustomGapValue: false,
};

const argTypes: ArgTypes = {
    gap: {
        control: 'select',
        description: 'Provide either a custom value or a step from the spacing scale to be used as the gap in the layout',
        options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    orientation: {
        control: 'select',
        description: 'Specify the orientation of the items in the Stack',
        options: Object.values(orientationOptions),
    },
    useCustomGapValue: {
        control: 'boolean',
        description: "Turn on when passing in custom value to 'gap' attribute (ie. gap=\"2rem\")"
    }
};

const meta: Meta<typeof CvStack> = {
    title: 'Layout/Stack',
    component: CvStack,
};

export default meta;
type Story = StoryObj<typeof CvStack>;

export const Default: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: { CvStack },
        setup() {
            return { args };
        },
        template: `
      <CvStack v-bind="args">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </CvStack>
    `,
    }),
};

export const Horizontal: Story = {
    args: {
        gap: '6',
        orientation: 'horizontal',
    },
    argTypes,
    render: (args) => ({
        components: { CvStack },
        setup() {
            return { args };
        },
        template: `
      <CvStack v-bind="args">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </CvStack>
    `,
    }),
};
