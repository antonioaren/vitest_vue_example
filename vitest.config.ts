import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            },
            environment: 'happy-dom',
            exclude: [
                ...configDefaults.exclude,
                'e2e/*',
                'src/App.vue',
                'src/main.js',
                'src/*.config.js',
            ],
            root: fileURLToPath(new URL('./', import.meta.url))
        },
    }),
)
