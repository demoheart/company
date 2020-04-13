//home.js
//获取应用实例
const app = getApp()

Page({
  data: {
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }]
  },
  // 跳转到客户页面
  toCustomer() {
    wx.switchTab({
      url: '/pages/customer/customer'
    })
  }
})
