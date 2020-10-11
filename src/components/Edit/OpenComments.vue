<template>
  <v-row justify="center">
    <v-dialog  v-model="DeleteDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small text class="green--text my-1 mr-2 mt-1"   v-on="on" color="black">
             <v-icon color="green"  class=" mr-5">mdi-lock-open-variant</v-icon>Open
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline green--text"> <h6>Are You sure ? Open this room.</h6> </span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  class="text--green" text @click="DeleteDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" class="text--error" text @click="onCommentOpen">Confarm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
       props:['comment'],
   data () {
       return{
            DeleteDialog: false
  }
       },
        methods: {
      onCommentOpen () {
          this.DeleteDialog = false
         this.$store.dispatch('openComment', {
          id: this.comment.id,
          status:"open"
        })
       this.$router.go()
       
      }
    }
   }
</script>
