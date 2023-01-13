//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    username:"Angel",
   
    },
    onReady: function (res) {
      this.videoContext = wx.createVideoContext('myVideo')
    },
  
  })

