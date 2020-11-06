<!--  -->
<template>
  <div class='back-top'>
    <img src="~assets/img/common/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name:"BackTop",
  components: {},
  data:function () {
    return {

    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 65px;
    right: 15px;
    z-index: 3;
  }
  img{
    width: 50px;
    height: 50px;
  }
</style>
