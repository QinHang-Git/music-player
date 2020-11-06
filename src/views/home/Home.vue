<!--  -->
<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3" :pullUpLoad="true"
      @scroll="contentScroll" @pullingUp="loadMore">
      <!-- 轮播图  -->
      <slide-show> </slide-show>
      <!-- 导航栏 -->
      <!-- <home-nav></home-nav> -->
      <home-lable></home-lable>
      <!-- 分类模块 -->
      <tab-control
        class="tab-control"
        :titles="['1元购', '热门', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <!-- 商品展示页面 -->
      <goods-list :goods="goods[currentType].list"></goods-list>
      <!-- 综合模块 -->
      <!-- <home-cate></home-cate> -->
    </scroll>
    <back-top class="back-top" @click.native="topClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeNav from "./childComps/HomeNav";
import HomeLable from "./childComps/HomeLable";
import HomeCate from "./childComps/HomeCate";

import NavBar from "components/common/navbar/Navbar";
import SlideShow from "components/common/slideshow/SlideShow";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";



import { getOneBuy, getSell, getPop, getJu } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNav,
    HomeLable,
    HomeCate,
    NavBar,
    SlideShow,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      goods: {
        oneBuy: { page: 0, list: [] },
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "oneBuy",
      isShowBackTop:false
    };
  },
  computed: {},
  watch: {},
  methods: {

    // 事件监听方法,监听点击的tab
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "oneBuy";
          break;
        case 1:
          this.currentType = "pop";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    //回到顶部的事件
    topClick(){
      console.log("s-----");
      this.$refs.scroll.scrollTo(0,0)
    },

    //返回顶部图标是否显示
    contentScroll(a){
      this.isShowBackTop = (-a.y)>1000
    },

    //上拉加载更多
    loadMore(){
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType)
    },


    getHomeGoods(type){
      switch(type){
        case "oneBuy":
          this.getOneBuy()
          break
        case "pop":
          this.getPop()
          break
        case "sell":
          this.getSell()
      }
    },
    // 网络请求方法
    getOneBuy() {
      const page = this.goods["oneBuy"].page + 1;
      getOneBuy(page).then((res) => {
        console.log("京东一元购");
        console.log(res);
        this.goods["oneBuy"].list.push(...res.data.list);
        this.goods["oneBuy"].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    getSell() {
      const page = this.goods["sell"].page + 1;
      getSell(page).then((res) => {
        console.log("精选sell");
        console.log(res);
        this.goods["sell"].list.push(...res.data.list);
        this.goods["sell"].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    getPop() {
      const page = this.goods["pop"].page + 1;
      getPop(page).then((res) => {
        console.log("热门pop");
        console.log(res);
        this.goods["pop"].list.push(...res.data.list);
        this.goods["pop"].page += 1;
        this.$refs.scroll.finishPullUp()
      });
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
    this.getHomeGoods("oneBuy");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");


  },
  mounted(){
    const refresh = this.debounce(()=>{
        this.$refs.scroll.refresh()
        console.log("刷新")
        })
    //监听图片加载情况
    this.$bus.$on('itemImgLoad',()=>{
      console.log('监听到了')
      // this.$refs.scroll.refresh()
      refresh()
    })
  }
};
</script>

<style>
#home{
  height: 100vh;
  position: relative;
}
.tab-control {
  z-index: 998;
  position: sticky;
  top: 44px;
}
.nav-bar {
  z-index: 999;
}
.scroll{
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>
