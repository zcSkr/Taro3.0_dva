import Taro from '@tarojs/taro'
import * as service_home from '@/services/home';
export default {
  namespace: 'home',
  state: {
    carList: [],
    goodsList: [],
    shopBannerList: [],
    shopGoodsTypeList: [],
    shopInfo: {},
  },
  effects: {
    *query({ payload }, { select, call, put }) {
      const response = yield call(service_home.queryHome, {}, { ...payload });
      // console.log(response)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            // carList: response.data.carList,
            // goodsList: response.data.goodsList,
            // shopBannerList: response.data.shopBannerList,
            // shopGoodsTypeList: response.data.shopGoodsTypeList,
            // shopInfo: response.data.shopVO,
          },
        });
      }
      return response
    },
    *service({ payload }, { select, call, put }) {
      const { service, params, data } = payload;
      const response = yield call(service_home[service], params, data);
      return response
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
};
