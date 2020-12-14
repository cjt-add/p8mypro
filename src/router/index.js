import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../components/Index/App'
import Cart from '../components/Index/Cart'
import Dd from '../components/Index/Dd'
import Index from '../components/Index/Index'
import Sz from '../components/Index/Sz'
import CartList from '../components/indexHome/CartList'
import Homes from '../components/indexHome/Home'
import Image from '../components/indexHome/Image'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'app',
        name: 'App',
        component: App
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'dd',
        name: 'Dd',
        component: Dd
      },
      {
        path: 'index',
        name: 'Index',
        component: Index,
        children:[
          {
            path: 'cartList',
            name: 'CartList',
            component: CartList,
          },
          {
            path: 'homes',
            name: 'Homes',
            component: Homes,
          },
          {
            path: 'image',
            name: 'Image',
            component: Image,
          },
          {
            path:'/home/index',
            redirect:'/home/index/homes'
          }
        ]
      },
      {
        path: 'Sz',
        name: 'Sz',
        component: Sz
      },
      {
        path:'/home',
        redirect:'/home/index'
      }
    ]

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
