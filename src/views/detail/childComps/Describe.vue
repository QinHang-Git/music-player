<!--  -->
<template>
  <div id=''>
    <div class="goods-describe">
      <div class="goods-describe1">
        <div>
          <p>优惠促销</p>
          <div class="goods-price">
          <p class="original-price"><span>￥</span>{{describe.originalPrice}}</p>
          <p class="actual-price">券后价：￥<span>{{describe.actualPrice}}</span></p>
          </div>
        </div>
        <a :href="describe.couponLink" class="coupon-price">领取优惠券</a>
      </div>



      <!-- <a :href="describe.couponLink">领券</a> -->
      <h2>{{describe.title}}</h2>
    </div>
    <h2>最优方案：{{describe.desc}}</h2>
    <a :href="describe.itemLink">立即购买</a>
  </div>
</template>

<script>
export default {
  name:"Describe",
  components: {},
  data:function () {
    return {

    }
  },
  props:{
    describe:{
      type: Object,
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
  .goods-describe{
    margin: 10px;
    /* height: 120px; */
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
  }
  .goods-describe1{
    display: flex;
  }
  .goods-describe1 > p:first-child{
    color: red;
    font-size: 12px;
  }
  .goods-price{
    font-size: 25px;
    display: flex;
    align-items: center;
  }
  .original-price{
    color: red;
  }
  .original-price span{
    font-size: 15px;
  }
  .actual-price{
    margin-left: 15px;
    padding:0 5px;
    background-color: red;
    border-radius: 10px;
    font-size: 13px;
    height: 25px;
    line-height: 25px;
    color: #fff;
  }
  .actual-price span{
    font-size: 20px;
    vertical-align: middle;
  }
  h2{
    font-size: 18px;
  }
  .coupon-price{
    flex: 1;
    margin:5px 10px;
    display: block;
    background: url(../../../assets/img/common/coupon.jpg);
    background-size: 100% 100%;
    width: 50%;
    border-radius: 10px;
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }

</style>
