 <template>
    <v-container>
           <v-btn class="ma-2" outlined to="/potplayer/new" color="indigo">Pot Create</v-btn>
         <v-card
          v-for="item in potItem"
          style=" border: double; border-color:orange"
           :key="item.id"
    class="mx-auto my-2"
    width="344"
  >


  <div >
      <aplayer autoplay
        v-if="item.title"
           style="height:100px"
           
  :music="{
    title: item.title,
    artist: item.artist,
    src: item.audioUrl,
    pic: item.imageUrl
  }"
/>
  </div>
    <v-card-title>
     {{item.title}}
    </v-card-title>

    <v-card-subtitle>
    {{item.artist}}
    <br>
    <v-btn x-small outlined>Public</v-btn>
     <v-btn class="mx-1" x-small outlined>Song</v-btn>
    </v-card-subtitle>
    <v-card-subtitle>
        {{item.date | date }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="purple"
        text
      >
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-html="item.description">
            {{item.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            show: false,
            
        }
    },
     computed: {
        potItem () {
            return this.$store.getters.lodePots
        }
    },
}
</script>
<style lang="stylus" scoped>

</style>