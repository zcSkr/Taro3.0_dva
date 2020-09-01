import Taro from '@tarojs/taro'
import React, { PureComponent } from 'react';
import { View, ScrollView, Input, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './mine.less';
import { AtIcon, AtButton, AtModal } from 'taro-ui';
import { setToken, setUnionuser, getToken, getUnionuser, fileUrl } from '@/config/config';

@connect(({ mine, loading }) => ({
  mine,
}))
export default class Mine extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  };
  
  render() {
    return (
      <View className={styles.page}>
        我的
      </View>
    )
  }
}
