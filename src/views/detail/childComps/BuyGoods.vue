<!--  -->
<template>
  <div id='buy-goods'>
    <div class="shopLogo"><img :src="buyGoods.shopLogo" alt=""></div>
    <a :href="buyGoods.couponLink" class="coupon-link">领取优惠券</a>
    <a :href="buyGoods.itemLink" class="item-link">立即购买</a>
  </div>
</template>

<script>
export default {
  name:"BuyGoods",
  components: {},
  data:function () {
    return {

    }
  },
  props:{
    buyGoods:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped>
#buy-goods{
  height: 44px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
a{
  flex: 1;
  display: block;
  text-align: center;
  color: #fff;
}
.coupon-link{
  background: rgb(225, 149, 0);
  height: 49px;
  line-height: 49px;
}
.item-link{
  background: rgb(225, 0, 54);
  height: 49px;
  line-height: 49px;
}

.shopLogo{
  width: 49px;
  text-align: center;
}
.shopLogo img{
  width: 80%;
  border: 1px solid #aaa;
  border-radius: 20px;
}
</style>
