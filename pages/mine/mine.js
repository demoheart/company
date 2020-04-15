const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    index: 0,
    storeList: [],
    tabList: [{
      title: 'APP下载',
      imgUrl: '/static/images/mine/appDownload.png'
    }, {
      title: '预订页面',
      imgUrl: '/static/images/mine/orderAppMini.png'
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置门店列表
    this.setData({
      storeList: app.globalData.storeList
    })
  },
  // 切换tab页面
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
    })
  },
  // 切换pick
  pickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 注销 切换登录
  logOut() {
    wx.showModal({
      title: '提示',
      content: '是否退出登录？',
      success(res) {
        if (res.confirm) {
          app.globalData = {}
          wx.redirectTo({
            url: '/pages/login/login'
          })
        console.log(app)
        }
      }
    })
  },

  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})