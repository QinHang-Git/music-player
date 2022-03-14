<!--  -->
<template>
  <div id="joke-view">
    <nav-bar class="nav-bar"><div slot="center">每日笑话</div></nav-bar>

    <scroll
      class="joke-list"
      ref="scroll"
      :monitor="true"
      @upLoadMore="upLoadMore"
    >
      <joke-list :jokeList="jokeList['list']"></joke-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import JokeList from "./childComps/JokeList";
import Scroll from "components/common/scroll/Scroll";
import { getJoke } from "network/joke.js";
export default {
  name: "Shopcart",
  components: { NavBar, JokeList, Scroll },
  data: function () {
    return {
      jokeList: {
        list: [],
        page: 1,
      },
      jdJokeList: {
        list: [],
        page: 1,
      },
      scroll: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getJoke() {
      const page = this.jokeList["page"];
      getJoke(page).then((res) => {
        console.log(res);
        this.jokeList["list"].push(...res.data.data);
        // alert("已经加载了"+this.jokeList.page+"页，实际条数为"+ (this.jokeList.list.length))
        console.log(this.jokeList);
        this.jokeList["page"] += 1;
      });
    },
    upLoadMore() {
      this.getJoke();
    },
  },
  created: function () {
    this.getJoke();
    // this.getJdJoke()
  },
  mounted() {},
};
</script>

<style scoped>
#joke-view {
  height: 100vh;
  /* position: relative; */
}
.nav-bar {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 0;
  width: 100%;
}
.joke-list {
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 44px;
  /* bottom: 49px; */
  /* overflow: auto; */
  height: (100% - 93px);
}
</style>
