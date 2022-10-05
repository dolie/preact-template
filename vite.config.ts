import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import graphql from '@rollup/plugin-graphql';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [graphql(), preact()],
})
