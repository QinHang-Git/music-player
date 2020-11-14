<!--  -->
<template>
  <div id="">
    <!-- <div class="music-play"></div> -->
    <audio
      v-show="isShowControls"
      ref="audio"
      :src="musicUrl"
      controls
      preload
      @canplay="play"
      @ended="next"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "MusicPlay",
  components: {},
  data: function () {
    return {
      musicSrc: "",
      isShowControls: false,
    };
  },
  computed: {
    musicUrl() {
      console.log("dididi,歌曲链接改变了");
      return this.$store.state.musicPlay.url;
    },
    musicPlay() {
      return this.$store.state.musicPlay.playing;
    },
  },
  watch: {
    musicUrl() {
      this.musicSrc = this.musicUrl;
    },
    musicPlay() {
      if (this.musicPlay) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
  },
  methods: {
    play() {
      this.$refs.audio.play();
      this.$store.commit("setMusicPlay", true);
    },
    pause() {
      this.$refs.audio.pause();
      this.$store.commit("setMusicPlay", false);
    },
    next() {
      this.$bus.$emit("nextMusic");
    },
  },
  mounted() {
    const that = this;
    this.$bus.$on("isShowPlayView", (val) => {
      if (val) {
        var c = setTimeout(() => {
          this.isShowControls = val;
          clearTimeout(c);
        }, 50);
      } else {
        this.isShowControls = val;
      }
    });
  },
};
</script>

<style scoped>
/* 正在播放标志 */
.music-play {
  position: fixed;
  z-index: 9;
  font-family: "icomoon";
  border: 1px solid black;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  line-height: 30px;
  text-align: center;
  top: 7px;
  right: 7px;
}
audio {
  position: fixed;
  bottom: 35px;
  left: 5%;
  z-index: 10;
  width: 90%;
  height: 30px;
}
audio::-webkit-media-controls-play-button {
  display: none;
}
/* audio::-webkit-media-controls-mute-button {
  display: none;
} */

/* audio::-webkit-media-controls-current-time-display {
  display: none;
} */
audio::-webkit-media-controls-time-remaining-display {
  display: none;
}
</style>
