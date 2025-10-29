import './style.css' // 导入CSS（Vite支持直接导入）
console.log(13213)
const app = document.getElementById('app')
let isDarkMode = false // 用于切换深色模式

// 初始内容
function render() {
  app.innerHTML = `
    <div class="card">
    <h1>张三</h1>
    <p>前端开发工程师</p>
    <p>邮箱：zhangsan@example.com</p>
    <button id="toggleBtn">${isDarkMode ? '切换亮色' : '切换深色'}</button>
    </div>
`

  // 绑定按钮事件
  document.getElementById('toggleBtn').addEventListener('click', () => {
    isDarkMode = !isDarkMode
    render()
  })
}
const 1231

render()
