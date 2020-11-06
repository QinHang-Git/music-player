<!--  -->
<template>
  <div id='music'>
    <nav-bar><div slot="center">音乐播放器</div></nav-bar>

    <!-- <audio :src="musicSrc" autoplay controls></audio> -->
    <!-- 搜索框 -->
    <div class="search-music">
      <div class="search-micon"></div>
      <div class="search-warp">
        <div class="search-icon" ></div>
        <input type="text" placeholder="在这里搜索歌曲" v-model="searchName">
      </div>
      <div class="search-btn" @click="search(searchName)">搜索</div>
    </div>
    <slide-show></slide-show>
    <div v-for='(item,index) in musicList' :key="index" class="list">
      {{item.name}}
      <button class="play"  @click="play(item)">播放</button>
    </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"
import {getMusic, playMusic} from "network/music.js"
import SlideShow from "components/common/slideshow/SlideShow"

export default {
  name:"Category",
  components: {NavBar,SlideShow},
  data:function () {
    return {
      musicList:[],
      musicSrc:{},
      searchName:''
    }
  },
  computed: {},
  watch: {},
  methods: {
    play(item){
      playMusic(item.id).then((res)=>{
        // this.musicSrc.state = false;
        // this.$store.commit("setMusicSrc",this.musicSrc)
        this.musicSrc.url = res.data.data[0].url;
        this.musicSrc.state = true;
        this.$store.commit("setMusicSrc",this.musicSrc)
        //console.log(this.musicSrc);
      })
    },
    search(name){
      console.log(name)
      getMusic(name).then(res =>{
        console.log(res)
        this.musicList = res.data.data.songs;
      })
    }
  },
  created:function(){
    //1.请求数据


  }
}
</script>

<style scoped>

  nav-bar{
    z-index: 2;
  }

  .list{
    height: 50px;
    box-shadow: 0 1px 1px rgba(100,100,100,0.2);
    vertical-align: middle;
    /* display: table; */
    line-height: 50px;
    text-indent: 1em;
  }


  /* 搜索栏 */
  .search-music{
    padding-top: 44px;
    position: relative;
    height: 44px;
    overflow: hidden;
  }

  /* 搜索框 */
  .search-warp{
    height: 32px;
    background-color:#ffffff;
    margin: 6px 65px 6px 65px;
    border-radius: 15px;
  }
  .search-icon{
    /* width: 20px; */
    height: 20px;
    float: left;
    font-family: 'icomoon';
    line-height: 20px;
    margin: 6px 0px 0 10px;
    padding-right: 10px;
    border-right: 1px solid gray;
  }
  .search-warp input{
    float: left;
    margin: 7px 0 10px 10px;
    border:0;
    outline:none;
    background-color: transparent;
  }


  .search-micon{
    position: absolute;
    top: 0;
    left: 0;
    width: 55px;
    height: 44px;
  }
  .search-micon::before{
    content: "\e911";
    display: block;
    width: 20px;
    /* height: 20px; */
    font-family: "icomoon";
    font-size: 20px;
    margin: 0 0 0 19px;
    line-height: 44px;
  }
  .search-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 55px;
    height: 44px;
    color:rgb(54, 39, 17);
    line-height: 44px;

  }



</style>
