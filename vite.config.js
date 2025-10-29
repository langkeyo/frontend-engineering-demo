import { defineConfig } from 'vite'
// 告诉Vite项目的基本配置（如开发服务器端口）
export default defineConfig({
  server: {
    port: 5137,
    open: true // 启动时自动打开浏览器
  }
})
