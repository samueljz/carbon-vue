import type { Meta, StoryObj } from '@storybook/vue3';
import {
    CvFileUploader,
    CvFileUploaderButton,
    CvFileUploaderDropContainer,
    CvFileUploaderItem as CvFileUploaderItemComponent,
    CvFileUploaderSkeleton,
} from './index';

const kind = {
    'Primary button (primary)': 'primary',
    'Secondary button (secondary)': 'secondary',
    'Tertiary button (tertiary)': 'tertiary',
    'Danger primary button (danger-primary)': 'danger-primary',
    'Danger button (danger)': 'danger',
    'Ghost button (ghost)': 'ghost',
};

const states = {
    'Upload in progress (uploading)': 'uploading',
    'Upload complete (complete)': 'complete',
    'Edit upload (edit)': 'edit',
};

const sizes = {
    'sm (sm)': 'sm',
    'md (md)': 'md',
    'lg (lg)': 'lg',
};

const defaultArgs = {
    buttonKind: 'primary',
    buttonLabel: 'Add file',
    disabled: false,
    state: 'uploading',
    iconDescription: 'Delete file',
    labelDescription: 'Max file size is 500kb. Only .jpg files are supported.',
    labelTitle: 'Upload files',
    name: '',
    multiple: false,
    size: 'md',
};

const defaultArgTypes = {
    buttonKind: {
        control: 'select',
        options: kind,
        description:
            'Specify the types of files that this input should be able to receive.',
    },
    buttonLabel: {
        control: 'text',
        description:
            'Provide the label text to be read by screen readers when interacting with the <code>&lt;cds-file-uploader-button&gt;</code>.',
    },
    disabled: {
        control: 'boolean',
        description: 'Specify whether file input is disabled.',
    },
    state: {
        control: 'select',
        description: 'File uploader item state (state)',
        options: states,
    },
    iconDescription: {
        control: 'text',
        description:
            'Provide a description for the complete/close icon that can be read by screen readers.',
    },
    labelDescription: {
        control: 'text',
        description:
            'Specify the description text of this <code>&lt;cds-file-uploader&gt;</code>.',
    },
    labelTitle: {
        control: 'text',
        description:
            'Specify the title text of this <code>&lt;cds-file-uploader&gt;</code>.',
    },
    name: {
        control: 'text',
        description:
            'Provide a name for the underlying <code>&lt;input&gt;</code> node.',
    },
    multiple: {
        control: 'boolean',
        description:
            'Specify if the component should accept multiple files to upload.',
    },
    size: {
        control: 'select',
        description:
            'Specify the size of the <code>&lt;cds-file-uploader-button&gt;</code>, from a list of available sizes.',
        options: sizes,
    },
    onDelete: {},
    onChange: {},
};

const meta: Meta<typeof CvFileUploader> = {
    title: 'Components/File uploader',
    component: CvFileUploader,
};

export default meta;
type Story = StoryObj<typeof CvFileUploader>;

export const Default: Story = {
    args: defaultArgs,
    argTypes: defaultArgTypes,
    render: (args) => ({
        components: {
            CvFileUploader,
            CvFileUploaderButton,
        },
        setup() {
            return { args };
        },
        template: `
      <CvFileUploader
        :label-title="args.labelTitle"
        :label-description="args.labelDescription"
        :disabled="args.disabled"
      >
        <CvFileUploaderButton
          :button-kind="args.buttonKind"
          accept="image/jpeg"
          :size="args.size"
          :disabled="args.disabled"
          :multiple="args.multiple"
          :name="args.name || 'default-file-uploader-button'"
        >
          {{ args.buttonLabel }}
        </CvFileUploaderButton>
      </CvFileUploader>
    `,
    }),
};

export const DragAndDropUploadContainerExampleApplication: Story = {
    render: () => ({
        components: {
            CvFileUploader,
            CvFileUploaderDropContainer,
        },
        template: `
      <CvFileUploader
        label-title="Upload files"
        label-description="Max file size is 1 MB. Supported file types are .jpg and .png."
      >
        <CvFileUploaderDropContainer
          accept="image/jpeg image/png"
          :multiple="true"
        >
          Drag and drop files here or click to upload
        </CvFileUploaderDropContainer>
      </CvFileUploader>
    `,
    }),
};

export const DragAndDropUploadSingleContainerExampleApplication: Story = {
    render: () => ({
        components: {
            CvFileUploader,
            CvFileUploaderDropContainer,
        },
        template: `
      <CvFileUploader
        label-title="Upload a file"
        label-description="Max file size is 1 MB. Only .jpg files are supported."
      >
        <CvFileUploaderDropContainer accept="image/jpeg">
          Drag and drop a file here or click to upload
        </CvFileUploaderDropContainer>
      </CvFileUploader>
    `,
    }),
};

export const FileUploaderDropContainer: Story = {
    render: () => ({
        components: {
            CvFileUploader,
            CvFileUploaderDropContainer,
        },
        template: `
      <CvFileUploader>
        <CvFileUploaderDropContainer
          :multiple="true"
          accept="image/jpeg image/png"
        >
          Drag and drop files here or click to upload
        </CvFileUploaderDropContainer>
      </CvFileUploader>
    `,
    }),
};

export const FileUploaderItem: Story = {
    render: () => ({
        components: {
            CvFileUploaderItem: CvFileUploaderItemComponent,
        },
        template: `
      <CvFileUploaderItem state="edit">
        README.md
      </CvFileUploaderItem>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: { CvFileUploaderSkeleton },
        template: '<CvFileUploaderSkeleton />',
    }),
};
