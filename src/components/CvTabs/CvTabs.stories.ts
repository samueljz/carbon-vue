import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvTabs, CvTab } from './index';

const args = {
    contained: false,
    disabled: false,
    selectionMode: 'automatic',
};

const argTypes: ArgTypes = {
    disabled: {
        control: 'boolean',
        description: 'Disable tab selection',
    },
    contained: {
        control: 'boolean',
        description: 'Container type styling for tabs',
    },
    selectionMode: {
        control: 'select',
        description:
            'Choose whether or not to automatically change selection on focus when left/right arrow pressed.',
        options: ['automatic', 'manual'],
    },
};

const meta: Meta<typeof CvTabs> = {
    title: 'Components/Tabs',
    component: CvTabs,
};

export default meta;
type Story = StoryObj<typeof CvTabs>;

export const Default: Story = {
    args,
    argTypes,
    render: (args) => ({
        components: { CvTabs, CvTab },
        setup() { return { args }; },
        template: `
      <div>
        <CvTabs
          :disabled="args.disabled"
          :selection-mode="args.selectionMode"
          :type="args.contained ? 'contained' : undefined"
          value="all"
          @tabs-beingselected="args.disabled ? $event.preventDefault() : null"
        >
          <CvTab id="tab-all" target="panel-all" value="all">Tab label 1</CvTab>
          <CvTab id="tab-cloudFoundry" target="panel-cloudFoundry" value="cloudFoundry">Tab label 2</CvTab>
          <CvTab id="tab-staging" target="panel-staging" value="staging" disabled>Tab label 3</CvTab>
          <CvTab id="tab-dea" target="panel-dea" value="dea">Tab label 4</CvTab>
        </CvTabs>
        <div class="cds-ce-demo-devenv--tab-panels">
          <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden>
            Tab Panel 1
          </div>
          <div id="panel-cloudFoundry" role="tabpanel" aria-labelledby="tab-cloudFoundry" hidden>
            Tab Panel 2
          </div>
          <div id="panel-staging" role="tabpanel" aria-labelledby="tab-staging" hidden>
            Tab Panel 3
          </div>
          <div id="panel-dea" role="tabpanel" aria-labelledby="tab-dea" hidden>
            Tab Panel 4
          </div>
        </div>
      </div>
    `,
    }),
};

export const Contained: Story = {
    render: () => ({
        components: { CvTabs, CvTab },
        template: `
      <div>
        <CvTabs value="all" type="contained">
          <CvTab id="tab-all" target="panel-all" value="all">Tab label 1</CvTab>
          <CvTab id="tab-cloudFoundry" target="panel-cloudFoundry" value="cloudFoundry">Tab label 2</CvTab>
          <CvTab id="tab-staging" target="panel-staging" value="staging" disabled>Tab label 3</CvTab>
          <CvTab id="tab-dea" target="panel-dea" value="dea">Tab label 4</CvTab>
          <CvTab id="tab-five" target="panel-five" value="five">Tab label 5</CvTab>
        </CvTabs>
        <div class="cds-ce-demo-devenv--tab-panels">
          <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden>
            Tab Panel 1
          </div>
          <div id="panel-cloudFoundry" role="tabpanel" aria-labelledby="tab-cloudFoundry" hidden>
            Tab Panel 2
          </div>
          <div id="panel-staging" role="tabpanel" aria-labelledby="tab-staging" hidden>
            Tab Panel 3
          </div>
          <div id="panel-dea" role="tabpanel" aria-labelledby="tab-dea" hidden>
            Tab Panel 4
          </div>
          <div id="panel-five" role="tabpanel" aria-labelledby="tab-five" hidden>
            Tab Panel 5
          </div>
        </div>
      </div>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        template: `
      <cds-tabs-skeleton>
        <cds-tab-skeleton></cds-tab-skeleton>
        <cds-tab-skeleton></cds-tab-skeleton>
        <cds-tab-skeleton></cds-tab-skeleton>
        <cds-tab-skeleton></cds-tab-skeleton>
        <cds-tab-skeleton></cds-tab-skeleton>
      </cds-tabs-skeleton>
    `,
    }),
};
