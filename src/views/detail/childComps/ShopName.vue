<!--  -->
<template>
  <div id=''>
    <div class="shop-name">
      <div>
        <img :src="shopName.shopLogo" alt="">
      </div>
      <div>
        <div>{{shopName.shopName}}</div>
        <div>综合体验{{shopName.descScore}}</div>
      </div>
      <div>
        <div>宝贝描述：{{shopName.dsrScore}}</div>
        <div>卖家服务：{{shopName.shipScore}}</div>
        <div>物流服务：{{shopName.serviceScore}}</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name:"ShopName",
  components: {},
  data:function () {
    return {

    }
  },
  props:{
    shopName:{
      type:Object,
      default(){
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
  .shop-name{
    margin: 10px;
    /* height: 120px; */
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
    display: flex;
  }
  .shop-name :nth-child(1){
    flex: 1;
  }
  .shop-name>:nth-child(1) img{
    width: 80%;
    border: 1px solid #aaa;
    border-radius: 8px;
  }
  .shop-name>:nth-child(2){
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 35px;
  }
  .shop-name>:nth-child(2) :nth-child(2){
    font-size: 10px;
  }
  .shop-name>:nth-child(3){
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px 0;
  }
  .shop-name :nth-child(3)>div{
    flex: 1;
    height: 18.94px;
    line-height: 18.94px;
    font-size: 10px;
  }
</style>
