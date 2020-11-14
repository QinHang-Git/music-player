import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Music = () => import('views/music/Music')
const Profile = () => import('views/profile/Profile')
const Joke = () => import('views/joke/Joke')
const Detail = () => import('views/detail/Detail')

const ProfileIntro = () => import('views/profile/childComps/ProfileIntro')
const ProfileExper = () => import('views/profile/childComps/ProfileExper')
const ProfileProject = () => import('views/profile/childComps/ProfileProject')
const ProfileHonour = () => import('views/profile/childComps/ProfileHonour')


Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题

const profile = [
  {
    path: '',
    redirect: 'profileIntro',
  },
  {
    path: 'profileIntro',
    component: ProfileIntro,
    meta:{
      title:"个人简历"
    }
  },
  {
    path: 'profileProject',
    component: ProfileProject,
    meta:{
      title:"个人简历"
    }
  },
  // {
  //   path: 'profileExper',
  //   component: ProfileExper
  // },
  {
    path: 'profileHonour',
    component: ProfileHonour,
    meta:{
      title:"个人简历"
    }
  },
]

const routes = [
  {
    path: '/',
    redirect: '/music'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:"购物街"
    }
  },
  {
    path: '/music',
    component: Music,
    meta:{
      title:"音乐播放器"
    }
  },
  {
    path: '/joke',
    component: Joke,
    meta:{
      title:"每日一笑"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:"简历"
    },
    beforeEnter: (to, from, next) => {
      console.log("home路由独享守卫");
      next();
    },
    children: profile,
  },
  {
    path: '/detail/:itemId',
    component: Detail,
    meta:{
      title:"详情页面"
    }
  }
]


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  document.title = to.meta.title
  next()
})

// let toURL = null
// router.beforeEach((to, from, next) => {
//   if (toURL === to.path) {
//     next()
//   }
//   if (to.path !== from.path) {
//     toURL = to.path
//     router.replace(to.path)
//     next()
//   }
// })


export default router
