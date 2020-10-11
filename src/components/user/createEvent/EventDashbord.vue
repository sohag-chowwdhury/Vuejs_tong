<template>
  <div class="black">
        <div class="mx-2">
          <v-layout row wrap>
             <v-flex xs12 md12 lg12>
                  <v-layout row wrap justify-center
                  style="border-bottom: ridge; border-width: 3px; border-color:error;">
                    <v-flex xs0 md0 lg2></v-flex>
                  <v-flex xs12 md6 lg5  justify-center >
                      <v-flex xs12 md12 lg12  class=" mx-5 my-1" ><v-btn small  class="mx-3" fab color="white"  ><v-icon color="green">mdi-headphones</v-icon></v-btn>
      
               <v-btn   class="mx-5" small color="white" fab dark @click="filter = !filter"   > <v-icon color="black">mdi-filter-outline</v-icon></v-btn>
     
      <v-btn class=" white ma-2 mx-5 black--text" small v-if="userAuth"  color="black" to="/event/new"><v-icon color="green" class="mx-2 my2">mdi-typewriter</v-icon> Event/job post Create</v-btn>   </v-flex>
                  </v-flex>
                  <v-flex xs12 md4 lg4  class="mx-2 mr-15 mt-1">
                   <div  v-bind:class="{ divfilter: filter}">
                       <v-text-field
                     class="mx-2 rounded-xl"
                     v-model="search"
                    label="Search with title"
                    background-color="grey lighten-2"
                    single-line
                    outlined
                  ></v-text-field>
                   </div>
                  </v-flex>
                </v-layout>
             </v-flex>
     
          </v-layout>
        <v-layout row wrap  >
          <v-flex   xs12 sm6 md4 lg3  justify-center
            v-for="item in sliderItem"
           :key="item.id"
            >  
         
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
             <p   style="font-size:.8em !important"  class="exampledate ml-2  my-0">{{item.date | date}}</p>
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
          </v-flex>
      
        </v-layout>
        
  </div>
   </div>
</template>
<script>
   export default {
    name: 'Timer',
    data(){
       return {
          fab: true,
          pin:false,
           filter:true,
          show: false,
          search:'',
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
         
      

        
        }
    },
    computed: {
        sliderItem () {
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { return  meetup.title.toLowerCase().match(this.search.toLowerCase()) &&   meetup.type == "Job"})
        },
         userAuth ( ) {
            if( this.$store.getters.user !== null &&  this.$store.getters.user !== undefined)
                  { return this.$store.getters.user  }
                  else{ return null}
       },   
    },
    methods:    {

       saveJob(e){                             
                 console.log(e)      
                 const saveFav = e 
                 console.log("ok")
                 console.log(saveFav)
                   this.$store.dispatch('saveJob', saveFav)
      },
       startCallBack: function (x) {
        console.log(x)
      },
      endCallBack: function (x) {
        console.log(x)
      },
       jobLoadItem (id) {
        this.$router.push('/event/' +id) },
    loading () {
             return this.$store.getters.loading
         }
    }
   }

</script>
<style scoped>
   
 .title {
        position: absolute;
        bottom:150px;
         right:0%;
         left:0%;
        background-color: rgba(255, 123, 0, 0.87);
        color: rgb(216, 223, 230);
        padding: 5px;
        border-radius: 5px;
        opacity: .95;
    }
     .loading {
        position: absolute;
        bottom:210px;
         right:45%;
         left:40%;
       
    }
    .title1 {
        position: absolute;
        bottom:00px;
         right:0%;
         left:84%;
        background-color: rgba(235, 113, 0, 0.938);
        color: aliceblue;
        padding: 8px;
        border-radius: 5px;
         opacity: .95;
    }
     .title2 {
        position: absolute;
        bottom:00px;
        top:00px;
         right:0%;
         left:82%;
        background-color: rgba(235, 113, 0, 0.938);
        color: aliceblue;
        padding: 0px;
        border-radius: 5px;
         opacity: .85;
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
   div.divfilter{
    display: none;
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
   div.divfilter{
    display: none;
  }
  
}
</style>