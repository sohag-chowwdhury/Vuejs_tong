<template>
  <v-row justify="center">
    <v-dialog  v-model="DeleteDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">

           <v-btn x-small text class="orange--text my-1 mt-1"   v-on="on" color="black">
             <v-icon small color="orange"  class=" mr-5">mdi-block-helper</v-icon>Close
         </v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline orange--text"> <h6>Are You sure want to close this room.</h6> </span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  class="text--green" text @click="DeleteDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" class="text--error" text @click="onCommentClose">Confarm</v-btn>
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
      onCommentClose () {
          this.DeleteDialog = false
         this.$store.dispatch('closeComment', {
          id: this.comment.id,
          status: "close"
        })
       this.$router.go()
       
      }
    }
   }
</script>
