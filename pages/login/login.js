const app = getApp()
import api from '../../utils/api.js'
import http from '../../utils/request.js'
import md5 from '../../utils/md5.min.js'

import base64 from '../../utils/base64.js'
const toBase64 = base64.Base64

Page({
  data: {
    typeList: [{
      title: '理想员工',
      value: 1
    },
    {
      title: '第三方员工',
      value: 2
    }
    ],
    tabCur: 0,
    loginName: '',
    passWord: '',
    disabled: true
  },

  // 页面初始化
  onLoad() {
    const {
      loginName = '', passWord = '', loginType = ''
    } = wx.getStorageSync('userLoginInfo')
    const tabCur = this.data.typeList.findIndex(item => item.value === loginType)
    this.setData({
      tabCur: tabCur < 0 ? 0 : tabCur,
      loginName,
      passWord
    })
    this.able()
  },

  // 输入事件的监听
  inputVal(e) {
    const type = e.currentTarget.dataset.type
    if (type === "loginName") {
      this.setData({
        loginName: e.detail.value
      })
    } else {
      this.setData({
        passWord: e.detail.value
      })
    }
    this.able()
  },
  // tab切换
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
    })
  },
  // 输入框内容是否为空
  able() {
    this.setData({
      disabled: !this.data.loginName || !this.data.passWord
    })
  },

  // 登录
  login() {
    const data = {
      loginName: this.data.loginName,
      loginType: this.data.typeList[this.data.tabCur].value,
      passWord: toBase64.btoa(this.data.passWord),
    }
    const mdData = this.securityCheck(data)
    const option = {
      url: `${api.login}?${mdData}`,
      method: 'POST',
      data,
      loadingTitle: '登录中...'
    }
    console.log(option)
    http(option).then(res => {
      if (res.success) {
        app.globalData.token = res.data.token
        app.globalData.userInfo = res.data.simpleUserVo

        data.passWord = toBase64.atob(data.passWord)
        wx.setStorage({
          key: 'userLoginInfo',
          data
        })
        this.getStoreList(res.data.userId)

      }
    })
  },
  // 获取店铺
  getStoreList(id) {
    const option = {
      url: `${api.getStoreList}/${id}/${10}`,
      method: 'GET',
      loadingTitle: '登录中...'
    }
    http(option).then(res => {
      console.log(res)
      if (res.code === 0) {
        app.globalData.storeList = res.data
        app.globalData.storeIndex = '0'

        wx.switchTab({
          url: '/pages/home/home',
        })
      }
    })
  },

  // MD5
  securityCheck(params) {
    params = md5(params ? JSON.stringify(params) : '')
    const time = new Date().getTime()
    const key = 'uajskakf893jd'
    const no = md5(Math.round(Math.random() * 10000) + Math.random() + time)
    const sign = md5(params + time + no + key)
    return `time=${time}&no=${no}&sign=${sign}`
  }
})