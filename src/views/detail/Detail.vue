<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <div class="goods-detail">
      <main-pic :picSrc="goodsDetail.mainPic"></main-pic>
      <describe :describe="goodsDetail"></describe>
      <shop-name :shopName="goodsDetail"></shop-name>
      <other-detail :otherDetail="goodsDetail"></other-detail>
    </div>
    <buy-goods :buyGoods="goodsDetail" class="buy-goods"></buy-goods>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetalNavBar";
import MainPic from "./childComps/MainPic";
import Describe from "./childComps/Describe";
import BuyGoods from "./childComps/BuyGoods";
import ShopName from "./childComps/ShopName";
import OtherDetail from "./childComps/OtherDetail"

import { getGoodsDetails } from "network/home.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    MainPic,
    Describe,
    BuyGoods,
    ShopName,
    OtherDetail
  },
  data: function () {
    return {
      goodsDetail: {},
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    const goodsId = this.$route.params.itemId;
    console.log(goodsId);
    getGoodsDetails(goodsId).then((res) => {
      this.goodsDetail = res.data;
      console.log(this.goodsDetail);
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  width: 100%;
}
.goods-detail {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: auto;
  background-color: #eee;
  width: 100%;

}
.buy-goods{
  z-index: 3;
  width: 100%;

}
</style>
