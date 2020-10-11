<template>
    <v-container>
      <v-form  @submit.prevent="onCreatPotPlay">
            <v-layout row wrap  justify-center>
              <v-flex xs12 md12 sm6 lg6 xl6 text-center>
               <h4 class="red--text font-weight-bold">Create Your pod:</h4>
          </v-flex>
        </v-layout>
        <v-layout row wrap >
             <v-flex    xs12 md6 offset-sm3>
                 <v-layout  row wrap justyfy-center class="my-2">
                     <v-flex xs7 md7 class="ml-5" text-center>
                          <v-select
                    label="Topics*"
                    v-model="topic"
                     :items="topics"
                    dense
                    outlined
                     @change="onChange"
                    >           
                    </v-select>
                     </v-flex>
                      <v-flex class="mx-1" xs4 md4 text-center>
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
                <v-layout >
                  <v-flex style=" border-bottom: outset; border-color:green" xs12 sm12 md12 lg12 class="m-auto">          
                    <span v-for="item in sub_topics" 
                     :key="item.title"  justify-center>
                      <v-btn outlined color="black" small @click="Button(item.title)"  class="mx-2 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
                     </v-flex>
                </v-layout>
                <v-layout>
                     <v-flex v-if="sub_sub_topics"  xs12 sm12 md12 lg12 class="m-auto">          
                    <span  v-for="item in sub_sub_topics" 
                     :key="item.title"  justify-center>
                      <v-btn v-if="sub_sub_topics" @click="set_sub_sub_topics_value(item.title)" outlined color="grey darken-2" small  class="mx-2 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
                     </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex  v-if="this.topic || this.audience"  style=" border-top: outset; border-color:black" xs12 sm12 md12 lg12>
                        <p class="mx-2 text-center font-weight-bold" > Selected Catagory:</p>
                        <v-layout row wrap justify-center>
                            <v-flex xs4 md4 lg4 sm4 xl4>
                                <v-btn  small v-if="this.topic" class="grey darken2 rounded-xl mb-2">{{this.topic}}</v-btn>
                                <v-btn v-if="this.sub_title" small class="grey darken rounded-xl 2 mb-2 mx-1">{{this.sub_title}} </v-btn>
                                <v-btn v-if="this.sub_sub_topics_value"  small class="grey darken-1 rounded-xl  mb-2 mx-1">
                                    {{this.sub_sub_topics_value}} </v-btn>
                            </v-flex>
                            <v-flex xs1 md1 lg1 sm1 xl1>
                                    <p v-if="this.topic">||</p>
                            </v-flex>
                            <v-flex xs3 md3 lg3 sm3 xl3>
                                <v-btn v-if="this.audience" small class="info rounded-xl mb-2 mx-1">{{this.audience}} </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>    
                </v-layout>       
             </v-flex> 
        </v-layout>
        <v-layout>
         
        </v-layout>
        <v-layout>
          <v-flex xs12 md6 offset-sm3>        
               <div> <v-file-input clear-icon="" accept=".mp3,audio/*"  @change="onFilePickedAudio"
               type="file" ref="file"
                
                show-size counter  label="Pot Clip"></v-file-input></div>
          </v-flex>
          
      </v-layout>
        <v-layout>
          <v-flex xs12 md6 offset-sm3>
             <v-text-field
          v-model="title"
          label="Title*"
        ></v-text-field>
          </v-flex>
      </v-layout>
        <v-layout>
          <v-flex xs12 md6 offset-sm3>
              <v-text-field
          v-model="artist"
          label="Artist*"
        ></v-text-field>
          </v-flex>
      </v-layout>
       <v-layout>
          <v-flex xs12 md6 offset-sm3>
             <v-layout row wrap justyfy-center>
                 <v-flex xs6 md6 text-center style=" border-right: outset; border-color:orange">
                      <v-btn class="orange mx-5 my-15" @click="onPickFile">Select Image </v-btn>
                        <input type="file" 
                         style="display: none" 
                          ref="fileInput"
                           accept="image/*"
                           @change ="onFilePicked"                    
                           >
                 </v-flex>
                 <v-flex xs6 md6 text-center>
                      <v-card flat class="text-xs-center">
                        <v-responsive>
                                <img style="border: solid;" size="210" class="grey lighten" :src="imageUrl" height="190" width="220">

                        </v-responsive>
                     </v-card>
                 </v-flex>
             </v-layout>
               <v-layout row wrap justify-center>
                     <v-flex  xs12 md12 mx-2 height="100" class="my-3">
                      <vue-editor placeholder="Description Your Pot" v-model="description"  :editorToolbar="customToolbar"><p></p></vue-editor>
                 </v-flex>
        </v-layout>
             <v-layout>
                 <v-flex>
                    <v-btn
                    
                    color="info"
                    type="submit"
                    class="ma-2 white--text"
                    :disabled="!formValidation"
                    block
                    >
                    Post 
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                 </v-flex>
             </v-layout>
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
    data() {
        return{
            imageUrl: '',
            audio:null,
            audioUrl:'',
            artist:'',
            title:'',
            image:null,
            audience:'',
            topic:'',
            sub_title:'',
            file:'',
            date: new Date(),         
            description:'',
             sub_sub_topics_value:'',
            audiences: ['Public','Member','Only me'],
            topics: ['Song','Poem', 'Nobel', 'Story', 'News'],
            sub_topics:[],        
            sub_sub_topics:[],

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
        }
    },
    computed: {
       formValidation () {
             return this.title !== '' &&
              this.artist!== '' &&
             this.imageUrl !== '' &&
              this.audience !=='' &&
              this.topic !== '' &&
              this.sub_title !== '' &&
              this.description !== ''

         }
    },
        
    methods: {
      onCreatPotPlay () {
             if( !this.formValidation){
                 return
             }
              if( !this.audio){
                 return
             }
             const PotData = {
                 title: this.title,
                 audio: this.audio,
                 image: this.image,
                 topic:this.topic,
                 audience:this.audience,
                 description: this.description,
                 date: this.date,
                  sub_title:this.sub_title,
                 sub_sub_topics_value:this.sub_sub_topics_value,
                 artist:this.artist




             }
             this.$store.dispatch('createPot', PotData)
             this.$router.push('/potplayer')
         },

       onFilePickedAudio () {
       let files = event.target.files
       console.log(files)
          let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.readAsDataURL(files[0])
        this.audio = files[0]
       console.log(files[0].name)
        
      
      },
      
          onPickFile ()  {
                this.$refs.fileInput.click()
         },
         onFilePicked (event) {
           console.log(event)
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
      },
      set_sub_sub_topics_value(value){
          this.sub_sub_topics_value = value
      },
      Button( e){
          this.sub_title = e
           this.sub_sub_topics.length = 0 
           this.sub_sub_topics_value = ''

          if( e=="Sort Story"){
              
              this.sub_sub_topics.push( {title:'Bangla Sort Story'}, {title:'English Sort story'})
          }
           else if( e=="Story"){
              this.sub_sub_topics.push( {title:'Bangla Story'}, {title:'English story'})
          }
           else if( e=="Country"){
                
              this.sub_sub_topics.push( {title:'Country Politics'}, {title:'Country Economics'}, {title:"Country accident"}, {title:"Country Others"})
          }
           else if( e=="World"){
                
              this.sub_sub_topics.push(  {title:'World Politics'}, {title:'World Economics'}, {title:"World accident"},{title:"World Others"})
          }
            else if( e=="Sports"){
                
              this.sub_sub_topics.push( {title:'Cricket'}, {title:'Football'}, {title:"Others"})
          }
           else if( e=="Bangla Song"){
                
              this.sub_sub_topics.push( {title:"Soft"}, {title:"Metal"},{title:"Romantic"},{title:"Rap"},{title:"others"},)
          }
          else if( e=="English Song"){
                
              this.sub_sub_topics.push( {title:"Soft"}, {title:"Metal"},{title:"Romantic"},{title:"Rap"},{title:"others"},)
          }
            else if( e=="Hindi Song"){
                
              this.sub_sub_topics.push( {title:"Soft"}, {title:"Metal"},{title:"Romantic"},{title:"Rap"},{title:"others"},)
          }
       
      }, 
      onChange() {
                 this.sub_topics.length = 0
                 this.sub_sub_topics.length = 0 
            if( this.topic == "Poem") {
                 this.sub_topics.push( {title:'Bangla'}, {title:'English'}, {title:'Others'} )
            }
            else if(this.topic== "Story"){
              this.sub_topics.push({title:'Sort Story'}, {title:'Story'},) 
            }
             else if(this.topic == "Nobel"){
               this.sub_topics.push({title:'Bangla'}, {title:'English'}) 
            }
             else if(this.topic == "News"){
               this.sub_topics.push({title:'Country'}, { title:'World'}, {title:'Sports'}, {title:'Other'}) 
            }   
            else if(this.topic == "Song"){
               this.sub_topics.push({title:'Bangla Song'}, { title:'English Song'}, {title:'Hindi Song'}, {title:'Others Song'}) 
            }     
        }
}
}
</script>
<style scoped>

</style>