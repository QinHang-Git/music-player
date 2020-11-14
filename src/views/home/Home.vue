<!--  -->
<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <scroll @upLoadMore="upLoadMore" :monitor="true" @scrollTop="contentScroll"
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
    </scroll>
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
      saveY:null

    };
  },
  computed: {
    scrollTop(){
      console.log("jianting----scrollTop");
      return this.$refs.scroll.scrollTop
    }
  },
  watch: {
    scrollTop(){
      this.isShowBackTop = (this.$refs.scroll.scrollTop > 1000)
    }
  },
  methods: {
    // 事件监听方法,监听点击的tab
    tabClick(index) {
      console.log(index);
      console.log(this.$refs.scroll.scrollTop);
      if(this.$refs.scroll.scrollTop>500)
      {this.$refs.scroll.scrollY(500)}
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
        this.$refs.scroll.scrollY(0)
      },
    // 返回顶部图标是否显示
    contentScroll(scrollTop){
      this.isShowBackTop = (scrollTop)>1000
    },
    //监听方法，用于滚动位置事件的保存 上拉加载更多
    upLoadMore(){
      this.getHomeGoods(this.currentType)
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
    //轮播图使用 请求的数据
    getGoodsActivity() {
      getGoodsActivity().then((res)=>{
        console.log(res);
        this.goodsActivity = res.data
        console.log(this.goodsActivity);
      })
    },
  },
  created: function () {
    this.getHomeGoods("goodList");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
    this.getGoodsActivity();
  },
  mounted(){
  },

  beforeRouteLeave(to, from, next) {
      this.saveY = this.$refs.scroll.scrollTop; //记录离开页面时的位置
      next()
  },
  activated(){
    this.$refs.scroll.scrollY(this.saveY)
  }
};
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
  min-width: 320px;
  max-width: 640px;
}
.nav-bar{
  position: fixed;
  top: 0;
  width: 100%;
}
.tab-control {
  z-index: 2;
  position: sticky;
  top: 0px;
  /* width: 100%; */
  min-width: 320px;
  max-width: 640px;
}
.scroll{
  position: fixed;
  top: 44px;
  height: calc(100% - 93px);
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  /* bottom: 50px;
  left: 0;
  right: 0; */
  /* overflow: auto; */
}

</style>
