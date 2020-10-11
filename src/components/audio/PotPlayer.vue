 <template  >
 <div class="black">                      
         <v-layout row justify-center class="my-1" >
             <v-flex xs12 md12 lg12>
                  <v-layout row wrap justify-center
                  class="mx-2"
                  style="border-bottom: ridge; border-width: 3px; border-color:error;">
                    <v-flex xs0 md0 lg2></v-flex>
                  <v-flex xs12 md6 lg5  justify-center >
                      <v-flex xs12 md12 lg12  class=" mx-5 my-1" ><v-btn  class="mx-3" small fab color="white"  ><v-icon color="green">mdi-headphones</v-icon></v-btn>
      
               <v-btn  small class="mx-5" color="white" fab dark @click="filter = !filter"   > <v-icon color="orange">mdi-filter-outline</v-icon></v-btn>
     
              <v-btn small class="ma-2 mx-5 black--text" v-if="userAuth"  color="white" to="/potplayer/new"><v-icon color="green" class="mx-2 my2">mdi-typewriter</v-icon> Pot Create</v-btn>   </v-flex>
                  </v-flex>
                  <v-flex xs12 md5 lg4  class="mx-2 mr-10 mt-1">
                   <div  v-bind:class="{ divfilter: filter}">
                       <v-text-field
                     class="mx-2 rounded-xl"
                       background-color="white"
                    label="Search with title"
                    style=""
                    single-line
                    v-model="search"
                    outlined
                  ></v-text-field>
                   </div>
                  </v-flex>
                </v-layout>
             </v-flex>
       <v-flex xs12 sm12 md10 lg10 class="mx-3"  justify-center>
             <div  v-bind:class="{ divfilter: filter}">
                <v-layout row wrap  justify-center  class="mx-2">
                <v-flex style=" border-bottom: double; border-color:black" justify-center xs12 sm12 md12 lg12 class="m-auto">          
                 <span v-for="item in topics" 
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
     
      <v-flex xs12 md12 lg12 class=" mx-5" > 
         <v-layout row wrap justify-center >
           
        <v-flex xs12 md4 lg3 
        v-for="item in potItem" 
           :key="item.id">                    
     <v-card                 
              style=" border: outset; border-width:1px;  border-color:orange ; "
             class="mobilewidth  grey darken-2   mx-2 my-2 rounded-xl"
            height="275"  
             @click="potLoadItem(item.id)"
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
        <v-flex class="" xs1 md1 lg1>
             <v-avatar class="ml-6 my-1" color="teal" size="37">
            <v-img :src="item.creatorImage"></v-img>
    </v-avatar>
        </v-flex>
        <v-flex  xs7 md7 lg7 >
            <v-flex class="ml-9" xs11 md11 lg11>
              <p style="font-size:.9em !important" class="example  my-0" >{{item.creatorName}}</p>
             <p  style="font-size:.8em !important" class="exampledate my-0">{{item.date | date}}</p>
            </v-flex>
        </v-flex>
       
          <v-flex xs1 md1 lg1 class="my-1 ml-10"> 
          <share></share>
          </v-flex>
     
        <v-flex xs1 md1 class=" mr-1" lg1 >
        
           <v-menu
          
           
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
          class="mt-1"
          
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
    </div>
  </v-card>
        </v-flex>
      </v-layout>
      </v-flex>
      </v-layout>
  
    </div>
</template>
<script>
export default {
    data(){
        return {
            filter:true,
             fab: true,
           search:'',
          show: false,
          show1:false,
           offsetTop: 0,
           buttonSearch:'',
          potItemMethods:'',
            topics: ['Song','Poem', 'Nobel', 'Story', 'News'],
       
       
            
        }
    },
     computed: {
        potItem () {
         
            return this.$store.getters.lodeMeetUps.filter((meetup)=> { 
                if( this.search != '' ){  return meetup.title.toLowerCase().match(this.search.toLowerCase()) &&  meetup.type =="Pot"}
               if( this.buttonSearch != ''){ return  meetup.topic == this.buttonSearch &&  meetup.type =="Pot"}
                 else { return meetup.title.toLowerCase().match(this.search.toLowerCase()) &&  meetup.type =="Pot"}

            }
           )
        },
        
         userAuth ( ) {
            if( this.$store.getters.user !== null &&  this.$store.getters.user !== undefined)
                  { return this.$store.getters.user  }
                  else{ return null}
       },
        
    },
    methods: {
         savePot(e){
                    
                 console.log(e)      
                 const saveFav = e 
                 console.log("ok")
                 console.log(saveFav)
                   this.$store.dispatch('savePot', saveFav)
      },
      potLoadItem (id) {
        this.$router.push('/pot/' +id) 
        },

        buttonFilter(e){
          this.search = ''
          this.buttonSearch = e
        }
    },
    
   
         
    }

</script>
<style >
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