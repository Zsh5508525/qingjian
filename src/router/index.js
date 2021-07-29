import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import index from '../views/index.vue'
import shopList from '../views/shopList.vue'
import personal from '../views/personal.vue'
import login from '../views/login.vue'
import forget from '../views/forget.vue'
import text from '../views/text.vue'
import vip from '../views/vip.vue'
import editPerson from '../views/editPerson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect:"home",
    children:[
      {
        path: 'home',
        name: 'home',
        component: home,
       
      },
      {
        path: 'vip',
        name: 'vip',
        component: vip,
      },
      {
        path: 'editPerson',
        name: 'editPerson',
        component: editPerson,
      },
        {
        path: 'shopList',
        name: 'shopList',
        component: shopList
      },
      {
        path: 'personal',
        name: 'personal',
        component: personal
      },
    ]
  },
 
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget,
  },
  {
    path: '/text',
    name: 'text',
    component: text,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
