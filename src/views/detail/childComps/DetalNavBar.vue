<!--  -->
<template>
  <div id=''>
    <nav-bar>
      <div slot="left" @click="backClick">返回</div>
      <div slot="center">详情页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name:"DetalNavBar",
  components: {
    NavBar
  },
  data:function () {
    return {

    }
  },
  methods:{
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
