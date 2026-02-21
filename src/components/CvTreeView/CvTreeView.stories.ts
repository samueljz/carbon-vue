import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvTreeView, CvTreeNode } from './index';
import '@carbon/web-components/es/components/button/index.js';
import Document16 from '@carbon/icons/es/document/16.js';
import Folder16 from '@carbon/icons/es/folder/16.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';

const sizes = {
  'XS size (xs)': 'xs',
  'Small size (sm)': 'sm',
};

const defaultArgs = {
  label: 'Tree View',
  size: 'sm',
  hideLabel: false,
};

const controls: ArgTypes = {
  size: {
    control: 'select',
    description: 'Specify the size of the Tree.',
    options: Object.values(sizes),
    mapping: sizes,
  },
  hideLabel: {
    control: 'boolean',
    description: 'Will hide label if true',
  },
  label: {
    control: 'text',
    description: 'label',
  },
};

const meta: Meta<typeof CvTreeView> = {
  title: 'Components/TreeView',
  component: CvTreeView,
};

export default meta;
type Story = StoryObj<typeof CvTreeView>;

export const Default: Story = {
  argTypes: controls,
  args: defaultArgs,
  decorators: [() => ({ template: '<div style="inline-size: 20rem"><story/></div>' })],
  render: (args) => ({
    components: { CvTreeView, CvTreeNode },
    setup() { return { args }; },
    template: `
      <CvTreeView :hide-label="args.hideLabel" :label="args.label" :size="args.size">
        <CvTreeNode label="Artificial intelligence"></CvTreeNode>
        <CvTreeNode label="Blockchain"></CvTreeNode>
        <CvTreeNode label="Business automation">
          <CvTreeNode label="Business process automation"></CvTreeNode>
          <CvTreeNode label="Business process mapping"></CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Business operations"></CvTreeNode>
        <CvTreeNode label="Cloud computing" is-expanded>
          <CvTreeNode label="Containers"></CvTreeNode>
          <CvTreeNode label="Databases"></CvTreeNode>
          <CvTreeNode label="DevOps">
            <CvTreeNode label="Solutions"></CvTreeNode>
            <CvTreeNode label="Case studies">
              <CvTreeNode label="Resources"></CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Data & Analytics" is-expanded>
          <CvTreeNode label="Big data"> </CvTreeNode>
          <CvTreeNode label="Business Intelligence"> </CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Models" is-expanded disabled>
          <CvTreeNode label="Audit"> </CvTreeNode>
          <CvTreeNode label="Monthly data"> </CvTreeNode>
          <CvTreeNode label="Data warehouse" is-expanded>
            <CvTreeNode label="Report samples"> </CvTreeNode>
            <CvTreeNode label="Sales performance"> </CvTreeNode>
          </CvTreeNode>
        </CvTreeNode>
      </CvTreeView>
    `,
  }),
};

export const withControlledExpansion: Story = {
  decorators: [() => ({ template: '<div style="inline-size: 20rem"><story/></div>' })],
  render: () => ({
    components: { CvTreeView, CvTreeNode },
    setup() {
      const expandAll = () => {
        document
          .querySelector('cds-tree-view[controlled]')
          ?.querySelectorAll('cds-tree-node')
          .forEach((node: any) => {
            node.isExpanded = true;
          });
      };
      const collapseAll = () => {
        document
          .querySelector('cds-tree-view[controlled]')
          ?.querySelectorAll('cds-tree-node')
          .forEach((node: any) => {
            node.isExpanded = false;
          });
      };
      return { expandAll, collapseAll };
    },
    template: `
      <div>
        <div style="margin-block-end: 1rem">
          <cds-button @click="expandAll">Expand All</cds-button>
          <cds-button @click="collapseAll">Collapse All</cds-button>
        </div>
        <CvTreeView controlled label="Tree View">
          <CvTreeNode label="Artificial intelligence"></CvTreeNode>
          <CvTreeNode label="Blockchain"></CvTreeNode>
          <CvTreeNode label="Business automation">
            <CvTreeNode label="Business process automation"></CvTreeNode>
            <CvTreeNode label="Business process mapping"></CvTreeNode>
          </CvTreeNode>
          <CvTreeNode label="Business operations"></CvTreeNode>
          <CvTreeNode label="Cloud computing" is-expanded>
            <CvTreeNode label="Containers"></CvTreeNode>
            <CvTreeNode label="Databases"></CvTreeNode>
            <CvTreeNode label="DevOps">
              <CvTreeNode label="Solutions"></CvTreeNode>
              <CvTreeNode label="Case studies">
                <CvTreeNode label="Resources"></CvTreeNode>
              </CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
          <CvTreeNode label="Data & Analytics" is-expanded>
            <CvTreeNode label="Big data"> </CvTreeNode>
            <CvTreeNode label="Business Intelligence"> </CvTreeNode>
          </CvTreeNode>
          <CvTreeNode label="Models" is-expanded disabled>
            <CvTreeNode label="Audit"> </CvTreeNode>
            <CvTreeNode label="Monthly data"> </CvTreeNode>
            <CvTreeNode label="Data warehouse" is-expanded>
              <CvTreeNode label="Report samples"> </CvTreeNode>
              <CvTreeNode label="Sales performance"> </CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
        </CvTreeView>
      </div>
    `,
  }),
};

export const withIcons: Story = {
  decorators: [() => ({ template: '<div style="inline-size: 20rem"><story/></div>' })],
  render: () => ({
    components: { CvTreeView, CvTreeNode },
    setup() {
      return {
        documentIconHtml: iconLoader(Document16, { slot: 'icon' })?.strings[0] ?? '',
        folderIconHtml: iconLoader(Folder16, { slot: 'icon' })?.strings[0] ?? ''
      };
    },
    template: `
      <CvTreeView label="Tree View">
        <CvTreeNode label="Artificial intelligence">
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
        </CvTreeNode>
        <CvTreeNode label="Blockchain">
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
        </CvTreeNode>
        <CvTreeNode label="Business automation">
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
          <CvTreeNode label="Business process automation">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="Business process mapping">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Business operations">
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
        </CvTreeNode>
        <CvTreeNode label="Cloud computing" is-expanded>
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
          <CvTreeNode label="Containers">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="Databases">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="DevOps">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
            <CvTreeNode label="Solutions">
              <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
            </CvTreeNode>
            <CvTreeNode label="Case studies">
              <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
              <CvTreeNode label="Resources">
                <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
              </CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Data & Analytics" is-expanded>
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
          <CvTreeNode label="Big data">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="Business Intelligence">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
        </CvTreeNode>
        <CvTreeNode label="Models" is-expanded disabled>
          <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
          <CvTreeNode label="Audit">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="Monthly data">
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
          </CvTreeNode>
          <CvTreeNode label="Data warehouse" is-expanded>
            <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M28,8H17.8L15,5.2C14.6,4.8,14.1,4.6,13.6,4.6H4C2.9,4.6,2,5.5,2,6.6v18.8C2,26.5,2.9,27.4,4,27.4h24c1.1,0,2-0.9,2-2V10C30,8.9,29.1,8,28,8z M28,25.4H4V6.6h9.6l2.8,2.8C16.8,9.8,17.3,10,17.8,10H28V25.4z"></path></svg>
            <CvTreeNode label="Report samples">
              <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
            </CvTreeNode>
            <CvTreeNode label="Sales performance">
              <svg slot="icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32"><path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v8h8V28z"></path></svg>
            </CvTreeNode>
          </CvTreeNode>
        </CvTreeNode>
      </CvTreeView>
    `,
  }),
};

export const withLinks: Story = {
  render: () => ({
    components: { CvTreeView, CvTreeNode },
    setup() {
      const handleSelected = (e: any) => {
        const h3 = document.querySelector('main h3');
        if (h3) {
          // detail.href doesn't strictly exist sometimes, usually it is detail.value or the node label. 
          // Let's just use e.target.label or e.detail?.item?.label if we can, or match what CWC does.
          // Actually, CWC Tree Node detail is un-specified here, but e.target is the node.
          h3.innerHTML = 'The current page is: ' + (e.target as any).label;
        }
      };

      const preventDefault = (e: any) => e.preventDefault();

      return { handleSelected, preventDefault };
    },
    template: `
      <div id="page-body" style="display: flex">
        <CvTreeView
          links
          hide-label
          label="Tree view"
          style="inline-size: 20rem"
          @cds-tree-node-selected="handleSelected"
        >
          <CvTreeNode
            label="Artificial intelligence"
            href="/artificial-intelligence"
            selected
            active
            :on-click="preventDefault"
          ></CvTreeNode>
          <CvTreeNode
            label="Blockchain"
            href="/blockchain"
            :on-click="preventDefault"
          ></CvTreeNode>
          <CvTreeNode
            label="Business automation"
            href="/business-automation"
            :on-click="preventDefault"
          >
            <CvTreeNode
              label="Business process automation"
              href="/business-process-automation"
              :on-click="preventDefault"
            ></CvTreeNode>
            <CvTreeNode
              label="Business process mapping"
              href="/business-process-mapping"
              :on-click="preventDefault"
            ></CvTreeNode>
          </CvTreeNode>
          <CvTreeNode
            label="Business operations"
            href="/business-operations"
            :on-click="preventDefault"
          ></CvTreeNode>
          <CvTreeNode
            label="Cloud computing"
            href="/cloud-computing"
            is-expanded
            :on-click="preventDefault"
          >
            <CvTreeNode
              label="Containers"
              href="/containers"
              :on-click="preventDefault"
            ></CvTreeNode>
            <CvTreeNode
              label="Databases"
              href="/databases"
              :on-click="preventDefault"
            ></CvTreeNode>
            <CvTreeNode
              label="DevOps"
              href="/devops"
              :on-click="preventDefault"
            >
              <CvTreeNode
                label="Solutions"
                href="/solutions"
                :on-click="preventDefault"
              ></CvTreeNode>
              <CvTreeNode
                label="Case studies"
                href="/case-studies"
                :on-click="preventDefault"
              >
                <CvTreeNode
                  label="Resources"
                  href="/resources"
                  :on-click="preventDefault"
                ></CvTreeNode>
              </CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
          <CvTreeNode
            label="Data & Analytics"
            href="/data-analytics"
            is-expanded
            :on-click="preventDefault"
          >
            <CvTreeNode
              label="Big data"
              href="/big-data"
              :on-click="preventDefault"
            >
            </CvTreeNode>
            <CvTreeNode
              label="Business Intelligence"
              href="/business-intelligence"
              :on-click="preventDefault"
            >
            </CvTreeNode>
          </CvTreeNode>
          <CvTreeNode
            label="Models"
            is-expanded
            disabled
            href="/models"
            :on-click="preventDefault"
          >
            <CvTreeNode
              label="Audit"
              href="/audit"
              :on-click="preventDefault"
            >
            </CvTreeNode>
            <CvTreeNode
              label="Monthly data"
              href="/monthly-data"
              :on-click="preventDefault"
            >
            </CvTreeNode>
            <CvTreeNode
              label="Data warehouse"
              is-expanded
              href="/data-warehouse"
              :on-click="preventDefault"
            >
              <CvTreeNode
                label="Report samples"
                href="/report-samples"
                :on-click="preventDefault"
              >
              </CvTreeNode>
              <CvTreeNode
                label="Sales performance"
                href="/sales-performance"
                :on-click="preventDefault"
              >
              </CvTreeNode>
            </CvTreeNode>
          </CvTreeNode>
        </CvTreeView>
        <main style="flex: 1">
          <h3>The current page is: Artificial intelligence</h3>
        </main>
      </div>
    `,
  }),
};
