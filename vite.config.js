import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/sm-marriage/',
    server:{
        port:3000
    },
    build: {
        chunkSizeWarningLimit: 1600,
    }
})