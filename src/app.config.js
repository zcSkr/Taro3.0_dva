export default {
  entryPagePath: 'pages/index',
  pages: [
    'pages/index',
    'pages/shop',
    'pages/order',
    'pages/mine'
  ],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  // debug: true,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    backgroundColor: "#3f3f3f"
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#333333",
    backgroundColor: "#FFFFFF",
    borderStyle: "black",
    list: [{
      pagePath: "pages/index",
      text: "首页",
      iconPath: "./assets/tabbar/icon_home.png",
      selectedIconPath: "./assets/tabbar/icon_home_selected.png"
    }, {
      pagePath: "pages/shop",
      text: "积分商城",
      iconPath: "./assets/tabbar/icon_shop.png",
      selectedIconPath: "./assets/tabbar/icon_shop_selected.png"
    }, {
      pagePath: "pages/order",
      text: "订单",
      iconPath: "./assets/tabbar/icon_order.png",
      selectedIconPath: "./assets/tabbar/icon_order_selected.png"
    }, {
      pagePath: "pages/mine",
      text: "我的",
      iconPath: "./assets/tabbar/icon_mine.png",
      selectedIconPath: "./assets/tabbar/icon_mine_selected.png"
    }]
  },
  lazyCodeLoading: "requiredComponents"
}
