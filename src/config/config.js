import Taro from '@tarojs/taro';
const requestUrl = 'https://cgf.scyuronghe.com' //https://wap.scttlg.com  http://47.107.65.90:8080  192.168.2.168:9001
const projectName = 'steak'


export const rootUrl = requestUrl + '/' + projectName
export const fileUrl = requestUrl + '/' + projectName + '/'
export const uploadUrl = requestUrl + '/' + projectName + '/file/uploadFile'
export function getToken() {
  try {
    return Taro.getStorageSync('token')
  } catch (e) { }
  return null;
}
export function setToken(token) {
  try {
    return Taro.setStorageSync('token', token)
  } catch (e) { }
  return null;
}
export function getUnionuser() {
  try {
    return Taro.getStorageSync('unionuser')
  } catch (e) { }
  return null;
}
export function setUnionuser(unionuser) {
  try {
    return Taro.setStorageSync('unionuser', unionuser)
  } catch (e) { }
  return null;
}

export default { rootUrl, fileUrl, uploadUrl, getToken, setToken, getUnionuser, setUnionuser }
