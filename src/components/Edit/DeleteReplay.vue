<template>
  <v-row justify="center">
    <v-dialog  v-model="DeleteDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small text class="error--text my-1 mt-1"   v-on="on" color="black">
             <v-icon color="error"  class=" mr-4">mdi-delete-circle</v-icon>Delete
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline red--text"> <h6>Are You sure ?</h6> </span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  class="text--green" text @click="DeleteDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" class="text--error" text @click="onReplayDelete">Confarm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
       props:['replay'],
   data () {
       return{
            DeleteDialog: false
  }
       },
        methods: {
      onReplayDelete () {
          this.DeleteDialog = false
         this.$store.dispatch('deleteReplay', {
          id: this.replay.id,
        })
       this.$router.go()
       
      }
    }
   }
</script>
