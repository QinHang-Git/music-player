<!--  -->
<template>
  <div id="music">
    <nav-bar class="nav-bar}"><div slot="center">音乐播放器</div></nav-bar>
    <!-- 顶部搜索栏 -->

    <!-- 音乐搜索栏 -->
    <music-search-bar
      :class="isShowSearchList ? 'music-search-bar1' : 'music-search-bar2'"
      @searchMusic="searchMusic"
      @showSearchList="showSearchList"
      @hideSearchList="hideSearchList"
    ></music-search-bar>

    <!-- 首页展示的歌单 -->
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

    <!-- 歌单列表 -->
    <music-list-item
      class="music-list-item"
      v-if="isShowListItem"
      :musicListItem="musicListItem"
      @hideHomeList="hideHomeList"
      @addMusicPlay="addMusicPlay"
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
  MusicDetail,
  searchMusic,
  getMusicDetails,
  getHomeMusicList,
  getMusicList
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
      musicList: {listOne:{coverImgUrl:""}}, //存储首页歌单
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
    // 向播放列表中添加、删除、直接播放歌曲
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
          this.$toast.show("列表中已经有这首歌了",2000)
          console.log("列表中已经有这首歌了");
          return
        }
      }
      this.musicPlayList.push(item);
      this.$toast.show("已添加到播放列表",2000)
      console.log(this.musicPlayList);
    },
    removeMusicList(item) {
      this.musicPlayList.splice(item, 1);
      if(item = this.musicPlayList.length-1){
        this.musicCounter = 0
      }
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },

    // PlayView组件的自定义事件处理
    play() {
      // this.$refs.audio.play();
      // this.isMusicPlaying = true;
      this.$store.commit("setMusicPlay", true);
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
    playSelect(index) {
      this.musicCounter = index;
      this.playMusic(this.musicPlayList[this.musicCounter].id);
    },

    // 2.控制那些组件的显示与隐藏
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
      this.musicListItem = { detail: {}, list: [] };
    },


    // 1.联网搜索功能,获取数据部分
    // 1.1.搜索单曲，用于顶部搜索栏
    searchMusic(keyword) {
      this.musicSearchList["keyword"] = keyword;
      this.musicSearchList["page"] = 0;
      console.log("正在搜索歌曲");
      this.$toast.isShowLoading(true)
      console.log(this.musicSearchList);
      searchMusic(
        this.musicSearchList["keyword"],
        this.musicSearchList["page"]
      ).then((res) => {
        this.$toast.isShowLoading(false)
        console.log("搜索列表加载完毕");
        this.musicSearchList["list"] = res.data.songs;
        this.musicSearchList["page"] += 1;
        console.log(this.musicSearchList);
      }).catch((err)=>{
        console.log(err);
        this.$toast.isShowLoading(false)
        this.$toast.show(err,3000)
      });
    },
    // 1.2.加载更多歌曲，用于顶部搜索时
    loadMoreMusic() {
      console.log("加载更多歌曲");
      searchMusic(
        this.musicSearchList["keyword"],
        this.musicSearchList["page"]
      ).then((res) => {
        console.log("搜索列表加载完毕");
        this.musicSearchList["list"].push(...res.data.songs);
        this.musicSearchList["page"] += 1;
        console.log(this.musicSearchList);
      }).catch((err)=>{
        console.log(err);
        this.$toast.show("API服务器网络异常,加载失败",3000)
      });
    },
    // 1.3.播放音乐，获取音乐详情
    playMusic(musicId) {
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
      getMusicDetails(musicId).then((res) => {
        console.log("歌曲信息加载完毕，马上播放");
        this.musicDetail = new MusicDetail(res[0], res[1]);
        this.$store.commit("setMusicUrl", this.musicDetail.url);
        // this.$store.commit("setMusicPlay", true);
      }).catch((err)=>{
        console.log(err);
        this.$toast.show("歌曲加载失败，请重试",3000)
      });
    },
    // 1.4.获取首页的5*7个歌单
    getMusicListId() {
      console.log("开始获取首页数据");
      this.$toast.isShowLoading(true)
      getHomeMusicList().then((res) => {
        // console.log(res);
        this.$toast.isShowLoading(false)
        this.musicList["listOne"] = res[0].data.playlists;
        this.musicList["listOne"].text = "国风 | 素手抚琴，为你弹一曲";
        this.musicList["listTwo"] = res[1].data.playlists;
        this.musicList["listTwo"].text = "抖音 | 最新热门歌单，一键获得";
        this.musicList["listThree"] = res[2].data.playlists;
        this.musicList["listThree"].text =
          "民谣 | 他说他没醉，却抱着吉他流眼泪";
        this.musicList["listFore"] = res[3].data.playlists;
        this.musicList["listFore"].text = "青春 | 流过一场泪，听懂一首歌";
        this.musicList["listFive"] = res[4].data.playlists;
        this.musicList["listFive"].text = "轻音乐 | 伴你入眠";
        console.log(this.musicList);
      }).catch((err)=>{
        console.log(err);
        this.$toast.isShowLoading(false)
        this.$toast.show("API服务器网络异常",3000)
      });
    },
    // 1.5.获取歌单详情页面数据
    getMusicList(listId) {
      console.log('开始获取歌单详情');
      this.$toast.show("正在获取歌单详情",3000)
      getMusicList(listId).then((res) => {
        this.$toast.hide()
        console.log(res);
        this.musicListItem["list"] = res.data.playlist.tracks;
        console.log("音乐列表",this.musicListItem);
      }).catch((err)=>{
        console.log(err);
        this.$toast.show(err,3000)
      });
    },
  },

  created() {
    //加载首页数据
    this.getMusicListId();
  },
  mounted() {
    //监听事件总线中是否请求下一首
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
  /* position: relative; */
  background-color: #f2f3f5;
}
.nav-bar{
  position: fixed;
  top: 0;
  width: 100%;
}
/* 顶部NAVBAR位置 */

.music-search-bar1 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 88px;
  z-index: 6;
  transition: top 0.3s;
}
.music-search-bar2 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 44px;
  width: 100%;
  height: 44px;
  overflow: hidden;
  z-index: 6;
  transition: top 0.3s;
}
/* 首页歌单样式 */
.music-list {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 88px;
  height: calc(100% - 137px);
  bottom: 49px;
}
/* 底部播放状态样式 */
.music-play-view-lite {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 49px;
  z-index: 7;
  transition: bottom 0.3s;
}
.music-play-view-lite1 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 0px;
  z-index: 7;
  transition: bottom 0.3s;
}


/* 下边是根据不同情况显示的 */

/* 搜索列表样式 */
.music-search-list {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 87px;
  bottom: 0;
  height: calc(100% - 88px);
  z-index: 5;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}
/* 歌单列表样式 */
.music-list-item {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  /* top: 100px;
  left: 100px; */
}

/* 3.播放列表是否显示 */
/* 3.1上方的遮罩层 */
.list-hide {
  min-width: 320px;
  max-width: 640px;
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
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  transition: height 0.3s;
  height: 70%;
  z-index: 10;
}
.play-list2 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 0px;
  height: 0;
  transition: height 0.3s;
  z-index: 10;
}

/* 3.播放页面是否显示 */

.music-play-view1 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  transition: height 0.3s;
  overflow: hidden;
}
.music-play-view2 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 0px;
  height: 0px;
  transition: height 0.3s;
  overflow: hidden;
  z-index: 9;
}
</style>
