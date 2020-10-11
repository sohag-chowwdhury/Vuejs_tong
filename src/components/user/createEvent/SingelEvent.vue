<template>
<div  class="mx-3">
  <v-container>
<v-layout row wrap class=" my-0">
    <v-layout row wrap>
     
       <v-flex xs12 sm7 md7 lg7 class=" my-0  rounded-xl">
         <v-layout row wrap justify-center>
      
      </v-layout>
         <v-layout row  v-if="eventItem.imageUrl"  justify-center class="">
            <v-flex xs11 sm11 md11 lg11   justify="center"  class=" text-center">
                 <v-parallax height="340" :src="eventItem.imageUrl"></v-parallax>
            </v-flex>
        </v-layout>
             
        
         <v-layout row wrap  justify-center>
            <v-flex text-center xs11 sm11 md11 lg11 >
                <h1 class="display-1  black--text mt-2">{{eventItem.title}} </h1>
            </v-flex>
             <v-flex text-start xs11 sm11 md11 lg11 >
                <p style=" line-height: 1.6;  text-align: start;" class="  black--text font-weight-light mr-2  mt-2">{{eventItem.description}} </p>
            </v-flex>
        </v-layout>
  
      
      <v-layout row wrap justify-start>
        <v-flex xs1 md1 lg1 sm1 class="mt-5 ml-7">
          <v-avatar size="30">
            <v-img :src="eventItem.creatorImage"></v-img>
          </v-avatar>
        </v-flex>
          <v-flex xs10 md10 lg10 sm4 class="mt-5">
            <h4>{{eventItem.creatorName}}</h4>
        </v-flex>
        <v-flex xs10 md10 lg10 sm10 class="ml-15" >
          <p>{{eventItem.date | date }}</p>
        </v-flex>
        
        </v-layout>  
        <v-layout row wrap justify-start>
       
          <v-flex xs1 md1 lg1 class="my-1 ml-8"> <share></share></v-flex>
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
       
         <v-btn x-small @click="saveJob(eventItem)" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" >mdi-cards-heart</v-icon>Save</v-btn>
         <br>
          <v-btn x-small to="/report" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" small>mdi-block-helper</v-icon>Report</v-btn>
         <edit-meetup class="my-1" :meetup="eventItem"></edit-meetup>
          <delete-meetup :meetup="eventItem"></delete-meetup>
      </v-list>
    </v-menu>
        </v-flex> 
        </v-layout>
          </v-flex>
        <br>

    <v-flex xs12 md5 lg5 xl5>
           <v-form @submit.prevent="onCreateComments">
         <v-layout row wrap   class="">
             <v-flex xs12 md12 lg12 class="ml-4 text--center">
                <v-btn small class="black white--text accent-4">discussion room's</v-btn>
               </v-flex>
            <v-flex xs12 sm12 md5 lg3 class="ml-5 mt-5">
              <v-btn outlined small><h4  class="font-weight-regular  black--text">Create a room:</h4> </v-btn>              
            </v-flex>
             <v-flex xs9 sm6 class="ml-4 white--text" lg6 md5 >
              <v-text-field
              :maxlength="max"
              background-color=" accent-4  "
                class="rounded-lg "
                 v-model="roomName"
            label="Your discussion title , maximum 35 character"
           
          ></v-text-field> 
                      
            </v-flex>
        </v-layout>
          <v-layout row wrap  justify-center class="my-2">
            <v-flex xs8 sm9 md9 lg9  class="my-2 mr-1 " >
             <v-textarea
                label="Write details....."
                auto-grow
                outlined
                 v-model="descriptionChat"
                class="rounded-lg"
               background-color="grey lighten-2"
                rows="1"
                row-height="10"
                ></v-textarea>    
            </v-flex>
              <v-flex xs2 sm2 md2 lg2 >
                        <v-btn class="my-2 mt-2 py-7 " type="submit"
                :disabled="!formValidation"  color="white">Crate</v-btn>
                 </v-flex>
        
           </v-layout>  
           </v-form>  
              <v-flex xs12 md12 lg12 class="grey rounded-xl lighten-3">
          
    <v-flex   class="mx-4"  >
    
        <v-layout row wrap justify-center>
            <v-flex xs12 md12 lg12 class="mx-auto">
              
           <v-flex xs12 md12 lg12
               v-for="(item,index) in loadComments" 
                  :key="index">
              <v-card class=" rounded-br-xl mx-2 my-1" style="border-style: solid;"> 
               <v-flex >
              <v-layout row wrap justify-start  >
                <v-flex xs1 md1 lg1 xl1 
                >
                    <v-avatar size="27"  color="black" class="ml-5 mt-4">
                        <v-img :src="item.creatorImageUrl"></v-img>
                    </v-avatar>
                   
                </v-flex>
                <v-flex xs11 md11 lg11 > 
                <v-layout row wrap >
                  <v-flex xs5 md4 lg4>
                   <v-card-text class="ml-4 mb-1 green--text  rounded-xl "> {{item.creatorName}}                  
                  </v-card-text>
                </v-flex>


                <v-flex xs2 md1 lg1 v-if="item.status == 'open'">
                 <v-btn x-small outlined class="ml-1 mt-5" color="green">{{item.status}}</v-btn> 
                </v-flex>
                 <v-flex xs2 md1 lg1 v-if="item.status != 'open'">
                 <v-btn x-small outlined class="error--text ml-1 mt-5"  color="error">{{item.status}}</v-btn> 
                </v-flex>
                <v-flex xs2 sm2 lg2 md2 class="ml-2">
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
                    
                    class="mt-5 black--text mx-3"
                    
                  >
                    <v-icon small color="black"> mdi-drag-horizontal-variant</v-icon>
                  </v-btn>
                </template>

                <v-list class="grey darken-4 black--text">
                     <edit-comment class=" my-1 mx-2" :comment="item"></edit-comment>
                      <delete-comment :comment="item" class="mx-2"></delete-comment>
                      <close-comment v-if="item.status =='open'" :comment="item" class="mx-2"></close-comment>
                        <open-comment v-if="item.status =='close'"  :comment="item" class="mx-2"></open-comment>
                </v-list>
              </v-menu>
             </v-flex>
               
                </v-layout>                   
               </v-flex>
                 <v-flex xs12 md12 lg12 > 
                   <v-layout row wrap justify-center>
                     <v-flex xs7 md7 lg7 class="blue-grey lighten-4 text-center  rounded-lg">
                       {{item.chatRoomName}}
                     
                     </v-flex>
                     <v-flex xs2 md3 lg3>
                        <v-btn x-small v-if="item.status =='open'" class=" ml-1 rounded-lg" @click="toggogle(item.unique)" color="green darken-1 ">
                            reply <v-icon color="white">mdi-reply-circle</v-icon>
                        </v-btn> 
                         <v-btn x-small v-if="item.status =='close'" class=" ml-1 rounded-lg" @click="toggogle(item.unique)" color="orange darken-2 ">
                            details 
                        </v-btn> 
                         <v-btn x-small class=" ml-1  rounded-xl" v-if= "item.unique == uniqueId"  @click="toggogleoff(item.unique)" color="error accent-4  ">
                             <v-icon color="white">mdi-close-circle-outline</v-icon>
                        </v-btn> 
                     </v-flex>
                     </v-layout>                       
                </v-flex>
              </v-layout>
              <v-flex xs12 md12 lg12>
                  <p class=" lighten-5 px-2 rounded-lg mb-2 my-2 py-2 mx-2">
                    {{item.description}}
            </p>
              </v-flex>
             
          </v-flex>
        </v-card>
        <v-flex>
          <div   v-bind:class="{ hide: item.unique !== uniqueId}">
          <v-layout class="mt-2" row wrap justify-end>
            <v-flex xs11 md11 lg11  v-for="replay in loadReplay" 
                  :key="replay.index">
               <v-card v-if="item.unique == replay.unique" class="mr-5 my-1 rounded-br-xl">
                 <v-flex xs12 md12 lg12 >
                   <v-layout row class="mt-2">
                     <v-flex xs1 md1 lg1 class="mt-1" >
                        <v-avatar class="ml-5" size="32" color="black">
                            <v-img :src="replay.creatorImageUrl"></v-img>
                        </v-avatar>
                     </v-flex>
                     <v-flex xs6 lg4 md4 class="ml-6 mt-1">
                        <p class="green--text">{{replay.creatorName}}</p>
                     </v-flex>
                     <v-flex xs4 lg4 md4 class="mt-1">
                     <v-layout row wrap>                     
                      <v-flex>
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
                    
                    class=" black--text ml-1"
                    
                  >
                    <v-icon small color="black"> mdi-drag-horizontal-variant</v-icon>
                  </v-btn>
                </template>

                <v-list class="grey darken-4 black--text">
                     <edit-replay class=" my-1 mx-2" :replay="replay"></edit-replay>
                        <delete-replay :replay="replay"></delete-replay>
                </v-list>
              </v-menu>
             </v-flex>


                     
                     </v-layout>
                        
                     
                     </v-flex>
                   </v-layout>
                   <v-flex >
                     <p class="mx-3">{{replay.description}} </p>
                   </v-flex>
                    <v-layout row wrap>
                    <v-flex xs8 8 lg8></v-flex>
                    <v-flex xs3 md3 lg3>                  
                      </v-flex>
                      <v-flex xs11 md11 lg11  >
                
                   </v-flex>
                  </v-layout>                   
                 </v-flex>
               </v-card>
            </v-flex>         
          </v-layout>
          </div>
           <div  v-bind:class="{ hide: item.unique !== uniqueId}">
             <v-form v-if="item.status == 'open'"  @submit.prevent="onCreateReply(item.unique, index)">
                 <v-layout row wrap   justify-end class="">
                  
            <v-flex xs9  sm9 md9 lg9 class=" mt-2" >             
            <v-text-field
            label="Write Your replay"
            background-color="white"
             v-model="description[index]" type="text"
            outlined
          ></v-text-field>
         
            </v-flex>
          
              <v-flex xs2 sm2 md2 lg2 class="mt-2" >
              
                        <v-btn class=" rounded-r-lg  py-7  "  type="submit"
                  color="white">post</v-btn>
                 </v-flex>
        
           </v-layout>
           </v-form>
          </div>
        </v-flex>
      </v-flex>
       
            </v-flex>
        </v-layout>
        
    </v-flex>
      </v-flex>
      <v-flex xs12 md12 lg12 sm12> <v-btn small color="orange">recente event</v-btn></v-flex>
      <v-flex xs12 sm12 md12 lg12 v-for="item in sliderItem" :key="item.id">
           
            <v-card class="my-1 rounded-lg">
                <v-layout row wrap justify-center>
              <v-flex  xs4 sm4 md4 lg4>
              <v-img  height="110" width="800" :src="item.imageUrl">

              </v-img>
            </v-flex>
            <v-flex xs8 md8 lg8>
              <v-layout row wrap justify-center>
                <v-flex style=" height: 50px !important; overflow: hidden !important;" xs12 md12 lg12 sm12 class="ml-5">
                    <h4> {{item.title}}</h4>
                </v-flex>
                <v-flex xs12 md12 lg12 sm12>
                  <v-layout justify-start>
                    <v-flex xs1 md1 lg1 class="mt-2 ml-4">
                      <v-avatar size="27">
                        <v-img :src="item.creatorImage"></v-img>
                      </v-avatar>
                    </v-flex>
                     <v-flex xs5 md5 lg5 sm5 class="mt-2 ml-2">
                      <p class="blue--text font-weight-bold">{{item.creatorName}}</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
               </v-layout>
            </v-card>
       
      </v-flex>
    </v-flex>
         
    </v-layout> 
</v-layout>
</v-container>
</div>
</template>
<script>
 export default {
       data(){
         return {
           max:35,
          uniqueId:'',
          filter:true,
          descriptionChat:'',
          roomName:'',
         description:[],
         items: [
        { title: 'Shar', icon:'mdi-share-variant-outline'},
        { title: 'Report', icon:'mdi-block-helper'},
       
      ],
         }
       },
      
     props: ['id'],
    methods:{
        toggogle( item ){
            this.uniqueId = item
          },
           toggogleoff(  ){
            this.uniqueId = ''
          },
        onCreateComments () {
          
             if( !this.formValidation){
                 return
             }           
             const comment = {
                 chatRoomName: this.roomName,
                 description: this.descriptionChat,
                creatorImageUrl: this.$store.getters.user.photoUrl,
                creatorName: this.$store.getters.user.name,
                commentsId: this.id

             }
             this.$store.dispatch('createComment', comment)
           
         },
           onCreateReply (event,index) {           
             const reply = {
                 description: this.description[index],
                commentsId: this.id,
                creatorImageUrl: this.$store.getters.user.photoUrl,
                creatorName: this.$store.getters.user.name,
                unique: event
             }
             this.$store.dispatch('createReply', reply)
            this.description.length = 0
         },   
    },
   
     computed: {
          formValidation(){
        return this.descriptionChat !== '' && this.roomName !== '' 
      },
        formValidationReplay(){
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
  div.hide{
    display: none;
  }
</style>