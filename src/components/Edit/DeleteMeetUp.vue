<template>
  <v-row justify="center">
    <v-dialog  v-model="DeleteDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small class="white--text my-1 mt-3"   v-on="on" color="black">
             <v-icon color="white"  class=" mr-3">mdi-delete-circle</v-icon>Delete
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline red--text"> <h6>Are You sure ? After delete this post you can not recover.</h6> </span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  class="text--green" text @click="DeleteDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" class="text--error" text @click="onMeetupDelete">Confarm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
       props:['meetup'],
   data () {
       return{
            DeleteDialog: false
  }
       },
        methods: {
      onMeetupDelete () {
          this.DeleteDialog = false
         this.$store.dispatch('deleteMeetup', {
          id: this.meetup.id,
        })
       this.$router.go()
       
      }
    }
   }
</script>
