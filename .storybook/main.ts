import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    stories: [
        '../docs/**/*.mdx',
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: ['../public'],
    addons: [{
        name: '@storybook/addon-docs',
        options: {
            mdxPluginOptions: {
                mdxCompileOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },
        },
    }, '@storybook/addon-links'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            define: {
                'process.env.NODE_ENV': JSON.stringify(
                    process.env.NODE_ENV || 'development'
                ),
            },
        });
    },
    docs: {
        defaultName: 'Overview',
    },
};

export default config;
