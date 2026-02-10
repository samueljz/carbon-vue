import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { ref } from 'vue';
import { CvTextArea } from './index';
import { CvLayer } from '../CvLayer';
import '@carbon/web-components/es/components/textarea/textarea-skeleton.js';

const args = {
    cols: 0,
    counterMode: 'character' as 'character' | 'word',
    disabled: false,
    enableCounter: true,
    helperText: 'TextArea helper text',
    hideLabel: false,
    invalid: false,
    invalidText: 'Error message that is really long can wrap to more lines but should not be excessively long.',
    label: 'TextArea label',
    maxCount: 500,
    placeholder: '',
    readonly: false,
    rows: 4,
    modelValue: '',
    warn: false,
    warnText: 'This is a warning message.',
};

const argTypes: ArgTypes = {
    cols: {
        control: 'number',
        description: 'Number of columns (cols)',
    },
    counterMode: {
        control: 'radio',
        options: ['character', 'word'],
        description: 'Specify the method used for calculating the counter number (character or word)',
    },
    disabled: {
        control: 'boolean',
        description: 'Disabled (disabled)',
    },
    enableCounter: {
        control: 'boolean',
        description: 'Enable character counter (enable-counter)',
    },
    helperText: {
        control: 'text',
        description: 'Helper text (helper-text)',
    },
    hideLabel: {
        control: 'boolean',
        description: 'Hide label (hide-label)',
    },
    invalid: {
        control: 'boolean',
        description: 'Invalid (invalid)',
    },
    invalidText: {
        control: 'text',
        description: 'Invalid text (invalid-text)',
    },
    label: {
        control: 'text',
        description: 'Label (label)',
    },
    maxCount: {
        control: 'number',
        description: 'Max character count (max-count)',
    },
    placeholder: {
        control: 'text',
        description: 'Placeholder text (placeholder)',
    },
    readonly: {
        control: 'boolean',
        description: 'Read only (readonly)',
    },
    rows: {
        control: 'number',
        description: 'Number of rows (rows)',
    },
    modelValue: {
        control: 'text',
        description: 'Value (value)',
    },
    warn: {
        control: 'boolean',
        description: 'Warn (warn)',
    },
    warnText: {
        control: 'text',
        description: 'Warn text (warn-text)',
    },
};

const meta: Meta<typeof CvTextArea> = {
    title: 'Components/Text Area',
    component: CvTextArea,
};

export default meta;
type Story = StoryObj<typeof CvTextArea>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvTextArea },
        setup() {
            return { args };
        },
        template: '<CvTextArea v-bind="args" />',
    }),
};

export const Skeleton: Story = {
    args: {
        hideLabel: false,
    },
    argTypes: {
        hideLabel: {
            control: 'boolean',
            description: 'Hide label (hide-label)',
        },
    },
    parameters: {
        controls: {
            include: ['hideLabel'],
        },
    },
    render: ({ hideLabel }) => ({
        setup() {
            return { hideLabel };
        },
        template: `<cds-textarea-skeleton :hide-label="hideLabel"></cds-textarea-skeleton>`,
    }),
};

export const WithLayer: Story = {
    args: { ...args, helperText: 'Optional helper text', enableCounter: false },
    argTypes,
    render: (args) => ({
        components: { CvTextArea, CvLayer },
        setup() {
            const value = ref('');
            return { args, value };
        },
        template: `
      <CvLayer with-background>
        <div class="cds--with-layer">
          <div class="cds--with-layer__background">
            <div class="cds--with-layer__label">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
              </svg>
              $background
            </div>
            <div class="cds--with-layer__content">
              <CvTextArea v-bind="args" v-model="value" />
              <CvLayer with-background>
                <div class="cds--with-layer__layer">
                  <div class="cds--with-layer__label">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                    </svg>
                    $layer-01
                  </div>
                  <div class="cds--with-layer__content">
                    <CvTextArea v-bind="args" v-model="value" />
                    <CvLayer with-background>
                      <div class="cds--with-layer__layer">
                        <div class="cds--with-layer__label">
                          <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0-.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                          </svg>
                          $layer-02
                        </div>
                        <div class="cds--with-layer__content">
                          <CvTextArea v-bind="args" v-model="value" />
                        </div>
                      </div>
                    </CvLayer>
                  </div>
                </div>
              </CvLayer>
            </div>
          </div>
        </div>
      </CvLayer>
    `,
    }),
};
