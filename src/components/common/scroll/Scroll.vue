<!--  -->
<template>
  <div ref="scroll" class="scroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  components: {},
  data: function () {
    return {
      scrollEvent: {},
      scrollTop: null,
      timer: null, //定时器，防止上拉频繁加载的问题
      scrollState: 0, //滚动状态，防止多次滚动卡死
    };
  },
  props: {
    monitor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  watch: {
    scrollTop:{
      handler(val, oldVal) {
        if(this.monitor){
          this.$emit('scrollTop', this.scrollTop)
        }
      },
      deep: true
    }
  },
  methods: {
    scrollY(y) {
      if(!this.monitor){
        console.log("未开启监听，不能使用滚动到指定位置");
        return;
      }
      // 滚动状态，防止多次点击滚动卡死
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      let dParams = 20;
      const time = setInterval(() => {
        let distance = this.scrollEvent.scrollTop - dParams;
        dParams += 20;
        distance = distance > y ? distance : y;
        this.$refs.scroll.scrollTop = distance;
        if (this.scrollEvent.scrollTop < y + 10) {
          clearInterval(time);
          this.scrollState = 0;
        }
      }, 10);
    },
    upLoadMore() {
      var target = event.target ? event.target : event.srcElement;
      this.scrollEvent = target;
      this.scrollTop = this.scrollEvent.scrollTop;
      var scrollBottom =
        this.scrollEvent.scrollHeight -
        this.scrollEvent.clientHeight -
        this.scrollEvent.scrollTop;
      if (scrollBottom < 4) {
        // this.$emit("upLoadMore");       //-----------2选1
        if (this.timer == null) {
          this.$emit("upLoadMore");      //-----------2选1
          this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
          }, 1000);
        }
      }
    },
  },
  mounted() {
    // 监听滚动
    console.log(this.monitor);
    if (this.monitor) {
      var scroll = this.$refs.scroll;
      scroll.addEventListener("scroll", this.upLoadMore, false);
    }
  },
};
</script>

<style scoped>
.scroll {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
