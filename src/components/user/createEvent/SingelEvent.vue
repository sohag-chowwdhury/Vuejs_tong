<template>
<div >
<v-layout row wrap class="black  my-1">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md3 lg3 class="grey darken-3 mr-1 rounded-xl ">
         <v-flex>
      <v-layout row wrap>
        <v-flex class="text-center my-2"  lg-12 justify="center">
            <v-btn  small color="orange"> Recent job post</v-btn>
        </v-flex>
        <v-flex
        lg11
        
        class="ml-6"
        v-for="item in sliderItem"
           :key="item.id">
          <v-card
             style=" border: outset; border-width:1px;  border-color:black"
             class="mobilewidth mx-2 my-2 rounded-xl"
            height="215"
            v-if="item.type =='Job'"
            >
            <v-img
                 class="white--text align-end mx-1 my-1"
                 height="130"
                 
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
             <p class="exampledate my-0">{{item.date | date}}</p>
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
    </v-flex>
      </v-flex>
       <v-flex xs12 sm8 md8 lg8 class=" grey darken-4 my-0 rounded-xl">
         <v-layout row wrap justify-center>
       
          <v-flex class=" m-0 text-center " xs11 sm11 md11 lg11 >
              <vue-countdown-timer
              class="my-1 "
    
      :start-time="'2019-09-26T10:04:21.000Z'"
      :end-time="eventItem.date"
      :interval="1000"
      label-position="begin"
      :end-text="'Event ended '"
      :day-txt="'Days'"
      :hour-txt="'Hour'"
      :minutes-txt="'minute'"
      :seconds-txt="'Second'">
     
      <template slot="countdown" class="my-1" slot-scope="scope">
           <v-btn  class="rounded-xl my-1 mx-2 orange darken-2"  small> <v-icon>mdi-av-timer</v-icon> Time Remaining </v-btn>
        <v-btn class="rounded-xl mx-2 my-1 orange darken-3 "  small>{{scope.props.days}}<i>{{scope.props.dayTxt}}</i></v-btn>
        <v-btn  class="rounded-xl mx-2 my-1 orange darken-2"  small><span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i></v-btn>
         <v-btn class="rounded-xl mx-2 my-1 orange darken-3"  small > <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i></v-btn>
          <v-btn class="rounded-xl mx-2 my-1  orange darken-2"   small ><span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i></v-btn>    
      </template>
    
      <template slot="end-text" slot-scope="scope">
           <v-btn class="red mx-1 my-1"><span >{{ scope.props.endText}}</span></v-btn>
        
      </template>
    </vue-countdown-timer>
          </v-flex>
      </v-layout>
         <v-layout row   justify="center" class="mx-1">
            <v-flex xs12 sm12 md12 lg11   justify="center"  class=" text-center">
                 <v-parallax height="380" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></v-parallax>
            </v-flex>
        </v-layout>
             
        
         <v-layout row wrap  justify-center>
            <v-flex text-center xs10 sm12 md12 lg12>
                <h1 class="display-1  white--text mt-2">You should do for you. Not you will die </h1>
            </v-flex>
        </v-layout>
  
         <v-layout row wrap  justify-center>
            <v-flex xs10 sm12 md12 lg12 class="mx-6">
              <br>
             <p style="font-size:1.1em !important;" class=" justify-center white--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima nobis assumenda quibusdam aut maxime, rerum cupiditate veniam facere modi soluta aliquid ea odio, error iusto hic ducimus at laborum. Ipsum dolores dolor nihil eum esse ipsam unde optio, sit hic ullam facere atque beatae recusandae, dicta, id animi asperiores reprehenderit dignissimos quos inventore assumenda nemo autem voluptas! Eveniet, pariatur maxime! Excepturi odio in illo cum. Totam, voluptatem modi qui iure nulla beatae odit nesciunt non atque sed vero necessitatibus possimus corporis at exercitationem consequatur voluptatibus aliquid unde dolore rem quae vitae ipsa cum incidunt. Provident architecto natus totam modi?</p>
            </v-flex>
        </v-layout>
        <br>
         <v-flex xs10 class="ml-10" sm12 md12 lg12>
                  <v-btn  fab dark small class="mx-1"><v-icon color="orange">mdi-share-variant-outline</v-icon></v-btn>
              <v-btn  fab dark small class="mx-1" ><v-icon color="error">mdi-cards-heart</v-icon></v-btn>
                <v-btn  fab dark small class="mx-1" > <v-icon>mdi-link</v-icon></v-btn>
                  <v-btn   dark small class="mx-1"><v-icon class="my-2" color="orange">mdi-eye</v-icon> 1222</v-btn>
            </v-flex>
        <br>
         <v-form @submit.prevent="onCreateComments">
         <v-layout row wrap class="my-0">
           
            <v-flex xs12 sm6 md6 lg3 class="my-3">
                <h4  class="font-weight-regular ml-10 white--text">Create a discussion room:</h4>               
            </v-flex>
             <v-flex xs9 sm6 class="" lg6 md5 >
              <v-text-field
              background-color="white lighten-2 "
                class="rounded-lg white--text"
                 v-model="roomName"
            label="Your discussion title about this post"
            value="Not more than three word"
            hint="For example, flowers or used cars"
          ></v-text-field> 
                      
            </v-flex>
        </v-layout>
          <v-layout row wrap  justify-center class="my-2">
            <v-flex xs8 sm9 md9 lg9  class="my-2 mr-1 " >
             <v-textarea
                label="Write details"
                auto-grow
                outlined
                 v-model="description"
                class="rounded-lg"
               background-color="grey lighten-2"
                rows="1"
                row-height="15"
                ></v-textarea>    
            </v-flex>
              <v-flex xs2 sm2 md2 lg2 >
                        <v-btn class="my-2 mt-2 py-7 " type="submit"
                :disabled="!formValidation"  color="white">Crate</v-btn>
                 </v-flex>
        
           </v-layout>  
           </v-form>  
              <v-flex xs12 md8 lg12 class="light-blue rounded-xl darken-3">
          
    <v-flex   class="mx-4"  >
    
        <v-layout row wrap justify-center>
            <v-flex xs12 md12 lg12 class="mx-auto">
                <v-flex xs12 md12 lg12 class="text--center">
        <v-btn small class="black white--text accent-4 mt-3">discussion room's</v-btn>
      </v-flex>
      <v-flex xs12 md12 lg12
       v-for="item in loadComments" 
                  :key="item.index">
         <v-card class="white rounded-br-xl my-1">
          
          <v-flex >
              <v-layout row wrap  >
                <v-flex xs2 md-2 lg2 xl2  class="my-1"
                >
                    <v-avatar size="37"  color="black" class="ml-5 mt-1">
                        <v-img :src="item.creatorImageUrl"></v-img>
                    </v-avatar>
                    <v-btn x-small class="ml-2" color="green">{{item.status}}</v-btn>
                </v-flex>
                <v-flex xs9 md9 lg9 > 
                  <p class="ml-0 green--text  rounded-xl mt-3"> {{item.creatorName}}</p>
                   <h1></h1>
                </v-flex>
                 <v-flex xs11 md5 lg5 > 
                  <p class="ml-7 deep-orange accent-2 black--text mx-3 px-4 rounded-lg mt-2"> {{item.chatRoomName}}</p>
                </v-flex>
              </v-layout>
              <v-flex xs12 md12 lg12>
                  <p class=" lighten-5 px-2 rounded-lg mb-2 mx-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate sint praesentium velit iste, officiis ratione molestiae nam minus quibusdam?
            </p>
              </v-flex>
                         
          </v-flex>
        </v-card>
        <v-flex  v-for="replay in loadReplay" 
                  :key="replay.index">
          <v-layout class="mt-2" row wrap justify-end>
            <v-flex xs11 md11 lg11 >
               <v-card class="mr-5 my-1 rounded-br-xl">
                 <v-flex xs12 md12 lg12 >
                   <v-layout row justify-center>
                     <v-flex xs2 md2 lg2 >
                        <v-avatar class="ml-5" size="37" color="black">
                            <v-img :src="replay.creatorImageUrl"></v-img>
                        </v-avatar>
                     </v-flex>
                     <v-flex>
                        <p class="green--text">{{replay.creatorName}}</p>
                     </v-flex>
                   </v-layout>
                   <v-flex >
                     <p class="mx-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi, mollitia exercitationem vero aliquam doloresa recusandae? </p>
                   </v-flex>
                    <v-layout row wrap>
                    <v-flex xs8 8 lg8></v-flex>
                    <v-flex xs3 md3 lg3>
                      <v-btn small class="my-2 ml-4 rounded-xl" @click="filter = !filter" color="green darken-2 ">
                            reply <v-icon color="white">mdi-reply-circle</v-icon>
                      </v-btn>
                     
                    </v-flex>
                      <v-flex xs11 md11 lg11  >
                <div >
                 
           </div>
             </v-flex>
                  </v-layout>                   
                 </v-flex>
               </v-card>
            </v-flex>
           
           
           
          </v-layout>
          <v-layout row wrap justify-end>
            <v-flex xs11 md11 lg11>
                <v-form  @submit.prevent="onCreateReply(item.unique)">
                 <v-layout row wrap   justify-end class="">
            <v-flex x10  sm9 md10 lg9  class="mt-5" >
             <v-textarea
                label="reply here"
                auto-grow
                outlined
                 v-model=" replay[index].description"
                class="rounded-lg"
               background-color="grey lighten-2"
                rows="1"
                row-height="25"
                ></v-textarea>    
            </v-flex>
              <v-flex xs2 sm2 md2 lg2 >
                        <v-btn class=" rounded-r-lg  py-6  " :disabled="!formValidationReply" type="submit"
                  color="white">post</v-btn>
                 </v-flex>
        
           </v-layout>
           </v-form>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>
       
            </v-flex>
        </v-layout>
        
    </v-flex>
      </v-flex>
    </v-flex>
    
   
      
    </v-layout> 

   
 
    </v-container>
</v-layout>
</div>
</template>
<script>
 export default {
        name: 'Timer',
       data(){
         return {
          filter:true,
          roomName:'',
          description:'',
         items: [
        { title: 'Shar', icon:'mdi-share-variant-outline'},
        { title: 'Report', icon:'mdi-block-helper'},
        { title: 'Edit', icon:'mdi-square-edit-outline'},
        { title: 'Delete', icon:'mdi-delete' },
      ],
         }
       },
      
     props: ['id'],
    methods:{
        onCreateComments () {
             if( !this.formValidation){
                 return
             }           
             const comment = {
                 chatRoomName: this.roomName,
                 description: this.description,
                creatorImageUrl: this.$store.getters.user.photoUrl,
                creatorName: this.$store.getters.user.name,
                commentsId: this.id


             }
             this.$store.dispatch('createComment', comment)
         },
           onCreateReply (event) {           
             const reply = {
                 description: this.description,
                commentsId: this.id,
                creatorImageUrl: this.$store.getters.user.photoUrl,
                creatorName: this.$store.getters.user.name,
                commentsRId: this.id,
                unique: event
             }
             this.$store.dispatch('createReply', reply)
         }, 
          startCallBack: function (x) {
        console.log(x)
      },
      endCallBack: function (x) {
        console.log(x)
      },
   
    },
   
     computed: {
          formValidation(){
        return this.description !== '' && this.roomName !== '' 
      },
      formValidationReply(){
        return this.description !== ''  
      },
       loadReplay () {
             console.log("I am obkkkeyd")
              console.log(this.$store.getters.loadReplays.filter((meetup)=> { return meetup.commentsId == this.id}))
        return this.$store.getters.loadReplays.filter((meetup)=> { return meetup.commentsId == this.id})
        
           

        },
      loadComments () {
        console.log("I am obey")
        console.log( this.$store.getters.loadComments.filter((meetup)=> { return meetup.commentsId == this.id}))
            return this.$store.getters.loadComments.filter((meetup)=> { return meetup.commentsId == this.id})
        },
        
        loading () {
             return this.$store.getters.loading
         },
        eventItem () {
           return this.$store.getters.lodeMeetUp(this.id)
           },
           sliderItem () {
         
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { return meetup.type == "Job"})
        },      
       userAuth () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        //userIsCreator ()  {
                //if(!this.userAuth) {
                    //return false
                //}
                //return this.$store.getters.user.id == this.sliderItem.creatorId
        }
    }

</script>
<style scoped>
  div.divfilter{
    display: none;
  }
</style>