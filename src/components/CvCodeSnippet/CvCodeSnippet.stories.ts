import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvCodeSnippet, CvCodeSnippetSkeleton } from './index';

const defaultArgs = {
    copyButtonDescription: 'Copy to clipboard',
    copyText: '',
    disabled: false,
    feedback: '',
    feedbackTimeout: 0,
    hideCopyButton: false,
    maxCollapsedNumberOfRows: 15,
    maxExpandedNumberOfRows: 0,
    minCollapsedNumberOfRows: 3,
    minExpandedNumberOfRows: 16,
    showLessText: 'Show less',
    showMoreText: 'Show more',
    type: 'single',
    wrapText: false,
};

const argTypes: ArgTypes = {
    copyButtonDescription: {
        control: 'text',
        description: 'Specify the description for the Copy Button.',
    },
    copyText: {
        control: 'text',
        description:
            "Optional text to copy. If not specified, the children node's <code>innerText</code> will be used as the copy value.",
    },
    disabled: {
        control: 'boolean',
        description: 'Specify whether or not the CodeSnippet should be disabled.',
    },
    feedback: {
        control: 'text',
        description: 'Specify the string displayed when the snippet is copied.',
    },
    feedbackTimeout: {
        control: 'number',
        description:
            'Specify the time it takes for the feedback message to timeout.',
    },
    hideCopyButton: {
        control: 'boolean',
        description:
            'Specify whether or not a copy button should be used/rendered.',
    },
    maxCollapsedNumberOfRows: {
        control: 'number',
        description:
            'Specify the maximum number of rows to be shown when in collapsed view.',
    },
    maxExpandedNumberOfRows: {
        control: 'number',
        description:
            'Specify the maximum number of rows to be shown when in expanded view.',
    },
    minCollapsedNumberOfRows: {
        control: 'number',
        description:
            'Specify the minimum number of rows to be shown when in collapsed view.',
    },
    minExpandedNumberOfRows: {
        control: 'number',
        description:
            'Specify the minimum number of rows to be shown when in expanded view.',
    },
    showLessText: {
        control: 'text',
        description:
            'Specify a string that is displayed when the Code Snippet has been interacted with to show more lines.',
    },
    showMoreText: {
        control: 'text',
        description:
            'Specify a string that is displayed when the Code Snippet text is more than 15 lines.',
    },
    type: {
        control: 'radio',
        options: ['single', 'inline', 'multi'],
    },
    wrapText: {
        control: 'boolean',
        description: 'Specify whether or not to wrap the text.',
    },
};

const meta: Meta<typeof CvCodeSnippet> = {
    title: 'Components/Code snippet',
    component: CvCodeSnippet,
};

export default meta;
type Story = StoryObj<typeof CvCodeSnippet>;

export const Inline: Story = {
    args: {
        ...defaultArgs,
        type: 'inline' as any,
    },
    argTypes,
    render: (args) => ({
        components: {
            CvCodeSnippet,
        },
        setup() {
            return { args };
        },
        template: `
      <CvCodeSnippet
        :type="args.type"
        :copy-text="args.copyText"
        :disabled="args.disabled"
        :max-collapsed-number-of-rows="args.maxCollapsedNumberOfRows"
        :max-expanded-number-of-rows="args.maxExpandedNumberOfRows"
        :min-collapsed-number-of-rows="args.minCollapsedNumberOfRows"
        :min-expanded-number-of-rows="args.minExpandedNumberOfRows"
        :hide-copy-button="args.hideCopyButton"
        :show-less-text="args.showLessText"
        :show-more-text="args.showMoreText"
        :wrap-text="args.wrapText"
        :feedback="args.feedback"
        :feedback-timeout="args.feedbackTimeout"
        :tooltip-content="args.copyButtonDescription"
      >node -v</CvCodeSnippet>
    `,
    }),
};

export const Multiline: Story = {
    args: {
        ...defaultArgs,
        type: 'multi' as any,
    },
    argTypes,
    render: (args) => ({
        components: {
            CvCodeSnippet,
        },
        setup() {
            const code = `"scripts": {
    "build": "lerna run build --stream --prefix --npm-client yarn",
    "ci-check": "carbon-cli ci-check",
    "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
    "doctoc": "doctoc --title '## Table of Contents'",
    "format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
    "format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
    "lint": "eslint actions config codemods packages",
    "lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
    "test": "cross-env BABEL_ENV=test jest",
    "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
  },
  "resolutions": {
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-is": "~16.9.0",
    "react-test-renderer": "~16.9.0"
  },
  "devDependencies": {
    "@babel/core": "^7.10.0",
    "@babel/plugin-proposal-class-properties": "^7.7.4",
    "@babel/plugin-proposal-export-default-from": "^7.7.4",
    "@babel/plugin-proposal-export-namespace-from": "^7.7.4",
    "@babel/plugin-transform-runtime": "^7.10.0",
    "@babel/preset-env": "^7.10.0",
    "@babel/preset-react": "^7.10.0",
    "@babel/runtime": "^7.10.0",
    "@commitlint/cli": "^8.3.5"`;
            return { args, code };
        },
        template: `
      <CvCodeSnippet
        :type="args.type"
        :copy-text="args.copyText"
        :disabled="args.disabled ? 'true' : undefined"
        :max-collapsed-number-of-rows="args.maxCollapsedNumberOfRows"
        :max-expanded-number-of-rows="args.maxExpandedNumberOfRows"
        :min-collapsed-number-of-rows="args.minCollapsedNumberOfRows"
        :min-expanded-number-of-rows="args.minExpandedNumberOfRows"
        :hide-copy-button="args.hideCopyButton ? 'true' : undefined"
        :show-less-text="args.showLessText"
        :show-more-text="args.showMoreText"
        :wrap-text="args.wrapText ? 'true' : undefined"
        :feedback="args.feedback"
        :feedback-timeout="args.feedbackTimeout"
        :tooltip-content="args.copyButtonDescription"
      ><pre style="display:contents">{{ code }}</pre></CvCodeSnippet>
    `,
    }),
};

export const Singleline: Story = {
    args: {
        ...defaultArgs,
        type: 'single' as any,
    },
    argTypes,
    render: (args) => ({
        components: {
            CvCodeSnippet,
        },
        setup() {
            return { args };
        },
        template: `
      <CvCodeSnippet
        :type="args.type"
        :copy-text="args.copyText"
        :disabled="args.disabled"
        :max-collapsed-number-of-rows="args.maxCollapsedNumberOfRows"
        :max-expanded-number-of-rows="args.maxExpandedNumberOfRows"
        :min-collapsed-number-of-rows="args.minCollapsedNumberOfRows"
        :min-expanded-number-of-rows="args.minExpandedNumberOfRows"
        :hide-copy-button="args.hideCopyButton"
        :show-less-text="args.showLessText"
        :show-more-text="args.showMoreText"
        :wrap-text="args.wrapText"
        :feedback="args.feedback"
        :feedback-timeout="args.feedbackTimeout"
        :tooltip-content="args.copyButtonDescription"
      >yarn add carbon-components@latest carbon-components-react@latest @carbon/icons-react@latest carbon-icons@latest</CvCodeSnippet>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: {
            CvCodeSnippetSkeleton,
        },
        template: `
      <div>
        <CvCodeSnippetSkeleton type="single" style="margin-bottom: 8px;" />
        <CvCodeSnippetSkeleton type="multi" />
      </div>
    `,
    }),
};
