<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return !this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      defalut:"red"
    }
  },
  methods:{
    itemClick(){
      const tag = this.$router.replace(this.path).catch((err)=>{err})
    }
  }
}

</script>
<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    /* color: rgb(39, 151, 63); */
    font-weight:bolder
  }
</style>
