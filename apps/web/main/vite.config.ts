import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 解析 .vue 单文件组件（处理模板、样式等部分）的插件
import imagemin from 'vite-plugin-imagemin'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// 告诉Vite项目的基本配置（如开发服务器端口）
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: true // 自动生成类型声明文件
    }),
    imagemin({
      gifsicle: { optimizationLevel: 3, colors: 192, interlaced: true }, // GIF图片压缩
      jpegTran: { arithmetic: true, progressive: true }, // JPEG图片压缩
      optipng: {
        optimizationLevel: 2,
        bitDepthReduction: true,
        colorTypeReduction: true,
        paletteReduction: true
      } // PNG图片压缩
    })
  ],
  server: {
    port: 5137,
    open: true // 启动时自动打开浏览器
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'] // 将vue库打包到vendor.js文件中
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 配置路径别名
    },
    extensions: ['.vue', '.ts', '.js', '.json']
  }
})
