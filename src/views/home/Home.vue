<!--  -->
<template>
  <div id='home'>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <h2>首页</h2>
    <div id="div1">sadas</div>
    <div id="div2">asdasd</div>
</div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"
export default {
  name:"Home",
  components: {NavBar},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {},
  created:function(){
      console.log("chuangjian");
  }

}
</script>

<style>
  #div1{
    width: 100px;
    height: 100px;
    background-color: red;
  }
  #div2{
    width: 100px;
    height: 100px;
    background-color: blue;
  }
</style>
