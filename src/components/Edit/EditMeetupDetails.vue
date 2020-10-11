<template>
  <v-row justify="center">
    <v-dialog  v-model="EditDialog"  persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-btn x-small class="white--text mr-4 my-1"  v-on="on" color="black">
             <v-icon  class="mr-3">mdi-circle-edit-outline</v-icon>Edit
         </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Your Post</span>
        </v-card-title>
        <v-card-text>
            <v-layout row>
               <v-flex xs12 v-if="meetup.artist">
                  <v-text-field
                        name="artist"
                        label=" Artist"
                        id="artist"
                         v-model="EditArtist"
                        required
                        class="mx-2"
                        >
                        {{meetup.artist}}
                  </v-text-field>
                 </v-flex> 
                  <v-flex xs12  v-if="meetup.location">
                  <v-text-field
                        name="location"
                        label=" Location"
                        id="location"
                         v-model="EditLocation"
                        required
                        class="mx-2"
                        >
                        {{meetup.location}}
                  </v-text-field>
                 </v-flex> 
                <v-flex  xs12 >
                    <v-text-field
                        name="title"
                        label=" Title"
                        id="title"
                         v-model="EditTitle"
                        required
                        class="mx-2"
                        >
                        {{meetup.title}}</v-text-field>
                 </v-flex>  
                     
            </v-layout>  
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
                        {{meetup.description}}</v-textarea>
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
      props:['meetup'],
   data () {
     return {
            EditDialog: false,
            EditLocation:this.meetup.location,
            EditArtist:this.meetup.artist,
             EditTitle: this.meetup.title,
           EditDescription: this.meetup.description
           
     }

   },
   methods: {
      onSaveChanges () {
        if (this.EditTitle.trim() === '' || this.EditDescription.trim() === '' || this.EditTitle.trim() === '' || this.EditTitle.trim() === '' ) {
          return
        }
        this.EditDialog = false
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
           title: this.EditTitle, 
          description: this.EditDescription,
           artist: this.EditArtist, 
            location: this.location, 
       
        })
      }
    }
  }
</script>
