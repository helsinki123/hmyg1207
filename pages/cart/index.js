Page({
  data:{
    address:{},
    num1: 200,
    num2:350,

    cart: [],
    allCheck: false,
    totalPrice: 0,
    isChecked: [],
    isManage: false
  },
    /**
   * 商品选中按钮的更改
   * @param {*} e 
   */
     handleCheckChange(e) {
      const { id } = e.currentTarget.dataset;
      const { cart } = this.data;
      let currentItem = cart.find(item => {
        return item.goods_id === id
      })
      currentItem.isChecked = !currentItem.isChecked
      this.setData({
        cart
      })
      wx.setStorageSync("cart", cart);
      this.getTotalAndPrice(cart)
    },
      /**
   * 获取总数量和总价格
   * @param {*} cart 
   */
  getTotalAndPrice(cart) {

    /**
     * every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个会使 callback 返回 false 的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true
     */
    const isChecked = this.filterCheck(cart,true)
    const allChecked = cart.length ? cart.every(item => item.isChecked) : false
    const totalPrice = isChecked.reduce((preValue, nowValue) => {
      return preValue + nowValue.goods_price * nowValue.num
    }, 0)
    console.log("totalPrice>>>",totalPrice);
    this.setData({
      cart,
      allCheck: allChecked,
      totalPrice,
      isChecked: isChecked
    })
  },
  filterCheck(cart,type){
    /**
     * type为true的时候，isChecked为true 
     */
    if(type){
      return cart.filter(item => {
        return item.isChecked === true
      })
    } else {
      return cart.filter(item => {
        return item.isChecked === false
      })
    }
  },
   // 点击结算功能
   handlePay(){
    const {isChecked} = this.data;
    wx.setStorageSync("payGoods", isChecked);
    if(isChecked){
      wx.navigateTo({
        url: '../pay/index'
      });
    }else {
      wx.showToast({
        title: '你还没有选购商品~',
        icon:"none"
      });
    }
  },







  testcheck(e){
    console.log(e,"check");
  },
  handleSelect1(e){
    console.log(e);
    if(e.detail.value[0]==="1"){
      this.checked = false;
      this.setData({
        num1:1000
      })
    }else{
      this.setData({
        num1:0
      })
    }
  },
  handleSelect2(e){
    if(e.detail.value[0]==="1"){
      this.setData({
        num2:111
      })
    }else{
      this.setData({
        num2:0
      })
    }
    
   
  },
  mobileInput1 : function (e) {
 
    const value = e.detail.value;
    this.setData({
      num1:value
    })
    
  },
  mobileInput2 : function (e) {
    const value = e.detail.value;
    this.setData({
      num2:value
    })
  },
  onShow(){
    //从本地缓存获取购物车数据
    const cart = wx.getStorageSync("cart") || [];
    this.setData({
      cart,
      // allCheck: allChecked,
      // totalPrice,
      // isChecked: isChecked
    })
    console.log("cart数据", this.data.cart);


    const address = wx.getStorageSync("address");
    this.setData({
      address
    })
  },
  handleChooseAddress(){
    wx.chooseAddress({
      success: (result)=>{
        wx.setStorageSync("address", result)
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });

      
  },

})
