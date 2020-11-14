<!--  -->
<template>
  <div id="joke">
    <div
      v-for="item in jokeList"
      class="joke-list"
      @click="jokeRead(item.content)"
    >
      <h4 class="joke-title">{{ item.title }}</h4>
      <p class="joke-date">{{ item.date }}</p>
    </div>

    <div
      @click="closeContent"
      v-if="displayContent"
      :class="displayContent ? 'joke-hide' : ''"
    ></div>

    <joke-read
      :content="clickJokeItem"
      @closeContent="closeContent"
      :class="displayContent ? 'joke-read' : 'joke-read2'"
    ></joke-read>
  </div>
</template>

<script>
import JokeRead from "./JokeRead";

export default {
  name: "Joke",
  components: {
    JokeRead,
  },
  data: function () {
    return {
      clickJokeItem: "",
      displayContent: false,
    };
  },
  props: {
    jokeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  watch: {},
  methods: {
    jokeRead(payload) {
      this.clickJokeItem = payload;
      console.log(payload);
      this.displayContent = true;
    },
    closeContent() {
      this.displayContent = false;
    },
  },
};
</script>

<style scoped>
/* 1. 笑话列表 */
.joke-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  /* width: 100%; */
  padding: 10px 15px 0;
  /* border-bottom: 1px solid #ccc; */
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
}
.joke-list p {
  text-align: right;
  align-self: flex-end;
  font-size: 14px;
}

/* 2.笑话阅读时显示内容 */
.joke-read {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 49px;
  transition: height 0.3s;
  height: 330px;
}
.joke-read2 {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  bottom: 49px;
  height: 0px;
  transition: height 0.3s;
}

/* 3.笑话阅读时的遮罩层 */
.joke-hide {
  min-width: 320px;
  max-width: 640px;
  background-color: rgba(111, 111, 111, 0.5);
  position: fixed;
  top: 44px;
  height: calc(100% - 423px);
  width: 100%;
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
</style>
