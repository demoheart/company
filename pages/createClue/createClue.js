Page({
  data: {
    defaultActive: '',
    region: ['广东省', '广州市'],
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
  },
  toggle(val) {
    this.setData({
      defaultActive: val.detail
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  RegionChange: function(e) {
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