import Taro from '@tarojs/taro'
import React, { PureComponent } from 'react';
import { View, ScrollView, Input, Image, Button, Swiper, SwiperItem, Text, Switch } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './order.less'

import { AtIcon, AtDivider, AtModal, AtModalContent, AtTabs, AtTabsPane } from 'taro-ui';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"],
}))
export default class Order extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  componentDidMount() {
    console.log('didMount')
    const { dispatch } = this.props;
  }


  render() {
    const { loading } = this.props;
    return (
      <View className={styles.page}>
        订单
      </View>
    )
  }
}
