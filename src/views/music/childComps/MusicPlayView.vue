<!--  -->
<template>
  <div class="play-view">
    <nav-bar class="nav-bar">
      <div slot="left" @click="showPlayView">关闭</div>
      <div slot="center">正在播放</div>
    </nav-bar>
    <div class="play-pic">
      <img :src="musicDetail.picUrl" alt="" />
    </div>
    <div class="play-detail">
      <h3>{{ musicDetail.name }}</h3>
      <div>{{ musicDetail.alia }} - {{ musicDetail.singer }}</div>
    </div>

    <div class="play-control">
      <div></div>
      <div @click="last"></div>
      <div v-if="isMusicPlaying" @click="pause"></div>
      <div v-else @click="play"></div>
      <div @click="next"></div>
      <div @click="showPlayList"></div>
    </div>

    <div class="audio-bar">
      <span class="audio-time-current"></span>
      <div class="audio-progress">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <span class="audio-time-duration"></span>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "PlayView",
  components: {
    NavBar,
  },
  data: function () {
    return {};
  },
  props: {
    musicDetail: {
      type: Object,
      default() {
        return {};
      },
    },
    isMusicPlaying: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  watch: {},
  methods: {
    play() {
      console.log("点击了播放");
      this.$emit("play");
    },
    pause() {
      console.log("点击了暂停");
      this.$emit("pause");
    },
    next() {
      this.$emit("next");
    },
    last() {
      this.$emit("last");
    },
    showPlayList() {
      this.$emit("showPlayList");
    },
    showPlayView() {
      this.$emit("showPlayView");
    },
  },
};
</script>

<style scoped>
/* 播放页面 */
/* 2 整体 */
.play-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #F2F3F5;
}
/* 2.0nav-bar */
.nav-bar {
  height: 44px;
}
/* 2.1专辑图 */
.play-pic {
  width: 90%;
  margin-top: 10%;
  border-radius: 20px;
  overflow: hidden;
  background: url(~assets/img/common/music.jpg);
  background-size: cover;
}
img {
  top: 0;
  width: 100%;
}
/* 2.2歌曲信息部分 */
.play-detail {
  padding-top: 5%;
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
}
.play-detail :first-child {
  font-size: 25px;
}
.play-detail :nth-child(2) {
  font-size: 14px;
  color: #666;
  padding-top: 5px;
}
/* 2.3音乐控制部分 */
.play-control {
  width: 80%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-family: "icomoon";
}
.play-control div {
  width: 20%;
  height: 16vw;
  line-height: 16vw;
  font-size: 10vw;
  margin-bottom: 75px;
}
</style>
