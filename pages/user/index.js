// // pages/user/index.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     userinfo:{}
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow () {
//     wx.getUserInfo().then(res=>{
//       var that = this
//       const userinfo = res.userInfo
//       that.setData({userinfo});
//       console.log(this.data.userinfo);
//     })
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })









// pages/user/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    collectNum:0
  },
  /**
   * 获取用户信息
   * @param {*} e 
   */
  handleGetuserinfo(e){
    const {userInfo} = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    this.setData({
      userInfo
    })
  },
  onShow(){
    const userInfo = wx.getStorageSync("userinfo") || [];
    const collect = wx.getStorageSync("collect") || []
    this.setData({
      userInfo,
      collectNum:collect.length
    })
  },
  handleRefund(){
    wx.showToast({
      title: '暂不支持该功能~',
      mask: true
    });
  }
})