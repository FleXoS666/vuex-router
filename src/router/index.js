import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeTwo from '../views/HomeTwo.vue'
import HomeThree from '../views/HomeThree.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Home2',
    name: 'HomeTwo',
    component: HomeTwo
  },
  {
    path:'/Home3',
    name: 'HomeThree',
    component: HomeThree
  }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router
