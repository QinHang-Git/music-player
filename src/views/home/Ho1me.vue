<!--  -->
<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <div
      class="scroll"
      ref="scroll">
      <!-- 轮播图  -->
      <home-slide-show :goodsActivity="goodsActivity"> </home-slide-show>
      <!-- 导航栏 -->
      <!-- <home-nav></home-nav> -->
      <home-lable></home-lable>
      <!-- 分类模块 -->
      <tab-control
        class="tab-control"
        :titles="['好货', '热门', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <!-- 商品展示页面 -->
      <goods-list :goods="goods[currentType].list"></goods-list>
      <!-- 综合模块 -->
      <!-- <home-cate></home-cate> -->
    </div>
    <back-top class="back-top" @click.native="toTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeNav from "./childComps/HomeNav";
import HomeLable from "./childComps/HomeLable";
import HomeCate from "./childComps/HomeCate";
import HomeSlideShow from "./childComps/HomeSlideShow";

import NavBar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";



import { getGoodList, getSell, getPop, getJu, getGoodsActivity} from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNav,
    HomeLable,
    HomeCate,
    NavBar,
    HomeSlideShow,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      goods: {
        goodList: { page: 0, list: [] },
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsActivity:[],
      currentType: "goodList",
      isShowBackTop:false,
      scrollEvent:{},
      scrollState: 0,
      saveY:null

    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 事件监听方法,监听点击的tab
    tabClick(index) {
      console.log(index);
      if(this.scrollEvent.scrollTop>437)
      {this.$refs.scroll.scrollTop = 437}
      switch (index) {
        case 0:
          this.currentType = "goodList";
          break;
        case 1:
          this.currentType = "pop";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    //回到顶部的事件
    toTop() {
        // 滚动状态，防止多次点击滚动卡死
        if(!!this.scrollState){
          return;
        }
        this.scrollState = 1;
        let dParams = 20
        const time = setInterval(()=>{
          let distance = this.scrollEvent.scrollTop - dParams
          dParams += 20;
          distance = distance>0 ? distance : 0;
          this.$refs.scroll.scrollTop = distance;
          if(this.scrollEvent.scrollTop < 10){
            clearInterval(time);
            this.scrollState = 0;
          }
        }, 10);
      },
    // 返回顶部图标是否显示
    contentScroll(){
      var target = event.target ? event.target : event.srcElement
      this.isShowBackTop = (target.scrollTop)>1000
    },
    //监听方法，用于滚动位置事件的保存 上拉加载更多
    scrollMore(){
      var target = event.target ? event.target : event.srcElement
      this.scrollEvent = target
      var scrollBottom = this.scrollEvent.scrollHeight - this.scrollEvent.clientHeight - this.scrollEvent.scrollTop
      // console.log(target.scrollTop);//监听滚动
      // console.log(target.scrollHeight)//获得整体高度
      // console.log(target.clientHeight)//获得页面高度
      //console.log(scrollBottom);
      if(scrollBottom<4){
        this.debounce(this.getHomeGoods(this.currentType),2000)
        //console.log("jinlaile xiongdi sadfsdfsdf")
      }
    },
    // 网络请求方法
    getHomeGoods(type){
      switch(type){
        case "goodList":
          this.getGoodList()
          break
        case "pop":
          this.getPop()
          break
        case "sell":
          this.getSell()
      }
    },
    getGoodList() {
      const page = this.goods["goodList"].page + 1;
      getGoodList(page).then((res) => {
        this.goods["goodList"].list.push(...res.data.list);
        this.goods["goodList"].page += 1;
      });
    },
    getSell() {
      const page = this.goods["sell"].page + 1;
      getSell(page).then((res) => {
        this.goods["sell"].list.push(...res.data.list);
        this.goods["sell"].page += 1;
      });
    },
    getPop() {
      const page = this.goods["pop"].page + 1;
      getPop(page).then((res) => {
        this.goods["pop"].list.push(...res.data.list);
        this.goods["pop"].page += 1;
      });
    },
    getGoodsActivity() {
      getGoodsActivity().then((res)=>{
        console.log(res);
        this.goodsActivity = res.data
        console.log(this.goodsActivity);
      })
    },

    //防抖
    debounce(func,delay){
      let timer = null
      return function(args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    }
  },
  created: function () {
    this.getHomeGoods("goodList");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
    this.getGoodsActivity();
  },
  mounted(){
    //监听滚动
    var scroll = this.$refs.scroll
    scroll.addEventListener("scroll",this.scrollMore,false)
    scroll.addEventListener("scroll",this.contentScroll,false)
  },

  beforeRouteLeave(to, from, next) {
      this.saveY = this.scrollEvent.scrollTop; //记录离开页面时的位置
      next()
  },
  activated(){
    this.$refs.scroll.scrollTop = this.saveY
  }
};
</script>

<style>
#home{
  height: 100vh;
  position: relative;
}
.tab-control {
  z-index: 2;
  position: sticky;
  top: 0px;
}
.scroll{
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}

</style>
