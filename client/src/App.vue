<template>
  <div id="app">
    <div class='container'>
      <router-view name='search'></router-view>
      <router-view v-on:Changed='OnTagsChanged' name='tags'></router-view>
      <router-view :pthumblist='thumblist' name='videoslist'></router-view>
      <!-- <router-view name='embedwrap'></router-view> -->
      <router-view name='divider'></router-view>
      <router-view name='footer'></router-view>
    </div>
  </div>
</template>
<script>
import ph from '@/server-service/pornhub-api'
import config from '@/config'
export default {
  created () {
    this.SearchRequest()
  },
  methods: {
    //Tags should be placed in 'search' value bc its make better response
    OnTagsChanged(){
      //Close opened video
      //this.$children[2].currentID = ''
      //Setup default query 
      this.searchQuery = config.defquery
      //Get selected tags
      this.searchQuery.search = Array.from(document.getElementsByClassName('active-tag'))

      if(this.searchQuery.search.length>0){
        //Concatenate selected tags into one string
        var stringFromTags = ''
        this.searchQuery.search.forEach( (el, i) => {
          stringFromTags = stringFromTags.concat(el.innerText,'+')
        });
        //Remove '+' at the end
        this.searchQuery.search = stringFromTags.replace(/\+$/, '')
        console.log(this.searchQuery.search)
        //Send query on server
        this.SearchRequest(this.searchQuery)
      }else {
        this.SearchRequest()
      }
    },
    SearchRequest(query=config.defquery){
      ph.SearchVideos(query).then(x=>{
        this.thumblist = x.data || this.thumblist
      })
    }
  },
  data () {
    return {
      thumblist: [],
      searchQuery: {}
    }
  }
}
</script>

<style lang=sass>
#app, .container
  height: 100%

html, body
  height: 100%
  font-size: 16px
  min-width: 320px
  line-height: 1.65
  position: relative
  overflow-x: hidden
  opacity: 1
  background-color: #0f0f0f
  margin: 0
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,sans-serif

</style>
