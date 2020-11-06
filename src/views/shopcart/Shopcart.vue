<!--  -->
<template>
  <div id='joke-view'>
    <nav-bar><div slot="center">每日笑话</div></nav-bar>
    <button @click="getJoke()">下一页</button>
    <div class="joke-list" ref="scroll">
      <joke :jokeList="jdJokeList['list']"></joke>
    </div>
  </div>

</template>

<script>

import NavBar from "components/common/navbar/Navbar"
import Joke from "./childComps/Joke"

import { getJoke ,getJdJoke} from "network/joke.js"
export default {
  name:"Shopcart",
  components: {NavBar,Joke},
  data:function () {
    return {
      jokeList:{
        "list":[],
        "page":1
      },
      jdJokeList:{
        "list":[],
        "page":1
      },
      scroll:null
    }
  },
  computed: {},
  watch: {},
  methods: {
    getJoke(){
      const page = this.jokeList["page"]
      getJoke(page).then((res)=>{
        this.jokeList['list'].push(...res.data.data.data);
        console.log(this.jokeList)
        this.jokeList['page'] += 1
      })
    },
    getJdJoke(){
      const page = this.jdJokeList["page"]
      getJdJoke(page).then((res)=>{
        console.log(res.data.result.showapi_res_body.contentlist);

        this.jdJokeList['list'].push(...res.data.result.showapi_res_body.contentlist);
        console.log(this.jdJokeList)
        this.jdJokeList['page'] += 1
      })
    },
    scrollToTop(){
          var target = event.target ? event.target : event.srcElement
          this.scroll = target.scrollHeight - target.clientHeight - target.scrollTop
          // console.log(target.scrollTop);//监听滚动
          // console.log(target.scrollHeight)//获得整体高度
          // console.log(target.clientHeight)//获得页面高度
          console.log(this.scroll);
          if(this.scroll<4){
            console.log("jinlaile xiongdi ")
            this.debounce(this.getJdJoke(),1000)
            console.log("jinlaile xiongdi sadfsdfsdf")
          }
    },
    debounce(func,delay){
      let timer = null
      return function(args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    }
  },
  created:function(){
    // this.getJoke()
    this.getJdJoke()
  },
  mounted(){
    var scroll = this.$refs.scroll
    scroll.addEventListener("scroll",this.scrollToTop,false)

  }

}
</script>

<style scoped>
  #joke-view{
    height: 100vh;
    position: relative;
  }
  .joke-list{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: auto;
  }
</style>
