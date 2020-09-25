<template>
  <v-app>
    <nav >
    <v-toolbar dark flat class="orange darken-4 ">
         <v-app-bar-nav-icon @click.native.stop="drawer = true" class="d-sm-none"></v-app-bar-nav-icon>
         <v-toolbar-title >
            <router-link to="/" tag="span" style="cursor: pointer">Meet-Up</router-link>
          </v-toolbar-title>
         <v-spacer></v-spacer>
           <v-toolbar-items  class="mx-6" v-if="userAuth">
          <v-btn text  v-for="item in navItems" 
          :key="item.title" 
          router
          :to="item.link"
          class="hidden-xs-only">
            <v-icon left large color="" class="mx-3" >{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
          </v-toolbar-items>
          <v-toolbar-items   class="hidden-xs-only" v-if="userAuth">
            <v-flex>
              <v-layout row wrap>
                <v-flex md12 lg12 class="mt-2 ml-7">
                  <v-avatar size="35">
                    <v-img :src="userAuth.photoUrl"></v-img>
                  </v-avatar>
                </v-flex>
                <v-flex md12 lg12 v-if="userAuth.name">
                    <p style="font-size:0.8em;" class=""> {{userAuth.name}}</p>
                </v-flex>
              </v-layout>
           </v-flex>
           
          </v-toolbar-items>
           
           <v-toolbar-items>
          <v-btn text  
          class=" error hidden-xs-only" @click="logOut" v-if="userAuth">
             <v-icon left>mdi-logout</v-icon> Logout
          </v-btn>
          </v-toolbar-items>
           <v-toolbar-items>
          <v-btn text  
          class="hidden-xs-only" large v-if="!userAuth">
            <signup left></signup>
          </v-btn>
          </v-toolbar-items>
           <v-toolbar-items>
          </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer" app temporary  dark class="black accent-4"
    >
      <v-list>
         <v-list-item class="orange accent-3" v-if="userAuth">
              <v-avatar  size="35">
                  <v-img :src="userAuth.photoUrl">
                </v-img>          
              </v-avatar>
               <p class="my-2 mx-1">{{userAuth.name}}</p>
              </v-list-item>
        <v-list-item-group v-if="userAuth">
          <v-list-item v-for="item in navItems" 
          :key="item.title" 
          router
          :to="item.link">
              <v-icon left>{{item.icon}}</v-icon>|
              <v-btn text small>{{item.title}}</v-btn>
          </v-list-item>
             
           <v-list-item  class="amber accent-4">
              <v-icon left color="red">mdi-logout</v-icon> |
            <v-btn text  class="red--text" small @click="logOut">Logout
          </v-btn>
          </v-list-item>
        </v-list-item-group>
         <v-list-item-group>
          
           <v-list-item v-if="!userAuth">
            <signup></signup>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>  
  </nav>
    <main>
       <v-layout v-if="error">
     <v-flex></v-flex>
     <v-flex>
          <v-layout row v-if="error">
            <v-flex xs12 offset-sm3 >
               <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
     </v-flex>
     <v-flex></v-flex>
   </v-layout>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
   export default {
    data: () => ({
      drawer: false,
      navItems : [
          {icon: 'mdi-headphones', title:'Podcaster', link: "/potplayer"},
        {icon: ' mdi-blogger', title:'Blog', link: "/blog"},
          {icon: 'mdi-briefcase-search', title:'Event', link: "/event"},
       
        ]
    }),
    computed: {
       userAuth ( ) {
            if( this.$store.getters.user !== null &&  this.$store.getters.user !== undefined)
                  { return this.$store.getters.user  }
                  else{ return null}
       },
       error () {
             return this.$store.getters.error
         },
    
},
    methods: {
      logOut(){
        this.$store.dispatch('logOut')
        this.$router.push('/')
      },
        onDismissed () {
             console.log('Dismissed alert')
             this.$store.dispatch('clearError')
         }
    }
  }
</script>
<style>

</style>