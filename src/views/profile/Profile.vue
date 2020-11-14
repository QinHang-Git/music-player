<!--  -->
<template>
  <div id="pro-file">
    <nav-bar class="nav-bar"><div slot="center">个人简历</div></nav-bar>
    <div class="scroll" ref="scroll">
      <div class="head-show">
        <profile-main :isShowMain="isShowMain"></profile-main>
        <tab-control
          class="tab-control"
          :titles="['自我介绍', '项目介绍', '小荣誉']"
          @tabClick="tabClick"
        ></tab-control>
      </div>
      <router-view class="profile-view"></router-view>
    </div>
  </div>
</template>

<script>
import Toast from "components/common/toast/Toast";
import NavBar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";

import ProfileMain from "./childComps/ProfileMain";

export default {
  name: "Profile",
  components: {
    Toast,
    NavBar,
    ProfileMain,
    TabControl,
  },
  data: function () {
    return {
      message: "hahahha ",
      isShowMain: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    showMain() {
      if (this.$refs.scroll.scrollTop > 170) {
        this.isShowMain = false;
      }
      if (this.$refs.scroll.scrollTop < 10) {
        this.isShowMain = true;
      }
    },
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.$router.replace("/profile/profileIntro");
          break;
        case 1:
          this.$router.replace("/profile/profileProject");
          break;
        case 2:
          this.$router.replace("/profile/profileHonour");
          break;
        // case 3:
        //   this.$router.replace("/profile/profileHonour");
        //   break;
        default:
          break;
      }
    },
  },
  mounted() {
    var scroll = this.$refs.scroll;
    scroll.addEventListener("scroll", this.showMain, false);
  },
};
</script>

<style scoped>
#pro-file {
  width: 100vw;
}
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}

.head-show {
  min-width: 320px;
  max-width: 640px;
  width: 100%;
  z-index: 2;
  position: sticky;
  top: 0;
}

.profile-view {
  min-width: 320px;
  max-width: 640px;
  width: 100%;

}

.scroll {
  min-width: 320px;
  max-width: 640px;
  width: 100%;
  position: fixed;
  top: 0;
  height:calc(100vh - 49px);
  overflow: auto;
}
</style>
