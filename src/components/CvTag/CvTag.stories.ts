import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { TagSize, PopoverAlignment } from '@/types';
import { CvTag, CvDismissibleTag, CvSelectableTag, CvOperationalTag, CvTagSkeleton } from './index';

// ============================================================================
// Shared Labels and Options
// ============================================================================
const sizeLabels = {
    sm: 'Small (sm)',
    md: 'Medium (md)',
    lg: 'Large (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const tooltipAlignmentLabels = {
    top: 'Top',
    'top-left': 'Top left',
    'top-right': 'Top right',
    bottom: 'Bottom',
    'bottom-left': 'Bottom left',
    'bottom-right': 'Bottom right',
    left: 'Left',
    'left-bottom': 'Left bottom',
    'left-top': 'Left top',
    right: 'Right',
    'right-bottom': 'Right bottom',
    'right-top': 'Right top',
};
const tooltipAlignmentOptions = Object.keys(tooltipAlignmentLabels);

// ============================================================================
// Shared ArgTypes
// ============================================================================
const baseArgTypes = {
    disabled: {
        control: 'boolean' as const,
        description: 'Specify if the Tag is disabled',
    },
    size: {
        control: { type: 'select' as const, labels: sizeLabels },
        options: sizeOptions,
        description: 'Specify the size of the Tag',
    },
    text: {
        control: 'text' as const,
        description: 'Provide text to be rendered inside of a the tag',
    },
};

const baseArgs = {
    disabled: false,
    size: 'md' as TagSize,
};

// ============================================================================
// Meta
// ============================================================================
const meta: Meta = {
    title: 'Components/Tag',
};

export default meta;

// ============================================================================
// Story Args Types (extends component props with story-specific controls)
// ============================================================================
interface BaseTagStoryArgs {
    disabled?: boolean;
    size?: TagSize;
    text?: string;
}

interface DismissibleStoryArgs extends BaseTagStoryArgs {
    dismissTooltipAlignment?: PopoverAlignment;
    dismissTooltipLabel?: string;
}

interface SkeletonStoryArgs {
    size?: TagSize;
}

interface SelectableStoryArgs extends BaseTagStoryArgs { }

interface OperationalStoryArgs extends BaseTagStoryArgs { }

interface ReadOnlyStoryArgs extends BaseTagStoryArgs {
    title?: string;
    filter?: boolean;
}

// ============================================================================
// CvDismissibleTag
// ============================================================================
export const Dismissible: StoryObj<DismissibleStoryArgs> = {
    argTypes: {
        ...baseArgTypes,
        dismissTooltipAlignment: {
            control: { type: 'select', labels: tooltipAlignmentLabels },
            options: tooltipAlignmentOptions,
            description: 'Specify the tooltip alignment for the dismiss button',
        },
        dismissTooltipLabel: {
            control: 'text',
            description: 'Text to show on clear filters',
        },
    },
    args: {
        ...baseArgs,
        dismissTooltipAlignment: 'bottom',
        dismissTooltipLabel: 'Dismiss',
    },
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
        <CvDismissibleTag v-bind="args" type="red" :text="args.text || 'Tag content with a long text description'" />
        <CvDismissibleTag v-bind="args" type="magenta" :text="args.text || 'Tag content 1'" />
        <CvDismissibleTag v-bind="args" type="purple" :text="args.text || 'Tag content 2'" />
        <CvDismissibleTag v-bind="args" type="blue" :text="args.text || 'Tag content 3'" />
        <CvDismissibleTag v-bind="args" type="cyan" :text="args.text || 'Tag content 4'" />
        <CvDismissibleTag v-bind="args" type="teal" :text="args.text || 'Tag content 5'" />
        <CvDismissibleTag v-bind="args" type="green" :text="args.text || 'Tag content 6'" />
        <CvDismissibleTag v-bind="args" type="gray" :text="args.text || 'Tag content 7'" />
        <CvDismissibleTag v-bind="args" type="cool-gray" :text="args.text || 'Tag content 8'" />
        <CvDismissibleTag v-bind="args" type="warm-gray" :text="args.text || 'Tag content 9'" />
        <CvDismissibleTag v-bind="args" type="high-contrast" :text="args.text || 'Tag content 10'" />
        <CvDismissibleTag v-bind="args" type="outline" :text="args.text || 'Tag content 11'" />
      </div>
    `,
    }),
};

// ============================================================================
// CvTagSkeleton
// ============================================================================
export const Skeleton: StoryObj<SkeletonStoryArgs> = {
    argTypes: {
        size: baseArgTypes.size,
    },
    args: {
        size: 'md',
    },
    render: (args) => ({
        components: { CvTagSkeleton },
        setup() {
            return { args };
        },
        template: `<CvTagSkeleton v-bind="args">Tag content</CvTagSkeleton>`,
    }),
};

// ============================================================================
// CvSelectableTag
// ============================================================================
export const Selectable: StoryObj<SelectableStoryArgs> = {
    argTypes: { ...baseArgTypes },
    args: { ...baseArgs },
    render: (args) => ({
        components: { CvSelectableTag },
        setup() {
            return { args };
        },
        template: `
      <div role="group" aria-label="Selectable tags" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CvSelectableTag v-bind="args" :text="args.text || 'Tag content with a long text description'" />
        <CvSelectableTag v-bind="args" :text="args.text || 'Tag content 1'" selected />
        <CvSelectableTag v-bind="args" :text="args.text || 'Tag content 2'" />
        <CvSelectableTag v-bind="args" :text="args.text || 'Tag content 3'" />
      </div>
    `,
    }),
};

// ============================================================================
// CvOperationalTag
// ============================================================================
export const Operational: StoryObj<OperationalStoryArgs> = {
    argTypes: { ...baseArgTypes },
    args: { ...baseArgs },
    render: (args) => ({
        components: { CvOperationalTag },
        setup() {
            return { args };
        },
        template: `
      <div role="group" aria-label="Operational tags" style="margin-bottom: 1rem;">
        <CvOperationalTag v-bind="args" type="red" :text="args.text || 'Tag content with a long text description'" />
        <CvOperationalTag v-bind="args" type="magenta" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="purple" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="blue" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="cyan" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="teal" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="green" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="gray" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="cool-gray" :text="args.text || 'Tag content'" />
        <CvOperationalTag v-bind="args" type="warm-gray" :text="args.text || 'Tag content'" />
      </div>
    `,
    }),
};

// ============================================================================
// CvTag (Read-only)
// ============================================================================
export const ReadOnly: StoryObj<ReadOnlyStoryArgs> = {
    argTypes: {
        ...baseArgTypes,
        title: {
            control: 'text',
            description: 'Text to show on clear filters',
        },
        filter: {
            control: 'boolean',
            description: 'Determine if Tag is a filter/chip',
        },
    },
    args: {
        ...baseArgs,
        filter: false,
        title: 'Clear filters',
        text: 'Tag content',
    },
    render: (args) => ({
        components: { CvTag },
        setup() {
            return { args };
        },
        template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CvTag v-bind="args" type="red">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="magenta">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="purple">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="blue">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="cyan">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="teal">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="green">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="gray">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="cool-gray">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="warm-gray">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="high-contrast">{{ args.text }}</CvTag>
        <CvTag v-bind="args" type="outline">{{ args.text }}</CvTag>
      </div>
    `,
    }),
};
