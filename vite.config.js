import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssImport from 'postcss-import'
// import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from "postcss-pxtorem";


// https://vite.dev/config/
export default defineConfig({
  base: '/ceshi/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        // tailwindcss,
        autoprefixer,
        postCssPxToRem({
          rootValue: 100,//根据设计稿宽度计算，这里假设设计稿宽度为750px，1rem =100
          propList: ['*'],// 需要转换的属性，*表示所有属性
          selectorBlackList: [],//忽略的选择器
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i //忽略包文件转换rem
        })
      ]
    }
  }

})
