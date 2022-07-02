import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path"

export default defineConfig({
  base: "./",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入样式文件
        additionalData: '@import "@/assets/styles/theme.scss";'
      }
    }
  }
})
