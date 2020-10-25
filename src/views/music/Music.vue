<!--  -->
<template>
  <div id='music'>
    <nav-bar><div slot="center">音乐播放器</div></nav-bar>
    <audio :src="musicSrc" autoplay controls></audio>
    <div id="search">
      <input type="text" v-model="searchName">
      <button @click="search(searchName)">搜索</button>
    </div>
    <div v-for='(item,index) in musicList' :key="index" class="list">
      {{item.name}}
      <button class="play"  @click="play(item)">播放</button>
    </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"
import {getMusic, playMusic} from "network/music.js"

export default {
  name:"Category",
  components: {NavBar},
  data:function () {
    return {
      musicList:[],
      musicSrc:"",
      searchName:''
    }
  },
  computed: {},
  watch: {},
  methods: {
    play(item){
      playMusic(item.id).then((res)=>{
        console.log(res),
        this.musicSrc = res.data.data[0].url;
				console.log(this.musicSrc);
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
  .list{
    height: 50px;
    box-shadow: 0 1px 1px rgba(100,100,100,0.2);
    vertical-align: middle;
    /* display: table; */
    line-height: 50px;
    text-indent: 1em;
  }
  audio{
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 51px;
  }
  #search{
    margin-top: 3%;
    height: 50px;
  }
  #search input{
    box-sizing: border-box;
    width:70%;
  }
  #search button{
    box-sizing: border-box;

    width: 30%;
  }



</style>
