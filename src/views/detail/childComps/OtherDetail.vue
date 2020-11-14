<!--  -->
<template>
  <div class='other-detail'>
    <p>—————宝贝详情—————</p>
    <div>“{{otherDetail.dtitle}}”</div>
    <video :src="otherDetail.video" controls v-if="otherDetail.video"></video>
    <div>{{otherDetail.desc}}</div>
    <img :src="otherDetail.marketingMainPic" alt="">
  </div>
</template>

<script>
export default {
  name:"OtherDetail",
  components: {},
  data:function () {
    return {

    }
  },
  props:{
    otherDetail:{
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
  img{
    width: 100%;
  }
  p{
    text-align: center;
    font-size: 12px;
    color: #666;
  }
  .other-detail :nth-child(2){
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }
  .other-detail :nth-child(4){
    padding: 10px;
    background-color: #fff;
    text-indent: 2em;
    margin: 5px 0;
    font-size: 15px;
    line-height: 25px;
  }
  video{
    width: 100%;
    vertical-align: bottom;
  }
</style>
