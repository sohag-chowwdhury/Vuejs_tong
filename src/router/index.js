import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/user/About'
import Blog from '../components/user/Blog'
import PotPlayerCreate from '../components/audio/PotPlayerCreate'
import PotPlayer from '../components/audio/PotPlayer'
import WriteBlog from '../components/user/WriteBlog'
import CreateMeetup from '../components/user/createEvent/CreateMeetup'
import EventDashbord from '../components/user/createEvent/EventDashbord'
import SingelBlog from '../components/SingelBlog'
import SingelEvent from '../components/user/createEvent/SingelEvent'

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
      component:About},
      {
        path: '/new',
        name: 'WriteBlog',
        component:WriteBlog},
        {
          path: '/event',
          name: 'EventDashbord',
          component: EventDashbord
        },
        {
          path: '/blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: '/meetups/new',
          name: 'CreateMeetup',
          component: CreateMeetup,
        },
        {
          path: '/potplayer',
          name: 'PotPlayer',
          component: PotPlayer,
        },
        {
          path: '/potplayer/new',
          name: 'PotPlayerCreate',
          component: PotPlayerCreate,
        },
        {
          path: '/blog/:id',
          name: 'SingelBlog',
          props: true,
          component: SingelBlog
        },
        {
          path: '/event/:id',
          name: 'SingelEvent',
          props: true,
          component: SingelEvent
        },
        

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
