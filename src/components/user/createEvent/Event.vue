<template>

    <div>
       <v-layout row wrap justify-center>
            <v-flex xs12 sm12 md12 xl12 lg12>
            
                <v-carousel
                style="cursor: pointer"
                  height="390"
                cycle
                >
                  <v-layout row wrap justify-center>
                      <v-flex xs4 sm4 md4 xl4 lg4></v-flex>
                      <v-flex xs4 sm4 md4 xl4 lg4></v-flex>
                    </v-layout>   
                 <v-carousel-item
                    v-for="item in sliderItem"
                    :key="item.id"
                    @click="loderItem(item.id)"
                    :src="item.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    class="text-center"
                    >
                            
              
   <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="item.date"
      :interval="1000"
      label-position="begin"
      :end-text="'Event ended '"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
     
      <template slot="countdown" slot-scope="scope">
        <v-btn class="green mx-1 my-1">{{scope.props.days}}<i>{{scope.props.dayTxt}}</i></v-btn>
        <v-btn  class="green mx-1 my-1"><span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i></v-btn>
         <v-btn  class="green mx-1 my-1"> <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i></v-btn>
          <v-btn  class="green mx-1 my-1"><span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i></v-btn>    
      </template>
    
      <template slot="end-text" slot-scope="scope">
           <v-btn class="red mx-1 my-1"><span >{{ scope.props.endText}} {{item.date | date }}</span></v-btn>
      </template>
    </vue-countdown-timer>
                         <div class="loading">
                              <Loading :size="106"
                            color="#ff1d5e" v-if="loading"/> 
                        </div> 
                    <div v-if="!loading" class="title1 my-15">
                        <p class="text-center">{{item.date | date}}</p>
                    </div>
                    <div v-if="!loading" class="title ">
                        <h4 class="text-center">{{item.title}}</h4>
                    </div>
                    
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
  </div>
</template>
<script>

import Loading from '../../loading/Loading'
   export default {
       components: {Loading},
       data(){
           return{
               isLoading: this.loading,
                fullPage: true
           }
       },

    computed: {
        sliderItem () {
            return this.$store.getters.fetcherMeetUps
        },
         loading () {
             return this.$store.getters.loading
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
  
    }
   }

</script>
<style scoped>
    .title {
        position: absolute;
        bottom:48px;
         right:30%;
         left:5%;
        background-color: rgba(219, 107, 1, 0.87);
        color: aliceblue;
        padding: 5px;
        border-radius: 5px;
    }
     .loading {
        position: absolute;
        bottom:210px;
         right:45%;
         left:40%;
       
    }
    .title1 {
        position: absolute;
        bottom:95px;
         right:50%;
         left:70%;
        background-color: rgba(235, 113, 0, 0.938);
        color: aliceblue;
        padding: 5px;
        border-radius: 5px;
    }


</style>