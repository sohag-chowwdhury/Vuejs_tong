import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app'
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lodePots:[
      {
        title:'',
        description: '',
        date:'',
        sub_title:'',
        sub_sub_topics_value:'',
        artist:'',
        imageUrl:'',
        audioUrl:''
      }
    ],

    lodeBlogs: [
      {
       id: '', 
       title: '',
       description: '',
       imageUrl: '',
       time:'',
       subject:'',
       audience:'',
      },
  ],
  lodeMeetUps: [
    {
     id: '', 
     imageUrl: '',
     title: '',
     date:'',
    location:''},
],
    loading: false
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.lodeMeetUps = payload
    },
    createMeetup (state, payload) {
      state.lodeMeetUps.push(payload)
  },
  setLoadePots (state, payload) {
    state.lodePots = payload
  },
  createPot (state, payload) {
    state.lodePots.push(payload)
},
    setLoadedBlogs(state,payload){
      state.lodeBlogs = payload
    },
    createBlog (state, payload) {
      state.lodeBlogs.push(payload)
  },
  setLoading (state, payload) {
    state.loading = payload
},
  },
  actions: {
   
    loadMeetUps ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
              meetups.push({
                  id: key,
                  title: obj[key].title,
                  description: obj[key].description,
                  imageUrl: obj[key].imageUrl,
                  date: obj[key].date,
                  location: obj[key].location,
                  creatorId: obj[key].creatorId
                })
          }
          commit('setLoadedMeetups', meetups)
         commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    lodePots ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('pots').once('value')
        .then((data) => {
          const pots = []
          const obj = data.val()
          for (let key in obj) {
              pots.push({
                  id: key,
                  title: obj[key].title,
                  description: obj[key].description,
                  imageUrl: obj[key].imageUrl,
                  audioUrl: obj[key].audioUrl,
                  date: obj[key].date,
                  sub_title: obj[key].sub_title,
                  artist: obj[key].artist,
                  creatorId: obj[key].creatorId
                })
          }
          commit('setLoadePots', pots)
         commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createPot ({commit}, payload) {
      const pot = {
        title: payload.title,
        description: payload.description,
        date: payload.date.toISOString(),
        sub_title:payload.sub_title,
        topic:payload.topic,
        audience:payload.audience,
        sub_sub_topics_value:payload.sub_sub_topics_value,
        artist:payload.artist,
      
        creatorId: "dgfjkdshfkdsh"
      }
      let imageUrl
      let audioUrl
      let key
      firebase.database().ref('pots').push(pot)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('pots/' + key+ ext).put(payload.image)
        }).
        then(fileData => {
          return fileData.ref.getDownloadURL()
           .then(imageURL => {
              return firebase.database().ref('pots').child(key).update({ imageUrl: imageURL })
           })
        }).then(key => {
          const filename = payload.audio.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('pots/' + key+ ext).put(payload.audio)
        }).
        then(fileData => {
          return fileData.ref.getDownloadURL()
           .then(audioURL => {
              return firebase.database().ref('pots').child(key).update({ audioUrl: audioURL })
           })
        })
        .then(() => {
          commit('createMeetup', {
            ...pot,
            imageUrl: imageUrl,
            audioUrl: audioUrl,                       
            id: key                 
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createMeetup ({commit}, payload) {
      const meetup = {
          title: payload.title,
          location: payload.location,
          description: payload.description,
          date: payload.date.toISOString(),
          creatorId: "dgfjkdshfkdsh"
        }
        let imageUrl
        let key
        firebase.database().ref('meetups').push(meetup)
          .then((data) => {
            key = data.key
            return key
          })
          .then(key => {
            const filename = payload.image.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            return firebase.storage().ref('meetups/' + key+ ext).put(payload.image)
          }).
          then(fileData => {
            return fileData.ref.getDownloadURL()
             .then(imageURL => {
                return firebase.database().ref('meetups').child(key).update({ imageUrl: imageURL })
             })
          })
          .then(() => {
            commit('createMeetup', {
              ...meetup,
              imageUrl: imageUrl,                       
              id: key                 
            })
          })
          .catch((error) => {
            console.log(error)
          })
  },
    lodeBlog ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('blogs').once('value')
        .then((data) => {
          const blogs = []
          const obj = data.val()
          for (let key in obj) {
            blogs.push({
                  id: key,
                  title: obj[key].title,
                  description: obj[key].description,
                  imageUrl: obj[key].imageUrl,
                  time: obj[key].time,
                  subject: obj[key].subject,
                  audience: obj[key].audience,
                  creatorId: obj[key].creatorId
                })
          }
          commit('setLoadedBlogs', blogs)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
           commit('setLoading', false)
          }
        )
    },
    createBlog ({commit}, payload) {
      const blog = {
        title: payload.title,
        description: payload.description,
        time:payload.time ,
        subject:payload.subject,
        audience: payload.audience,
          creatorId:'sdkjbfkdsjhfvjkdsv'
        }
        let imageUrl
        let key
        firebase.database().ref('blogs').push(blog)
          .then((data) => {
            key = data.key
            return key
          })
          .then(key => {
            const filename = payload.image.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            return firebase.storage().ref('blogs/' + key+ ext).put(payload.image)
          }).
          then(fileData => {
            return fileData.ref.getDownloadURL()
             .then(imageURL => {
                return firebase.database().ref('blogs').child(key).update({ imageUrl: imageURL })
             })
          })
          .then(() => {
            commit('createBlog', {
              ...blog,
              imageUrl: imageUrl,                       
              id: key                 
            })
          })
          .catch((error) => {
            console.log(error)
          })
  }
  },
 getters: {
  lodePots (state) {
    return state.lodePots.sort((potA, potB) =>{
      return new Date(potB.date ) - new Date(potA.date);
         
    })
},
lodeMeetUps (state) {
  return state.lodeMeetUps.sort((meetUpA, meetUpB) =>{
    return new Date(meetUpB.date ) - new Date(meetUpA.date);
       
  })
},

fetcherMeetUps (state,getters) {
    return getters.lodeMeetUps.slice(0,5)
},
lodeMeetUp (state) {
    return (meetupId)=>{
        return state.lodeMeetUps.find((meetup)=>{
            return meetup.id === meetupId
        })
    }
},

  lodeBlogs (state) {
    return state.lodeBlogs.sort((BlogA, BlogB) =>{
        return new Date(BlogB.time ) - new Date(BlogA.time);
    })
},
lodeBlog(state) {
    return (blogId)=>{
        return state.lodeBlogs.find((blog)=>{
            return blog.id === blogId
        })
    }
},
loading (state) {
  return state.loading

 }
 }
})
