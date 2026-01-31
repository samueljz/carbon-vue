import { create } from '@storybook/theming';

export default create({
    base: 'light',

    // Brand
    brandTitle: 'Carbon Vue',
    brandUrl: 'https://carbondesignsystem.com',

    // Color palette
    colorPrimary: '#0f62fe',
    colorSecondary: '#0f62fe',

    // UI
    appBg: '#f4f4f4',
    appContentBg: '#ffffff',
    appBorderColor: '#e0e0e0',
    appBorderRadius: 0,

    // Typography
    fontBase: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    fontCode: '"IBM Plex Mono", monospace',

    // Text colors
    textColor: '#161616',
    textInverseColor: '#ffffff',
    textMutedColor: '#525252',

    // Toolbar default and active colors
    barTextColor: '#525252',
    barSelectedColor: '#0f62fe',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#8d8d8d',
    inputTextColor: '#161616',
    inputBorderRadius: 0,
});
