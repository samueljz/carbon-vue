import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { CvHeader } from '../CvHeader';
import { CvHeaderName } from '../CvHeaderName';
import { CvHeaderNav } from '../CvHeaderNav';
import { CvHeaderNavItem } from '../CvHeaderNavItem';
import { CvHeaderMenu } from '../CvHeaderMenu';
import { CvHeaderMenuItem } from '../CvHeaderMenuItem';
import { CvHeaderMenuButton } from '../CvHeaderMenuButton';
import { CvHeaderGlobalAction } from '../CvHeaderGlobalAction';
import { CvHeaderPanel } from '../CvHeaderPanel';
import { CvHeaderSideNavItems } from '../CvHeaderSideNavItems';
import { CvSwitcher } from '../CvSwitcher';
import { CvSwitcherItem } from '../CvSwitcherItem';
import { CvSwitcherDivider } from '../CvSwitcherDivider';
import { CvSideNavItems } from '../CvSideNavItems';
import { CvSideNavLink } from '../CvSideNavLink';
import { CvSideNavMenu } from '../CvSideNavMenu';
import { CvSideNavMenuItem } from '../CvSideNavMenuItem';

const meta: Meta = {
  title: 'Components/UI Shell/Header',
};

export default meta;

const StoryContent = {
  template: `
    <main class="cds--content cds-ce-demo-devenv--ui-shell-content">
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-13">
            <h2 style="margin: 0 0 30px">Purpose and function</h2>
            <p>
              The shell is perhaps the most crucial piece of any UI built with
              <a href="www.carbondesignsystem.com"> Carbon</a>. It contains the
              shared navigation framework for the entire design system and ties
              the products in IBM’s portfolio together in a cohesive and elegant
              way.
            </p>
          </div>
        </div>
      </div>
    </main>
  `,
};

export const HeaderBase: StoryObj = {
  render: () => ({
    components: { CvHeader, CvHeaderName },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderName href="javascript:void(0)" prefix="IBM">[Platform]</CvHeaderName>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWActions: StoryObj = {
  name: 'Header Base w/ Actions',
  render: () => ({
    components: { CvHeader, CvHeaderName, CvHeaderGlobalAction },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderName href="javascript:void(0)" prefix="IBM">[Platform]</CvHeaderName>
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction aria-label="Notification" tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction aria-label="App Switcher" tooltip-text="App Switcher" tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWNavigation: StoryObj = {
  name: 'Header Base w/ Navigation',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderNav,
      CvHeaderNavItem,
      CvHeaderMenu,
      CvHeaderMenuItem,
      CvHeaderMenuButton
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderMenuButton button-label-active="Close menu" button-label-inactive="Open menu"></CvHeaderMenuButton>
        <CvHeaderName href="javascript:void(0)" prefix="IBM">[Platform]</CvHeaderName>
        <CvHeaderNav menu-bar-label="IBM [Platform]">
          <CvHeaderNavItem href="javascript:void(0)">Link 1</CvHeaderNavItem>
          <CvHeaderNavItem href="javascript:void(0)">Link 2</CvHeaderNavItem>
          <CvHeaderNavItem href="javascript:void(0)">Link 3</CvHeaderNavItem>
          <CvHeaderMenu menu-label="Link 4" trigger-content="Link 4">
            <CvHeaderMenuItem href="javascript:void(0)">Sub-link 1</CvHeaderMenuItem>
            <CvHeaderMenuItem :is-active="true" href="javascript:void(0)">Sub-link 2</CvHeaderMenuItem>
            <CvHeaderMenuItem href="javascript:void(0)">Sub-link 3</CvHeaderMenuItem>
          </CvHeaderMenu>
        </CvHeaderNav>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWActionsRightPanel: StoryObj = {
  name: 'Header Base w/ Actions and Right Panel',
  render: () => ({
    components: { CvHeader, CvHeaderName, CvHeaderGlobalAction, CvHeaderPanel },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderName href="javascript:void(0)" prefix="IBM">[Platform]</CvHeaderName>
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            panel-id="notification-panel"
            aria-label="Notification"
            tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
        <CvHeaderPanel
          id="notification-panel"
          aria-label="Header Panel"></CvHeaderPanel>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWActionsSwitcher: StoryObj = {
  name: 'Header Base w/ Actions and Switcher',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderGlobalAction,
      CvHeaderPanel,
      CvSwitcher,
      CvSwitcherItem,
      CvSwitcherDivider,
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderName href="javascript:void(0)" prefix="IBM">[Platform]</CvHeaderName>
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="Notification"
            tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            button-label-active="Close switcher"
            button-label-inactive="Open switcher"
            tooltip-text="Open switcher"
            panel-id="switcher-panel"
            tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
        <CvHeaderPanel id="switcher-panel" aria-label="Header Panel">
          <CvSwitcher aria-label="Switcher Container">
            <CvSwitcherItem aria-label="Link 1" href="javascript:void(0)"
              >Link 1</CvSwitcherItem
            >
            <CvSwitcherDivider></CvSwitcherDivider>
            <CvSwitcherItem aria-label="Link 2" href="javascript:void(0)"
              >Link 2</CvSwitcherItem
            >
            <CvSwitcherItem aria-label="Link 3" href="javascript:void(0)"
              >Link 3</CvSwitcherItem
            >
            <CvSwitcherItem aria-label="Link 4" href="javascript:void(0)"
              >Link 4</CvSwitcherItem
            >
            <CvSwitcherItem aria-label="Link 5" href="javascript:void(0)"
              >Link 5</CvSwitcherItem
            >
            <CvSwitcherDivider></CvSwitcherDivider>
            <CvSwitcherItem aria-label="Link 6" href="javascript:void(0)"
              >Link 6</CvSwitcherItem
            >
          </CvSwitcher>
        </CvHeaderPanel>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWNavigationActionsAndSideNav: StoryObj = {
  name: 'Header Base w/ Navigation, Actions and SideNav',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderNav,
      CvHeaderNavItem,
      CvHeaderMenu,
      CvHeaderMenuItem,
      CvHeaderMenuButton,
      CvHeaderGlobalAction,
      CvHeaderSideNavItems,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderMenuButton
          button-label-active="Close menu"
          button-label-inactive="Open menu"></CvHeaderMenuButton>
        <CvHeaderName href="javascript:void(0)" prefix="IBM"
          >[Platform]</CvHeaderName
        >
        <CvHeaderNav menu-bar-label="IBM [Platform]">
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 1</CvHeaderNavItem
          >
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 2</CvHeaderNavItem
          >
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 3</CvHeaderNavItem
          >
          <CvHeaderMenu menu-label="Link 4" trigger-content="Link 4">
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 1</CvHeaderMenuItem
            >
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 2</CvHeaderMenuItem
            >
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 3</CvHeaderMenuItem
            >
          </CvHeaderMenu>
        </CvHeaderNav>
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="Notification"
            tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="responsive">
          <CvSideNavItems>
            <CvHeaderSideNavItems has-divider>
              <CvSideNavLink href="javascript:void(0)">
                Link 1
              </CvSideNavLink>
              <CvSideNavLink href="javascript:void(0)">
                Link 2
              </CvSideNavLink>
              <CvSideNavLink href="javascript:void(0)">
                Link 3
              </CvSideNavLink>
              <CvSideNavMenu title="Link 4">
                <CvSideNavMenuItem href="javascript:void(0)">
                  Sub-link 1
                </CvSideNavMenuItem>
                <CvSideNavMenuItem href="javascript:void(0)">
                  Sub-link 2
                </CvSideNavMenuItem>
                <CvSideNavMenuItem href="javascript:void(0)">
                  Sub-link 3
                </CvSideNavMenuItem>
              </CvSideNavMenu>
            </CvHeaderSideNavItems>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem active href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavLink href="javascript:void(0)">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              Link</CvSideNavLink>
            <CvSideNavLink href="javascript:void(0)">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              Link</CvSideNavLink>
          </CvSideNavItems>
        </cds-side-nav>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWNavigationActions: StoryObj = {
  name: 'Header Base w/ Navigation and Actions',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderNav,
      CvHeaderNavItem,
      CvHeaderMenu,
      CvHeaderMenuItem,
      CvHeaderMenuButton,
      CvHeaderGlobalAction,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderMenuButton
          button-label-active="Close menu"
          button-label-inactive="Open menu"></CvHeaderMenuButton>
        <CvHeaderName href="javascript:void(0)" prefix="IBM"
          >[Platform]</CvHeaderName
        >
        <CvHeaderNav menu-bar-label="IBM [Platform]">
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 1</CvHeaderNavItem
          >
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 2</CvHeaderNavItem
          >
          <CvHeaderNavItem href="javascript:void(0)"
            >Link 3</CvHeaderNavItem
          >
          <CvHeaderMenu
            is-active
            menu-label="Link 4"
            trigger-content="Link 4">
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 1</CvHeaderMenuItem
            >
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 2</CvHeaderMenuItem
            >
            <CvHeaderMenuItem href="javascript:void(0)"
              >Sub-link 3</CvHeaderMenuItem
            >
          </CvHeaderMenu>
        </CvHeaderNav>
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="Notification"
            tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="responsive">
          <CvSideNavItems>
            <CvSideNavLink href="javascript:void(0)">
              Link 1
            </CvSideNavLink>
            <CvSideNavLink href="javascript:void(0)">
              Link 2
            </CvSideNavLink>
            <CvSideNavLink href="javascript:void(0)">
              Link 3
            </CvSideNavLink>
            <CvSideNavMenu title="Link 4">
              <CvSideNavMenuItem href="javascript:void(0)">
                Sub-link 1
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Sub-link 2
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Sub-link 3
              </CvSideNavMenuItem>
            </CvSideNavMenu>
          </CvSideNavItems>
        </cds-side-nav>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWSideNav: StoryObj = {
  name: 'Header Base w/ SideNav',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderMenuButton,
      CvSideNavItems,
      CvSideNavLink,
      CvSideNavMenu,
      CvSideNavMenuItem,
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <CvHeaderMenuButton
          button-label-active="Close menu"
          button-label-inactive="Open menu"></CvHeaderMenuButton>
        <CvHeaderName href="javascript:void(0)" prefix="IBM"
          >[Platform]</CvHeaderName
        >
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="responsive">
          <CvSideNavItems>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem
                active
                aria-current="page"
                href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavMenu title="Category title">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
              <CvSideNavMenuItem href="javascript:void(0)">
                Link
              </CvSideNavMenuItem>
            </CvSideNavMenu>
            <CvSideNavLink href="javascript:void(0)">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              Link</CvSideNavLink
            >
            <CvSideNavLink href="javascript:void(0)">
              <template #title-icon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 5v6l7 4 7-4V5L8 1zm6 10.4l-6 3.4-6-3.4V5.6l6-3.4 6 3.4v5.8z"></path></svg>
              </template>
              Link</CvSideNavLink
            >
          </CvSideNavItems>
        </cds-side-nav>
      </CvHeader>
    `,
  }),
};

export const HeaderBaseWSkipToContent: StoryObj = {
  name: 'Header Base w/ SkipToContent',
  render: () => ({
    components: {
      CvHeader,
      CvHeaderName,
      CvHeaderGlobalAction,
    },
    template: `
      <CvHeader aria-label="IBM Platform Name">
        <cds-skip-to-content></cds-skip-to-content>
        <CvHeaderName href="javascript:void(0)" prefix="IBM"
          >[Platform]</CvHeaderName
        >
        <div class="cds--header__global">
          <CvHeaderGlobalAction aria-label="Search" tooltip-text="Search">
            <template #icon><Search20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="Notification"
            tooltip-text="Notification">
            <template #icon><Notification20/></template>
          </CvHeaderGlobalAction>
          <CvHeaderGlobalAction
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            <template #icon><AppSwitcher20/></template>
          </CvHeaderGlobalAction>
        </div>
      </CvHeader>
    `,
  }),
};
