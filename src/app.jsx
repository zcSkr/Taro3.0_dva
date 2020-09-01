import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import dva from './utils/dva'
import models from './model'
import { Provider } from 'react-redux'
import './customVariables.global.scss'
import './app.global.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    // dispatch(action("sys/error", e));
    console.log(e)
  },
});
const store = dvaApp.getStore();

export default class App extends Component {
  componentDidMount () {
    Taro.onMemoryWarning((res) => {
      Taro.showModal({
        title: '警告',
        content: '小程序内存不足，建议重启！',
        showCancel: false,
        confirmText: '知道了'
      })
    })
    console.log('\x1b[35m%s', '程序启动');
    switch (process.env.TARO_ENV) {
      case 'weapp': const updateManager = Taro.getUpdateManager();
        updateManager.onUpdateReady(() => {
          Taro.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success: res => {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
        break;
      default: break;
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
