<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  data(){
    return{

    }
  }

}
</script>


<style>
  #tab-bar{
    display: flex;
    background-color: burlywood;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.2);
    z-index: 999;
  }

</style>
