import type { Meta, StoryObj } from '@storybook/vue3';
import { CvLoading } from './index';

const meta: Meta<typeof CvLoading> = {
    title: 'Components/Loading',
    component: CvLoading,
    argTypes: {
        inactive: {
            control: 'boolean',
            description: 'Specify whether the component should be inactive, or not.',
        },
        description: {
            control: 'text',
            description: 'Specify a description that would be used to best describe the loading state.',
        },
        small: {
            control: 'boolean',
            description: 'Specify whether you would like the small variant of loading',
        },
        overlay: {
            control: 'boolean',
            description: 'Specify whether the loading should be an overlay.',
        },
    },
    args: {
        inactive: false,
        description: 'Loading',
        small: false,
        overlay: false,
    },
};

export default meta;
type Story = StoryObj<typeof CvLoading>;

export const Default: Story = {
    render: (args) => ({
        components: { CvLoading },
        setup() {
            return { args };
        },
        template: '<CvLoading v-bind="args" />',
    }),
};
