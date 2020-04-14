// components/tabs/tabs.js
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
    },
    isDefaultActive: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: -1
  },

  // 子组件初始化加载方法
  attached: function() {
    //
    this.setData({
      active: this.properties.isDefaultActive ? 0 : -1
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggle(e) {
      const val = e.currentTarget.dataset.index
      this.setData({
        active: val
      })
      this.triggerEvent('toggle', val)
    }
  }
})