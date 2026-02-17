import type { Meta, StoryObj } from '@storybook/vue3';
import '@carbon/web-components/es/components/stack/index.js';
import '@carbon/web-components/es/components/form/index.js';
import { CvFormGroup } from './index';
import { CvTextInput } from '../CvTextInput';
import { CvButton } from '../CvButton';
import { CvRadioButtonGroup, CvRadioButton } from '../CvRadioButton';

const args = {
  invalid: false,
  legendText: 'FormGroup Legend',
  message: false,
  messageText: '',
};

const argTypes = {
  invalid: {
    control: 'boolean',
    description: 'Specify whether the Form Group is invalid',
  },
  legendText: {
    control: 'text',
    description: 'Provide the text to be rendered inside of the fieldset.',
  },
  message: {
    control: 'boolean',
    description:
      'Specify whether the message should be displayed in the form group.',
  },
  messageText: {
    control: 'text',
    description: 'Provide the text for the message in the form group.',
  },
};

const meta: Meta<typeof CvFormGroup> = {
  title: 'Components/Form Group',
  component: CvFormGroup,
};

export default meta;
type Story = StoryObj<typeof CvFormGroup>;

export const Default: Story = {
  args,
  argTypes,
  render: (args) => ({
    components: { CvFormGroup, CvTextInput, CvButton, CvRadioButtonGroup, CvRadioButton },
    setup() {
      return { args };
    },
    template: `
      <CvFormGroup v-bind="args">
        <cds-stack gap="7">
          <CvTextInput label="First Name" />
          <CvTextInput label="Last Name" />
          <CvRadioButtonGroup
            legend-text="Radio button heading"
            name="radio-button-group"
            value="radio-1"
          >
            <CvRadioButton
              label-text="Option 1"
              value="radio-1"
              id="radio-1"
            />
            <CvRadioButton
              label-text="Option 2"
              value="radio-2"
              id="radio-2"
            />
            <CvRadioButton
              label-text="Option 3"
              value="radio-3"
              id="radio-3"
            />
          </CvRadioButtonGroup>
          <cds-form-item>
            <CvButton>Submit</CvButton>
          </cds-form-item>
        </cds-stack>
      </CvFormGroup>
    `,
  }),
};
