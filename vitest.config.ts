import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.js'

// Define base paths using import.meta.url
const basePaths = {
    root: fileURLToPath(new URL('./', import.meta.url)),
    src: fileURLToPath(new URL('./src', import.meta.url)),
    assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
    components: fileURLToPath(new URL('./src/components', import.meta.url)),
}

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'happy-dom',
            exclude: [
                ...configDefaults.exclude,
                'e2e/*',
                'src/App.vue',
                'src/main.js',
                'src/*.config.js',
            ],
            root: basePaths.root,
        },
    }),
)
