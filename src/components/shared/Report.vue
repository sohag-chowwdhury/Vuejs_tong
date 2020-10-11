<template>
    <v-container>
      <v-form  @submit.prevent="onCreatReport">
          <v-layout row wrap  justify-center>
              <v-flex xs12 md12 sm6 lg6 xl6 text-center>
                <v-btn disabled class=" rounded-xl " x-samll> <h6 class="black--text font-weight-bold">Select topics Or write about </h6> </v-btn>
             </v-flex>
          </v-layout>
        <v-layout row wrap >
                    
                  <v-flex style=" border-bottom: outset; border-color:black" xs12 sm12 md12 lg12 class="m-auto">          
                    <span v-for="item in topics" 
                     :key="item.title"  justify-center>
                      <v-btn  color="black" x-small @click="Button(item)"   class="grey lighten-4 black--text  rounded-xl mx-1 my-2">
                        {{item}}
                      </v-btn>
                    </span>        
                     </v-flex>
                       <v-flex  xs12 sm12 md12 lg12 class="m-auto">          
                    <span v-for="item in  sub_topics_value" 
                     :key="item.title"  justify-center>
                      <v-btn  color="black" @click="Button_sub(item.title)" x-small   class="grey lighten-4 black--text  rounded-xl mx-1 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
                     </v-flex>
          </v-layout>  
             <v-layout justify-center >
              <v-flex xs12 md12 lg12  text-center v-if="this.topics_value">
               <v-btn small  disabled  class="rounded-xl mt-2 grey lighten-3 black---text">
                <h5 class="black--text font-weight-bold"> Your Selected Tag</h5>
               </v-btn>
               
                               <v-btn v-if="this.topics_value " small class="error rounded-xl ml-1 mt-2 ">{{this.topics_value}} </v-btn>
                                 <v-btn v-if="this.sub_topics_value_send" small class=" error rounded-xl ml-1 mt-2 ">{{this.sub_topics_value_send}} </v-btn>
                  
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
                   
                    block
                    >
                    Post 
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
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
          
           
          
           
        
         
            
            
            date: new Date(),         
            description:'',      
            topics: ['Nudity','Violence', 'Haresment', 'False News', 'Spam','Hate', 'Unauthorized','Hate spam', 'Terrorisom','gross','Content'],
            topics_value:'',
            sub_topics_value_send:'',
            sub_topics_value:[],                   
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
             return this.topics_value !== '' ||        
              this.description !== ''

          }

    },


        
    methods: {
      Button_sub(e){
        this.sub_topics_value_send = e 
      },
         Button( e){
          this.topics_value = e
           this.sub_topics_value.length = 0
          
          if( e=="Nudity"){
              
              this.sub_topics_value.push( {title:'Adult Nudity'}, {title:'Sexuality Suggestive'}, {title:'Sexual Activity'},{title:'Sexual Exploitation'},{title:'Sexual Service'},{title:'Child involved'})
          }
           else if( e=="Violence"){
              this.sub_topics_value.push( {title:'Me'}, {title:'A friend'},{title: 'Others'})
          }
           else if( e=="Hate"){
                
              this.sub_topics_value.push( {title:'Social'}, {title:'National origin'}, {title:"caste"}, {title:"Others"})
          }
          else {
            this.sub_topics_value.push()
          }
         },     
          onCreatReport () {
             if( !this.formValidation){
                 return
             }
             
             const ReportData = {
                 topics: this.topics_value,
                 sub_topics: this.sub_topics_value_send,
                  description: this.description,
                           }
             this.$store.dispatch('createReport', ReportData)
             this.$router.push('/')
         },
      }, 
  
}
</script>
<style scoped>

</style>