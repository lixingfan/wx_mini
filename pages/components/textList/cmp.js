// pages/components/textList/cmp.js
Component({
  attached() {
    console.log(this.data.listType)
  },
  /**
   * 组件的属性列表
   */
  properties: {
    listTitle: String,
    listContent: String,
    listType: String,
    titleColor: String,
    contentColor: String
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

  }
})
