import request from '@/utils/request'

export async function login(params, data) {
  return request('/userApi/login', { params, data, method: 'POST' })
}
// 刷勋用户信息（包含积分 ）
export async function refreshUser(params, data) {
  return request('/userApi/auth/findUserInfo', { params, data })
}