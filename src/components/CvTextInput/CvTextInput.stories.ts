import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { CvTextInput, CvTextInputSkeleton } from './index';
import { CvLayer } from '../CvLayer';

const sizeLabels = {
    sm: 'Small (sm)',
    md: 'Medium (md)',
    lg: 'Large (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const typeLabels = {
    text: 'Text',
    email: 'Email',
    password: 'Password',
    tel: 'Tel',
    url: 'URL',
};
const typeOptions = Object.keys(typeLabels);

const meta: Meta<typeof CvTextInput> = {
    title: 'Components/Text Input',
    component: CvTextInput,
    argTypes: {
        label: {
            control: 'text',
            description: 'Specify the label text',
        },
        helperText: {
            control: 'text',
            description: 'Specify the helper text',
        },
        placeholder: {
            control: 'text',
            description: 'Specify the placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Specify whether the input is disabled',
        },
        readOnly: {
            control: 'boolean',
            description: 'Specify whether the input is read-only',
        },
        invalid: {
            control: 'boolean',
            description: 'Specify whether the input is invalid',
        },
        invalidText: {
            control: 'text',
            description: 'Specify the invalid text',
        },
        warn: {
            control: 'boolean',
            description: 'Specify whether to show a warning',
        },
        warnText: {
            control: 'text',
            description: 'Specify the warning text',
        },
        size: {
            control: { type: 'select', labels: sizeLabels },
            options: sizeOptions,
            description: 'Specify the input size',
        },
        type: {
            control: { type: 'select', labels: typeLabels },
            options: typeOptions,
            description: 'Specify the input type',
        },
        hideLabel: {
            control: 'boolean',
            description: 'Specify whether to hide the label',
        },
        enableCounter: {
            control: 'boolean',
            description: 'Specify whether to show the character count',
        },
        maxLength: {
            control: 'number',
            description: 'Specify the max length',
        },
    },
    args: {
        label: 'Label text',
        placeholder: 'Placeholder text',
        helperText: 'Helper text',
        disabled: false,
        readOnly: false,
        invalid: false,
        warn: false,
        size: 'md',
        type: 'text',
        hideLabel: false,
        enableCounter: false,
    },
};

export default meta;
type Story = StoryObj<typeof CvTextInput>;

export const Default: Story = {
    render: (args) => ({
        components: { CvTextInput },
        setup() {
            const value = ref('');
            return { args, value };
        },
        template: `
      <div style="width: 300px;">
        <CvTextInput v-bind="args" v-model="value" />
      </div>
    `,
    }),
};

export const ReadOnly: Story = {
    render: (args) => ({
        components: { CvTextInput },
        setup() {
            const value = ref("This is read only, you can't type more.");
            return { args, value };
        },
        template: `
      <div style="width: 300px;">
        <CvTextInput 
          v-bind="args" 
          v-model="value" 
          label="Read-only input"
          read-only
        />
      </div>
    `,
    }),
    parameters: {
        controls: {
            exclude: [
                'readOnly',
                'invalid',
                'invalidText',
                'warn',
                'warnText',
                'enableCounter',
                'disabled',
                'maxLength',
            ],
        },
    },
};

export const Skeleton: Story = {
    render: ({ hideLabel }) => ({
        components: { CvTextInputSkeleton },
        setup() {
            return { hideLabel };
        },
        template: `<CvTextInputSkeleton :hide-label="hideLabel" />`,
    }),
    args: {
        hideLabel: false,
    },
    argTypes: {
        hideLabel: {
            control: 'boolean',
            description: 'Hide label (hide-label)',
        },
    },
};

export const WithLayer: Story = {
    render: (args) => ({
        components: { CvTextInput, CvLayer },
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
              <div style="width: 300px;">
                <CvTextInput v-bind="args" v-model="value" />
              </div>
              <CvLayer with-background>
                <div class="cds--with-layer__layer">
                  <div class="cds--with-layer__label">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                    </svg>
                    $layer-01
                  </div>
                  <div class="cds--with-layer__content">
                    <div style="width: 300px;">
                      <CvTextInput v-bind="args" v-model="value" />
                    </div>
                    <CvLayer with-background>
                      <div class="cds--with-layer__layer">
                        <div class="cds--with-layer__label">
                          <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0-.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                          </svg>
                          $layer-02
                        </div>
                        <div class="cds--with-layer__content">
                          <div style="width: 300px;">
                            <CvTextInput v-bind="args" v-model="value" />
                          </div>
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
