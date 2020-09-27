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
  lodeMeetUps: [
    {
     id: '',
     imageUrl: '',
     title: '',
     date:'',
    location:'',
    description:'',                                                             
    audioUrl:'',
    sub_title:'',
    artist: '',
    creatorId:'',
    topic:'',
    sub_sub_topics_value: '',                                            
    time: '',
    subject: '',
    type:'',
    audience:''},
],
loadComments: [
      {
              description: '',
              date:'',
              creatorImageUrl:'',
              creatorName:'',
              commentsId: '',
              creatorId: '',
              chatRoomName:'', 
              status: '',
              unique:''
      }
    ],
    loadReplays: [
      {
              description: '',
              date:'',
              creatorImageUrl:'',
              creatorName:'',
              creatorId: '',
              status: '',
              unique:''
      }
    ],
    loading: false,
    user:null,
    error:null
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
  createComments (state, payload) {
    state.loadComments.push(payload)
  },
  setComments (state, payload) {
    state.loadComments = payload
  },
  setReplays  (state, payload) {
    state.loadReplays = payload
  },
  createReply (state, payload) {
    state.loadReplays.push(payload)
  },
  createPot (state, payload) {
    state.lodePots.push(payload)
},
    setLoadedBlogs(state,payload){
      state.lodeBlogs = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
   setError (state, payload) {
      state.error = payload
  },
  clearError (state)  {
      state.error = null
  } ,
    createBlog (state, payload) {
      state.lodeBlogs.push(payload)
  },
  setLoading (state, payload) {
    state.loading = payload
},
  },
  actions: {

    loadComments ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('comments').once('value')
        .then((data) => {
          const comments = []
          const obj = data.val()
          for (let key in obj) {
            comments.push({

              description: obj[key].description,
              date: obj[key].date,
              creatorImageUrl:obj[key].creatorImageUrl,
              creatorName:obj[key].creatorName,
              commentsId: obj[key].commentsId,
              creatorId: obj[key].creatorId,
              chatRoomName: obj[key].chatRoomName,
              status: obj[key].status,
              unique: obj[key].unique                     
                })
          }
          commit('setComments', comments)
         commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    loadReplays ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('replays').once('value')
        .then((data) => {
          const replays = []
          const obj = data.val()
          for (let key in obj) {
            replays.push({
              description: obj[key].description,
              date: obj[key].date,
              creatorImageUrl:obj[key].creatorImageUrl,
              creatorName:obj[key].creatorName,
              creatorId: obj[key].creatorId,
              commentsId:obj[key].commentsId,
              unique:obj[key].unique                   
                })
          }
          commit('setReplays', replays)
         commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
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
                  location: obj[key].location,                                                                
                  audioUrl: obj[key].audioUrl,
                  date: obj[key].date,
                  sub_title: obj[key].sub_title,
                  artist: obj[key].artist,
                  creatorId: obj[key].creatorId,
                  topic:obj[key].topic,
                  sub_sub_topics_value: obj[key].sub_sub_topics_value,                                            
                  time: obj[key].time,
                  subject: obj[key].subject,
                  audience: obj[key].audience,    
                  type:  obj[key].type          
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
        type:"Pot",  
        creatorId: "dgfjkdshfkdsh"
      }
      let audioUrl
      let key
      let imageUrl
      firebase.database().ref('meetups').push(pot)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          image()
              if(payload.audio){
                const audiofilename = payload.audio.name
                const audioext = audiofilename.slice(audiofilename.lastIndexOf('.'))
                console.log(payload.audio)
                console.log(audiofilename)
                console.log(audioext)
                return  firebase.storage().ref('meetups/' + key+ audioext).put(payload.audio).then(fileData => {
                  return fileData.ref.getDownloadURL()
                   .then(audioURL => {
                      return firebase.database().ref('meetups').child(key).update({ audioUrl: audioURL })
                   })
                })
              }
              function image(){
                const filename = payload.image.name
                const ext = filename.slice(filename.lastIndexOf('.'))
                console.log(payload.audio)
                return  firebase.storage().ref('meetups/' + key+ ext).put(payload.image).then(fileData => {
                  return fileData.ref.getDownloadURL()
                   .then(imageURL => {
                      return firebase.database().ref('meetups').child(key).update({ imageUrl: imageURL })
                   })
                })
              }
         
        }).then(() => {
          commit('createPot', {
            ...pot,
            audioUrl: audioUrl,    
            imageUrl: imageUrl,    
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
          type: "Job",
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

    createBlog ({commit}, payload) {
      const blog = {
        title: payload.title,
        description: payload.description,
        time:payload.time ,
        subject:payload.subject,
        audience: payload.audience,
          creatorId:'sdkjbfkdsjhfvjkdsv',
          type: "Blog"
        }
        let imageUrl
        let key
        firebase.database().ref('meetups').push(blog)
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
            commit('createBlog', {
              ...blog,
              imageUrl: imageUrl,
              id: key
            })
          })
          .catch((error) => {
            console.log(error)
          })
  },
  //comment section
  createComment ({commit,getters}, payload) {
    const comment = {
      
      description: payload.description,
      date: new Date().toLocaleString(),
      creatorImageUrl:payload.creatorImageUrl,
      creatorName:getters.user.name,
      commentsId: payload.commentsId,
      creatorId: getters.user.id,
      chatRoomName: payload.chatRoomName,
      unique: Math.random().toString(36).substring(7),
      status:"open"
      }
      firebase.database().ref('comments').push(comment)
        .then(() => {
          commit('createComments', {
            ...comment,
          })
        })
        .catch((error) => {
          console.log(error)
        })
},
createReply ({commit,getters}, payload) {
  const reply = {
    
    description: payload.description,
    date: new Date().toLocaleString(),
    creatorImageUrl:payload.creatorImageUrl,
    creatorName:getters.user.name,
    commentsId:payload.commentsRId,
    creatorId: getters.user.id,
    unique:payload.unique
    }
    firebase.database().ref('replays').push(reply)
      .then(() => {
        commit('createReply', {
          ...reply,
        })
      })
      .catch((error) => {
        console.log(error)
      })
},
  asyncsignUserUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
            fbKeys: {}
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
    
async signUpWithGoogle({commit}) {
  commit('setLoading', true)
  commit('clearError')
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    if(user){
      let newUser= {
        id:user.uid,
        name:user.displayName,
        photoUrl:user.photoURL,
        registeredMeetups: []
      }
      commit('setUser', newUser)
      commit('setLoading', false)
    }
    else{
      console.log("not psbl")
    }
  })
},
async signInWithGoogle({commit}) {
  commit('setLoading', true)
  commit('clearError')
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    if(user){
      let newUser= {
        id:user.uid,
        name:user.displayName,
        photoUrl:user.photoURL,
        registeredMeetups: []
      }
      commit('setUser', newUser)
      commit('setLoading', false)
    }
    else{
      console.log("not psbl")
    }
  })
},
signInWithFacebook({commit}) {
  commit('setLoading', true)
  commit('clearError')
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase.auth().signInWithPopup(provider).then(() => {
 
  }).catch(error => console.log(error))
},
signUserIn ({commit}, payload) {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          registeredMeetups: [],
          fbKeys: {}
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
},
  autoSignIn({commit}, payload){
       commit('setUser', {id: payload.uid, name:payload.displayName, photoUrl:payload.photoURL,  registeredMeetups: []})
  }, 
  logOut ({commit}) {
      firebase.auth().signOut()
    commit('setUser', null)
    commit('setLoading', false)


  } ,
  },
 getters: {

lodeMeetUps (state) {
  return state.lodeMeetUps.sort((meetUpA, meetUpB) =>{
    return new Date(meetUpB.date ) - new Date(meetUpA.date);

  })
},

loadComments (state) {
  return state.loadComments.sort((commentsA, commentB) =>{
    return new Date(commentB.date ) - new Date(commentsA.date);

  })
},
loadReplays (state) {
  return state.loadReplays.sort((replayA, replayB) =>{
    return new Date(replayA.date ) - new Date(replayB.date);

  })
},

lodeMeetUp (state) {
    return (meetupId)=>{
        return state.lodeMeetUps.find((meetup)=>{
            return meetup.id === meetupId
        })
    }
},
lodePodUp (state) {
  return (meetupId)=>{
      return state.lodeMeetUps.find((meetup)=>{
          return meetup.id === meetupId && meetup.type ==="Pot"
      })
  }
},
lodeBlogUp (state) {
  return (meetupId)=>{
      return state.lodeMeetUps.find((meetup)=>{
          return meetup.id === meetupId
      })
  }
},

 user (state) {
          return state.user 
        },
        loading (state) {
            return state.loading
          },
        error (state) {
         return state.error
          }
 }
})
