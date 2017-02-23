var winHeight,winWidth;
wx.getSystemInfo({
  success: function(res) {
    /*console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version);*/
    winWidth = res.windowWidth;
    winHeight = res.windowHeight;
  }
});
App({
  onLaunch: function () {
    //console.log('食材在线')
  },
  onShow: function () {
    //console.log('App Show')
  },
  onHide: function () {
    //console.log('App Hide')
  },
  globalData: {
    winWidth,
    winHeight,
    hasLogin: false
  }
})
