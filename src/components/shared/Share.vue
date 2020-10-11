
<template>
  <v-row>
    <v-dialog  v-model="EditDialog"  persistent max-width="300px">
      <template v-slot:activator="{ on }">   
          <v-btn v-on="on" class="white" fab x-small>
               <v-icon color="black" class="mx-2">mdi-share-variant-outline</v-icon>
          </v-btn>
      </template>
       <v-container >
        <v-card class="mx-2" xs12 sm6 >
            <v-layout >
                <v-flex text-right class="mx-2">  
                <v-btn depressed  class="mx-2" color="" @click="EditDialog = false">
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-flex> 
            </v-layout> 
         <v-layout>
  
            </v-layout>
            
         <v-form class="mx-3"  @submit.prevent="onSignup">
          <v-layout  row justify-center>
            <v-flex xs12 sm12 lg12 text-center class="my-1">
              
             <ShareNetwork
                    network="facebook"
                    url="https://news.vuejs.org/issues/180"
                    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                    hashtags="vuejs,vite"
                >
                     <v-btn small color="info text white"><v-icon color="white">mdi-facebook</v-icon> Facebook</v-btn>
                </ShareNetwork>
            </v-flex>
          
            <v-flex xs12 sm12 lg12 text-center class="my-2">
              
             <ShareNetwork
                    network="twitter"
                    url="https://news.vuejs.org/issues/180"
                    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                    hashtags="vuejs,vite"
                >
                     <v-btn small color="primary text white"><v-icon class="mx-2" color="white">mdi-twitter</v-icon> twitter</v-btn>
                </ShareNetwork>
            </v-flex>
            <v-flex xs12 sm12 lg12 text-center class="my-1">
              
             <ShareNetwork
                    network="whatsapp"
                    url="https://news.vuejs.org/issues/180"
                    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                    hashtags="vuejs,vite"
                >
                     <v-btn small color="green white"><v-icon  color="white">mdi-whatsapp</v-icon> whatsapp</v-btn>
                </ShareNetwork>
            </v-flex>
             <v-flex xs12 sm12 lg12 text-center class="my-1">
             <v-btn class="black white--text" small >
               <v-icon small class="mx-1" color="white white--text">mdi-link</v-icon>  Copy link
            </v-btn>
            </v-flex>
          </v-layout>
       </v-form>
       </v-card>
    </v-container>
    </v-dialog>
  </v-row>
</template>
<script>
 export default {
     data () {
         return {
                 show: false,
            EditDialog: false,
             email: '',
             password: '',
            confarmPassword: '',
             
         }
     },
 } 
  
</script>
