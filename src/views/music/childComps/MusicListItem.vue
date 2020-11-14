<!--  -->
<template>
  <div class="music-list-item">
    <nav-bar class="nav-bar">
      <div slot="left" @click="hideHomeList">返回</div>
      <div slot="center">歌单</div>
    </nav-bar>
    <div class="list-detail">
      <img :src="musicListItem.detail.coverImgUrl" @click="show" alt="" />
      <div class="list-detail-name">
        <div>{{ musicListItem.detail.name }}</div>
        <div>
          ：{{ musicListItem.detail.playCount }} :
          {{ musicListItem.detail.trackCount }}
        </div>
        <div>{{ musicListItem.detail.description }}</div>
      </div>
    </div>

    <scroll :monitor="false" class="scroll" ref="scroll">
      <div class="list-music">
        <div
          v-for="item in musicListItem['list']"
          :key="item.id"
          class="search-list"
          @click="addMusicPlay(item)"
        >
          <div class="search-list-name">
            <div>{{ item.name }}</div>
            <div>{{ item.ar[0].name }}</div>
          </div>
          <div class="search-list-control" @click.stop="addMusicPlay(item)">
            
          </div>
          <div class="search-list-control" @click.stop="addListMusic(item)">
            
          </div>
        </div>
      </div>
      <div class="search-list-botom"></div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "MusicListItem",
  components: {
    NavBar,
    Scroll,
  },
  data: function () {
    return {};
  },
  props: {
    musicListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  watch: {},
  methods: {
    show(){
      alert("程序到这里了")
      alert(this.musicListItem.list.length)
      for(let i= 0;i<6;i++){
        console.log(this.musicListItem.list[i].title);
        alert(this.musicListItem.list[i].title)
      }

    },
    hideHomeList() {
      this.$emit("hideHomeList");
    },
    addMusicPlay(item) {
      let list = {};
      list.id = item.id;
      list.name = item.name;
      list.singer = item.ar[0].name;
      console.log("sadfasfsadf----",list);
      this.$emit("addMusicPlay", list);
    },
    addListMusic(item) {
      let list = {};
      list.id = item.id;
      list.name = item.name;
      list.singer = item.ar[0].name;
      // console.log("sadfasfsadf----",list);
      this.$emit("addListMusic", list);
    },
  },
};
</script>

<style scoped>
.music-list-item {
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  /* display: flex;
  flex-direction: column; */
}
/* 歌单介绍部分 */
.list-detail {
  position: absolute;
  top: 44px;
  background-color: #c4ddf1;
  display: flex;
  width: 100vw;
  padding: 20px;

}

.list-detail img {
  width: 30vw;
  height: 30vw;
  border-radius: 8px;
}
.list-detail-name {
  padding-left: 20px;
  width: calc(70% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-detail-name :nth-child(2) {
  font-size: 12px;
  color: #666;
  font-family: "icomoon";
}
.list-detail-name :last-child {
  width: 100%;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 歌曲列表部分 */
.scroll {
  position: absolute;
  top: calc(30vw + 84px);
  /* margin-top: calc(30vw + 44px); */
  /* overflow: auto; */
  height: calc(100vh - 30vw - 84px);
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

.search-list-botom{
  height: 50px;
}
</style>
