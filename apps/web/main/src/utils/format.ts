// 格式化邮箱显示（如zhangsan@example.com -> zhang...@example.com）
export const formatEmail = (email: string) => {
  const [name, domain] = email.split('@')
  return name.length > 5 ? `${name.slice(0, 5)}...@${domain}` : email
}
