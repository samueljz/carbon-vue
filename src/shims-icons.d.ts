declare module '@carbon/icons-vue' {
    import { DefineComponent } from 'vue';
    export const Information16: DefineComponent;
    export const Add16: DefineComponent;
    export const Launch16: DefineComponent;
    // Add other icons as needed, or use a wildcard if possible:
    // export const [key: string]: DefineComponent;
}

declare module '@carbon/icons-vue/es/*' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
