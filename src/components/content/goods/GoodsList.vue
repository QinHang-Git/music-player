<!--  -->
<template>
  <div id='goods'>
    <goods-list-item v-for="item in goods" :goods-item ="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name:"GoodsList",
  components: {
    GoodsListItem
  },
  data:function () {
    return {

    }
  },
  props:{
    goods:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped>

</style>
