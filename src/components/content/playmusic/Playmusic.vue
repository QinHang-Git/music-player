<!--  -->
<template>
  <div id=''>
    <div class="playing" @click="play" ></div>
    <audio :src="musicSrc" controls autoplay></audio>
  </div>
</template>

<script>
export default {
  name:"Playmusic",
  components: {},
  data:function () {
    return {
      musicSrc :''
    }
  },
  computed: {
    isPlaying(){
      return this.$store.state.playing.musicSrc
    }
  },
  watch: {
    isPlaying:function(){
      this.musicSrc = this.$store.state.playing.musicSrc
      console.log("得到music"+this.musicSrc)
    }
  },
  methods: {
    play(){
      this.musicSrc = this.$store.state.musicSrc;
      console.log('歌曲src'+this.musicSrc)
    }
  }
}
</script>

<style>
  .playing{
    font-family: 'icomoon';
    border:1px solid black;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin: 6px;
    line-height: 30px;
    text-align: center;
  }

  audio{
    height: 40px;
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 51px;
  }
</style>
