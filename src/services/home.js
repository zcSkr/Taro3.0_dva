import request from '@/utils/request'

export async function queryHome(params, data) {
  return request('/homeApi/findHome', { params, data, method: 'POST' })
}