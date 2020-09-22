<template>
  
  <v-container>
    <div class="mx-2">
      <v-layout row wrap  justify-center>
            <v-flex class=" text-center my-2">
               <v-btn  large class="mx-2 my-2" disabled outlined color="orange"> <v-icon>mdi-blogger</v-icon> <h2 >Blogs</h2></v-btn>
            </v-flex>
        </v-layout >
       
          
              
        <v-layout row wrap  justify-center >
          <v-flex xs12 sm12 md10 lg10  justify-center>
              <v-layout row wrap  justify-center >
                <v-flex style=" border-bottom: double; border-color:orange"  xs12 sm12 md12 lg12 class="m-auto">          
                 <span v-for="item in subject" 
                  :key="item.title"  justify-center>
                      <v-btn outlined small color="orange" @click="onChange(item.title)"  class="mx-2 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
              </v-flex>
              <v-flex  xs12 sm12 md12 lg12 class="m-auto">          
                 <span v-for="item in sub_subject" 
                  :key="item.title"  justify-center>
                      <v-btn text small color="black" class="mx-2 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex   xs12 sm12 md4  justify-center
            v-for="item in blogItem"
           :key="item.id"
            >  
              <v-card
    class="mx-2 my-2 text-center"
     color="orange accent-4"  
  >
    <v-img
      class="white--text align-end mx-1 my-1"
      height="175px"
      :src="item.imageUrl"
    outlined color="black"
    >
    <div class="loading">
          <Loading :size="106"
          color="#ff1d5e" v-if="loading"/> 
     </div> 
    </v-img>
   
     <v-card-text  style="height:120px" >
  <div class="body-1 white--text" ><h2>{{item.title}}</h2></div>
  <v-divider light />
</v-card-text>
  <v-layout row wrap>
    <v-flex xs3 md3 3 lg3>
      <v-icon large class="my-5">mdi-circle-edit-outline</v-icon>
    </v-flex>
       <v-flex xs6 md6 sm6 lg6 cl6  class="my-3" style="height:80px"> 
         <p  class="black--text  ma-0 text-sm-left">  Kasem Chowdhury</p>
          <p  class="black--text text-sm-left"> {{item.time | date}}</p>
       </v-flex>
     </v-layout>
    <v-card-actions >
      <v-btn
      class="orange darken-1 ml-2"
      outlined
        color="red"
        text
      >
        <v-icon  outlined color="black">mdi-share-variant-outline</v-icon>
      </v-btn>

      <v-btn
        color="black"
        text
        class="orange darken-1"
         @click="blogLoadItem(item.id)"
        
      >
<v-icon>mdi-gesture-spread</v-icon>      </v-btn>
    </v-card-actions>
  </v-card>
          </v-flex>
      
        </v-layout>
        
  </div> 
  </v-container>
  
</template>
<script>
import Loading from '../loading/Loading'
export default {
  components:{Loading},
      data (){
        return{
          sub_subject:[],
          subject:[
             {title:'Bangladesh'},
        {title:'Intenational'},
        {title:'Sports' },
         { title:'Opinion'},
        {title:'Job'},
         {title:'Lifestyle'},
         {title:'Education'},
         {title:'Literature'},
          {title:'Others'},
        ]
        
        }
      },
    computed: {
        blogItem () {
            return this.$store.getters.lodeBlogs
        },
        loading () {
             return this.$store.getters.loading
         }
    },
    methods:    { blogLoadItem (id) {
        this.$router.push('/blog/' +id)
    },
      onChange(event) {
                 this.sub_subject.length = 0 
            if( event == "Sports") {
                 this.sub_subject.push( {title:'Cricket'}, {title:'Tenish'}, {title:'Football'} ,{title:'Others'})
            }
            else if(event== "Intenational"){
              this.sub_subject.push({title:'US'}, {title:'UK'}, {title:'Canda'},{title:'China'}, {title:'India'}, {title:'Pakisthan'}, {title:'Japan'}, {title:'Iran'},{title:'Russia'},{title:'Turkey'}, {title:'Other Country'}) 
            }
             else if(event == "Politics"){
               this.sub_subject.push({title:'Country'}, {title:'International Politics'}) 
            }
             else if(event == "Lifestyle"){
               this.sub_subject.push({title:'Fashion'}, { title:'Style'}, {title:'Home Decoration'}, {title:'Face Treatment'}) 
            }
             else if(event == "Entertainment"){
               this.sub_subject.push({title:'Bollywood'}, {title:'Hollywood '}, {title:'Contry Entertaiment'}, {title:'Others'}) 
            }
             else if(event == "Opinion"){
               this.sub_subject.push({title:'Opinion'}, {title:'Others'}) 
            }
             else if(event == "Job"){
               this.sub_subject.push({title:'Job'}, {title: 'Others'}) 
            }
            else if(event == "Bangladesh"){
               this.sub_subject.push({title:'Crime'}, {title: 'Accident'}) 
            }
             else if(event == "Education"){
               this.sub_subject.push({title:'SSC'},  {title:'HSC'}, {title:'PSC'} , {title:'JSC &JDC'}, {title:'undergraduate'}, {title:'Others'}) 
            }
             else if(event == "Literature"){
               this.sub_subject.push({title:'Poem'},  {title:'Story'}, {title:'Short Story'} , {title:'Novel '}, {title:'Others'} ) 
            }
            else if(event == "Others"){
               this.sub_subject.push() 
            }
            
            console.log(this.subject)
            console.log(this.sub_subject)
        }
    }
}
</script>
<style  scoped>
    .title {
        position: absolute;
        bottom:5px;
         right:30%;
         left:30%;
        background-color: rgba(233, 117, 8, 0.73);
        color: aliceblue;
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 10px;
    }
 .loading {
        position: absolute;
        bottom:40px;
         right:35%;
         left:35%;
       
    }
</style>