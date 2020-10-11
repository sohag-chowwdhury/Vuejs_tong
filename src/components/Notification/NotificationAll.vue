
<template>
  <v-row>
    <v-dialog  v-model="EditDialog"   max-width="700px">
      <template v-slot:activator="{ on }">   
          <v-btn v-on="on" fab small  color=" accent-4"><v-icon large color="orange">mdi-bell-circle</v-icon>          
            </v-btn>
      </template>
       <v-container >
        <v-card  class="mx-2"  max-width="700px" xs12 sm6 >
            <v-layout >
                <v-flex text-right>  
                <v-btn fab x-small  color="" @click="EditDialog = false">
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-flex> 
            </v-layout> 
            <v-layout justify-center>
                <v-flex xs6 md6 lg6 text-center>  <h4 class="black--text" >Notification</h4></v-flex>
            </v-layout>
                
            <v-layout row wrap justify-center  v-for="item in allItem"                
              :key="item.id">
                <v-flex xs11 md12 lg12 v-if="item.type=='Blog'">
                    <v-card                 
                       
                        class="grey lighten-4 my-1 rounded-lg mx-auto"
                         max-width="600px"
                      

                     >
                        <v-layout row wrap>
                            <v-flex xs12 md12 lg12 class="mx-3 my-2" text-center  style="height:23px !important;  overflow: hidden !important;"><h4>{{item.title}}</h4></v-flex>
                            <v-flex>
                                <v-layout row wrap>
                                    <v-flex  class="ml-7 my-1" xs2 md2 lg2>
                                        <v-avatar color="blue" size="27">
                                            <v-img :src="item.creatorImage"></v-img>
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs6 md6 lg6>
                                       {{item.creatorName}}
                                    </v-flex>
                                    <v-flex xs2 md3 lg3>
                                        <v-btn x-small>{{item.type}}</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                     </v-card>
                </v-flex>
                <v-flex xs11 md12 lg12 v-if="item.type=='Job'">
                    <v-card                 
                        max-width="600px"
                        class="grey lighten-2 rounded-lg my-1 mx-auto"
                      

                     >

                         <v-layout row wrap>
                            <v-flex xs12 md12 lg12 class="mx-3 my-2 " text-center   style="height:23px !important;  overflow: hidden !important;"><h4>{{item.title}}</h4></v-flex>
                            <v-flex>
                                <v-layout row wrap>
                                    <v-flex class="ml-7 my-1" xs2 md2 lg2>
                                        <v-avatar color="blue" size="27">
                                            <v-img :src="item.creatorImage"></v-img>
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs6 md6 lg6>
                                        {{item.creatorName}}
                                    </v-flex>
                                    <v-flex xs2 md3 lg3>
                                        <v-btn x-small>{{item.type}}</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                     </v-card>
                </v-flex >
                <v-flex xs11 md12 lg12 v-if="item.type=='Pot'">
                    <v-card                 
                        max-width="600px"
                        class="grey lighten-3 rounded-lg my-1 mx-auto"
                       
                     >
                         <v-layout row wrap>
                            <v-flex xs12 md12 lg12 class="mx-3 my-2" text-center   style="height:23px !important; overflow: hidden !important;"><h4>{{item.title}}</h4></v-flex>
                            <v-flex>
                                <v-layout row wrap>
                                    <v-flex class="ml-7 my-1" xs2 md2 lg2>
                                        <v-avatar color="blue" size="27">
                                        <v-img :src="item.creatorImage"></v-img>
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs6 md6 lg6>
                                       {{item.creatorName}}
                                    </v-flex>
                                    <v-flex xs2 md3 lg3>
                                        <v-btn x-small>{{item.type}}</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                     </v-card>
                </v-flex>
            </v-layout>
       
       </v-card>
    </v-container>
    </v-dialog>
  </v-row>
</template>
<script>
 export default {
     data () {
         return {
                 show: false,
            EditDialog: false,
         
           
            
             
         }
     },
     computed: {      
      allItem(){
          
              return this.$store.getters.lodeMeetUps
        },

        notification(){
          return this.$store.getters.notificationTime
         }
     },
    
      methods: {
              

         }
     }
</script>
<style scoped>
.v-dialog {
  position: absolute;
  top: 10%;
}
</style>