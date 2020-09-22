<template>
<v-layout row wrap justify-center>
   
    <v-flex xs6 sm6 md6 lg5 class="my-5">
         <v-layout row wrap justify-center>
          <v-flex  xs6 sm6 md6 lg6 class=" display-1">
              <v-btn color="orange" x-large> <v-icon>mdi-av-timer</v-icon> Time Remaining </v-btn>
          </v-flex>
          <v-flex  xs11 sm11 md11 lg11>
              <vue-countdown-timer
              class="my-2"
    
      :start-time="'2018-10-10 00:00:00'"
      :end-time="eventItem.date"
      :interval="1000"
      label-position="begin"
      :end-text="'Event ended '"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
     
      <template slot="countdown" slot-scope="scope">
        <v-btn large class="green mx-1 my-1 ">{{scope.props.days}}<i>{{scope.props.dayTxt}}</i></v-btn>
        <v-btn  large class="green mx-1 my-1"><span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i></v-btn>
         <v-btn  large class="green mx-1 my-1"> <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i></v-btn>
          <v-btn   large class="green mx-1 my-1"><span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i></v-btn>    
      </template>
    
      <template slot="end-text" slot-scope="scope">
           <v-btn class="red mx-1 my-1"><span >{{ scope.props.endText}} {{eventItem.date | date }}</span></v-btn>
        
      </template>
    </vue-countdown-timer>
          </v-flex>
      </v-layout>
        <v-layout row wrap>
            <v-flex xs6 sm6 md6 lg6 class="my-2">
                <v-layout row wrap>
                    <v-flex  xs2 sm2 md2 lg2 class="my-1">  <v-icon x-large color="grey darken-4" >mdi-calendar-range</v-icon></v-flex>
                    <v-flex  xs10 sm10 md10 lg10 class="my-2"><v-btn color="info">{{eventItem.date | date }}</v-btn></v-flex>

                </v-layout>
                
            </v-flex>
             <v-layout row wrap>
                
                 <v-flex  xs2 sm2 md2 lg2 class="my-4">  <v-icon x-large color="grey darken-4" >mdi-crosshairs-gps</v-icon></v-flex>
                    <v-flex  xs sm10 md10 lg10 class="my-4"><v-btn color="info">{{eventItem.location}}</v-btn>
                </v-flex>
             </v-layout>
        </v-layout>
        <br>
         <v-layout row wrap  justify-center class="my-2">
            <v-flex xs12 sm12 md12 lg12>
                <v-img max-height="250px" max-width="600" :src="eventItem.imageUrl"></v-img>
                <p class=" my-1 orange--text">Picture name of this image</p>
            </v-flex>
        </v-layout>
              <br color="orange">
         <v-layout row wrap  justify-center>
           
        </v-layout>
         <v-layout row wrap  justify-center>
            <v-flex xs12 sm12 md12 lg12>
                <h2 class="display-1 ">You should do for you. Not you will die </h2>
            </v-flex>
        </v-layout>
  
        <br>
         <v-layout row wrap  justify-center>
            <v-flex xs12 sm12 md12 lg12>
                <h5>Event Details :</h5>
             <p class="font-weight-regular">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima nobis assumenda quibusdam aut maxime, rerum cupiditate veniam facere modi soluta aliquid ea odio, error iusto hic ducimus at laborum. Ipsum dolores dolor nihil eum esse ipsam unde optio, sit hic ullam facere atque beatae recusandae, dicta, id animi asperiores reprehenderit dignissimos quos inventore assumenda nemo autem voluptas! Eveniet, pariatur maxime! Excepturi odio in illo cum. Totam, voluptatem modi qui iure nulla beatae odit nesciunt non atque sed vero necessitatibus possimus corporis at exercitationem consequatur voluptatibus aliquid unde dolore rem quae vitae ipsa cum incidunt. Provident architecto natus totam modi?</p>
            </v-flex>
        </v-layout>
        <br>
         <v-flex xs12 sm12 md12 lg12>
                  <v-btn class="mx-1"><v-icon color="orange">mdi-share-variant-outline</v-icon></v-btn>
              <v-btn class="mx-1"><v-icon color="primary">mdi-facebook</v-icon></v-btn>
                <v-btn class="mx-1"><v-icon color="info">mdi-twitter</v-icon></v-btn>
                  <v-btn class="mx-1"><v-icon color="orange">mdi-instagram</v-icon></v-btn>
            </v-flex>
        <br>
         <v-layout row wrap class="my-2">
            <v-flex xs10 sm10 md10 lg10 >
                <h4 class="font-weight-regular">Comments:</h4>               
            </v-flex>
        </v-layout>
          <v-layout row wrap  justify-center class="my-2">
            <v-flex xs10 sm10 md10 lg10 >
             <v-textarea
                label="Write your Comments"
                auto-grow
                outlined
                rows="1"
                row-height="15"
                ></v-textarea>    
            </v-flex>
              <v-flex xs2 sm2 md2 lg2 ><v-btn class=" my-3 "><p class="my-4">post</p></v-btn></v-flex>
           </v-layout>
             <v-layout row wrap class="my-2">
            <v-flex xs3 sm1 md1 lg1 >
                  <v-avatar color="teal" size="48">
                 <span class="white--text headline">48</span>
                 </v-avatar> 
            </v-flex>
               <v-flex xs9 sm3 md3 lg3 ma-0 my-3 >
                  <p>Kasem chowdhury:</p>
                </v-flex>
                <v-flex xs12 sm7 md4 lg7 ma-0 my-3 >
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas qui minus voluptate culpa a ipsa dolores, dicta minima harum mollitia amet veritatis dolorum maiores libero, vitae esse laborum consequatur. Qui repellat, cumque voluptate molestias sed dolor necessitatibus laboriosam quam tenetur eveniet illum voluptatibus quos omnis reprehenderit exercitationem, neque, suscipit commodi illo veritatis inventore placeat perferendis voluptatem id! Unde maiores, quaerat tenetur nulla dolore est deserunt nam explicabo? Quibusdam, doloribus aliquid!</p>
                </v-flex>
        </v-layout>
        

       
    </v-flex>
</v-layout>

</template>
<script>
 export default {
       name: 'Timer',
     props: ['id'],
    
     computed: {
        eventItem () {
           return this.$store.getters.lodeMeetUp(this.id)
           
           
           }

       // userAuth () {
           // return this.$store.getters.user !== null && this.$store.getters.user !== undefined
       // },
        //userIsCreator ()  {
                //if(!this.userAuth) {
                    //return false
                //}
                //return this.$store.getters.user.id == this.sliderItem.creatorId
        }
    }

</script>