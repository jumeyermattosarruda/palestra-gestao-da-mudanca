import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// Plugin to copy GIFs from repo root if not already in public/
function copyGifs() {
  return {
    name: 'copy-gifs',
    buildStart() {
      const files = [
        { src: '../brown gif.gif', dest: './public/brown-gif.gif' },
        { src: '../FrameRoom.gif', dest: './public/FrameRoom.gif' },
      ]
      for (const { src, dest } of files) {
        if (!existsSync(dest)) {
          try { copyFileSync(resolve(src), resolve(dest)) } catch {}
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyGifs()],
  base: '/palestra-gestao-da-mudanca/',
})
