import Taro from '@tarojs/taro'
import React, { PureComponent } from 'react';
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './shop.less';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"],
}))
export default class Shop extends PureComponent {

  state = {
    countNum: 0
  }

  render() {
    return (
      <View className={styles.page}>
        商城
      </View>
    )
  }
}
