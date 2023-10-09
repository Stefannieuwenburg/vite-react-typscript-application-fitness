# application-fitness

cd Boilerplate-vite-react-ts-application-fitness
npm install
npm run dev
npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
npm i react-hook-form

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
Vite: https://tailwindcss.com/docs/guides/vite
Google Fonts: https://fonts.google.com/
Tailwind: https://tailwindcss.com/
Prettier Tailwind Css Plugin: https://github.com/tailwindlabs/prett...
Prettier Tailwind Css Sorting: https://tailwindcss.com/blog/automati...
Hero Icons: https://heroicons.com/
Framer Motion: https://www.framer.com/docs/introduct...
Form Submit: https://formsubmit.co/
React Anchor Link smooth Scroll: https://github.com
Cloudflare Pages: https://pages.cloudflare.com/

# npm install
npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

# configuration options
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
