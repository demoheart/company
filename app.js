//app.js
const update = require('/utils/update.js')
App({

  onLaunch: function () {
    update()
    // wx.getSystemInfo({
    //   success: e => {
    //     this.globalData.StatusBar = e.statusBarHeight;
    //     let capsule = wx.getMenuButtonBoundingClientRect();
    //     if (capsule) {
    //       this.globalData.Custom = capsule;
    //       this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
    //     } else {
    //       this.globalData.CustomBar = e.statusBarHeight + 50;
    //     }
    //   }
    // })
  },
  globalData: {
    isToggleStore: false,
    userInfo: null
  },
  onShow() {
    if (wx.getUpdateManger) {
      const updateManger = wx.getUpdateManger();
      updateManger.onUpateReady(function () {
        wx.showToast({
          title: '应用更新，准备重启',
          icon: 'none'
        })
        updateManger.applyUpdate()
      })
    }
  }
})