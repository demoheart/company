Page({
  data: {
    isShowRecommend: false,
    recommendList: ['宝马1', '宝马2', '宝马3'],
    aa: '',
    region: ['广东省', '广州市'],
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
  },
  // tab选择时候的传值
  toggle(val) {
    console.log(val)
  },
  // 现有车函数
  handlRecommend(e) {
    this.setData({
      isShowRecommend: true
    })
  },
  // 选择推荐车
  chooseRecommend(e) {
    console.log(e)
    const index = e.currentTarget.dataset.index
    this.setData({
      aa: this.data.recommendList[index]
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  TextareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
})