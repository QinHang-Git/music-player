<!--  -->
<template>
  <div id="">
    <div>
      <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  components: {},
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  background-color: #aaa;
  line-height: 44px;
  text-align: center;
  align-items: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left,
.right {
  width: 60px;
  /* background-color: #666; */
}
.center {
  flex: 1;
}
</style>
