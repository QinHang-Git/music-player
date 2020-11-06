<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <!-- <div id="playing"><play-music></play-music></div> -->

    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar"
  import PlayMusic from "components/content/playmusic/Playmusic"
  export default {
    name:'app',
    components:{
      MainTabBar,
      PlayMusic
    }
  }
</script>

<style>
  @import './assets/css/base.css';
  #playing{
    position: absolute;
    width: 44px;
    height: 44px;
    right: 0px;
    z-index: 999;
  }
  .main-tab-bar{
    z-index: 999;
  }
</style>
