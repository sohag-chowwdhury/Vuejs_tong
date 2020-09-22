<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 offset-sm3 class="red--text my-3">
                <h3>Create a New Meet Up</h3>
            </v-flex>
        </v-layout>
         <v-layout>
             <v-flex>
                 <v-form @submit.prevent="onCreateMeetUp">
             <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                    name="title"
                    label="Title"
                    id="title"
                    v-model="title"
                    required >      
                     </v-text-field>
                 </v-flex>
            </v-layout >
            <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                        name="location"
                        label="Location"
                        id="location"
                         v-model="location"
                        required >      
                        </v-text-field>
                    </v-flex>
            </v-layout > 
             <v-layout row>
                    <v-flex xs12 sm6 offset-sm3  class="my-2">
                        <v-btn class="error" @click="onPickFile">Select Image </v-btn>
                        <input type="file" 
                         style="display: none" 
                          ref="fileInput"
                           accept="image/*"
                           @change ="onFilePicked"
                          
                           >
                    </v-flex>
            </v-layout> 
            <v-layout  row>
                    <v-flex xs12 sm6 offset-sm3>
                       <v-img :src="imageUrl" height="150" width="190"></v-img>
                    </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex  xs12 sm6 offset-sm3>
                    <v-textarea
                        name="description"
                        label="Description"
                        id="description"
                         v-model="description"
                        filled
                            auto-grow
                        value=""
                        required
                        ></v-textarea>
                 </v-flex>       
            </v-layout>  
            <v-layout row>
                <v-flex  xs12 sm6 offset-sm3>
                   <h3>Pick Date & time </h3>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex  xs12 sm6 offset-sm3>
                   <v-datetime-picker label="Select Date & time" v-model="date"> </v-datetime-picker>
                </v-flex>
            </v-layout>
            
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                :disabled="!formValidation"
                type="submit"
                class="my-2"
                large="" color="error">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
         </v-form>
             </v-flex>
         </v-layout>
    </v-container>
</template>
<script>
 export default {
     data () {
        
         return {
             title: '',
             location: '',
             imageUrl: '',
             description: '',
             date: new Date(),
             image: null
         }
     },
     computed: {
         formValidation () {
             return this.title !== '' &&
              this.location !== '' &&
             this.imageUrl !== ''
              && this.description !== ''
         },
        
     },
     methods: {
         onCreateMeetUp () {
             if( !this.formValidation){
                 return
             }
              if( !this.image){
                 return
             }
             const meetUpData = {
                 title: this.title,
                 location: this.location,
                 image: this.image,
                 description: this.description,
                date: this.date,



             }
             this.$store.dispatch('createMeetup', meetUpData)
             this.$router.push('/event')
         },
         onPickFile ()  {
                this.$refs.fileInput.click()
         },
         onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
     }
 }
</script>