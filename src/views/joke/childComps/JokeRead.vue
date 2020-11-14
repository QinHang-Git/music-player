<!--  -->
<template>
  <div class="joke-content">
    <div class="close-back" @click="closeContent2"></div>
    <div class="jock-bar">
      <div></div>
      <div>查看详情</div>
      <div @click="closeContent">X</div>
    </div>
    <div class="joke-html" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "JokeRead",
  components: {},
  data: function () {
    return {};
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  computed: {},
  watch: {},
  methods: {
    closeContent() {
      this.$emit("closeContent");
    },
    closeContent2() {
      console.log("是发达的方式的");
      this.$emit("closeContent");
    },
  },
};
</script>

<style scoped>
/* 2. 中间的显示条 */
.jock-bar {
  /* background-color: rgb(194, 92, 92); */
  text-align: center;
  font-size: 20px;
  display: flex;
  height: 30px;
  background: -webkit-linear-gradient(top ,rgb(78, 221, 221),rgb(45, 158, 173));

}
.jock-bar :first-child,
.jock-bar :nth-child(3) {
  width: 30px;
}
.jock-bar :nth-child(2) {
  flex: 1;
}

/* 笑话内容 */
.joke-html {
  height: 300px;
  overflow: auto;
  text-indent: 2em;
  line-height: 27px;
  background-color: #fff;
  padding: 10px;
}
</style>
