
<template>
  <v-row>
    <v-dialog  v-model="EditDialog"  persistent max-width="700px">
      <template v-slot:activator="{ on }">   
          <v-btn v-on="on" text small>
               <v-icon color="" class="mx-2">mdi-account-circle</v-icon>Join Wit Us
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
  <v-card
    class="mx-auto"
    max-width="344"
  >
 

    <v-card-actions>
      <h4 class="orange--text" >Our term and Policy</h4>

      <v-btn
        color="purple"
        text
      >
        
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

            </v-layout>
             <v-layout row  class="mx-3" >
             <v-flex justify-center text-center class="red--text my-3">
                <h3>Join with us</h3>
            </v-flex>
        </v-layout>
         <v-form class="mx-3"  @submit.prevent="onSignup">
          <v-layout  row justify-center>
            <v-flex xs12 sm6 text-center>
              
              <v-btn
                depressed
                
                type="submit"
                class="my-2"
                @click="signInWithGoogle"
                color="error"
                :loading="loading"
                > <v-icon class="mx-4 my-2">mdi-google-plus</v-icon> Continue With Google</v-btn>
                 <v-btn
                depressed
                dark
                @click="signInWithFacebook"
                type="submit"
                class="my-2"
                color="blue darken-3"
                :loading="loading"
                > <v-icon class="mx-2">mdi-facebook</v-icon> Continue With Facebook</v-btn>
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
     computed: {
          formValidation () {
             return this.email !== '' &&
              this.password !== '' &&
             this.confarmPassword !== ''
            
         },
          passwordMatch () {
             return this.password != this.confarmPassword ? " Password Not Match" : ''
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
           async onSignup () {
                this.EditDialog = false
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
         

         },
         signInWithGoogle () {
                this.EditDialog = false
            this.$store.dispatch('signUpWithGoogle') 
         },
         signInWithFacebook () {
                this.EditDialog = false
            this.$store.dispatch('signInWithFacebook')
         
         },
         onDismissed () {
             console.log('Dismissed alert')
             this.$store.dispatch('clearError')
             
            
         }
         }
     }
</script>
