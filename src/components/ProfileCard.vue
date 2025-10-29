<script setup>
import { ref } from 'vue'
const isDarkMode = ref(false)
const name = '张三'
const role = '前端工程师'
const email = 'zhangsan@example.com'
const toggleMode = () => (isDarkMode.value = !isDarkMode.value)
</script>

<template>
  <div class="card" :class="{ dark: isDarkMode }">
    <h1>{{ name }}</h1>
    <p>{{ role }}</p>
    <p>{{ email }}</p>
    <button @click="toggleMode">
      {{ isDarkMode ? '切换亮色' : '切换深色' }}
    </button>
  </div>
</template>

<style scoped></style>
