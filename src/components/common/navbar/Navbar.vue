<!--  -->
<template>
  <div>
    <div class='nav-bar'>
    <div class="left"> <slot name="left"></slot> </div>
    <div class="center"> <slot name="center"></slot> </div>
    <div class="right"> <slot name="right"></slot> </div>
    </div>
  </div>

</template>

<script>
export default {
  name:"Navbar",
  components: {},
  data:function () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped>

  .nav-bar{
    display: flex;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    height: 44px;

    background-color: #c4ddf1;


    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.2);
  }
  .left,.right{
    width: 60px;
    /* background-color: #666; */
  }
  .center{
    flex: 1;
  }
</style>
