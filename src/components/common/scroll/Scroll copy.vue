<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "Scroll",
  components: {},
  data: function () {
    return {
      scroll: null
    };
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  computed: {},
  methods: {
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      // observeDOM:true,
      probeType:this.probeType,
      click:true,
      taps:true,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on("scroll",(position)=>{
      // console.log(position);
      this.$emit("scroll",position)
    })
    this.scroll.on("pullingUp",()=>{
      // console.log("shanla")
      this.$emit("pullingUp")
    })
  }
};
</script>

<style scoped>
</style>
