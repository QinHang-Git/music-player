<!--  -->
<template>
  <div id="home-nav">
    <ul class="local-nav">
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="local-nav-icon"></span>
          <span>电话</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
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
.local-nav {
  min-width: 320px;
  max-width: 640px;
  display: flex;
  border-radius: 8px;
  margin: 0 4px;
  border-right: 1px solid #fff;
  flex-wrap: wrap;
  padding: 5px 0;
}
.local-nav li {
  flex: 20%;
}
.local-nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #000;
  margin: 5px 0;
}
.local-nav-icon {
  width: 28px;
  height: 28px;
  font-family: "icomoon";
  line-height: 28px;
  text-align: center;
  font-size: 28px;
  color: blue;
}
</style>
