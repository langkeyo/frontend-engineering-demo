export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 自定义提交类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'build', // 构建过程或外部依赖的改动，例如webpack，npm，yarn等内容的修改
        'ci', // 持续集成（配置变更）
        'chore', // 其他改变（不包括上述类型、修改构建流程、依赖更新）
        'revert' // 回滚到上一个版本
      ]
    ],
    'subject-case': [0] // 允许 subject（描述）大小写不限制
  }
}
