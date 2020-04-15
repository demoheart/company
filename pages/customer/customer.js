const app = getApp()
import api from '../../utils/api.js'
import http from '../../utils/request.js'
import {
  formatTime
} from '../../utils/formatTime.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    searchType: ['手机号', '姓名'],
    searchVal: '',
    // isShowSearchType: true,
    isShowResult: false,
    dataList: []
  },
  // 修改搜索值
  handlInput(e) {
    this.setData({
      searchVal: e.detail.value
    })
  },
  // 搜索
  search(e) {
    // setTimeout(() => {
    //   this.setData({
    //     isShowSearchType: false,
    //     dataList: [123]
    //   })
    // }, 3000)
    if (this.data.tabCur === 0) {
      this.getCustomerForPhone(this.data.searchVal)
    } else {
      this.getCustomerForName(this.data.searchVal)
    }
  },
  // 根据手机号搜索用户
  getCustomerForPhone(val) {
    const options = {
      url: api.getCustomerForPhone,
      method: 'POST',
      data: {
        phone: val
      }
    }
    http(options).then(res => {
      console.log(res)
      if (res.code === 0) {
        res.data && res.data.map(item => {
          item.createTime = formatTime(new Date(item.createTime), 'yyyy-MM-dd hh:mm:ss')
          return item
        })
        this.setData({
          dataList: res.data || [],
          isShowResult: res.data ? !res.data.length : true
        })
        console.log(this.data.dataList)
        console.log(this.data.isShowResult)
      }
    })
  },
  // 根据姓名搜索用户
  getCustomerForName(val) {
    const options = {
      url: api.getCustomerForName,
      method: 'GET',
      data: {
        name: val
      }
    }
    http(options).then(res => {
      if (res.code === 0) {
        res.data.map(item => {
          item.createTime = formatTime(new Date(item.createTime), 'yyyy-MM-dd hh:mm:ss')
          return item
        })
        this.setData({
          dataList: res.data,
          isShowResult: !res.data.length
        })
        console.log(this.data.dataList)
      }
    })
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