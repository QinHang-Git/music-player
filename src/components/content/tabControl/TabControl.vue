<!--  -->
<template>
  <div id=''>
    <div class="tab-control">
      <div v-for="(item , index) in titles"
      :key="index + item"
      :class="{active:currentIndex==index}"
      @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:"",
  components: {},
  data:function () {
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabClick",index)
    }
  },
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;

    background-color: #fff;
    font-size: 14px;
    line-height: 40px;
  }
  .tab-control div {
    flex:1;
  }
  .tab-control span{
    padding: 3px;
  }
  .active{
    color: chocolate;
  }
  .active span{
    border-bottom: 2px solid #000;

    font-weight: normal;
  }
</style>
