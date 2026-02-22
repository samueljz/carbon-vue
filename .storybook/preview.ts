import type { Preview, StoryFn, StoryContext } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3-vite';
import { white, g10, g90, g100 } from '@carbon/themes';
import { breakpoints } from '@carbon/layout';
import theme from './theme.ts';

// Import Carbon styles
import '@carbon/styles/css/styles.css';
import '@carbon/web-components/es/components/button/index.js';
import './_container.scss';
import './templates/with-layer.scss';

// Configure Vue to recognize custom elements
import { Search20, Notification20, Switcher20 } from '@carbon/icons-vue';

setup((app) => {
    app.config.compilerOptions.isCustomElement = (tag) =>
        tag.startsWith('cds-');

    app.component('Search20', Search20);
    app.component('Notification20', Notification20);
    app.component('AppSwitcher20', Switcher20);
});

export const globalTypes: Preview['globalTypes'] = {
    locale: {
        name: 'Locale',
        description: 'Set the localization for the storybook',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                {
                    right: '🇺🇸',
                    title: 'English',
                    value: 'en',
                },
                {
                    right: '🇵🇸',
                    title: 'Arabic',
                    value: 'ar',
                },
            ],
        },
    },
    dir: {
        name: 'Text direction',
        description: 'Set the text direction for the story',
        defaultValue: 'ltr',
        toolbar: {
            icon: 'transfer',
            title: 'Text direction',
            items: [
                {
                    right: '🔄',
                    title: 'auto',
                    value: 'auto',
                },
                {
                    right: '➡️',
                    title: 'left-to-right (ltr)',
                    value: 'ltr',
                },
                {
                    right: '⬅️',
                    title: 'right-to-left (rtl)',
                    value: 'rtl',
                },
            ],
        },
    },
    theme: {
        name: 'Theme',
        description: 'Set the global theme for displaying components',
        defaultValue: 'white',
        toolbar: {
            icon: 'paintbrush',
            title: 'Theme',
            items: ['white', 'g10', 'g90', 'g100'],
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
        grid: {
            cellSize: 8,
            opacity: 0.5,
        },
        options: {
            white: {
                name: 'white',
                value: white.background,
            },

            g10: {
                name: 'g10',
                value: g10.background,
            },

            g90: {
                name: 'g90',
                value: g90.background,
            },

            g100: {
                name: 'g100',
                value: g100.background,
            }
        },
    },
    controls: {
        expanded: true,
        sort: 'alpha',
        hideNoControlsWarning: true,
    },
    docs: {
        theme,
        source: {
            excludeDecorators: true,
        },
    },
    viewport: {
        options: {
            sm: {
                name: 'Small',
                styles: {
                    width: breakpoints.sm.width,
                    height: '100%',
                },
            },
            md: {
                name: 'Medium',
                styles: {
                    width: breakpoints.md.width,
                    height: '100%',
                },
            },
            lg: {
                name: 'Large',
                styles: {
                    width: breakpoints.lg.width,
                    height: '100%',
                },
            },
            xlg: {
                name: 'X-Large',
                styles: {
                    width: breakpoints.xlg.width,
                    height: '100%',
                },
            },
            Max: {
                name: 'Max',
                styles: {
                    width: breakpoints.max.width,
                    height: '100%',
                },
            },
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: [
                'Introduction',
                ['Welcome', 'Custom styles', 'Form Participation'],
                'Components',
                'Layout',
            ],
        },
    },
};

export const decorators = [
    (_story: StoryFn, context: StoryContext) => {
        const { locale, dir, theme } = context.globals;

        document.documentElement.setAttribute('storybook-carbon-theme', theme);
        document.documentElement.lang = locale;
        document.documentElement.dir = dir;

        return {
            template: `
        <div class="sb-carbon-container" :class="'cds--' + theme">
          <story />
        </div>
      `,
            setup() {
                return { theme };
            },
        };
    },
];

const preview: Preview = {
    parameters,
    globalTypes,
    decorators,
    tags: ['autodocs'],
};

export default preview;
