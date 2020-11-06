import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing : {
      state: false,
      musicSrc: ''
    }

  },
  mutations: {
    setMusicSrc(state,payload){
      state.playing.musicSrc = payload.url;
      state.playing.state = payload.state;
      console.log(state.playing)
    }
  },
  actions: {
  },
  modules: {
  }
})
