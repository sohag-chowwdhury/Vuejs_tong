import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/user/Blog'
import PotPlayerCreate from '../components/audio/PotPlayerCreate'
import PotPlayer from '../components/audio/PotPlayer'
import Pot from '../components/audio/Pot'
import WriteBlog from '../components/user/WriteBlog'
import CreateMeetup from '../components/user/createEvent/CreateMeetup'
import EventDashbord from '../components/user/createEvent/EventDashbord'
import SingelBlog from '../components/SingelBlog'
import SingelEvent from '../components/user/createEvent/SingelEvent'
import Signup from '../components/user/Auth/Signup'
import Report from '../components/shared/Report'
import Profile from '../components/Profile'
import Favourite from '../components/Favourite'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
      path: '/favourite',
      name: 'Favourite',
      component:Favourite},
      {
        path: '/profile',
        name: 'Profile',
        props:true,
        component:Profile},
      {
        path: '/blog/new',
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
          path: '/event/new',
          name: 'CreateMeetup',
          component: CreateMeetup,
        },
        {
          path: '/potplayer',
          name: 'PotPlayer',
          props:true,
          component: PotPlayer,
        },
        {
          path: '/potplayer/new',
          name: 'PotPlayerCreate',
          component: PotPlayerCreate,
        },
        {
          path: '/pot/:id',
          props:true,
          name: 'Pot',
          component: Pot,
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
        
        {
          path: '/signup',
          name: 'Signup',
          component: Signup
        },
        {
          path: '/report',
          name: 'Report',
          component: Report
        }
       
        

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
