<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <music-play></music-play>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar"
  import MusicPlay from "./views/musicPlay/MusicPlay"
  export default {
    name:'app',
    components:{
      MainTabBar,
      MusicPlay
    }
  }
</script>

<style>
  @import './assets/css/base.css';
  #app{
    height: 100vh;
    width: 100vw;
  }

</style>
