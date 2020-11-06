import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
