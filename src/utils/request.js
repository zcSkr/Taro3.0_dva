import Taro from '@tarojs/taro';
import { rootUrl, getToken } from '@/config/config';

// url转码
function urlEncode(params, key, encode) {
  if (params == null) return ''
  var paramsStr = ''
  var t = typeof (params)
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramsStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(params) : params)
  } else {
    for (var i in params) {
      var k = key == null ? i : key + (params instanceof Array ? '[' + i + ']' : '.' + i)
      paramsStr += urlEncode(params[i], k, encode)
    }
  }
  return paramsStr
}

// 拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then(res => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
}

// Taro.addInterceptor(interceptor) //自定义拦截器
// Taro.addInterceptor(Taro.interceptors.logInterceptor) //内置打印请求的相关信息
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor) //内置请求超时时抛出错误。
let isShowModal = false
export default function request(url, option) {
  const { params, data, method, headers } = option
  if (url.substr(0, 4) != 'http')
    url = rootUrl + url
  url = url + '?' + urlEncode(params).slice(1)
  console.log(url, option.data)
  return Taro.request({
    url,
    data,
    method: method ? method.toUpperCase() : 'GET',
    header: {
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'token': getToken() || '',
      'api-version': 1,
      ...headers,
    },
  }).then(res => {
    if (res.statusCode == 200) {
      return res.data
    } else if (res.statusCode == 401) {
      Taro.removeStorageSync('unionuser');
      // Taro.hideLoading()
      // Taro.hideToast()
      if(!isShowModal){
        isShowModal = true
        Taro.showModal({
          title: '注意',
          content: '您的账号已在其他设备登录/已被冻结！',
          showCancel: false,
          success: res => {
            if (res.confirm) {
              console.log('用户点击确定')
              isShowModal = false
            }
          }
        })
      }
      const pages = Taro.getCurrentPages()
      if (pages.length && pages[pages.length - 1].route == 'pages/mine') { //在我的页面的时候特殊处理
        return res
      }
    } else {
      if (!isShowModal) {
        isShowModal = true
        Taro.showModal({
          content: res.data.error,
          showCancel: false,
          confirmText: '知道了',
          success: res => {
            if (res.confirm) {
              isShowModal = false
            }
          }
        })
      }
    }
  }).catch(res => {
    console.log(res, 9999)
    if (!isShowModal) {
      isShowModal = true
      Taro.showModal({
        title: '网络错误',
        content: res.errMsg || '',
        showCancel: false,
        confirmText: '知道了',
        success: res => {
          if(res.confirm) {
            isShowModal = false
          }
        }
      })
    }
    
  });
};
