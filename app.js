//app.js
const update = require('/utils/update.js')
App({
  onLaunch() {
    update()
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