import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.js'


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
            root: "./",
        },
    }),
)
