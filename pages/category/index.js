// pages/category/index.js
import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftMenuList: [],
        rightContent: [],
        currentIndex: 0
    },
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getCates()
    },
    getCates() {
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/categories" }).then(result => {
            console.log(result);
            this.Cates = result.data.message
            let leftMenuList = this.Cates.map(v => v.cat_name)
            this.setData({
                leftMenuList
            })
            let rightContent = this.Cates[0].children
            this.setData({
                rightContent
            })
        })
    },
    handleItemTap(e) {
        console.log(e);
        let { index } = e.currentTarget.dataset
        this.setData({
            currentIndex: index
        })

        console.log(this.data.currentIndex);
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})