# application-fitness
cd Boilerplate-vite-react-ts-application-fitness
npm install
npm run dev
npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

# delete 

App.css
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
clean out index.css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D prettier prettier-plugin-tailwindcss



# vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  }
})

# tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# tsconfig.json
"paths":{
      "@/*":["./src/*"]
    },
    
# index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


**************************************************************************************
React: https://reactjs.org/
Typescript: https://www.typescriptlang.org/
Typescript Types vs Interfaces: https://tinyurl.com/typescripttypesvs...
Vite: https://tailwindcss.com/docs/guides/vite
Google Fonts: https://fonts.google.com/
Tailwind: https://tailwindcss.com/
Prettier Tailwind Css Plugin: https://github.com/tailwindlabs/prett...
Prettier Tailwind Css Sorting: https://tailwindcss.com/blog/automati...
Hero Icons: https://heroicons.com/
Framer Motion: https://www.framer.com/docs/introduct...
Form Submit: https://formsubmit.co/
React Anchor Link smooth Scroll: https://github.com/mauricevancooten/r...
Cloudflare Pages: https://pages.cloudflare.com/

Code
completed code: https://github.com/ed-roh/gym-typescript
assets: https://github.com/ed-roh/gym-typescr...
tailwind config file: https://github.com/ed-roh/gym-typescr...
useMediaQuery code: https://github.com/ed-roh/gym-typescr...