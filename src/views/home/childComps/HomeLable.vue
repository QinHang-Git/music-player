<!--  -->
<template>
  <div id='home-lable'>
    <nav>
      <div class="nav-common">
        <div class="nav-item">
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
      </div>
      <div class="nav-common">
        <div class="nav-item">
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
      </div>
      <div class="nav-common">
        <div class="nav-item">
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
        <div class="nav-item">
          <a href="">海外酒店</a>
          <a href="">特价酒店</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:"HoneLable",
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
  nav{
    border-radius: 8px;
    margin:  3px 4px;
    overflow: hidden;
  }
  .nav-common{
    display: flex;
    height: 88px;
    background-color: #aaa;
  }
  .nav-common:nth-child(2){
    margin: 3px 0;
    background: -webkit-linear-gradient(left , red ,rgb(216, 95, 95));
  }
  .nav-common:nth-child(1){
    margin: 3px 0;
    background: -webkit-linear-gradient(left ,rgb(133, 78, 221),skyblue );
  }
  .nav-common:nth-child(3){
    margin: 3px 0;
    background: -webkit-linear-gradient(left , #faa ,rgb(78, 221, 221));
  }
  .nav-item{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .nav-item a{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    text-shadow: 1px 1px rgba(0,0,0,0.2);
  }
  .nav-item a:nth-child(1){
    border-bottom: 1px solid #fff;
  }
  .nav-item:nth-child(1) a{
    border: 0;
    background: url(../../../assets/img/nav/hotel.png) no-repeat bottom center;
    background-size: 121px auto;
  }
  .nav-item:nth-child(-n+2){
    border-right: 1px solid #fff;
  }
</style>
