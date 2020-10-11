<template>
<div class="black">
  <v-container class="mt-0">                  
      <v-layout row wrap >
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

      <v-flex xs12 md4 lg4  text-center  class=" rounded-xl  my-2">
          <div  v-bind:class="{ mobile: pin}" >
                             <v-card   
             style=" border: outset; border-width:5px;  border-color:orange"
    class="orange  grey darken-4  mx-1 my-2 rounded-xl"
  
  >  
   <v-layout  >
     <v-flex class="grey darken-3 rounded-xl"> 
       <div class="hidefor">
        <v-btn   @click="pin = !pin" class="error  acctive mx-2" fab dark x-small>
          <v-layout row wrap>
            <v-flex xs12 md12 lg><v-icon dark>{{ pin ? 'mdi-pin-off-outline' : 'mdi-pin-outline' }}</v-icon>  
            </v-flex>
              <v-flex xs12 md12 lg12 v-bind:class="{ mobilestick: pin}">
                 <span class="button_text">pin top</span>  
              </v-flex>
          </v-layout>
       </v-btn>
       </div>
        
      <div  v-bind:class="{ mobilestick: pin}"> <v-btn class="my-1" fab dark x-small><v-icon color="error">mdi-cards-heart</v-icon></v-btn></div>
    </v-flex>
   </v-layout>
  <div >
      <aplayer 
       style=" border: outset; border-width:4px;  border-color:orange"
       class="rounded-xl"
      :controls="true"
        :float="true"
        autoplay

  :music="{
    title:   potItemMethods.title || potItem.title,
    artist:  potItemMethods.artist || potItem.artist ,
    src:  potItemMethods.audioUrl || potItem.audioUrl,
    pic: potItemMethods.imageUrl || potItem.imageUrl
  }"
/>
  </div>
      <div  v-bind:class="{ mobilestick: pin}">
         <v-btn class="mx-1 green" x-small outlined>Song</v-btn>
           <v-btn x-small outlined color="error"> {{ potItemMethods.title ||potItem.title }}
        </v-btn>
      </div>
    

    <v-card-subtitle 
    class="orange"
               v-show="$vuetify.breakpoint.lg"   
 >
    {{potItemMethods.artist || potItem.artist}}
    <br>
    <v-btn v-show="$vuetify.breakpoint.lg" x-small outlined class="info">Public</v-btn>
    
    </v-card-subtitle>
    
    <div class="orange mt-1" v-bind:class="{ mobilestick: pin}">
       <v-card-subtitle cl v-if="potItemMethods.artist || potItem.artist" class="black--text ">
        Arist: {{potItemMethods.artist || potItem.artist}}
     </v-card-subtitle>
       <div  v-bind:class="{ mobilestick: pin}"  class="ml-15">
         <v-layout class="lighten-1" row wrap>
        <v-flex class="ml-5 mt-2" xs2 md2 lg2>
            
        </v-flex>
        <v-flex class="my-1" xs10 md10 lg10 xl10>
           <div>
              <v-avatar color="teal" size="42">
                    <v-img :src="potItemMethods.creatorImage || potItem.creatorImage"></v-img>
    </v-avatar>
              <p style="font-size:.9em !important" class="white--text my-0" >{{potItemMethods.creatorName || potItem.creatorName }}</p>
             <p style="font-size:.8em !important" class="white--text my-0">{{potItemMethods.date ||potItem.date |date}}</p>
           </div>
        </v-flex>
       
      </v-layout> 
      </div>
    </div>
     <div class="orange"  v-bind:class="{ mobilestick: pin}">
        <v-layout row wrap   >
        <v-flex  xs10 md10 lg10 class="ml-5 my-1 rounded-xl black">
        <v-layout row wrap justify-center>
         <v-flex class="mx-2 my-2" xs4 md lg4 >
            <share></share>
          </v-flex>
           <v-flex xs4 md4 lg4 class="my-1">
        
           <v-menu
            class=""
          
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
       
         <v-btn x-small @click="savePot(potItemMethods || potItem)" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" >mdi-cards-heart</v-icon>Save</v-btn>
         <br>
          <v-btn x-small to="/report" text class=" my-2 ml-1 white--text"><v-icon class="mr-3 my-1" small>mdi-block-helper</v-icon>Report</v-btn>
         <edit-meetup class="my-1" :meetup="potItemMethods || potItem"></edit-meetup>
          <delete-meetup :meetup="potItemMethods || potItem"></delete-meetup>
      </v-list>
    </v-menu>
        </v-flex>
        </v-layout>
          
       
        </v-flex>
    
    </v-layout>
     </div>
  </v-card>
          </div >
         
      </v-flex>
       <div class="mobilefake"></div>
      <v-flex class="dark" xs12 md8 lg8>
        <div v-bind:class="{ mobilestick: pin}">
         <v-layout class="mx-2"  row wrap >            
               <v-flex class="orange mb-1 accent-4 white--text rounded-l-xl" xs6 md6 lg6>
                 <v-btn
        color="white"
        text
        small
        
      >
        discussion room
      </v-btn>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon color="white">{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-flex>
      <v-flex xs6 md6 lg6 class="orange accent-3 mb-1 rounded-r-xl">
         <v-btn
        color="purple"
        text
        small
        class="white--text"
      >
        Expolore
      </v-btn>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon color="white">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-flex>
          
      </v-layout>
     
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 mg12 lg12 class="ml-5 my-2">
              <br>
              <v-btn outlined orange color="error" x-small>tag</v-btn>
              <v-btn color="green" class="mx-1" x-small>{{ potItemMethods.topic||potItem.topic}}</v-btn>
              <v-btn color="primary" class="mx-1" x-small>{{ potItemMethods.sub_title||potItem.sub_title}}</v-btn>
              <v-btn color="orange" x-small class="mx-1" v-if=" potItemMethods.sub_sub_topics_value|| potItem.sub_sub_topics_value">{{ potItemMethods.sub_sub_topics_value||potItem.sub_sub_topics_value}}</v-btn>
            </v-flex>
            <v-flex xs12 md6 lg6>
                <v-card-title> <v-btn outlated x-small class="mx-1" color="orange">Title:</v-btn>{{ potItemMethods.title||potItem.title}}</v-card-title>
            </v-flex>
            <v-flex xs12 md6 lg6>
                 <v-btn outlated x-small class="mx-4" color="green">Creator:</v-btn>{{ potItemMethods.artist||potItem.artist}}
            </v-flex>
             <v-flex xs12 md6 lg6 >
                <v-card-subtitle> <v-btn outlated x-small class="mx-1" color="error"><v-icon color="white">mdi-clock-time-five</v-icon></v-btn>
                {{ potItemMethods.date||potItem.date | date}}</v-card-subtitle>
            </v-flex>
          </v-layout>
          <v-layout wro wrap>
            <v-flex xs12 md12 lg12 class="mx-3"><p>Description:</p></v-flex>
            <v-flex xs12 md12 lg12>
                <v-card-text v-html="potItemMethods.description||potItem.description">
                {{ potItemMethods.description||potItem.description}}
                </v-card-text>
            </v-flex>
          </v-layout>
        
      </div>
    
    </v-expand-transition>
        <div v-show="show1">
         <v-divider></v-divider>
        <v-layout row wrap justify-center>
           <v-flex xs12 md12 lg12 xl12>
           <v-form @submit.prevent="onCreateComments">
         <v-layout row wrap   class="">
             <v-flex xs12 md12 lg12 class="ml-10 text--center">
                <v-btn small class=" black--text accent-4">discussion room's</v-btn>
               </v-flex>
            <v-flex xs12 sm12 md4 lg2 class="ml-10 mt-5">
              <v-btn outlined small><h4  class="font-weight-regular  white--text">Create a room:</h4> </v-btn>              
            </v-flex>
             <v-flex xs9 sm6 class="ml-1 white--text" lg6 md5 >
              <v-text-field
              :maxlength="max"
              background-color="white accent-4  "
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
              <v-flex xs12 md12 lg12 class="  ">
          
    <v-flex   class="mx-4"  >
    
        <v-layout row wrap justify-center>
            <v-flex xs11 md11 lg11 sm11 class="mx-auto">
              
           <v-flex xs11 md11 lg11
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

    </v-flex>
        </v-layout>
        </div>
      </div>
        <v-card
    class="mx-1"
  >
      
    <v-container
      id="scroll-target"
      style="max-height: 335px"
      class="overflow-y-auto"
    >
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
      >
     <v-flex xs12 md12 lg12  >
           <v-card  class="example orange item_remove"  v-for="item in eventItems" 
           :key="item.id">
              <div class=" accent-4" style="cursor: pointer" 
              @click="loderPot(item.id)">
                   <v-layout height="60px" row wrap style="border: outset; border-color:black" class="orange darken-3 mr-2 rounded-xl my-1 ml-0">
                     <v-flex color="black" class="rounded-xl" xs3 md2 sm2 lg2 style="border-style: ridge; border-width: 3px; border-color:orange;" >
                       <v-img
                        :src="item.imageUrl"
              height="65px"
              class=" rounded-xl grey darken-4"
            ></v-img>
                     </v-flex>
                     <v-flex xs9 md7 lg8 xl8 >
                       <v-layout row wrap class=" text-xs-2">
                         <v-flex xs12 md12 lg12 >
                           <div>
                              <h4 style="height:20px !important;" class=" example my-3 font-weight-medium white--text ml-6 mt-2 mx-1">
                              <v-btn x-small  class="green ml-0  mr-1 mb-1">{{item.topic}}</v-btn>{{item.title}}
                            </h4>
                           </div>
                            </v-flex>
                         <v-flex xs12 md12 lg12 ><p style="opacity:91;" class=" example font-weight-medium  white--text mx-2 my-1  "><v-avatar color="white" class="mx-3" size="25">
                         <v-img :src="item.creatorImage"></v-img>
                         </v-avatar> {{item.creatorName}}</p></v-flex>
                       </v-layout>
                     </v-flex>
                  
                     <v-flex xs3 md2 lg2 v-show="$vuetify.breakpoint.lg" class="text-xl-left">
                       <v-btn small class="orange my-5">
                         play
                         <v-icon color="error accent-4 darken-2" class=" my-2" x-large >mdi-arrow-right-bold</v-icon>
                         </v-btn> 
                     </v-flex>
                   </v-layout>
            </div>
          </v-card>
          
     </v-flex>
      </v-row>
      <br>
      <br>
    </v-container>
  </v-card>
      </v-flex>
    </v-layout>
    <br  style="border-top: ridge; border-width: 4px; border-color:orange;">
    <v-layout row justify-center class="my-3" style="border-top: ridge; border-width: 6px; border-color:error;">
      <v-flex xs12 md12 lg1  class=" mx-4 my-2" ><v-btn  class="ml-5" fab color="black"  ><v-icon color="green">mdi-headphones</v-icon></v-btn> <v-btn color="black white--text" class="my-1 mr-4">Pod List</v-btn> </v-flex>
     
      <v-flex xs12 md12 lg12 > 
         <v-layout row wrap justify-center >
           
        <v-flex xs12 md4 lg3 
        v-for="item in eventItems"
           :key="item.id">                    
        <v-card                 
              style=" border: outset; border-width:1px;  border-color:orange ; "
             class="mobilewidth  grey darken-3   mx-2 my-2 rounded-xl"
            height="247"  
             @click="loderPot(item.id)"
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
           <div class=" my-5">   
           <h4 class=" tolbar2 ml-7 black--text"> {{item.title}}</h4>     
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12 class="mt-0">
           <v-layout class="lighten-1" row wrap>
        <v-flex  xs1 md1 lg1>
             <v-avatar class="ml-6 my-3 mt-1" color="teal" size="32">
              <v-img :src="item.creatorImage"></v-img>
    </v-avatar>
        </v-flex>
        <v-flex class="my-1" xs7 md7 lg7 >
            <v-flex class="ml-6" xs11 md11 lg11>
              <p style="font-size:.9em !important" class="example ml-2 my-0" >{{item.creatorName}}</p>
             <p style="font-size:.8em !important" class="exampledate ml-2 my-0">{{item.date | date}}</p>
            </v-flex>
        </v-flex>
        <v-flex xs4 md4 lg4 >
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
    </div>
  </v-card>
        </v-flex>
      </v-layout>
      </v-flex>
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
          fab: true,
          pin:false,
          show: false,
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
         
        
        }
      },
     props: ['id'],
 
    methods:  {
           toggogle( item ){
            this.uniqueId = item
          },
           toggogleoff(  ){
            this.uniqueId = ''
          },
           savePot(e){
                    
                 console.log(e)      
                 const saveFav = e 
                 console.log("ok")
                 console.log(saveFav)
                   this.$store.dispatch('savePot', saveFav)
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
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
      loderPot (id) {
        console.log(this.potItemMethods)
      this.potItemMethods =  this.$store.getters.lodePodUp(id) 
        this.$router.push('/pot/' +id)      
            
    },
    
     
    toTop (e) {
       if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
      this.$vuetify.goTo(0)
    }
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
        
          potItem() {
                      return this.$store.getters.lodePodUp(this.id)                    }, 
                                                
          eventItems () {
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { return meetup.type == "Pot"})
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
<style>
div.hide{
    display: none;
  }
@media screen and (min-width: 601px) {
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
  p.example {
    font-size: 1.05em;
  }
  h4.example {
    font-size: 1.1em;
  }
 span.button_text {
    font-size: .57em;
    font-style: oblique;
  }
  div.hidefor{
    display: none !important;
  }
  

}

@media screen and (max-width: 600px) {
  h4.example {
    font-size: .9em;
  }
  p.example {
    font-size: .8em;
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




