// index.js
// 获取应用实例
const app = getApp()
import { request } from "../../request/index.js"
Page({
    data: {
        swiperList: [],
        cateList: [],
        floorList: [],
        detailmsg:[],


    },
    test(){
        wx.setStorageSync("userinfo",null)
        const storage =  wx.getStorageSync('userinfo')
        if(storage===null){
            console.log("aaa");
            wx.navigateTo({
                url: "../login/index"
              })
        }
    },
    getmsg(){
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=8888" }).then(result => {
            this.setData({
                
            })
            wx.setStorageSync("detail", result.data.message);
            console.log(result.data.message);
        })
        wx.navigateTo({
            url: '../goods_detail/index'
        })
    },
    // 事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad() {
       
        wx.getUserInfo().then(res=>{
            console.log(res);
            wx.setStorageSync("userinfo",res.userInfo)
          })

        request({url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=43986"}).then(res=>{console.log(res);})
        var that = this
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" }).then(result => {
            console.log("轮播图数据", result.data.message);
            that.setData({
                swiperList: result.data.message
            })
        })
        this.getCateList();
        this.getFloorList()
        this.getCates()
    },
    getCateList() {
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" }).then(result => {
            this.setData({
                cateList: result.data.message
            })
        })
    },
    async getFloorList() {
        await request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" }).then(result => {
            console.log("result",result);
            this.setData({
                floorList: result.data.message
            })
        })
        // debugger
        // console.log(11111111);
        console.log("floorList", this.data.floorList);
    }


})