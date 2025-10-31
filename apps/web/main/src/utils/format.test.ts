import { formatEmail } from './format'

test('formatEmail 应该截断长用户名', () => {
  expect(formatEmail('zhangsan@example.com')).toBe('zhang...@example.com')
})

test('formatEmail 不截断用户名', () => {
  expect(formatEmail('test@example.com')).toBe('test@example.com')
})
