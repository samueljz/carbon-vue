import type { Meta, StoryObj } from '@storybook/vue3';
import { CvLink } from './index';
import { Launch16 } from '@carbon/icons-vue';

const sizeLabels = {
    sm: 'Small size (sm)',
    md: 'Medium size (md)',
    lg: 'Large size (lg)',
};
const sizeOptions = Object.keys(sizeLabels);

const meta: Meta<typeof CvLink> = {
    title: 'Components/Link',
    component: CvLink,
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Specify if the control should be disabled, or not',
        },
        inline: {
            control: 'boolean',
            description: 'Specify whether the link should render inline',
        },
        href: {
            control: 'text',
            description: 'Provide the href attribute for the <a> node',
        },
        size: {
            control: { type: 'radio', labels: sizeLabels },
            options: sizeOptions,
            description: "Specify the size of the Link. Currently supports either sm, 'md' (default) or 'lg' as an option.",
        },
        visited: {
            control: 'boolean',
            description: 'Specify whether you want the link to receive visited styles after the link has been clicked',
        },
    },
    args: {
        disabled: false,
        href: '#',
        inline: false,
        size: 'md',
        visited: false,
    },
};

export default meta;
type Story = StoryObj<typeof CvLink>;

export const Default: Story = {
    render: (args) => ({
        components: { CvLink },
        setup() {
            return { args };
        },
        template: '<CvLink v-bind="args">Link</CvLink>',
    }),
};

export const Inline: Story = {
    args: {
        inline: true,
    },
    render: (args) => ({
        components: { CvLink },
        setup() {
            return { args };
        },
        template: `
      <div>
        <CvLink v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CvLink>
        <p>
          Ut facilisis semper lorem in aliquet. Aliquam accumsan ante justo, vitae
          fringilla eros vehicula id. Ut at enim quis libero pharetra ullamcorper.
          Maecenas feugiat sodales arcu ut porttitor. In blandit ultricies est.
          Vivamus risus massa, cursus eu tellus sed, sagittis commodo nunc.
          <CvLink v-bind="args">Maecenas nunc mauris, consequat quis mauris sit amet,</CvLink>
          finibus suscipit nunc. Phasellus ex quam, placerat quis tempus sit amet,
          pretium nec sem. Etiam dictum scelerisque mauris, blandit ultrices erat
          pellentesque id. Quisque venenatis purus sit amet sodales condimentum.
          Duis at tincidunt orci. Ut velit ipsum, lacinia at ex quis, aliquet
          rhoncus purus. Praesent et scelerisque ligula.
        </p>
      </div>
    `,
    }),
};

export const PairedWithIcon: Story = {
    render: (args) => ({
        components: { CvLink, Launch16 },
        setup() {
            return { args };
        },
        template: `
      <CvLink v-bind="args">
        Carbon Docs
        <template #icon>
          <Launch16 slot="icon" />
        </template>
      </CvLink>
    `,
    }),
};
