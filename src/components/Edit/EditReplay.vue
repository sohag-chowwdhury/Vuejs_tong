<template>
  <v-row justify="center">
    <v-dialog  v-model="EditDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small text class=" blue--text mr-4 my-1"  v-on="on" color="black">
             <v-icon color="blue" class="mr-4">mdi-circle-edit-outline</v-icon> Edit
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>         
        <v-layout row>
        
                 
                <v-flex  xs12 >
                    <v-textarea
                        name="description"
                        label="Description"
                        id="description"
                         v-model="EditDescription"
                        filled
                        auto-grow
                        required
                        >
                        {{replay.description}}</v-textarea>
                 </v-flex>  
                    
            </v-layout>  
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="EditDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onSaveChanges">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
      props:['replay'],
   data () {
     return {
            EditDialog: false,

             EditDescription: this.replay.description
           
     }

   },
   methods: {
      onSaveChanges () {
        if ( this.EditDescription.trim() === '' ) {
          return
        }
        this.EditDialog = false
        this.$store.dispatch('updateReplay', {
          id: this.replay.id,
          description: this.EditDescription,
        })
      }
    }
  }
</script>
