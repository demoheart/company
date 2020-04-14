const app = getApp()

Page({
  data:{
    // StatusBar: app.globalData.StatusBar,
    // CustomBar: app.globalData.CustomBar,
  },
  onLoad() {

  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading();    //在当前页面显示导航条加载动画
    this.onLoad();    //刷新页面
    setTimeout(function () {
      wx.hideNavigationBarLoading();    //在当前页面隐藏导航条加载动画
      wx.stopPullDownRefresh();    //停止下拉动作
    }, 2000)
  }
})