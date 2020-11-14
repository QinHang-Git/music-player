<!--  -->
<template>
  <div class="scroll">
    <div v-for="item in musicList">
      <div class="listTitle">{{item.text}}</div>
      <div class="play-lists">
        <div class="play-list">
          <div
            class="play-list-item"
            v-for="list in item"
            :key="list.id"
            @click="showHomeList(list)"
          >
            <img :src="list.coverImgUrl" alt="" />
            <div>{{ list.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="play-lists-bottom"></div>
  </div>

</template>

<script>
export default {
  name: "MusicList",
  components: {},
  data: function () {
    return {};
  },
  props: {
    musicList: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {},
  watch: {},
  methods: {
    btnclick() {
      console.log(this.musicList[0]);
      // console.log(this.musicList[0].coverImgUrl);
    },
    showHomeList(list) {
      this.$emit("showHomeList",list)
      console.log(list);
    },
  },
};
</script>

<style scoped>
.scroll {
  overflow: auto;
  width: 100%;
}

.play-lists {
  overflow: auto;
  width: 100vw;
  padding-bottom: 10px;
}
.play-lists::-webkit-scrollbar {
  display: none;
}
.listTitle {
  padding: 10px 0 0 13px;
}
.play-list {
  width: 220vw;
  padding: 3px 10px 0;
  display: flex;
  justify-content: space-between;
}
.play-list-item {
  width: 13.5%;
}
.play-list-item img {
  width: 100%;
  border-radius: 8px;
}
.play-list-item div {
  padding: 6px 2px 0 2px;
  width: 100%;
  font-size: 12px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.play-lists-bottom{
  height: 40px;
}
</style>
