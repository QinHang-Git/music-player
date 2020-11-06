<!--  -->
<template>
  <div class='detail-mian-pic'>
    <img :src="picSrc" alt="">
  </div>
</template>

<script>
export default {
  name:"MainPic",
  components: {},
  data:function () {
    return {

    }
  },
  props:{
    picSrc:{
      type:String,
      default:""
    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped>
  .detail-mian-pic{
    width: 100%;

  }
  .detail-mian-pic img{
    width: 100%;
    /* border-radius: 10px; */
  }
</style>
