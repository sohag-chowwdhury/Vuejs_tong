<template>
   <v-container>
        <div class="mx-2">
      <v-layout row wrap  justify-center>
            <v-flex class=" text-center my-2">
               <v-btn  large class="mx-2 my-2" outlined color="orange"> <v-icon>mdi-blogger</v-icon> <h2 >Blogs</h2></v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap  >
          <v-flex   xs12 sm12 md4  justify-center
            v-for="item in sliderItem"
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
    <p></p>
     <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="item.date"
      :interval="1000"
      label-position="begin"
      :end-text="'Event ended '"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'"
      class="mb-15">
     
      <template slot="countdown" slot-scope="scope">
        <v-btn fab dark small color="green" class=" mx-1 my-1">{{scope.props.days}}<i>{{scope.props.dayTxt}}</i></v-btn>
        <v-btn fab dark small color="green" class=" mx-1 my-1"><span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i></v-btn>
         <v-btn fab dark small color="green" class=" mx-1 my-1"> <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i></v-btn>
          <v-btn fab dark small color="green" class=" mx-1 my-1"><span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i></v-btn>    
      </template>
    
      <template slot="end-text" slot-scope="scope">
           <v-btn small outlined color="red " class="font-weight-bold mx-1 my-15"><span class="font-weight-bold" >{{ scope.props.endText}} {{item.date | date }}</span></v-btn>
        
      </template>
    </vue-countdown-timer>
    <div class="mb-3"></div>
    </v-img>
   
     <v-card-text  style="height:120px" >
  <div class="body-1 white--text" ><h2>{{item.title}}</h2></div>
  <v-divider light />
</v-card-text>
  <v-layout row wrap>
    <v-flex xs3 md3 3 lg3>
      <v-icon large class="my-5">mdi-calendar-range</v-icon>
    </v-flex>
       <v-flex xs6 md6 sm6 lg6 cl6  class="my-3" style="height:80px"> 
         <p  class="black--text  ma-0 text-sm-left"> {{item.location}}</p>
          <p  class="black--text text-sm-left"> {{item.date | date}}</p>
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
   export default {
    name: 'Timer',
    computed: {
        sliderItem () {
            return this.$store.getters.lodeMeetUps
        }
    },
    methods:    {
       startCallBack: function (x) {
        console.log(x)
      },
      endCallBack: function (x) {
        console.log(x)
      },
        loderItem (id) {
        this.$router.push('/event/' +id)
    },
    loading () {
             return this.$store.getters.loading
         }
    }
   }

</script>
<style scoped>
   


</style>