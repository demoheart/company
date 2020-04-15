//home.js
//获取应用实例
const app = getApp()

Page({
  data: {
    categoryList: [{
      img: '/static/images/home/todayTestDrive.png',
      name: '今日试驾'
    }, {
      img: '/static/images/home/driveTask.png',
      name: '邀约试驾任务'
    }, {
      img: '/static/images/home/followTask.png',
      name: '跟进任务'
    }, {
      img: '/static/images/home/allTask.png',
      name: '所有任务'
    }, {
      img: '/static/images/home/overdueTask.png',
      name: '逾期任务'
    }, {
      img: '/static/images/home/clueTask.png',
      name: '线索任务'
    }]
  },
  onLoad() {
    wx.setTabBarBadge({
      index: 0,
      text: '99+',
    })
  },
  // 跳转到客户页面
  toCustomer() {
    wx.switchTab({
      url: '/pages/customer/customer'
    })
  }
})
