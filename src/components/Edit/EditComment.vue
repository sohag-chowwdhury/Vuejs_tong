<template>
  <v-row justify="center">
    <v-dialog  v-model="EditDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small text class="white--text mr-4"   v-on="on" color="blue">
             <v-icon   class="mr-4">mdi-circle-edit-outline</v-icon>
             edit
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>         
        <v-layout row>
             <v-flex>
                   <v-text-field
                        name="title"
                        label=" Title"
                        id="title"
                         v-model="EditChatRoomName"
                        required
                        class="mx-2"
                        >
                        {{comment.chatRoomName}}</v-text-field>
                 </v-flex> 
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
                        {{comment.description}}</v-textarea>
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
      props:['comment'],
   data () {
     return {
            EditDialog: false,       
             EditChatRoomName: this.comment.chatRoomName,
             EditDescription: this.comment.description
           
     }

   },
   methods: {
      onSaveChanges () {
        if (this.EditChatRoomName.trim() === '' || this.EditDescription.trim() === '' ) {
          return
        }
        this.EditDialog = false
        this.$store.dispatch('updateComment', {
          id: this.comment.id,
           chatRoomName: this.EditChatRoomName, 
          description: this.EditDescription,
          
       
        })
      }
    }
  }
</script>
