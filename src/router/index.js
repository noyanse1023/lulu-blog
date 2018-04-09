import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Article from '@/components/Article'
import About from '@/components/pages/about'
import Tags from '@/components/pages/tags'
import WebWorks from '@/components/pages/web-works'
import PatingWorks from '@/components/pages/painting-works'
import login from '@/components/admin/login'
import writeBlog from '@/components/admin/writeBlog'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active', 
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles/detail/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/web-works',
      name: 'WebWorks',
      component: WebWorks
    },
    {
      path: '/painting-works',
      name: 'PatingWorks',
      component: PatingWorks
    },
    {
      path: '/admin/login',
      name: 'login',
      component: login
    },
    {
      path: '/admin/write-blog',
      name: 'writeBlog',
      component: writeBlog
    }
  ]
})
