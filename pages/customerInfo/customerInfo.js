Page({
  // 去门店试驾
  toTestDrive() {
    wx.switchTab({
      url: '/pages/testDrive/testDrive',
    })
  },
  // 去沟通记录
  toChatRecords() {
    wx.switchTab({
      url: '/pages/chatRecords/chatRecords',
    })
  },
  // 去任务记录
  toTaskRecords() {
    wx.switchTab({
      url: '/pages/taskRecords/taskRecords',
    })
  }
})