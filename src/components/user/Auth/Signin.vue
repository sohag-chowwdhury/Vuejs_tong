<template>
  <v-row>
    <v-dialog  v-model="EditDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">   
          <v-btn v-on="on" text small>
               <v-icon color="" class="mx-2">
                   mdi-account-key</v-icon>Sign In
          </v-btn>
      </template>
       <v-container>
        <v-card class="mx-2"  xs12 sm6 offset-sm3>
             <v-layout >
                <v-flex text-right class="mx-2">  
                <v-btn depressed  class="mx-2" color="" @click="EditDialog = false">
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-flex> 
            </v-layout> 
        <v-layout row class="mx-3">
            <v-flex xs12 offset-sm3 class="red--text my-3">
                <h3>Sign In Your Account</h3>
            </v-flex>
        </v-layout>
        <v-layout row v-if="error">
            <v-flex xs12 offset-sm3 >
               <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
         <v-form class="mx-3"  @submit.prevent="onSignIn">
             <v-layout row justify-center="">
                <v-flex xs12 sm6 text-center class="mx-2">
                    <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="email"
                    required >      
                     </v-text-field>
                 </v-flex>
                 <v-flex xs12 sm6 offset-sm3 class="mx-2">
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    required >      
                     </v-text-field>
                 </v-flex>
            </v-layout >
            <v-layout  row justify-center>
            <v-flex xs12 sm6 text-center>
              <v-btn
                depressed
                type="submit"
                class="my-2"
                
                color="info"
                :loading="loading"
                :disabled="!formValidation"
                >Sign In</v-btn>
            </v-flex>
          </v-layout>
           <v-layout  row justify-center>
            <v-flex xs12 sm6 text-center>
               <h4 class="text-center">Or</h4>
              <v-btn
                depressed
                
                type="submit"
                class="my-2"
                @click="signInWithGoogleIn"
                color="error"
                :loading="loading"
                > <v-icon class="mx-4 my-2">mdi-google-plus</v-icon> Sign Up With Google</v-btn>
                 <v-btn
                depressed
                dark
                @click="signInWithFacebookIn"
                type="submit"
                class="my-2"
                color="blue darken-3"
                :loading="loading"
                > <v-icon class="mx-2">mdi-facebook</v-icon> Sign Up With Facebook</v-btn>
            </v-flex>
            
          </v-layout>
          <v-layout row wrap justify-center>
                 <v-flex xs12 md12 lg8 class="mx-2 mt-5" >
              <p> if you have not an account please <v-btn x-small color="green"> <signup></signup></v-btn> </p>
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
            EditDialog: false,
             email: '',
             password: ''
             
         }
     },
     computed: {
         formValidation () {
             return this.email !== '' &&
              this.password !== '' &&
             this.confarmPassword !== ''
            
         },
         user() {
             return this.$store.getters.user
         },
          error () {
             return this.$store.getters.error
         },
         loading () {
             return this.$store.getters.loading
         }
     },
     watch: {
             user (value) {
                 if(value !== null && value !== undefined) {
                     this.$router.push('/')
                 }
             }
         },
      methods: {
         onSignIn () {
            this.EditDialog = false
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password})

         },
           signInWithGoogleIn () {
                this.EditDialog = false
            this.$store.dispatch('signInWithGoogle') 
         },
         signInWithFacebookIn () {
                this.EditDialog = false
            this.$store.dispatch('signInWithFacebook')
            this.$router.push('/profile')
    
         },
          onDismissed () {
             console.log('Dismissed alert')
             this.$store.dispatch('clearError')
         }
     }
     
 }
</script>