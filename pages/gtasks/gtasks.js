Page({
  data: {
    tabCur: 0,
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '全部任务',
    })
  },
  // tab的切换事件
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id
    })
  },
})