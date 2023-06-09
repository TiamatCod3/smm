import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/smm/',
    server:{
        port:3000
    },
    build: {
        chunkSizeWarningLimit: 1600,
    }
})