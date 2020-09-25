<template>
<div class="black">
  <v-container>

      <v-layout row wrap  justify-center>
             <v-flex xs12 md12 lg12>
                  <v-layout row wrap justify-center
                  style="border-bottom: ridge; border-width: 3px; border-color:error;">
                    <v-flex xs0 md3 lg2></v-flex>
                  <v-flex xs12 md6 lg3  justify-center >
                      <v-flex xs12 md6 lg12  class=" mx-5 my-1" ><v-btn  class="mx-3" fab color="black"  ><v-icon color="green">mdi-blog</v-icon></v-btn>
      
               <v-btn   class="mx-5" color="black" fab dark @click="filter = !filter"   > <v-icon dark>mdi-filter-outline</v-icon></v-btn>
     
      <v-btn class="ma-2 mx-5 white--text" v-if="userAuth"  color="black" to="/blog/new"><v-icon color="green" class="mx-2 my2">mdi-typewriter</v-icon>Write a blog</v-btn>   </v-flex>
                  </v-flex>
                  <v-flex xs12 md3 lg4  class="mx-2 mt-1">
                   <div  v-bind:class="{ divfilter: filter}">
                       <v-text-field
                     class="mx-2 rounded-xl"
                    label="Search with title"  
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
                 <span v-for="item in subject" 
                  :key="item.title"  justify-center>
                      <v-btn  small color="grey lighten-2 rounded-xl" @click="onChange(item.title)"  class="mx-2 my-2">
                        {{item.title}}
                      </v-btn>
                    </span>        
              </v-flex>
            </v-layout>
             </div>
          </v-flex>
      <br style="border-bottom: ridge; border-width: 6px; border-color:error;">
          <v-flex  xs12 sm6 md3  justify-center
            v-for="item in blogItem"
           :key="item.id"
            >  
                     <v-card
               style=" widthsize border: outset; border-width:1px;  border-color:black"
             class="mobilewidth mx-2 my-2 rounded-xl"
            height="275"  
            v-if="item.type =='Blog'"
            >
            <v-img
                 class="white--text align-end mx-1 my-2"
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
    
    <v-layout  row wrap class="amber mx-1 rounded-lg darken-2">
      <v-flex xs12 md12 lg12 >
           <div class="topbar1">   
           <h4 class=" tolbar1 ml-7 black--text"> {{item.title}}</h4>     
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12 class="mt-0">
           <v-layout class="lighten-1" row wrap>
        <v-flex  xs1 md1 lg1>
             <v-avatar class="ml-6 mt-1" color="teal" size="37">
      <span class="white--text headline">48</span>
    </v-avatar>
        </v-flex>
        <v-flex  xs8 md9 lg8 >
            <v-flex class="ml-6" xs11 md11 lg11>
              <p class="example my-0" >Kasem Chowdhury</p>
             <p class="exampledate my-0">{{item.time | date}}</p>
            </v-flex>
        </v-flex>
        <v-flex xs2 md2 lg3 >
          <v-btn x-small fab class="mt-1" black><v-icon>mdi-share-variant-outline</v-icon></v-btn>
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

      <v-list class="white--text">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="black accent-3"
        >
          <v-btn x-small  text class="white--text"><v-icon class=" mr-3" small>{{item.icon}}</v-icon>{{ item.title }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
        </v-flex>       
      </v-layout> 
      </v-flex>
    </v-layout>
  </v-card>
          </v-flex>
      
        </v-layout>
        
  </v-container>
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
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
          items: [
        { title: 'Share', icon:'mdi-share-variant-outline'},
        { title: 'Report', icon:'mdi-block-helper'},
        { title: 'Edit', icon:'mdi-square-edit-outline'},
        { title: 'Delete', icon:'mdi-delete' },
      ],
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
          console.log(this.$store.getters.lodeMeetUps.filter((meetup)=> { return meetup.type == "Blog"}))
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { return meetup.type == "Blog"})
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