<template>
  <v-container class="mt-0">                  
      <v-layout row wrap >
        /
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

      <v-flex xs12 md4  text-center  class="rounded-xl  my-2">
          <div  v-bind:class="{ mobile: pin}" >
                             <v-card   
             style=" border: outset; border-width:5px;  border-color:orange"
    class="orange  grey darken-4  mx-1 my-2 rounded-xl"
  
  >  
   <v-layout >
     <v-flex> 
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
        <v-btn  disabled  class="info acctive mx-2" fab dark x-small>
         <v-icon >mdi-circle-edit-outline</v-icon>    
       </v-btn>
        <v-btn  disabled class="error acctive mx-2" fab dark x-small>
          <v-icon>mdi-delete</v-icon>   
       </v-btn>
       <v-btn  fab dark x-small><v-icon color="error">mdi-cards-heart</v-icon></v-btn>
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
               v-show="$vuetify.breakpoint.lg"   
 >
    {{potItemMethods.artist || potItem.artist}}
    <br>
    <v-btn v-show="$vuetify.breakpoint.lg" x-small outlined class="info">Public</v-btn>
    
    </v-card-subtitle>
    
    <div v-bind:class="{ mobilestick: pin}">
       <v-card-subtitle v-if="potItemMethods.artist || potItem.artist" class="white--text mr-2">
        Arist: {{potItemMethods.artist || potItem.artist}}
     </v-card-subtitle>
       <div  v-bind:class="{ mobilestick: pin}"  class="ml-15">
         <v-layout class="lighten-1" row wrap>
        <v-flex class="ml-5 mt-2" xs2 md2 lg2>
            
        </v-flex>
        <v-flex class="my-1" xs10 md10 lg10 xl10>
           <div>
              <v-avatar color="teal" size="47">
      <span class="white--text headline">48</span>
    </v-avatar>
              <p class="white--text my-0" >Kasem Chowdhury</p>
             <p class="white--text my-0">{{potItemMethods.date ||potItem.date |date}}</p>
           </div>
        </v-flex>
       
      </v-layout> 
      </div>
    </div>
     <div  v-bind:class="{ mobilestick: pin}">
        <v-layout row wrap  class="grey lighten-5">
      <v-flex xs4 md4 lg4>
        <v-btn class="mx-3 mb-1" text x-samll icon color="blue lighten-2">
        <v-icon>mdi-thumb-up</v-icon>
      
      </v-btn>
      112
      </v-flex>
      <v-flex x3 md4 lg4>
      <v-btn class="mx-1 mb-2" text icon color="red lighten-2">
        <v-icon>mdi-emoticon-angry</v-icon>
        
      </v-btn>
       <span class="">111</span>
      </v-flex>
      <v-flex xs3 md4 lg4 class="mt-1">
      
             <v-btn  x-small class="blue"> <v-icon small color="white">mdi-share-variant-outline</v-icon> </v-btn>
      </v-flex>
    
    </v-layout>
     </div>
  </v-card>
          </div >
         
      </v-flex>
       <div class="mobilefake"></div>
      <v-flex xs12 md7 lg7>
        <div v-bind:class="{ mobilestick: pin}">
         <v-layout class="mx-2"  row wrap >            
               <v-flex xs6 md6 lg6>
                 <v-btn
        color="green"
        text
        small
      >
        Comments
      </v-btn>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-flex>
      <v-flex xs6 md6 lg6 >
         <v-btn
        color="purple"
        text
        small
      >
        Expolore
      </v-btn>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
         <v-card-subtitle class="my-1 mx-6">Comments:</v-card-subtitle>
        <v-layout row wrap justify-center>
            <v-flex class="mx-1" xs9 md9 lg9>
              <v-text-field
              class="ml-2"
            label="Write Your Comments"
           single-line
            outlined
          ></v-text-field>
            </v-flex>
            <v-flex xs2 md2 lg2>
              <v-btn  color="green" small class="my-2 py-4 mr-1">Post</v-btn>
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
           <v-card  class="example item_remove"  v-for="item in eventItems" 
           :key="item.id">
              <div  style="cursor: pointer" 
              @click="loderPot(item.id)">
                   <v-layout height="60px" row wrap style="border: outset; border-color:black" class="grey darken-4 mr-2 rounded-xl my-1 ml-0">
                     <v-flex color="black" class="rounded-xl" xs3 md2 sm2 lg2 style="border-style: ridge; border-width: 3px; border-color:orange;" >
                       <v-img
                        :src="item.imageUrl"
              height="60px"
              class=" rounded-xl grey darken-4"
            ></v-img>
                     </v-flex>
                     <v-flex xs9 md7 lg8 xl8 >
                       <v-layout row wrap class=" text-xs-2">
                         <v-flex xs12 md12 lg12 >
                           <div>
                              <h4 style="height:22px;" class=" example my-3 font-weight-medium text-xs-h5 white--text ml-6 mt-2 mx-1">
                              <v-btn x-small  class="green ml-0  mr-1 mb-1">{{item.topic}}</v-btn>{{item.title}}
                            </h4>
                           </div>
                            </v-flex>
                         <v-flex xs12 md12 lg12 ><p style="opacity:91;" class=" example font-weight-medium  white--text mx-2 my-1  "><v-avatar color="white" class="mx-3" size="27"></v-avatar> {{item.artist}}</p></v-flex>
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
           
        <v-flex xs12 md3 lg3 
        v-for="item in eventItems"
           :key="item.id">                    
 <v-card                 
              style=" border: outset; border-width:1px;  border-color:black ; "
             class="mobilewidth  grey darken-2   ml-3 my-2 rounded-xl"
            height="275"  
             v-if="item.type=='Pot'"
  >  
   <v-flex xs12 md12 lg12 class="mx-2 my-1 rounded-xl"  justify="space-around"
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
            <v-btn v-if="userAuth" class="mx-3 mt-1" fab dark x-small><v-icon color="error">mdi-cards-heart</v-icon></v-btn>
            <v-menu
            class="mx-3"
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        v-if="userAuth"
          color="black"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          class="mt-1 mx-3"
        >
        <v-icon class="mb-5">mdi-settings-helper</v-icon>
        </v-btn>
      </template>

      <v-list class="white--text">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="black accent-3"
        >
          <v-btn x-small  class="black--text"><v-icon class="mx-1" x-small>{{item.icon}}</v-icon>{{ item.title }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
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
     <v-layout  row wrap class="grey mx-1 mt-6 rounded-b-xl lighten-2">
      <v-flex xs12 md12 lg12 class="my">
           <div class="topbar2"  @click="potLoadItem(item.id)"
             style="cursor: pointer; border: outset; border-width:0px;  border-color:orange">   
           <h4 class="  ml-4  mt-4 black--text"> {{item.title}}</h4>     
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12 class="mt-4"  @click="potLoadItem(item.id)"
             style="cursor: pointer; border: outset; border-width:0px;  border-color:orange">
           <v-layout class="lighten-1" row wrap>
        <v-flex class="ml-5 mt-2" xs1 md1 lg1>
             <v-avatar color="teal" size="27">
      <span class="white--text headline">48</span>
    </v-avatar>
        </v-flex>
        <v-flex class="my-1" xs10 md10 lg10 xl10>
           <div class="topbar2">
              <p class="example my-0" >Kasem Chowdhury</p>
             <p class="exampledate my-0">{{item.time | date}}</p>
           </div>
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

</template>
<script>
export default {
      data(){
        return {
          fab: true,
          pin:false,
          show: false,
          show1:false,
           offsetTop: 0,
          potItemMethods:'',
          items: [
        { title: 'Share', icon:'mdi-share-variant-outline'},
        { title: 'Report', icon:'mdi-block-helper'},
        { title: 'Edit', icon:'mdi-square-edit-outline'},
        { title: 'Delete', icon:'mdi-delete' },
      ]

        
        }
      },
     props: ['id'],
 
    methods:  {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
      loderPot (id) {
      this.potItemMethods =  this.$store.getters.lodePodUp(id) 
      console.log(this.potItemMethods)
            
    },
     
    toTop (e) {
       if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
      this.$vuetify.goTo(0)
    }
    },
   
     computed: {
         
          potItem() {
                      return this.$store.getters.lodePodUp(this.id)                    }, 
                                                
          eventItems () {
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { return meetup.type == "Pot"})
            },
       }  
      }
</script>
<style>
@media screen and (min-width: 601px) {
  p.example {
    font-size: 1.05em;
  }
  h4.example {
    font-size: 1.15em;
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




