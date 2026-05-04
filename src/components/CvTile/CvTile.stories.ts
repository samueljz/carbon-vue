import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
  CvTile,
  CvClickableTile,
  CvExpandableTile,
  CvRadioTile,
  CvSelectableTile,
  CvTileGroup,
  TILE_COLOR_SCHEME
} from './index';

import Launch16 from '@carbon/icons-vue/es/launch/16';


const colorSchemes = Object.values(TILE_COLOR_SCHEME);

const argTypes: ArgTypes = {
  colorScheme: {
    control: 'select',
    options: colorSchemes,
    description: 'The color scheme.',
  },
  hasRoundedCorners: {
    control: 'boolean',
    description: 'Specify if the Tile component should be rendered with rounded corners.',
  },
};

const meta: Meta<typeof CvTile> = {
  title: 'Components/Tile',
  component: CvTile,
};

export default meta;
type Story = StoryObj<typeof CvTile>;

export const Default: Story = {
  argTypes,
  render: (args) => ({
    components: {
      CvTile,
    },
    setup() {
      return { args };
    },
    template: `
      <CvTile
        :color-scheme="args.colorScheme"
        :has-rounded-corners="args.hasRoundedCorners"
      >
        Default tile
        <br />
        <br />
        <a href="https://carbondesignsystem.com">Link</a>
      </CvTile>
    `,
  }),
};

export const Clickable = {
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'true if the clickable tile should be disabled.',
    },
  },
  render: (args: any) => ({
    components: {
      CvClickableTile,
    },
    setup() {
      return { args };
    },
    template: `
      <CvClickableTile
        href="https://www.carbondesignsystem.com/"
        :disabled="args.disabled"
        :color-scheme="args.colorScheme"
        :has-rounded-corners="args.hasRoundedCorners"
      >
        Clickable tile
      </CvClickableTile>
    `,
  }),
};

export const ClickableWithCustomIcon = {
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'true if the clickable tile should be disabled.',
    },
  },
  render: (args: any) => ({
    components: {
      CvClickableTile,
      Launch16,
    },
    setup() {
      return { args };
    },
    template: `
      <CvClickableTile
        href="https://www.carbondesignsystem.com/"
        :disabled="args.disabled"
        :color-scheme="args.colorScheme"
        :has-rounded-corners="args.hasRoundedCorners"
      >
        Clickable tile <Launch16 slot="icon" />
      </CvClickableTile>
    `,
  }),
};

export const Expandable = {
  argTypes: {
    ...argTypes,
    expanded: {
      control: 'boolean',
      description: 'true to expand this expandable tile.',
    },
    withInteractive: {
      control: 'boolean',
      description: 'true to show interactive expandable tile.',
    }
  },
  render: (args: any) => ({
    components: {
      CvExpandableTile,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 400px">
        <CvExpandableTile
          :expanded="args.expanded"
          :with-interactive="args.withInteractive"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          <template #above-the-fold-content>
            <div style="height: 200px">
              Above the fold content here
            </div>
          </template>
          <div style="height: 300px">
            Below the fold content here
          </div>
        </CvExpandableTile>
      </div>
    `,
  }),
};

export const ExpandableWithInteractive = {
  argTypes: {
    ...argTypes,
    expanded: {
      control: 'boolean',
      description: 'true to expand this expandable tile.',
    }
  },
  render: (args: any) => ({
    components: {
      CvExpandableTile,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 400px">
        <CvExpandableTile
          with-interactive
          :expanded="args.expanded"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          <template #above-the-fold-content>
            <div style="height: 200px; width: 200px">
              Above the fold content here
              <div style="padding-top:1rem;">
                <button>Example</button>
              </div>
            </div>
          </template>
          <div style="height: 200px; width: 200px">
            Below the fold content here
            <input type="text" />
          </div>
        </CvExpandableTile>
      </div>
    `,
  }),
};

export const MultiSelect = {
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'true if the selectable tile should be disabled.',
    }
  },
  render: (args: any) => ({
    components: {
      CvTileGroup,
      CvSelectableTile,
    },
    setup() {
      return { args };
    },
    template: `
      <CvTileGroup>
        <CvSelectableTile
          name="selectable-tile-1"
          value="option-1"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          Option 1
        </CvSelectableTile>
        <CvSelectableTile
          name="selectable-tile-2"
          value="option-2"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          Option 2
        </CvSelectableTile>
        <CvSelectableTile
          name="selectable-tile-3"
          value="option-3"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          Option 3
        </CvSelectableTile>
      </CvTileGroup>
    `,
  }),
};

export const Radio = {
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'true if the radio tile should be disabled.',
    }
  },
  render: (args: any) => ({
    components: {
      CvTileGroup,
      CvRadioTile,
    },
    setup() {
      return { args };
    },
    template: `
      <CvTileGroup>
        <template #legend>
          <legend>Radio tile group</legend>
        </template>
        <CvRadioTile
          name="options"
          value="option-1"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          Option 1
        </CvRadioTile>
        <CvRadioTile
          name="options"
          value="option-2"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
          selected
        >
          Option 2
        </CvRadioTile>
        <CvRadioTile
          name="options"
          value="option-3"
          :disabled="args.disabled"
          :color-scheme="args.colorScheme"
          :has-rounded-corners="args.hasRoundedCorners"
        >
          Option 3
        </CvRadioTile>
      </CvTileGroup>
    `,
  }),
};

export const Selectable = {
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'true if the selectable tile should be disabled.',
    }
  },
  render: (args: any) => ({
    components: {
      CvSelectableTile,
    },
    setup() {
      return { args };
    },
    template: `
      <CvSelectableTile :disabled="args.disabled">
        Selectable
      </CvSelectableTile>
    `,
    }),
};


