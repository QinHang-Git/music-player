<!--  -->
<template>
  <div id='detail'>
    <detail-nav-bar></detail-nav-bar>
    <div class="goods-detail">
      <main-pic :picSrc="goodsDetail.mainPic"></main-pic>
      <describe :describe="goodsDetail"></describe>
    </div>

  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetalNavBar"
import MainPic from "./childComps/MainPic"
import Describe from "./childComps/Describe"
import {getGoodsDetails} from "network/home.js"
export default {
  name:"Detail",
  components: {
    DetailNavBar,MainPic,Describe
  },
  data:function () {
    return {
      goodsDetail:{}

    }
  },
  computed: {},
  watch: {},
  methods: {},
  created(){
    const goodsId = this.$route.params.itemId
    console.log(goodsId);
    getGoodsDetails(goodsId).then((res)=>{
      this.goodsDetail = res.data
      console.log(this.goodsDetail);
    })
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    height: 100vh;
  }
  .goods-detail{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: auto;

  }
</style>
