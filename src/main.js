import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
import Blog from './components/user/Blog';
import Event from './components/user/createEvent/Event';
import AlertCmp from './components/shared/Alert.vue';
import DatetimePicker from 'vuetify-datetime-picker'
import VueCountdownTimer from 'vuejs-countdown-timer'
import Signup from './components/user/Auth/Signup'
import DateFilter from './filters/date'
import Aplayer from 'vue-aplayer'


Vue.filter('date', DateFilter)
Vue.component ('app-alert', AlertCmp)
Vue.config.productionTip = false
Vue.use(DatetimePicker)
Vue.use(VueCountdownTimer)



Vue.component ('blog', Blog)
Vue.component ('event', Event)
Vue.component('aplayer', Aplayer)
Vue.component ('signup', Signup)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCOIfQmEiHXfn6G4D8PV9yxUfOkYJ1Y3_w",
    authDomain: "meet-up-7bd4c.firebaseapp.com",
    databaseURL: "https://meet-up-7bd4c.firebaseio.com",
    projectId: "meet-up-7bd4c",
    storageBucket: "meet-up-7bd4c.appspot.com",
    messagingSenderId: "707047787272",
    appId: "1:707047787272:web:6d73f356436a2a3badbabd",
    measurementId: "G-YH8CGM7P2K"   
    })
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('loadComments')
        this.$store.dispatch('loadReplays')
      }
    })
    
    this.$store.dispatch('loadMeetUps')
  }
}).$mount('#app')
