import Taro from '@tarojs/taro'
import * as service_mine from '@/services/mine';

export default {
  namespace: 'mine',
  state: {
    list: []
  },
  effects: {
    *login({ payload }, { select, call, put }) {
      const response = yield call(service_mine.login, {}, { ...payload });
      return response
    },
    *service({ payload }, { select, call, put }) {
      const { service, params, data } = payload;
      const response = yield call(service_mine[service], params, data);
      return response
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
};
