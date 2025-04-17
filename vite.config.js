import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: 'class', // Enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
})