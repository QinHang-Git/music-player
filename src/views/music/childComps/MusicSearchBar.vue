<!--  -->
<template>
  <div class="search-music">
    <search-bar>
      <div v-if="showBack" slot="left" class="search-back" @click="hideSearchList">返回</div>
      <div v-else slot="left" class="search-micon"></div>
      <div slot="center" class="search-warp" @click="showSearchList">
        <div class="search-icon"></div>
        <input
          type="text"
          placeholder="在这里搜索歌曲"
          v-model="searchName"
          @keyup.enter="search(searchName)"
        />
      </div>
      <div slot="right" class="search-btn" @click="search(searchName)">
        搜索
      </div>
    </search-bar>
    <div class="search-data">
      <div>搜索历史：</div>
      <span v-for="item in searchData">{{item}} </span>
    </div>
  </div>
</template>

<script>
import SearchBar from "components/common/searchBar/SearchBar";
export default {
  name: "MusicSearchBar",
  components: {
    SearchBar,
  },
  data: function () {
    return {
      searchName: "",
      showBack: false,
      searchData:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    search(searchName) {
      this.$emit("searchMusic", searchName);
      this.searchData.unshift(searchName)
    },
    showSearchList() {
      this.$emit("showSearchList");
      this.showBack = true;
    },
    hideSearchList(){
      this.$emit("hideSearchList");
      this.showBack = false;
    }
  },
};
</script>

<style scoped>
/* 搜索框 */
.search-warp {
  background-color: #ffffff;
  display: flex;
  border-radius: 15px;
  height: 32px;
  line-height: 32px;
}
.search-icon {
  flex: 1;
  margin: 3px 0 3px 3px;
  line-height: 26px;
  font-family: "icomoon";
  border-right: 1px solid gray;
}
.search-warp input {
  flex: 6;
  margin: 0 10px 0 10px;
  border: 0;
  outline: none;
  background-color: transparent;
}

/* 左侧图标 */
.search-micon {
  font-family: "icomoon";
  font-size: 20px;
}

.search-data {
  height: 44px;
  width: 100%;
  padding: 3px 10px;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
}
.search-data span{
  font-size: 12px;
  line-height: 18px;
}
</style>


