import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
    plugins: [HstSvelte()],
    routerMode: 'hash',
    outDir: 'dist/histoire/',
    vite: {
        base: '/haut-test-meter/histoire/',
    },
})
