<template>
  <div class="banner" @mouseover="disInv" @mouseleave="runInv">
    <div class="item">
      <img :src="dataList[currentIndex]">
    </div>
    <div class="page" v-if="this.dataList.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li v-for="(item,index) in dataList" :key='item' @click="gotoPage(index)" :class="{'current':currentIndex == index} ">  {{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideShow",
    props: {

    },
    data() {
      return {
        dataList:["https://img04.sogoucdn.com/app/a/100520093/f9d5c084396d06f6-0c7006bf1d0bb8d5-1f36c921b7ab53d2d205d5d0529cf1f2.jpg",
        "https://t1.hxzdhn.com/uploads/tu/201903/9999/131afc3eec.jpg",
        "https://img02.sogoucdn.com/app/a/100520093/f9d5c084396d06f6-0c7006bf1d0bb8d5-83e638f9bd7a294ca0bd7c317b9d52ed.jpg",
        "http://pic1.win4000.com/wallpaper/2019-03-21/5c937ebdb7074.jpg"],
        currentIndex:0,
        timer:null
      }
    },
    mounted() {
    },
    methods: {
      gotoPage(index) {
        this.currentIndex = index;
      },
      //定时器
      runInv() {
        this.timer = setInterval(() => {
          this.gotoPage(this.nextIndex)
        }, 3000)
      },
      disInv(){
        console.log("鼠标来了")
        clearInterval(this.timer)
      }
    },
    created(){
        this.runInv()
    },
    computed: {
      //上一张
      prevIndex() {
        if(this.currentIndex == 0) {
          return this.dataList.length - 1;
        }else{
          return this.currentIndex - 1;
        }
      },
      //下一张
      nextIndex() {
        if(this.currentIndex == this.dataList.length - 1) {
          return 0;
        }else {
          return this.currentIndex + 1;
        }
      }
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
border-radius: 8px;
    margin:  3px 4px;
    overflow: hidden;
  }
  .banner img {
    width: 100%;
    height: 150px;
    vertical-align: bottom;
  }
  .banner .page {
    background: rgba(0,0,0,.3);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  ul li {
    list-style: none;
    float: left;
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: rgba(255,255,255,.8);
    font-size: 14px;
  }

  .banner .page ul {
    float: right;
  }
  .current {
    color: #ff6700;
  }

</style>
