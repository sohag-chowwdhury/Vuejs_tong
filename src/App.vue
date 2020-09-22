<template>
  <v-app>
     <nav>
        <v-toolbar dark flat class="orange accent-4">
         <v-app-bar-nav-icon @click.native.stop="drawer = true" class="d-sm-none"></v-app-bar-nav-icon>
         <v-toolbar-title >
            <router-link to="/" tag="span" class="font-weight-thin " style="cursor: pointer" ><h3 class="font-weight-black my-auto">THE টং</h3>
    </router-link>
          </v-toolbar-title>
         <v-spacer></v-spacer>
           <v-toolbar-items  >
          <v-btn text  v-for="item in navItems" 
          :key="item.title" 
          router
          :to="item.link"
          class="hidden-xs-only ">
            <v-icon left class="mx-2" >{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn >
          </v-toolbar-items>
         
    </v-toolbar>
     <v-navigation-drawer
      v-model="drawer" app temporary  dark class="orange accent-4"
    >
   
        <v-list>
        <v-list-item-group>
          <v-list-item v-for="item in navItems" 
          :key="item.title" 
          router
          :to="item.link">
              <v-icon left>{{item.icon}}</v-icon>
              <v-btn text small>{{item.title}}</v-btn>
          </v-list-item>
        </v-list-item-group>
        
      </v-list>
  
    </v-navigation-drawer> 
     </nav>
    <main >
      <router-view></router-view>
    </main>
    <v-footer
  >
     <v-layout row wrap>
       <v-flex xm12 md12 lg12 sm12>
          <v-card 
      flat
      tile
      class="orange accent-4 lighten-1 white--text text-center"
    >
      <v-card-text color="orange accent-4">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong> Chowdhury Sohag</strong>
      </v-card-text>
    </v-card>
       </v-flex>
     </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
 export default {
      data: () => ({
      image: require('@/assets/logo.jpg'),
      drawer: false,
      navItems : [
          {icon: 'mdi-account-multiple', title:'Bolg', link: "/blog"},
        {icon: 'mdi-account-group', title:'About ', link: "/about"},
        {icon: 'mdi-face-outline', title:'Write your Blog', link: "/new"},
         {icon: 'mdi-account-multiple', title:'Event', link: "/event"},
        {icon: 'mdi-account-group', title:' Create Your Event', link: "/meetups/new"},
        {icon: 'mdi-account-group', title:'PotPlayer', link: "/potplayer"},

        ],
         icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
 }
</script>
<style scoped>
.application {
  background-color: #00a86b;
}
</style>
