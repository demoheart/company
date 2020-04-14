Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    searchType: ['手机号', '姓名', '标签'],
    isShowSearchType: true,
    isResult: true,
    dataList: []
  },
  // 搜索
  search() {
    setTimeout(() => {
      this.setData({
        isShowSearchType: false,
        dataList: [123]
      })
    }, 3000)
  },
  // 切换搜索类型
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id
    })
  },
  // 去往创建线索
  toCreateClue() {
    wx.navigateTo({
      url: "/pages/createClue/createClue"
    })
  },
  // 去客戶详情
  toCustomerInfo() {
    wx.navigateTo({
      url: '/pages/customerInfo/customerInfo',
    })
  },
  // 拨打电话
  call() {
    wx.makePhoneCall({
      phoneNumber: '18537020558' //仅为示例，并非真实的电话号码
    })
  }
})