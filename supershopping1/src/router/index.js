import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
import Profile from '../views/profile/Profile.vue'
import  Detail from '../views/detail/Detail.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      showTab: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      showTab: true
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showTab: true
    }
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail,
    meta: {
      showTab: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      showTab: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
