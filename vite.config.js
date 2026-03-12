import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '::',
    port: 8008,
  },
  appType: 'mpa',
})
