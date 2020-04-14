// 请求库封装
const app = getApp();

export default function (option) {
  wx.showLoading({
    title: option.loadingTitle ? option.loadingTitle : '拼命加载中...'
  })
  if (app.globalData) {
    var header = {
      'content-type': option.header ? option.header : 'application/json;charset=UTF-8'
    }
    var token = app.globalData.token;
    if (token) {
      if (option.header) {
        option.header["X-CHJ-Token"] = token;
        option.header["AMP-Token"] = token;
      }
      header["X-CHJ-Token"] = token;
      header["AMP-Token"] = token;
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url,
      data: option.data,
      method: option.method || "GET",
      header: option.header || header,
      success: (res) => {
        wx.hideLoading()
        if (res.data.code !== 0) {
          if (res.data.code === 100033) {
            setTimeout(() => {
              wx.redirectTo({
                url: '/pages/login/login',
              })
            }, 2000)
          } else {
            wx.showToast({
              title: res.data.msg,
              icon:'none'
            })
          }
        }
        resolve(res.data)
      },
      fail: (res) => {
        reject(res)
      }
    })
  });
}