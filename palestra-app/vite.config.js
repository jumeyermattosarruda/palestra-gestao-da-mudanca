import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// Plugin to copy static assets from repo root into public/
function copyAssets() {
  return {
    name: 'copy-assets',
    buildStart() {
      try { mkdirSync(resolve('./public/assets'), { recursive: true }) } catch {}

      const files = [
        { src: '../brown gif.gif',                         dest: './public/brown-gif.gif' },
        { src: '../FrameRoom.gif',                         dest: './public/FrameRoom.gif' },
        { src: '../foto-juliana.jpg',                      dest: './public/assets/foto-juliana.jpg' },
        { src: '../abstract gif.gif',                      dest: './public/assets/abstract gif.gif' },
        { src: '../graph 1 radar-anthropic.png',           dest: './public/assets/graph 1 radar-anthropic.png' },
        { src: '../graph 2 work time exposure.png',        dest: './public/assets/graph 2 work time exposure.png' },
        { src: '../graph 3 adoption by function.png',      dest: './public/assets/graph 3 adoption by function.png' },
      ]
      for (const { src, dest } of files) {
        if (!existsSync(resolve(dest))) {
          try { copyFileSync(resolve(src), resolve(dest)) } catch {}
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyAssets()],
  base: '/palestra-gestao-da-mudanca/',
})
