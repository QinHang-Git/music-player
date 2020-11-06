<!--  -->
<template>
  <div id='home-cate'>
    <div class="sub-box">
      <div class="sub-hd">
        <h2>热门活动</h2>
        <a href="#" class="more">点击查看更多</a>
      </div>
      <div class="sub-row">
        <a href="#">
          <img src="~/assets/img/sub/new.jpg" alt="">
        </a>
        <a href="#">
          <img src="~/assets/img/sub/new2.jpg" alt="">
        </a>
      </div>
      <div class="sub-row">
        <a href="#">
          <img src="~/assets/img/sub/new.jpg" alt="">
        </a>
        <a href="#">
          <img src="~/assets/img/sub/new2.jpg" alt="">
        </a>
      </div>
      <div class="sub-row">
        <a href="#">
          <img src="~/assets/img/sub/new.jpg" alt="">
        </a>
        <a href="#">
          <img src="~/assets/img/sub/new2.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeCate",
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
  /* 综合模块 */
  .sub-box{
    border-top: 1px solid #ccc;
    background-color: #fff;
    margin: 4px 4px;
  }
  .sub-hd{
    position: relative;
    height: 30px;
    border-bottom: 1px solid #ccc;
  }
  .sub-hd h2{
    position: relative;
    text-indent: -999px;
    overflow: hidden;
  }
  .sub-hd h2::after{
    position: absolute;
    top: 3.5px;
    left: 6px;
    content: "";
    width: 79px;
    height: 20px;
    background: url(../../../assets/img/nav/ilovemei.svg) no-repeat;
  }
  .more{
    position: absolute;
    right: 6px;
    top: 3px;
    border-radius: 5px;
    background: -webkit-linear-gradient(right, red , yellow);
    padding: 0px 15px 0 10px;
    font-size: 14px;
    color: #000;
    height: 20px;
    line-height: 20px;
  }
  .more::after{
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);

  }
  .sub-row{
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .sub-row a{
    flex: 1;
  }
  .sub-row a img{
    width: 100%;
  }
  .sub-row a:first-child{
    border-right: 1px solid #ccc;
  }
</style>
