<!--  -->
<template>
  <div :class="isShowMain?'aaa':'bbb'" >
    <div v-if="isShowMain" class="main">
      <div class="main-head">
        <img src="~assets/img/profile/main/head.jpg" alt="" />
      </div>
      <div class="mian-detail">
        <div>姓名：秦航</div>
        <div>学校：燕山大学</div>
        <div>籍贯：河北石家庄</div>
        <div>电话：15613180410</div>
        <div>邮箱：qin_hang@outlook.com</div>
      </div>
    </div>
    <div v-else class="lite">
      <div class="main-head-lite">
        <img src="~assets/img/profile/main/head_lite.jpg" alt="" />
      </div>
      <div class="mian-detail-lite">
        <div>姓名：秦航</div>
        <div>邮箱：qin_hang@outlook.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMain",
  components: {},
  data: function () {
    return {
    };
  },
  props:{
    isShowMain:{
      type:Boolean,
      default:true
    }
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.aaa{
  height: calc(50vw);
  transition: all 0.3s;
  background-color: #fff;
}
.bbb{
  height: 80px;
  transition: all 0.3s;
  background-color: skyblue;
  /* position: relative;
  top: 0; */
}

.main {
  margin-top: 44px;
  display: flex;
  background-color: #fff;
  /* margin: 10px; */
  /* border-radius: 10px; */
  padding: 10px;
  height: 50vw;
  justify-content: space-around;
  box-shadow: 0 1px 3px sandybrown;
}
/* 左边头像部分 */
.main-head {
  /* flex: 2; */
  height: 100%;
}
.main-head img {
  height: 100%;
  border-radius: 10px;
}
/* 右边文字部分 */
.mian-detail {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  /* flex: 3; */
}
.mian-detail div {
  flex: 1;
  line-height: calc((50vw - 20px) / 5);
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
}



.lite {
  /* margin-top: 44px; */
  z-index: 2;
  display: flex;
  /* margin: 10px; */
  /* border-radius: 10px; */
  padding: 10px;
  height: 80px;
  justify-content: space-around;
  box-shadow: 0 1px 3px sandybrown;
}
.main-head-lite{
  height: 100%;
  border: 1px solid #444;
  border-radius: 50%;
  overflow: hidden;
}
.main-head-lite img{
  height: 100%;
}

.mian-detail-lite {
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 10px;
  /* flex: 3; */
}
.mian-detail-lite div {
  flex: 1;
  line-height: 25px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;

}
</style>
