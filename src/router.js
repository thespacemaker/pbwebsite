import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Body from './views/Body.vue'
import Face from './views/Face.vue'
import Hair from './views/Hair.vue'
import Hormones from './views/Hormones.vue'
import About from './views/About.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
import Videos from './views/Videos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/face',
      name: 'face',
      component: Face
    },
    {
      path: '/body',
      name: 'body',
      component: Body
    },
    {
      path: '/hair',
      name: 'hair',
      component: Hair
    },
    {
      path: '/hormones',
      name: 'hormones',
      component: Hormones
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
