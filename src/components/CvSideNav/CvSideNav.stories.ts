import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvSideNav } from '../CvSideNav';
import { CvSideNavItems } from '../CvSideNavItems';
import { CvSideNavLink } from '../CvSideNavLink';
import { CvSideNavDivider } from '../CvSideNavDivider';
import { CvSideNavMenu } from '../CvSideNavMenu';
import { CvSideNavMenuItem } from '../CvSideNavMenuItem';

const meta: Meta<typeof CvSideNav> = {
  title: 'Components/UI Shell/SideNav',
  component: CvSideNav,
};

export default meta;
type Story = StoryObj<typeof CvSideNav>;

export const Default: Story = {
  render: () => ({
    components: {
      CvSideNav,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavDivider,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvSideNav aria-label="Side navigation" expanded>
        <CvSideNavItems>
          <CvSideNavMenu title="L0 menu">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            <CvSideNavMenuItem href="javascript:void(0)">
              L0 menu item
            </CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)" aria-current="page">
              L0 menu item
            </CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">
              L0 menu item
            </CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavMenu title="L0 menu">
            <CvSideNavMenuItem href="javascript:void(0)">
              L0 menu item
            </CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">
              L0 menu item
            </CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">
              L0 menu item
            </CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavDivider />
          <CvSideNavLink href="javascript:void(0)">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            L0 link
          </CvSideNavLink>
          <CvSideNavLink href="javascript:void(0)">
            L0 link
          </CvSideNavLink>
        </CvSideNavItems>
      </CvSideNav>
    `,
  }),
};

export const SideNavRail: Story = {
  name: 'SideNav Rail',
  render: () => ({
    components: {
      CvSideNav,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvSideNav aria-label="Side navigation" collapse-mode="rail">
        <CvSideNavItems>
          <CvSideNavMenu title="Category title">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem aria-current="page" href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavMenu title="Category title">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavMenu title="Category title">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Link</CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavLink href="javascript:void(0)">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            Link
          </CvSideNavLink>
          <CvSideNavLink href="javascript:void(0)">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            Link
          </CvSideNavLink>
        </CvSideNavItems>
      </CvSideNav>
    `,
  }),
};

export const SideNavWLargeSideNavItems: Story = {
  name: 'SideNav w/ large side nav items',
  render: () => ({
    components: {
      CvSideNav,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvSideNav is-not-child-of-header aria-label="Side navigation" collapse-mode="fixed" expanded>
        <CvSideNavItems>
          <CvSideNavMenu large title="Large menu">
            <CvSideNavMenuItem href="javascript:void(0)">Menu 1</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Menu 2</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Menu 3</CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavLink large href="javascript:void(0)">Large link</CvSideNavLink>
          <CvSideNavMenu large title="Large menu w/icon">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            <CvSideNavMenuItem href="javascript:void(0)">Menu 1</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Menu 2</CvSideNavMenuItem>
            <CvSideNavMenuItem href="javascript:void(0)">Menu 3</CvSideNavMenuItem>
          </CvSideNavMenu>
          <CvSideNavLink large href="javascript:void(0)">
            <template #title-icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path>
              </svg>
            </template>
            Large link w/icon
          </CvSideNavLink>
        </CvSideNavItems>
      </CvSideNav>
    `,
  }),
};
