<!--  -->
<template>
  <div id="">
    <scroll
      @upLoadMore="upLoadMore"
      :monitor="true"
      class="scroll"
      ref="scroll"
    >
      <div
        v-for="(item, index) in musicSearchList"
        :key="index"
        class="search-list"
        @click="playMusic(item, index)"
      >
        <div class="search-list-name">
          <div>{{ item.name }}</div>
          <div>
            <span v-for="item2 in item.artists">{{ item2.name }}·</span>
            <span>····{{ item.album.name }}</span>
          </div>
        </div>
        <div class="search-list-control" @click.stop="playMusic(item, index)">
          
        </div>
        <div class="search-list-control" @click.stop="listMusic(item)"></div>
      </div>
    </scroll>
    <div class="search-list-bottom"></div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "MusicSearchList",
  components: {
    Scroll,
  },
  data: function () {
    return {
      // currentIndex : undefined
    };
  },
  props: {
    musicSearchList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  watch: {},
  methods: {
    playMusic(item, index) {
      // this.currentIndex = index
      let payload = {};
      payload.name = item.name;
      payload.id = item.id;
      payload.singer = item.artists[0].name;
      this.$emit("addMusicPlay", payload);
    },
    listMusic(item) {
      let payload = {};
      payload.name = item.name;
      payload.id = item.id;
      payload.singer = item.artists[0].name;
      this.$emit("addMusicList", payload);
    },
    upLoadMore() {
      this.$emit("upLoadMore");
    },
  },
};
</script>

<style scoped>
.scroll {
  /* overflow: auto; */
  height: calc(100% - 40px);
  width: 100%;
}
.search-list {
  display: flex;
  height: 50px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  vertical-align: middle;
  /* display: table; */
  line-height: 50px;
  text-indent: 1em;
  padding: 4px 0;
  background-color: #fff;
}
.search-list-name {
  flex: 6;
  display: flex;
  flex-direction: column;
}
.search-list-name > div:nth-child(1) {
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
}
.search-list-name > div:nth-child(2) {
  font-size: 12px;
  color: #666;
  line-height: 12px;
  height: 12px;
  overflow: hidden;
}
.search-list-control {
  flex: 1;
  line-height: 42px;
  font-family: "icomoon";
}
.search-list-bottom {
  width: 100%;
  height: 40px;
}
</style>
