import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Input_Daily_Scrum from '../views/Input_Daily_Scrum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    components: {default: Login}
  },
  {
    path: '/register',
    name: 'Register',
    components: {default: Register}
  },
  {
    path: '/input_daily_scrum',
    name: 'Input_Daily_Scrum',
    components: {default: Input_Daily_Scrum, header: Navbar, footer: Footer}
  },
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router