<template>
  <div class="banner" @mouseover="disInv" @mouseleave="runInv">
    <v-touch
      v-on:swipeleft="gotoPage(nextIndex)"
      v-on:swiperight="gotoPage(prevIndex)"
      class="item"
    >
      <a :href="goodsActivity[currentIndex].activityLink"
        ><img :src="goodsActivity[currentIndex].materialLink"
      /></a>
    </v-touch>
    <div class="page" v-if="goodsActivity.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li
          v-for="(item, index) in goodsActivity"
          @click="gotoPage(index)"
          :class="{ current: currentIndex == index }"
        >
          {{ index + 1 }}
        </li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSlideShow",
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  mounted() {},
  props: {
    goodsActivity: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    //定时器
    runInv() {
      console.log("鼠标偶走了");
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 3000);
    },
    disInv() {
      console.log("鼠标来了");
      clearInterval(this.timer);
    },
  },
  created() {
    this.runInv();
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.goodsActivity.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.goodsActivity.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
};
</script>

<style scoped>
.banner {
  min-width: 320px;
  max-width: 640px;
  position: relative;
  border-radius: 8px;
  margin: 3px 4px;
  overflow: hidden;
}
a {
  display: block;
}
.banner img {
  width: 100%;
  vertical-align: bottom;
}
.banner .page {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  width: 100%;
}

ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
</style>
