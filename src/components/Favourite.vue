<template >
<div class="black darken-4">

     <v-layout row  justify-center>
     <v-btn
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            small
            stayle ="opacity:0.7 !important;"    
            color="error"
            @click="toTop"
          ><v-icon>mdi-arrow-up-bold</v-icon>
         </v-btn>
          
          
            <v-flex xs12 md12 lg12 > 
         <v-layout row wrap justify-center class="mx-3">           
        <v-flex xs12 md4 lg3 
        v-for="item in allItem" 
                
              :key="item.id"> 
                
            <v-card
             style=" border: outset; border-width:1px;  border-color:black"
             class="mobilewidth mx-2 my-1 rounded-xl"
            height="275"
            v-if="item.type =='Job'"
            >
            <v-img
                 class="white--text align-end mx-1 "
                 height="190"
                 
                  :src= "item.imageUrl"
                   @click="jobLoadItem(item.id)"
             style="cursor: pointer border: outset; border-width:0px;  border-color:orange"
               outlined color="black"
             >
         
                    <div  class="title ">
                           <v-btn  fab color="black " x-small>
                                <v-icon color="error" >
                                mdi-briefcase-search
                                </v-icon>
                          </v-btn> 
            
            </div>
    <div >
        <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="item.date"
      :interval="1000"
      label-position="begin"
      :end-text="'Ended'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'"
      class="mb-15">
     
      <v-layout row wrap slot="countdown" slot-scope="scope" class="">
       
        <v-flex xs12 md12 lg12 class="ml-4" >
          <div class="title1">
          <v-flex xs12 md12 lg12> 
            <v-btn class="orange darken-3 rounded-lg">       
              <v-btn fab dark x-small color="black" style="opacity:.95;" class=" mx-1 ">{{scope.props.days}}<i>{{scope.props.dayTxt}}</i></v-btn>          
                  <v-btn fab dark x-small color="black" style="opacity:.95;" class=" mx-1 my-1 "><span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i></v-btn>             
                <v-btn fab dark x-small color="black" style="opacity:.95;" class=" mx-1 "> <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i></v-btn>
                            
                 <v-btn fab dark x-small color="error" style="opacity:.95;" class=" mx-1  "><span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i></v-btn>
             </v-btn>   
          </v-flex>
        </div>
          
        </v-flex>
        
     
         
            
      </v-layout>
    
      <v-layout row wrap slot="end-text" slot-scope="scope">
        <v-flex xs9 md9 lg9>
          </v-flex>   
          <v-flex xs3 md3 lg3>
                <div class="title2">
                   <v-btn x-small  color="red " class="font-weight-bold mx-1 my-15"><span class="font-weight-bold" >{{ scope.props.endText}}</span></v-btn>
                </div>
            </v-flex>   
      </v-layout>
    </vue-countdown-timer>
    
    </div>
    </v-img>
    
    <v-layout  @click="jobLoadItem(item.id)"
             style="cursor: pointer border: outset; border-width:0px;  border-color:orange" row wrap class="amber darken-3  mx-2 mb-3
              ">
     <v-flex xs12 md12 lg12  class="">
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
        <v-flex class="my-1"  xs7 md7 lg7 >
            <v-flex class="ml-6" xs11 md11 lg11>
              <p style="font-size:.9em !important;" class="example ml-2 my-0" >{{item.creatorName}}</p>
             <p style="font-size:.8em !important;" class="exampledate ml-2 my-0">{{item.date | date}}</p>
            </v-flex>
        </v-flex>
        
        <v-flex xs1 md1 lg1 class="my-1"> <share></share></v-flex>
        <v-flex xs3 md2 lg2 >
        
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
       
         <v-btn x-small @click="saveJob(item)" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" >mdi-cards-heart</v-icon>Save</v-btn>
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
         <v-card                 
              style=" border: outset; border-width:1px;  border-color:orange ; "
             class="mobilewidth  grey darken-3   mx-2 my-2 rounded-xl"
            height="275"  
             @click="potLoadItem(item.id)"
             v-if="item.type=='Pot'"
  >  
   <v-flex xs12 md12 lg12 class="mx-2  rounded-xl"  justify="space-around"
   style="background-color: rgba(17, 13, 13, 0.87);
        color: rgb(11, 12, 12);
        padding: 5px;
        
        border-radius: 5px;
        opacity: .85;">
           <v-btn  fab color="green" x-small>
                <v-icon color="white">
                    mdi-headphones
                </v-icon>
            </v-btn>
          <v-btn small class="mx-2 orange rounded-xl">
            
              {{item.topic}}
         
          </v-btn>
      </v-flex>
    <div   >
         <v-layout height="195"
            >
           <v-flex style=" border: outset; border-width:1px;  border-color:orange ; "
             class="mobilewidth grey darken-3 accent-2    mx-1 my-1 rounded-xl">
               <aplayer 
      class=" mx-2 grey darken-4 white--text rounded-xl"
      :controls="false"       
  :music="{
    title: item.title,
    artist: item.artist,
    src: item.audioUrl,
    pic: item.imageUrl
  }"
/> 
           </v-flex>
         </v-layout>
   <v-layout  row wrap class="amber darken-4 mx-2 rounded-xl">
      <v-flex xs12 md12 lg12 class=" rounded-xl" >
           <div class="topbar2 my-5">   
           <h4 class=" tolbar2 ml-7 black--text"> {{item.title}}</h4>     
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12 class="mt-0">
           <v-layout class="lighten-1" row wrap>
        <v-flex  xs1 md1 lg1>
             <v-avatar class="ml-6 my-3 mt-1" color="teal" size="37">
              <v-img :src="item.creatorImage"></v-img>
    </v-avatar>
        </v-flex>
        <v-flex class="my-1" xs7 md7 lg7 >
            <v-flex class="ml-6" xs11 md11 lg11>
              <p style="font-size:.9em !important" class="example ml-2 my-0" >{{item.creatorName}}</p>
             <p style="font-size:.8em !important" class="exampledate ml-2 my-0">{{item.date | date}}</p>
            </v-flex>
        </v-flex>
       
           <v-flex xs1 md1 lg1 class="my-1"> <share></share></v-flex>
      
        <v-flex xs2 md2 lg2 >
          
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
       
         <v-btn x-small @click="savePot(item)" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" >mdi-cards-heart</v-icon>Save</v-btn>
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
    </div>
  </v-card>
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
        <v-flex class="my-1"  xs7 md7 lg7 >
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
      </v-flex>
     </v-layout>
 </div>
</template>
<script>
export default{
     name: 'Timer',

    data(){
       return {
          fab: true,
          pin:false,
          show: false,
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
       

        
        }
    },
    props:['id'],
    


    methods:  { 
      //data save 
    
        toTop (e) {
       if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
      this.$vuetify.goTo(0)
    },
      blogLoadItem (id) {
        this.$router.push('/blog/' +id) },

        jobLoadItem (id) {
        this.$router.push('/event/' +id) },

        potLoadItem (id) {
        this.$router.push('/pot/' +id) },

        startCallBack: function (x) {
        console.log(x)
      },
      endCallBack: function (x) {
        console.log(x)
      },
    },
    computed:{
        allItem(){
            console.log("ok")
            console.log(this.$store.getters.loadSave)
              return this.$store.getters.loadSave
        },

          userAuth ( ) {
            if( this.$store.getters.user !== null &&  this.$store.getters.user !== undefined)
                  { return this.$store.getters.user  
                  
                  }
                  else{ return null}
       },
    }
}
</script>
<style >


 
</style>