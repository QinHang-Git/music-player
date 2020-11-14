<!--  -->
<template>
  <div class="flod">
    <div @click="show" :class="isShow ? 'bottom' : 'left'"><slot name="title"></slot></div>
    <div :class="isShow ? 'show' : 'hide'"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Flod",
  components: {},
  data: function () {
    return {
      isShow:true
    };
  },
  props: {
    begin:{
      type:Boolean,
      default:true
    }
  },
  computed: {},
  watch: {},
  methods: {
    show(){
      this.isShow = !this.isShow
    }
  },
  mounted(){
    this.isShow = this.begin
  }
};
</script>

<style scoped>
.flod{
  /* background-color: #666; */
  position: relative;
}
.show {
  transition: height 0.3s;
}
.hide {
  height: 0;
  transition: height 0.3s;
  overflow: hidden;
}
.bottom::after{
  position: absolute;
  right: 0;
  top:0;
  content: "";
  text-align: right;
  display: inline;
  margin-right: 15px;
  font-family: "icomoon";
  vertical-align: center;
}
.left::after{
  position: absolute;
  right: 0;
  top:0;
  content: "";
  text-align: right;
  display: inline;
  margin-right: 15px;
  font-family: "icomoon";

}
</style>
