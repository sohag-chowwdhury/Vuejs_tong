<template>
   <v-container>
       <v-layout row wrap justify-center>
           <v-flex xs12 md6 text-center>
               <h2  class="font-weight-black red--text mt-6">Write your post</h2>
           </v-flex>      
       </v-layout>
          <v-form @submit.prevent="onCreateBlog">
       <v-layout row wrap  justify-center>
             <v-flex  xs6 md3 class="mx-1">
                     <v-select
                    label="Subject*"
                    v-model="subject"
                     :items="subjects"
                    dense
                    outlined
                     @change="onChange"
                    >               
                    </v-select>
                       <v-flex  xs6 md3 class="mx-1">
                     <v-select
                   label="Subtitle*"
                    v-model="sub_subject_value"
                   
                     :items="sub_subject"
                     :disabled="sub_subject== ''"
                     color="orange"
                    dense
                    outlined
                    >
                    
                    </v-select>
                 </v-flex> 
                 </v-flex> 
                  <v-flex  xs5 md2  class=" mx-1">
                     <v-select
                    label="Share With*"
                    v-model="audience"
                     :items="audiences"
                    dense
                    outlined
                    >
                    
                    </v-select>
                 </v-flex>        
       </v-layout>
       <v-layout  row  wrap>
            <v-flex  xs12 sm6 offset-sm3>
                <v-card flat class="text-xs-center">
                <v-responsive>
                    <v-avatar size="210" >
                         <img class="grey lighten" :src="imageUrl" height="190" width="220">
                    </v-avatar>
                </v-responsive>
            </v-card>
            </v-flex>
     
            <v-flex xs12 sm6 offset-sm3>
                        <v-btn class="error mx-5 my-2" @click="onPickFile">Select Image </v-btn>
                        <input type="file" 
                         style="display: none" 
                          ref="fileInput"
                           accept="image/*"
                           @change ="onFilePicked"                    
                           >
                    </v-flex>
        </v-layout> 
         <v-layout row wrap justify-center> 
                <v-flex xs12 sm6   my-3 mx-2>
                    <v-text-field
                    name="title"
                    label="Title*"
                    id="title"
                    v-model="title"
                    required >      
                     </v-text-field>
                 </v-flex>
            </v-layout >
       <v-layout row wrap justify-center>
                     <v-flex  xs12 md6 mx-2 >
                      <vue-editor placeholder="Here Write your thinking......" v-model="description"  :editorToolbar="customToolbar"><p></p></vue-editor>
                 </v-flex>
        </v-layout>

         <v-layout row wrap justify-center>
                     <v-flex  xs12 sm12 md6   >
                        <v-btn class="my-2 " type="submit"
                :disabled="!formValidation"  block  color="green">Post</v-btn>
                 </v-flex>
        </v-layout>
        </v-form>      
   </v-container>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
   
     components: {
    VueEditor
  },
    data () {
        return {
                     subjects: ['Bangladesh', 'Intenational', 'Sports', 'Politics', 'Opinion', 'Job', 'Lifestyle', 'Entertainment' ,'Education'],
                      audiences: ['Public','Member','Only me'],
                      sub_subject: [], 
                      sub_subject_value:'',   
                       customToolbar: [
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [
                            { align: "" },
                            { align: "center" },
                            { align: "right" },
                            { align: "justify" }
                        ],
                        [{ color: [] }],
                        ],
                          imageUrl: '',
                          image:null,
                          time: new Date().toISOString(),
                          description:'',
                          title:'',
                          subject:'',
                          audience: '',
                          yoo:"<h1>You can go now</h1>"
                        
                    
        }
    },
    computed: {
      
      formValidation(){
        return this.subject !== '' && this.audience !== '' && this.description !=='' && this.title !== '' &&
        this.imageUrl !== ''
      },
    },
     methods: {
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
        console.log(this.image)
      },
      onCreateBlog () {
         if( !this.formValidation){
                 return
             }

          if( !this.image){
                        return
                    }
             const blogData ={
               title: this.title,
               description: this.description,
               image : this.image ,
               time:this.time ,
               subject:this.subject,
               audience: this.audience
             }
             this.$store.dispatch('createBlog', blogData)
               this.$router.push('/blog')
      },
      onChange() {
             this.sub_subject.length = 0 
            if( this.subject == "Sports") {
                 this.sub_subject.push('Cricket', 'Tenish', 'Football' ,'Others')
            }
            else if(this.subject == "Intenational"){
              this.sub_subject.push('US', 'UK', 'Canda','China', 'India', 'Pakisthan', 'Japan', 'Iran','Russia','Turkey', 'Other Country') 
            }
             else if(this.subject == "Politics"){
               this.sub_subject.push('Country', 'International Politics') 
            }
             else if(this.subject == "Lifestyle"){
               this.sub_subject.push('Fashion', 'Style', 'Home Decoration', 'Face Treatment') 
            }
             else if(this.subject == "Entertainment"){
               this.sub_subject.push('Bollywood', 'Hollywood ', 'Contry Entertaiment', 'Others') 
            }
             else if(this.subject == "Opinion"){
               this.sub_subject.push('Opinion',  'Others') 
            }
             else if(this.subject == "Job"){
               this.sub_subject.push('Job',  'Others') 
            }
            else if(this.subject == "Bangladesh"){
               this.sub_subject.push('Crime',  'Accident') 
            }
             else if(this.subject == "Education"){
               this.sub_subject.push('SSC',  'HSC', 'PSC' , 'JSC &JDC', 'undergraduate', 'Others') 
            }
        }
     } 
}
</script>