<!--  -->
<template>
  <div id='joke'>
    <div v-for="item in jokeList">
      <a href="#" class="joke-list">
        <h4 class="joke-title">{{item.title}}</h4>
        <p class="joke-date">{{item.ct}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"Joke",
  components: {},
  data:function () {
    return {
    }
  },
  props:{
    jokeList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed: {

  },
  watch: {},
  methods: {

  },
}
</script>

<style scoped>
  .joke-list{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 80px;
    width: 100%;
    color: black;
    padding: 10px 15px 0;

    border-bottom: 1px solid #ccc;
    /* //z-index: -1; */
  }
  .joke-list p{
    text-align: right;
    align-self: flex-end;
    font-size: 14px;
  }
</style>
