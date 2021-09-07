Page({
  data: {
    active: 'index',
  },
  onChange(event) {
    if(event.detail == this.data.active){
      return false
    }
    let router = `/pages/${event.detail.split('_').join('/')}/index`
    wx.navigateTo({
      url: router,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: 'test'
        })
      },
      fail: ref => {
        console.log(ref)
      }
    })
  },
});