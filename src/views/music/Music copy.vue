<!--  -->
<template>
  <div id="music">
    <div :class="isShowSearchList ? 'music-nav-bar1' : 'music-nav-bar2'">
      <nav-bar><div slot="center">音乐播放器</div></nav-bar>
      <!-- 音乐搜索栏 -->
      <music-search-bar
        class="music-search-bar"
        @searchMusic="searchMusic"
        @showSearchList="showSearchList"
        @hideSearchList="hideSearchList"
      ></music-search-bar>
    </div>
    <!-- 显示首页的歌单 -->
    <music-list
      class="music-list"
      :musicList="musicList"
      @showHomeList="showHomeList"
    ></music-list>

    <!-- 在底部显示正在播放的歌曲信息 -->
    <music-play-view-lite
      :class="
        (isShowSearchList|isShowListItem) ? 'music-play-view-lite1' : 'music-play-view-lite'
      "
      :musicDetail="musicDetail"
      :isMusicPlaying="isMusicPlaying"
      @pause="pause"
      @play="play"
      @showPlayList="showPlayList"
      @showPlayView="showPlayView"
    ></music-play-view-lite>

    <!-- 搜索列表 -->
    <music-search-list
      v-if="isShowSearchList"
      class="music-search-list"
      @upLoadMore="loadMoreMusic"
      :musicSearchList="musicSearchList['list']"
      @addMusicPlay="addMusicPlay"
      @addMusicList="addMusicList"
    ></music-search-list>

    <music-list-item
      class="music-list-item"
      v-if="isShowListItem"
      :musicListItem="musicListItem"
      @hideHomeList="hideHomeList"
      @playListMusic="addMusicPlay"
      @addListMusic="addMusicList"
    >
    </music-list-item>
    <!-- 正在播放的歌曲列表 -->
    <div
      @click.stop="showPlayList"
      v-if="isShowPlayList"
      :class="isShowPlayList ? 'list-hide' : ''"
    ></div>
    <music-play-list
      :class="isShowPlayList ? 'play-list1' : 'play-list2'"
      :musicCounter="musicCounter"
      :musicPlayList="musicPlayList"
      @showPlayList="showPlayList"
      @playSelect="playSelect"
      @removeMusicList="removeMusicList"
    ></music-play-list>

    <!-- 播放页面，控制歌曲播放等功能 -->
    <v-touch v-on:swipedown="showPlayView">
      <music-play-view
        :class="isShowPlayView ? 'music-play-view1' : 'music-play-view2'"
        :musicDetail="musicDetail"
        :isMusicPlaying="isMusicPlaying"
        @play="play"
        @pause="pause"
        @next="next"
        @last="last"
        @showPlayList="showPlayList"
        @showPlayView="showPlayView"
      ></music-play-view
    ></v-touch>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";

import MusicSearchList from "./childComps/MusicSearchList";
import MusicSearchBar from "./childComps/MusicSearchBar";
import MusicPlayList from "./childComps/MusicPlayList";
import MusicPlayView from "./childComps/MusicPlayView";
import MusicPlayViewLite from "./childComps/MusicPlayViewLite";
import MusicList from "./childComps/MusicList";
import musicListItem from "./childComps/MusicListItem";
import SlideShow from "components/common/slideshow/SlideShow";

import {
  getMusic,
  playMusic,
  MusicDetail,
  getMusicListId,
  getHomeMusicList,
  getHomeMusicList2,
  getMusicList,
} from "network/music.js";

export default {
  name: "Category",
  components: {
    NavBar,
    MusicSearchBar,
    MusicSearchList,
    MusicPlayList,
    MusicPlayView,
    MusicPlayViewLite,
    MusicList,
    musicListItem,
  },
  data: function () {
    return {
      musicSearchList: { keyword: "", page: 0, list: [] },
      musicPlayList: [],
      musicList: {
        listOne: [
          {
            coverImgUrl:
              "https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif",
          },
        ],
        listTwo: [
          {
            coverImgUrl:
              "https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif",
          },
        ],
        listThree: [
          {
            coverImgUrl:
              "https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif",
          },
        ],
        listFore: [
          {
            coverImgUrl:
              "https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif",
          },
        ],
        listFive: [
          {
            coverImgUrl:
              "https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif",
          },
        ],
      }, //存储首页歌单
      musicListItem: { detail: {}, list: [] },
      musicCounter: 0,
      musicDetail: {
        name: "音乐播放器",
        singer: "Vue",
        alia: "基于Vue框架制作",
        picUrl:
          "http://p1.music.126.net/hYdI4XvFbCOyu3w86CO3nA==/109951163052386201.jpg",
      },
      isShowPlayList: false,
      isShowPlayView: false,
      isShowSearchList: false,
      isShowListItem: false,
    };
  },
  computed: {
    //监听VueX中，歌曲是否正在播放
    isMusicPlaying() {
      return this.$store.state.musicPlay.playing;
    },
  },

  methods: {
    // 向播放列表中添加歌曲，用于播放、添加到列表
    addMusicPlay(item) {
      console.log(item);
      console.log(this.musicPlayList);
      for(let i=0;i<this.musicPlayList.length;i++){
        if (item.id == this.musicPlayList[i].id){
          console.log("列表中已经有这首歌了");
          this.musicCounter = i
          this.playMusic(this.musicPlayList[i].id);
          return
        }
      }
      this.musicPlayList.splice(this.musicCounter, 0, item);
      console.log(this.musicPlayList);
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },
    addMusicList(item) {
      for(let i=0;i<this.musicPlayList.length;i++){
        if (item.id == this.musicPlayList[i].id){
          console.log("列表中已经有这首歌了");
          return
        }
      }
      this.musicPlayList.push(item);
      console.log(this.musicPlayList);
    },
    removeMusicList(item) {
      this.musicPlayList.splice(item, 1);
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },

    // PlayView组件的自定义事件处理
    play() {
      // this.$refs.audio.play();
      // this.isMusicPlaying = true;
      this.$store.commit("setMusicPlay", true);
    },
    playSelect(index) {
      this.musicCounter = index;
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },
    pause() {
      // this.$refs.audio.pause();
      // this.isMusicPlaying = false;
      this.$store.commit("setMusicPlay", false);
    },
    next() {
      this.pause();
      this.musicCounter == this.musicPlayList.length - 1
        ? (this.musicCounter = 0)
        : (this.musicCounter += 1);
      console.log("播放下一曲");
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },
    last() {
      this.pause();
      this.musicCounter == 0
        ? (this.musicCounter = this.musicPlayList.length - 1)
        : (this.musicCounter -= 1);
      console.log("播放上一曲");
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },

    showPlayList() {
      this.isShowPlayList = !this.isShowPlayList;
    },
    showPlayView() {
      this.isShowPlayView = !this.isShowPlayView;
      this.$bus.$emit("isShowPlayView", this.isShowPlayView);
    },
    showSearchList() {
      console.log("显示搜索页面");
      this.isShowSearchList = true;
    },
    hideSearchList() {
      console.log("隐藏搜索页面");
      this.isShowSearchList = false;
      this.musicSearchList = { keyword: "", page: 0, list: [] };
    },
    showHomeList(list) {
      this.getMusicList(list.id);
      this.musicListItem["detail"] = list;
      this.isShowListItem = true;
    },
    hideHomeList() {
      this.isShowListItem = false;
    },
    playListMusic(item) {

      if (!this.isShowPlayView) {
        this.showPlayView();
      }
      this.musicDetail.name = item.title;
      this.musicDetail.alia = "精选歌单";
      this.musicDetail.picUrl = item.pic;
      this.musicDetail.singer = item.author;
      this.musicDetail.url = item.url;
      this.musicDetail.id = item.id;
      this.$store.commit("setMusicUrl", this.musicDetail.url);
    },

    // 联网搜索功能,获取数据部分
    searchMusic(keyword) {
      this.musicSearchList["keyword"] = keyword;
      this.musicSearchList["page"] = 0;
      console.log("正在搜索歌曲");
      getMusic(
        this.musicSearchList["keyword"],
        this.musicSearchList["page"]
      ).then((res) => {
        console.log("搜索列表加载完毕");
        this.musicSearchList["list"] = res.data.data.songs;
        this.musicSearchList["page"] += 1;
        console.log(this.musicSearchList);
      });
    },
    loadMoreMusic() {
      console.log("加载更多歌曲");
      getMusic(
        this.musicSearchList["keyword"],
        this.musicSearchList["page"]
      ).then((res) => {
        console.log("搜索列表加载完毕");
        this.musicSearchList["list"].push(...res.data.data.songs);
        this.musicSearchList["page"] += 1;
        console.log(this.musicSearchList);
      });
    },
    playMusic(musicId) {
      console.log("1");

      if (!(this.musicDetail.id == musicId)) {
        this.pause();
      }
      if (!this.isShowPlayView) {
        this.showPlayView();
      }
      this.musicDetail.name = "正在加载歌曲";
      this.musicDetail.singer = "loading";
      this.musicDetail.alia = "Music";
      console.log("开始加载歌曲",musicId);

      playMusic(musicId).then((res) => {
        console.log("歌曲信息加载完毕，马上播放");
        this.musicDetail = new MusicDetail(res[0], res[1], res[2]);
        this.$store.commit("setMusicUrl", this.musicDetail.url);
      });
    },
    getMusicListId() {
      console.log("开始获取首页数据");
      getHomeMusicList().then((res) => {
        // console.log(res);
        this.musicList["listOne"] = res[0].data.data.playlists;
        this.musicList["listOne"].text = "国风 | 素手抚琴，为你弹一曲";
        this.musicList["listTwo"] = res[1].data.data.playlists;
        this.musicList["listTwo"].text = "抖音 | 最新热门歌单，一键获得";
        this.musicList["listThree"] = res[2].data.data.playlists;
        this.musicList["listThree"].text =
          "民谣 | 他说他没醉，却抱着吉他流眼泪";
        this.musicList["listFore"] = res[3].data.data.playlists;
        this.musicList["listFore"].text = "青春 | 流过一场泪，听懂一首歌";
        this.musicList["listFive"] = res[4].data.data.playlists;
        this.musicList["listFive"].text = "轻音乐 | 伴你入眠";
        console.log(this.musicList);
      });
      // getHomeMusicList2().then((res)=>{
      //   console.log(res);
      // })
    },
    getMusicList(listId) {
      getMusicList(listId).then((res) => {
        console.log(res);
        this.musicListItem["list"] = res.data.playlist.tracks;
        console.log("音乐列表",this.musicListItem);
      });
    },
  },
  created() {
    this.getMusicListId();
  },
  mounted() {
    const that = this;
    this.$bus.$on("nextMusic", function () {
      that.next();
    });
  },
};
</script>

<style scoped>
/* 整体样式 */
#music {
  height: 100vh;
  position: relative;
  background-color: #f2f3f5;
}
/* 顶部NAVBAR位置 */
.music-nav-bar1 {
  position: absolute;
  top: -44px;
  width: 100%;
  height: 88px;
  z-index: 6;
  transition: top 0.3s;
}
.music-nav-bar2 {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 88px;
  overflow: hidden;
  z-index: 6;
  transition: top 0.3s;
}

/* 首页歌单样式 */
.music-list {
  position: absolute;
  top: 88px;
  bottom: 84px;
}

/* 底部播放状态样式 */
.music-play-view-lite {
  position: absolute;
  bottom: 49px;
  z-index: 7;
  transition: bottom 0.3s;
}
.music-play-view-lite1 {
  position: absolute;
  bottom: 0px;
  z-index: 7;
  transition: bottom 0.3s;
}

/* 下边是根据不同情况显示的 */

/* 搜索列表样式 */
.music-search-list {
  position: absolute;
  top: 88px;
  /* bottom: 0; */
  height: calc(100% - 88px);
  z-index: 5;
  left: 0;
  right: 0;
  background-color: #fff;
}
/* 歌单列表样式 */
.music-list-item {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  /* top: 100px;
  left: 100px; */
}

/* 3.播放列表是否显示 */
/* 3.1上方的遮罩层 */
.list-hide {
  position: fixed;
  top: 0;
  background-color: rgba(111, 111, 111, 0.5);
  height: 30%;
  width: 100%;
  z-index: 10;
  animation: myfirst 1s;
}
@keyframes myfirst {
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(111, 111, 111, 0.5);
  }
}
/* 3.2播放列表 */
.play-list1 {
  position: fixed;
  bottom: 0px;
  width: 100%;
  transition: height 0.3s;
  height: 70%;
  z-index: 10;
}
.play-list2 {
  position: fixed;
  bottom: 0px;
  height: 0;
  transition: height 0.3s;
  z-index: 10;
}

/* 3.播放页面是否显示 */

.music-play-view1 {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  transition: height 0.3s;
  overflow: hidden;
}
.music-play-view2 {
  position: absolute;
  bottom: 0px;
  height: 0px;
  transition: height 0.3s;
  overflow: hidden;
  z-index: 9;
}
</style>
