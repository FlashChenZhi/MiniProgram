//获取App示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;

Page({
  data:{
    name:"CoderWhy",
    age:18,
    list:[],
    students:[
      { id: 110, name:"James", age:32},
      { id: 120, name: "Wade", age: 33 },
      { id: 130, name: "Anthony", age: 30 },
    ],
    counter:0,
  },
    handlePlusBtn(){
      console.log("加号")
      this.setData({
        counter:this.data.counter + 1
      })
    },
    handleMinusBtn() {
      console.log("减号")
      this.setData({
        counter: this.data.counter - 1
      })
    },
    handleGetUserInfo(event){
      console.log( event)
    },
    //页面加载时
    onLoad(){
      console.log("onLoad")
      wx.request({
        url: 'http://123.207.32.32:8000/api/v1/recommend',
        success:(res)=>{
            console.log(res)
            const data = res.data.data.list;
            this.setData({
              list:data
            })
        }
      })
    },
    //页面显示时
    onShow() {
      console.log("onShow")
    },
    //页面初次渲染完成时
    onReady() {
      console.log("onReady")
    },
    //页面隐藏时
    onHide() {
      console.log("onHide")
    },
    //页面卸载时
    onUnload(){
      console.log("onUnload")
    },
    //点击事件
    handleViewClick(){
      console.log("昵称标签被点击了")
    },
    //监听页面滚动
    onPageScroll(obj){
      console.log(obj)
    },
    //监听页面滚动到底部
    onReachBottom(){
      console.log("已经到达页面底部！")
    },
    onPullDownRefresh(){
      console.log("下拉刷新事件...")
    }
})