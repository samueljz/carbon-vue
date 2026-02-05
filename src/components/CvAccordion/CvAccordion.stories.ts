import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { CvAccordion, CvAccordionItem, CvAccordionSkeleton } from './index';
import { CvButton, CvButtonSet } from '../CvButton';
import { CvLayer } from '../CvLayer';

const sizeLabels = {
  sm: 'Small size (sm)',
  md: 'Medium size (md)',
  lg: 'Large size (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const meta: Meta<typeof CvAccordion> = {
  title: 'Components/Accordion',
  component: CvAccordion,
  argTypes: {
    alignment: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Specify the alignment of the accordion heading title and chevron.',
    },
    disabled: {
      control: 'boolean',
      description: 'Specify whether an individual AccordionItem should be disabled.',
    },
    isFlush: {
      control: 'boolean',
      description: 'Specify whether Accordion text should be flush, default is false, does not work with align="start".',
    },
    size: {
      control: { type: 'select', labels: sizeLabels },
      options: sizeOptions,
      description: 'Specify the size of the Accordion.',
    },
  },
  args: {
    alignment: 'end',
    disabled: false,
    isFlush: false,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof CvAccordion>;

export const Default: Story = {
  render: (args) => ({
    components: { CvAccordion, CvAccordionItem },
    setup() {
      return { args };
    },
    template: `
      <CvAccordion v-bind="args">
        <CvAccordionItem title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </CvAccordionItem>
        <CvAccordionItem title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </CvAccordionItem>
        <CvAccordionItem title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </CvAccordionItem>
        <CvAccordionItem title="Section 4 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </CvAccordionItem>
      </CvAccordion>
    `,
  }),
};

export const Controlled: Story = {
  render: (args) => ({
    components: { CvAccordion, CvAccordionItem, CvButton, CvButtonSet },
    setup() {
      const expandAll = () => {
        document.querySelectorAll('cds-accordion-item[controlled]').forEach((item) => {
          item.setAttribute('open', '');
        });
      };
      const collapseAll = () => {
        document.querySelectorAll('cds-accordion-item[controlled]').forEach((item) => {
          item.removeAttribute('open');
        });
      };
      return { args, expandAll, collapseAll };
    },
    template: `
      <CvButtonSet style="margin-bottom: 1rem;">
        <CvButton style="max-inline-size: 13.25rem" @click="expandAll">Click to expand all</CvButton>
        <CvButton style="max-inline-size: 13.25rem" @click="collapseAll">Click to collapse all</CvButton>
      </CvButtonSet>

      <CvAccordion v-bind="args">
        <CvAccordionItem controlled title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CvAccordionItem>
        <CvAccordionItem controlled title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CvAccordionItem>
        <CvAccordionItem controlled title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CvAccordionItem>
        <CvAccordionItem controlled title="Section 4 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CvAccordionItem>
      </CvAccordion>
    `,
  }),
};

export const Skeleton: Story = {
  render: (args) => ({
    components: { CvAccordionSkeleton },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 500px">
        <CvAccordionSkeleton :alignment="args.alignment" :is-flush="args.isFlush" />
      </div>
    `,
  }),
  args: {
    alignment: 'end',
    isFlush: false,
  },
  argTypes: {
    alignment: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Specify the alignment of the accordion heading title and chevron.',
    },
    isFlush: {
      control: 'boolean',
      description: 'Specify whether Accordion text should be flush.',
    },
  },
};

export const WithLayer: Story = {
  render: (args) => ({
    components: { CvAccordion, CvAccordionItem, CvLayer },
    setup() {
      return { args };
    },
    template: `
      <CvLayer with-background>
        <div class="cds--with-layer">
          <div class="cds--with-layer__background">
            <div class="cds--with-layer__label">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0-.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
              </svg>
              $background
            </div>
            <div class="cds--with-layer__content">
              <CvAccordion v-bind="args">
                <CvAccordionItem title="Section 1 title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CvAccordionItem>
              </CvAccordion>
              <CvLayer with-background>
                <div class="cds--with-layer__layer">
                  <div class="cds--with-layer__label">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0-.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                    </svg>
                    $layer-01
                  </div>
                  <div class="cds--with-layer__content">
                    <CvAccordion v-bind="args">
                      <CvAccordionItem title="Section 1 title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </CvAccordionItem>
                    </CvAccordion>
                    <CvLayer with-background>
                      <div class="cds--with-layer__layer">
                        <div class="cds--with-layer__label">
                          <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0-.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                          </svg>
                          $layer-02
                        </div>
                        <div class="cds--with-layer__content">
                          <CvAccordion v-bind="args">
                            <CvAccordionItem title="Section 1 title">
                              Lorem ipsum dolor sit amet.
                            </CvAccordionItem>
                          </CvAccordion>
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
