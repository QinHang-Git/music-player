import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Music = () => import('views/music/Music')
const Profile = () => import('views/profile/Profile')
const Shopcart = () => import('views/shopcart/Shopcart')
const Detail = () => import('views/detail/Detail')


Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push (location) {

// return originalPush.call(this, location).catch(err => err)

// }


const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/music',
    component:Music
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:itemId',
    component:Detail
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
