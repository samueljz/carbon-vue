import type { Meta, StoryObj } from '@storybook/vue3';
import { CvTag, CvDismissibleTag, CvSelectableTag, CvOperationalTag, CvTagSkeleton } from './index';

const typeLabels = {
    red: 'Red',
    magenta: 'Magenta',
    purple: 'Purple',
    blue: 'Blue',
    cyan: 'Cyan',
    teal: 'Teal',
    green: 'Green',
    gray: 'Gray',
    'cool-gray': 'Cool gray',
    'warm-gray': 'Warm gray',
    'high-contrast': 'High contrast',
    outline: 'Outline',
};
const typeOptions = Object.keys(typeLabels);

const sizeLabels = {
    sm: 'Small (sm)',
    md: 'Medium (md)',
    lg: 'Large (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const meta: Meta<typeof CvTag> = {
    title: 'Components/Tag',
    component: CvTag,
    argTypes: {
        type: {
            control: { type: 'select', labels: typeLabels },
            options: typeOptions,
            description: 'Specify the type of Tag',
        },
        size: {
            control: { type: 'select', labels: sizeLabels },
            options: sizeOptions,
            description: 'Specify the size of the Tag',
        },
        disabled: {
            control: 'boolean',
            description: 'Specify whether the Tag is disabled',
        },
        filter: {
            control: 'boolean',
            description: 'Set to true for a filter tag',
        },
    },
    args: {
        type: 'gray',
        size: 'md',
        disabled: false,
        filter: false,
    },
};

export default meta;
type Story = StoryObj<typeof CvTag>;

export const Default: Story = {
    render: (args) => ({
        components: { CvTag },
        setup() {
            return { args };
        },
        template: '<CvTag v-bind="args">Tag content</CvTag>',
    }),
};

export const Dismissible: Story = {
    render: (args) => ({
        components: { CvDismissibleTag },
        setup() {
            const resetTags = () => {
                document.querySelectorAll('cds-dismissible-tag').forEach((tag) => {
                    tag.setAttribute('open', 'true');
                });
            };
            return { args, resetTags };
        },
        template: `
      <div>
        <cds-button style="margin-bottom: 1rem;" @click="resetTags">Reset</cds-button>
        <br />
        <CvDismissibleTag type="red" text="Tag content with a long text description" />
        <CvDismissibleTag type="magenta" text="Tag content 1" />
        <CvDismissibleTag type="purple" text="Tag content 2" />
        <CvDismissibleTag type="blue" text="Tag content 3" />
        <CvDismissibleTag type="cyan" text="Tag content 4" />
        <CvDismissibleTag type="teal" text="Tag content 5" />
        <CvDismissibleTag type="green" text="Tag content 6" />
        <CvDismissibleTag type="gray" text="Tag content 7" />
        <CvDismissibleTag type="cool-gray" text="Tag content 8" />
        <CvDismissibleTag type="warm-gray" text="Tag content 9" />
        <CvDismissibleTag type="high-contrast" text="Tag content 10" />
        <CvDismissibleTag type="outline" text="Tag content 11" />
      </div>
    `,
    }),
};

export const Operational: Story = {
    render: (args) => ({
        components: { CvOperationalTag },
        setup() {
            return { args };
        },
        template: `
      <div role="group" aria-label="Operational tags">
        <CvOperationalTag type="red" text="Tag content with a long text description" />
        <CvOperationalTag type="magenta" text="Tag content" />
        <CvOperationalTag type="purple" text="Tag content" />
        <CvOperationalTag type="blue" text="Tag content" />
        <CvOperationalTag type="cyan" text="Tag content" />
        <CvOperationalTag type="teal" text="Tag content" />
        <CvOperationalTag type="green" text="Tag content" />
        <CvOperationalTag type="gray" text="Tag content" />
        <CvOperationalTag type="cool-gray" text="Tag content" />
        <CvOperationalTag type="warm-gray" text="Tag content" />
      </div>
    `,
    }),
};

export const ReadOnly: Story = {
    render: () => ({
        components: { CvTag },
        template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CvTag type="red">Red</CvTag>
        <CvTag type="magenta">Magenta</CvTag>
        <CvTag type="purple">Purple</CvTag>
        <CvTag type="blue">Blue</CvTag>
        <CvTag type="cyan">Cyan</CvTag>
        <CvTag type="teal">Teal</CvTag>
        <CvTag type="green">Green</CvTag>
        <CvTag type="gray">Gray</CvTag>
        <CvTag type="cool-gray">Cool gray</CvTag>
        <CvTag type="warm-gray">Warm gray</CvTag>
        <CvTag type="high-contrast">High contrast</CvTag>
        <CvTag type="outline">Outline</CvTag>
      </div>
    `,
    }),
};

export const Selectable: Story = {
    render: (args) => ({
        components: { CvSelectableTag },
        setup() {
            return { args };
        },
        template: `
      <div role="group" aria-label="Selectable tags" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CvSelectableTag text="Tag content with a long text description" />
        <CvSelectableTag text="Tag content 1" selected />
        <CvSelectableTag text="Tag content 2" />
        <CvSelectableTag text="Tag content 3" />
      </div>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvTagSkeleton },
        template: `
      <div style="display: flex; gap: 1rem;">
        <CvTagSkeleton size="sm" />
        <CvTagSkeleton size="md" />
        <CvTagSkeleton size="lg" />
      </div>
    `,
    }),
};
