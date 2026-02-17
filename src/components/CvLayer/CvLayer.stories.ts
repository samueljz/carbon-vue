import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { ArgTypesConfig } from '../../types/storybook';
import { CvLayer } from './index';
import styles from './layer-story.scss?inline';

const argTypes: ArgTypesConfig = {
  level: {
    control: 'select',
    options: [0, 1, 2],
    description: 'Specify the layer level.',
  },
  withBackground: {
    control: 'boolean',
    description: 'Add a background color using the $layer-background token.',
  },
};

const meta: Omit<Meta<typeof CvLayer>, 'argTypes'> & {
  argTypes: ArgTypesConfig;
} = {
  title: 'Components/Layer',
  component: CvLayer,
  argTypes: argTypes,
};

export default meta;
type Story = StoryObj<typeof CvLayer>;

export const Default: Story = {
  render: () => ({
    components: { CvLayer },
    setup() {
      return { styles };
    },
    template: `
      <CvLayer>
        <div class="example-layer-test-component">Test component</div>
        <CvLayer>
          <div class="example-layer-test-component">Test component</div>
          <CvLayer>
            <div class="example-layer-test-component">Test component</div>
          </CvLayer>
        </CvLayer>
      </CvLayer>
      <component :is="'style'">{{ styles }}</component>
    `,
  }),
};

export const WithBackground: Story = {
  name: 'With background',
  render: () => ({
    components: { CvLayer },
    setup() {
      return { styles };
    },
    template: `
      <CvLayer with-background>
        <div class="example-layer-test-component-no-background">
          Test component
        </div>
        <CvLayer with-background>
          <div class="example-layer-test-component-no-background">
            Test component
          </div>
          <CvLayer with-background>
            <div class="example-layer-test-component-no-background">
              Test component
            </div>
          </CvLayer>
        </CvLayer>
      </CvLayer>
      <component :is="'style'">{{ styles }}</component>
    `,
  }),
};

export const CustomLevel: Story = {
  name: 'Custom level',
  args: {
    level: 2,
  },
  render: (args) => ({
    components: { CvLayer },
    setup() {
      return { args, styles };
    },
    template: `
      <CvLayer :level="args.level">
        <div class="example-layer-test-component">Test component</div>
      </CvLayer>
      <component :is="'style'">{{ styles }}</component>
    `,
  }),
};

export const UseLayer: Story = {
  name: 'useLayer',
  render: () => ({
    components: { CvLayer },
    setup() {
      const handleUseLayer = (event: CustomEvent<{ layer: HTMLElement; level: number }>) => {
        const { layer, level } = event.detail;
        const el = layer.querySelector('.example-layer-test-component.use-layer');
        if (el) {
          el.textContent = `The current layer level is: ${level + 1}`;
        }
      };

      return { handleUseLayer, styles };
    },
    template: `
      <CvLayer @cds-use-layer="handleUseLayer">
        <div class="example-layer-test-component use-layer"></div>
        <CvLayer @cds-use-layer="handleUseLayer">
          <div class="example-layer-test-component use-layer"></div>
        </CvLayer>
      </CvLayer>
      <component :is="'style'">{{ styles }}</component>
    `,
  }),
};
