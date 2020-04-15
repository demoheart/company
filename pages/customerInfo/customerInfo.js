Page({
  // 去门店试驾
  toTestDriveList() {
    wx.navigateTo({
      url: '/pages/testDriveList/testDriveList',
    })
  },
  // 去沟通记录
  toChatRecords() {
    wx.navigateTo({
      url: '/pages/chatRecords/chatRecords',
    })
  },
  // 去任务记录
  toTaskRecords() {
    wx.navigateTo({
      url: '/pages/taskRecords/taskRecords',
    })
  }
})