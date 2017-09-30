<template>
  <div class='row justify-content-center'>
    <div class='col-11 videos-list'>
      <div class="thumbnail" @click='OnClick($event)' v-for='th in thumblist'>
        <router-link :to='th.video_id' class="thumb-img-link">
          <img :src='th.default_thumb' alt="" class="thumb-img">
          <div class="views-count">
            {{th.views}}
            <i class="fa fa-eye"></i>
            
          </div>
        </router-link>
        <div class="thumb-info-wrapper">
          <span class="title">
            <router-link :to='th.video_id' class='title-link'>{{th.title}}</router-link>
          </span>
        </div>
      </div>
    </div>
    <EmbedWrap :pid='currentID'></EmbedWrap>
  </div>
</template>

<script>
import {videosList} from '@/config'

export default {
  methods: {
    OnClick: function(e) {
      //calctulate position where video iframe should apppear
      var vid = Array.from(document.getElementsByClassName('thumbnail'))
      var id = (4 * Math.ceil((vid.indexOf(e.currentTarget)+1) / 4))-1
      vid[id].after(document.querySelector('.video-wrapper'))

      //send current video in EmbedWrap's property:src=psource
      this.currentID = this.pthumblist[vid.indexOf(e.currentTarget)].video_id
    }
  },
  computed: {
    thumblist: function () {
      var list = this.pthumblist.slice(0, videosList.videosPerPage)
      if(list.length>0)
      list.forEach( (el, i) => {
        el.views = el.views.replace(/\B(?=(\d{3})+\b)/g, ",")
        //el.title = el.title.substring(0, videosList.titleLenght-3)
      });
      return list
    }
  },
  props: ['pthumblist'],
  data (){
    return {
      currentID: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.videos-list
  padding: 0
  margin: 25px 0px 30px
  text-align: center
  .thumbnail
    display: inline-block
    width: 240px
    height: 180px
    margin-left: 10px
    margin-bottom: 5px
    .thumb-img-link, 
      width: inherit
      height: 135px
      display: block
      position: relative
      overflow: hidden
      .thumb-img
        width: inherit
      .views-count
        position: absolute
        right: 0
        bottom: 0
        padding: 3px 19px 0 6px
        line-height: 12px
        font-size: 12px
        font-family: "Arial", sans-serif
        color: white
        background: rgba(#000000, 0.7)
        .fa-eye
          position: absolute
          right: 3px
          top: 3px
          font-size: 11px
    .thumb-info-wrapper
      .title, .title-link
        margin-top: 1px
        max-height: 36px
        overflow: hidden
        line-height: 16px
        font-size: 14px
        color: #D5BA63
        text-decoration: none
        text-align: left
        float: left
        &:hover
          text-decoration: underline
      .views
        color: #8F8F8F
        font-size: 13px
        font-family: "Arial", sans-serif
        font-size: 12px
</style>
