import type { Meta, StoryObj } from '@storybook/vue3';
import { CvLink } from './index';

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
        components: { CvLink },
        setup() {
            return { args };
        },
        template: `
      <CvLink v-bind="args">
        Carbon Docs
        <template #icon>
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
            slot="icon"
          >
            <path d="M11.8 2.8L10.8 3.8 12.2 5.3 8 5.3 8 6.7 12.2 6.7 10.8 8.2 11.8 9.2 15 6z"></path>
            <path d="M11,8V11H5V5h3V3H5A2,2,0,0,0,3,5v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V8Z"></path>
          </svg>
        </template>
      </CvLink>
    `,
    }),
};
