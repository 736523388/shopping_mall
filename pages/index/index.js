const createRecycleContext = require('miniprogram-recycle-view')
Page({
  data: {
    PageCur: 'basics'
  },
  onReady: function () {
    var ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width: 162,
        height: 182
      }
    })
    ctx.append([
      {
        image_url: 'http://image.cqclxsc.com/goods/36/16/1.png',
        idx: 0,
        title: '测试'
      },
      {
        image_url: 'http://image.cqclxsc.com/goods/36/16/1.png',
        idx: 0,
        title: '测试'
      }
    ])
    // ctx.update(beginIndex, list)
    // ctx.destroy()
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})