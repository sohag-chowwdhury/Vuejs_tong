<template>
<div class="black">

      <v-layout row wrap class="mx-2"  justify-center>
             <v-flex xs12 md12 lg12>
                  <v-layout row wrap justify-center
                  style="border-bottom: ridge; border-width: 3px; border-color:error;">
                    <v-flex xs0 md0 lg2></v-flex>
                  <v-flex xs12 md6 lg5  justify-center >
                      <v-flex xs12 md12 lg12  class=" mx-5 my-1" >
                      
                        <v-btn small  class="mx-5" color="green" fab dark   > <v-icon color="black">mdi-blogger</v-icon></v-btn>
      
               <v-btn  small  class="mx-5" color="white" fab dark @click="filter = !filter"   > <v-icon color="black">mdi-filter-outline</v-icon></v-btn>
     
      <v-btn small class="ma-2 mx-5 black--text" v-if="userAuth"  color="white" to="/blog/new"><v-icon color="green" class="mx-2 my2">mdi-typewriter</v-icon>Write a blog</v-btn>   </v-flex>
                  </v-flex>
                  <v-flex xs12 md5 lg4  class="mx-2 mt-1">
                   <div  v-bind:class="{ divfilter: filter}">
                       <v-text-field
                     class="mx-2 rounded-xl"
                    label="Search with title"  
                    v-model="search"
                    background-color="grey lighten-2"
                    single-line
                    outlined
                  ></v-text-field>
                   </div>
                  </v-flex>
                </v-layout>
             </v-flex>
       <v-flex xs12 sm12 md10 lg10 class="mx-3"  justify-center>
             <div  v-bind:class="{ divfilter: filter}">
                <v-layout row wrap  justify-center >
                <v-flex style=" border-bottom: double; border-color:black" justify-center xs12 sm12 md12 lg12 class="m-auto">          
                 <span v-for=" item in subjects" 
                  :key="item"  justify-center>
                      <v-btn  small color="grey lighten-2 rounded-xl" @click="buttonFilter(item)"  class="mx-2 my-2">
                        {{item}}
                      </v-btn>
                    </span>        
              </v-flex>
            </v-layout>
             </div>
          </v-flex>
      <br style="border-bottom: ridge; border-width: 6px; border-color:error;">
          <v-flex  xs12 sm4 md4 lg3  justify-center
            v-for="item in blogItem"
           :key="item.id"
            >  
                     <v-card
               style=" widthsize border: outset; border-width:1px;  border-color:black"
             class="mobilewidth mx-2 my-1 rounded-xl"
            height="275"  
            v-if="item.type =='Blog'"
             @click="blogLoadItem(item.id)"
            >
            <v-img
                 class="white--text align-end mx-1 my-0"
                  height="190"     
                  :src= "item.imageUrl"
               outlined color="black"
             >
         
                    <div  class="title mt-5 ">
                           <v-btn class="ml-2" fab color="black" x-small>
                                <v-icon color="orange">
                                    mdi-blogger
                                </v-icon>
                             </v-btn>
          
           
            </div>
    </v-img>
    
    <v-layout  row wrap class="amber mx-1  rounded-b-xl darken-2">
      <v-flex xs12 md12 lg12 >
           <div class="topbar1">   
           <h4 class=" tolbar1 ml-7 black--text"> {{item.title}}</h4>     
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12 class="mt-0">
           <v-layout class="lighten-1" row wrap>
        <v-flex  xs1 md1 lg1>
             <v-avatar class="ml-6 my-3 mt-1" color="teal" size="37">
              <v-img :src="item.creatorImage"></v-img>
    </v-avatar>
        </v-flex>
        <v-flex class="my-1"  xs7 md7 lg8 >
            <v-flex class="ml-6" xs11 md11 lg11>
              <p style="font-size:.9em !important" class="example ml-2 my-0" >{{item.creatorName}}</p>
             <p   style="font-size:.8em !important"  class="exampledate ml-2  my-0">{{item.time | date}}</p>
            </v-flex>
        </v-flex>
        <v-flex xs1 md1 lg1 class="my-1"> <share></share></v-flex>
        <v-flex xs2 md2 lg1 >
        
           <v-menu
            class=""
            v-if="userAuth" 
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          fab
          class="mt-1 mx-3"
          
        >
        <v-icon class="" small color="black ">mdi-view-headline</v-icon>
        </v-btn>
      </template>

     
      <v-list class="black accent-3 white--text">
       
         <v-btn x-small @click="saveBlog(item)" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" >mdi-cards-heart</v-icon>Save</v-btn>
         <br>
          <v-btn x-small to="/report" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" small>mdi-block-helper</v-icon>Report</v-btn>
         <edit-meetup class="my-1" :meetup="item"></edit-meetup>
          <delete-meetup :meetup="item"></delete-meetup>
      </v-list>
    </v-menu>
        </v-flex>       
      </v-layout> 
      </v-flex>
    </v-layout>
  </v-card>
          </v-flex>
      
        </v-layout>
        
 </div> 
</template>
<script>
//import Loading from '../loading/Loading'
export default {
//components:{Loading},
      data (){
        return{
            fab: true,
          filter:true,
          show: false,
          search:'',
          buttonSearch:'',
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
        
          sub_subject:[],
           subjects: ['Bangladesh', 'Intenational', 'Sports', 'Politics', 'Opinion', 'Job', 'Lifestyle', 'Entertainment' ,'Education'],
        
        }
      },
    computed: {
        blogItem () {
        
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { 
                if( this.search != '' ){  return meetup.title.toLowerCase().match(this.search.toLowerCase()) &&  meetup.type =="Blog"}
               if( this.buttonSearch != ''){ return  meetup.subject == this.buttonSearch &&  meetup.type =="Blog"}
                 else { return meetup.title.toLowerCase().match(this.search.toLowerCase()) &&  meetup.type =="Blog"}

            }
           )
        },
        loading () {
             return this.$store.getters.loading
         },
          userAuth ( ) {
            if( this.$store.getters.user !== null &&  this.$store.getters.user !== undefined)
                  { return this.$store.getters.user  }
                  else{ return null}
       },   
    },
    methods: { 
       buttonFilter(e){
          this.search = ''
          console.log(e)
          this.buttonSearch = e
        },
         saveBlog(e){
                        console.log(e)      
                 const saveFav = e 
                 console.log("ok")
                 console.log(saveFav)
                   this.$store.dispatch('saveBlog', saveFav)
              
      },
      blogLoadItem (id) {
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
.first {
    width: 150px !important;
    height: 350px !important
  }
.title {
        position: absolute;
        bottom:150px;
         right:0%;
         left:0%;
        background-color: rgba(17, 13, 13, 0.87) !important;
        color: rgb(11, 12, 12);
        padding: 5px;
        border-radius: 5px;
        opacity: .75;
    }
     .loading {
        position: absolute;
        bottom:210px;
         right:45%;
         left:40%;
       
    }
    .title1 {
        position: absolute;
        bottom:-9px !important;
         right:0%;
         left:84%;
        background-color: rgba(12, 11, 11, 0.938) !important;
        color: aliceblue;
        padding: 8px;
        border-radius: 5px;
         opacity: .75;
    }
     .title2 {
        position: absolute;
        bottom:00px;
        top:00px;
         right:0%;
         left:82%;
        background-color: rgba(20, 19, 18, 0.938);
        color: aliceblue;
        padding: 0px;
        border-radius: 5px;
         opacity: .75;
    }
@media screen and (min-width: 601px) {
  v-card.widthsize{
    width: 500px !important;
  }
  p.example {
    font-size: .9em;
  }
  h4.example {
    height: 87px;
    font-size: .9em;
    overflow: hidden;
  }
  v-card.maxWidth{
    width:300px;
  }
   h4.example1 {
    height: 27px;
    font-size: .9em;
    overflow: hidden;
  }
    div.topbar1 {
    height:22px;
    overflow: hidden;
  }
   div.topbar2 {
    height:40px;
    overflow: hidden;
  }
 span.button_text {
    font-size: .57em;
    font-style: oblique;
  }
   div.topbar {
    height:19px;
    overflow: hidden;
  }h4.example {
    height: 17px;
    font-size: .9em;
    overflow: hidden;
  }
    h4.example1 {
    height: 27px;
    font-size: .9em;
    overflow: hidden;
  }
  

}

@media screen and (max-width: 600px) {
  div.topbar2 {
    height:40px;
    overflow: hidden;
  }
  v-card.mobilewWidth{
    width: 400px
 

  }
  div.topbar1 {
    height:21px;
    overflow: hidden;
  }
  h4.example {
    height: 17px;
    font-size: .9em;
    overflow: hidden;
  }
   h4.example1 {
    height: 27px;
    font-size: .9em;
    overflow: hidden;
  }
  p.example {
    font-size: .8em;
  }
  p.example1 {
    font-size: .2em;
  }
   p.exampledate {
    font-size: .7em;
  }
  span.button_text {
    font-size: .57em;
    font-style: oblique;
  }
  div.mobile{
    position:fixed;
    top:8%;
    width:100%;
    z-index:100;
  }
  div.mobilefake{
    height: 120px;
    background: #fff !important;
  }
  p.mobilestick{
    display: none !important;
  }
  div.mobilestick {
     display: none !important;
  }
}
</style>