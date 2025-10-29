import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'

import typescriptEslintParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'

// 使用类型断言解决兼容性问题
const vuePluginFixed = vuePlugin as any
const typescriptEslintPluginFixed = typescriptEslintPlugin as any

export default defineConfig([
  // 1. 基础文件配置
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // 2. JavaScript 文件配置
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },

  // 3. TypeScript 文件配置（使用修复后的插件）
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslintPluginFixed
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname
      },
      globals: globals.browser
    }
  },

  // 4. Vue 文件配置（使用修复后的插件）
  {
    files: ['**/*.{vue}'],
    plugins: {
      vue: vuePluginFixed
    },
    languageOptions: {
      parser: vuePluginFixed.parser,
      parserOptions: {
        parser: typescriptEslintParser,
        sourceType: 'module'
      },
      globals: globals.browser
    }
  },

  // 5. Prettier 配置
  prettier
])
