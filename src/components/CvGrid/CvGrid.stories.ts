import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvGrid } from './index';
import { CvColumn } from '../CvColumn';
import './CvGrid-story.scss';

const alignments = {
  Start: 'start',
  Center: 'center',
  End: 'end',
};

const defaultArgs = {
  align: 'center',
  condensed: false,
  narrow: false,
  fullWidth: false,
};

const argTypes: ArgTypes = {
  align: {
    control: 'radio',
    description: 'Specify grid alignment. Default is center',
    options: Object.values(alignments),
  },
  condensed: {
    control: 'boolean',
    description: 'Collapse gutter to 1px.',
  },
  narrow: {
    control: 'boolean',
    description: 'Hangs 16px into gutter.',
  },
  fullWidth: {
    control: 'boolean',
    description: 'Remove the default max width',
  },
};

const meta: Meta<typeof CvGrid> = {
  title: 'Elements/Grid',
  component: CvGrid,
};

export default meta;
type Story = StoryObj<typeof CvGrid>;

export const Default: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const Condensed: Story = {
  args: { ...defaultArgs, condensed: true },
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  args: { ...defaultArgs, fullWidth: true },
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const Narrow: Story = {
  args: { ...defaultArgs, narrow: true },
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
          <CvColumn class="sb-column" sm="4">Span 4</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const MixedGutterModes: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid class="sb-grid">
          <CvColumn class="sb-column" span="8">
            <CvGrid class="sb-sub-grid">
              <CvColumn class="sb-column" span="8">
                <CvGrid class="sb-sub-grid" narrow>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column" span="4">
                    <CvGrid class="sb-sub-grid">
                      <CvColumn class="sb-column">Text</CvColumn>
                      <CvColumn class="sb-column">Text</CvColumn>
                      <CvColumn class="sb-column" span="2">
                        <CvGrid class="sb-sub-grid" condensed>
                          <CvColumn class="sb-column">Text</CvColumn>
                          <CvColumn class="sb-column">Text</CvColumn>
                        </CvGrid>
                      </CvColumn>
                    </CvGrid>
                  </CvColumn>
                </CvGrid>
              </CvColumn>
            </CvGrid>
          </CvColumn>
        </CvGrid>
        <CvGrid class="sb-grid" narrow>
          <CvColumn class="sb-column" span="8">
            <CvGrid class="sb-sub-grid">
              <CvColumn class="sb-column" span="4"></CvColumn>
              <CvColumn class="sb-column" span="4">
                <CvGrid class="sb-sub-grid" narrow>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                  <CvColumn class="sb-column">Text</CvColumn>
                </CvGrid>
              </CvColumn>
            </CvGrid>
          </CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const GridStartEnd: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="span:1 start:4" md="span:2 start:7" lg="span:4 start:13">span, start</CvColumn>
          <CvColumn class="sb-column" sm="span:2 end:5" md="span:4 end:9" lg="span:8 end:17">span, end</CvColumn>
          <CvColumn class="sb-column" sm="start:1 end:4" md="start:3 end:9" lg="start:5 end:17">start, end</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const Offset: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="span:0" md="span:2 start:7" lg="span:4 start:13">1</CvColumn>
          <CvColumn class="sb-column" sm="span:2 start:3" md="span:4 start:5" lg="span:8 start:9">2</CvColumn>
          <CvColumn class="sb-column" sm="span:3 start:2" md="span:6 start:3" lg="span:12 start:5">3</CvColumn>
          <CvColumn class="sb-column" sm="span:4" md="span:8" lg="span:16">4</CvColumn>
          <CvColumn class="sb-column" sm="span:25% start:2" md="span:50% start:3" lg="span:75% start:5">5</CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const Responsive: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="2" md="4" lg="6">
            <p>Small: Span 2 of 4</p>
            <p>Medium: Span 4 of 8</p>
            <p>Large: Span 6 of 16</p>
          </CvColumn>
          <CvColumn class="sb-column" sm="2" md="2" lg="3">
            <p>Small: Span 2 of 4</p>
            <p>Medium: Span 2 of 8</p>
            <p>Large: Span 3 of 16</p>
          </CvColumn>
          <CvColumn class="sb-column" sm="0" md="2" lg="3">
            <p>Small: Span 0 of 4</p>
            <p>Medium: Span 2 of 8</p>
            <p>Large: Span 3 of 16</p>
          </CvColumn>
          <CvColumn class="sb-column" sm="0" md="0" lg="4">
            <p>Small: Span 0 of 4</p>
            <p>Medium: Span 0 of 8</p>
            <p>Large: Span 4 of 16</p>
          </CvColumn>
          <CvColumn class="sb-column" sm="25%" md="50%" lg="75%">
            <p>Small: Span 25%</p>
            <p>Medium: Span 50%</p>
            <p>Large: Span 75%</p>
          </CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

export const Subgrid: Story = {
  args: defaultArgs,
  argTypes,
  render: (args) => ({
    components: { CvGrid, CvColumn },
    setup() {
      return { args };
    },
    template: `
      <div class="sb-css-grid-container" style="width: 300px;">
        <CvGrid v-bind="args" class="sb-grid">
          <CvColumn class="sb-column" sm="2" md="4" lg="3">
            <p>Small: Span 2 of 4</p>
            <p>Medium: Span 4 of 8</p>
            <p>Large: Span 3 of 16</p>
          </CvColumn>
          <CvColumn class="sb-column" sm="2" md="4" lg="10">
            <p>Small: Span 2 of 4</p>
            <p>Medium: Span 4 of 8</p>
            <p>Large: Span 10 of 16</p>
            <CvGrid class="sb-sub-grid">
              <CvColumn class="sb-column" sm="1" md="1" lg="2">
                <p>sm=1 md=1 lg=2</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="1" md="1" lg="2">
                <p>sm=1 md=1 lg=2</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="1" lg="1">
                <p>sm=0 md=1 lg=1</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="1" lg="1">
                <p>sm=0 md=1 lg=1</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="0" lg="1">
                <p>sm=0 md=0 lg=1</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="0" lg="1">
                <p>sm=0 md=0 lg=1</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="0" lg="1">
                <p>sm=0 md=0 lg=1</p>
              </CvColumn>
              <CvColumn class="sb-column" sm="0" md="0" lg="1">
                <p>sm=0 md=0 lg=1</p>
              </CvColumn>
            </CvGrid>
          </CvColumn>
          <CvColumn class="sb-column" sm="0" md="0" lg="3">
            <p>Small: Span 0 of 4</p>
            <p>Medium: Span 0 of 8</p>
            <p>Large: Span 3 of 16</p>
          </CvColumn>
        </CvGrid>
      </div>
    `,
  }),
};

