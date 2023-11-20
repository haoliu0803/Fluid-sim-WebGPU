import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  plugins: [basicSsl()],
  base: '/Fluid-sim-WebGPU/',
})
