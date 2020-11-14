<!--  -->
<template>
  <div class="lite-view" @click="showPlayView">
    <div class="lite-pic"><img :src="musicDetail.picUrl" alt="" /></div>
    <div class="lite-name">
      {{ musicDetail.name }} - {{ musicDetail.singer }}
    </div>

    <div class="lite-btn" v-if="isMusicPlaying" @click.stop="playPause"></div>
    <div class="lite-btn" v-else @click.stop="playPause"></div>
    <div class="lite-btn" @click.stop="showPlayList"></div>
  </div>
</template>

<script>
export default {
  name: "MusicPlayViewLite",
  components: {},
  data: function () {
    return {};
  },
  props: {
    musicDetail: {
      type: Object,
      default: function () {
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
    playPause() {
      if (this.isMusicPlaying) {
        this.$emit("pause");
      } else {
        this.$emit("play");
      }
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
.lite-view {
  display: flex;
  align-items: flex-end;
  height: 40px;
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  background-color: skyblue;
  border-radius: 20px;
  line-height: 40px;
}
.lite-pic{
  width: 50px;
  height: 50px;
  background: url(~assets/img/common/music.jpg);
  background-size: cover;
  border-radius: 5px;
}
.lite-view img {
  width: 50px;
  border-radius: 5px;
}

.lite-name {
  flex: 5;
  font-size: 13px;
  padding-left: 20px;
}

.lite-btn {
  flex: 1;
  font-family: "icomoon";
}
</style>
