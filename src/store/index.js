import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicPlay : {
      url:"",
      playing:false,
    }
  },
  mutations: {
    setMusicPlay(state,payload){
      state.musicPlay.playing = payload;
      console.log("VueX中已设置为："+payload);

    },
    setMusicUrl(state,payload){
      console.log("store中的地址已修改");
      state.musicPlay.url = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
