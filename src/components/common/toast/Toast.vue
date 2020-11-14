<!--  -->
<template>
  <div>
    <div class="toast" v-show="isShow">
      <div>{{ message }}</div>
    </div>
    <div class="loading" v-show="showLoading">
      <img src="~assets/img/common/loading.gif" alt="">
    </div>
    <div class="failed" v-show="showFailed">
      <img src="~assets/img/common/fail.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  data: function () {
    return {
      message: "",
      isShow: false,
      showLoading: false,
      showFailed:false
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    show(message, duration = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
    hide(){
      this.isShow = false;
    },
    isShowLoading(isShow){
      this.showLoading = isShow
    },
    isShowFail(isShow){
      this.showFailed = isShow
    }
  },
};
</script>

<style scoped>

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.loading ,.failed{
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 999;
}
.failed img {
  width: 30vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

</style>
