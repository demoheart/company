// components/homeList/homeList.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 拨打电话
    call() {
      wx.makePhoneCall({
        phoneNumber: '18537020558' //仅为示例，并非真实的电话号码
      })
    }
  }
})