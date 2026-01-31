import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Treat all tags starting with 'cds-' as custom elements
                    isCustomElement: (tag) => tag.startsWith('cds-'),
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CarbonVue',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: ['vue', '@carbon/web-components'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
