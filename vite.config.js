import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// eslint-disable-next-line no-undef
const root = __dirname

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(root, './src'),
            '@assets': resolve(root, './src/assets'),
            '@components': resolve(root, './src/components'),
        },
    },
})
