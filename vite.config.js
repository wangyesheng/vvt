import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入样式文件
        additionalData: '@import "@/styles/theme.scss";'
      }
    }
  }
})
