<!--  -->
<template>
  <div class="play-list">

    <div class="list-bar">
      <div>顺序播放({{ musicPlayList.length }}首)</div>
    </div>
    <div class="play-lists">
      <div
      v-for="(item,index) in musicPlayList" @click="playSelect(index)" :class="(musicCounter == index)?'active':''">
        <div>{{ item.name }} - {{ item.singer }}</div>
        <div @click.stop="removeMusicList(index)"></div>
      </div>
    </div>

    <div class="close-list" @click="showPlayList">关闭</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data: function () {
    return {};
  },
  props: {
    musicPlayList: {
      type: Array,
      default() {
        return {};
      },
    },
    musicCounter:{
      type:Number,
      default:0
    }
  },
  computed: {},
  watch: {},
  methods: {
    showPlayList() {
      this.$emit("showPlayList");
    },
    playSelect(index){
      console.log("你选择了列表中的第"+(index+1)+"首");
      this.$emit("playSelect",index);
    },
    removeMusicList(index){
      this.$emit("removeMusicList",index);
    }
  },
};
</script>

<style scoped>
/* 整体风格 */
.play-list {
  /* display: flex; */
  /* justify-content: space-between; */
  width: 100%;
  /* height: 50%; */
  background-color: #fff;
}

/* 上方的显示条 */
.list-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  text-align: left;
  font-size: 20px;
  background: -webkit-linear-gradient(
    top,
    rgb(78, 221, 221),
    rgb(45, 158, 173)
  );
}

.play-lists {
  height: calc(100% - 89px);
  width: 100%;
  overflow: auto;
  font-family: "icomoon";
}

.play-lists>div {
  display: flex;
  justify-content: space-between;

  padding: 0 10px;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #444;
  line-height: 40px;

}
.play-lists>div>:nth-child(2){
  width: 40px;
}

.close-list {
  width: 100%;
  height: 49px;
  line-height: 49px;
  text-align: center;
  background: -webkit-linear-gradient(
    top,
    rgb(78, 221, 221),
    rgb(45, 158, 173)
  );
}

.active{
  background-color: skyblue;
}


</style>
