<template>
  <div class='row justify-content-center'>
    <div class='col-11 videos-list'>
      <div class="thumbnail" @click='OnClick($event)' v-for='th in pthumblist'>
        <router-link :to='th.video_id' class="thumb-img-link">
          <img :src='th.default_thumb' alt="" class="thumb-img">
          <div class="views-count">
            {{th.views|CommaNumber}}
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
    <EmbedWrap></EmbedWrap>
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
      //vid[id].after(document.querySelector('.video-wrapper'))
      vid[id].after(this.$children[0].$el)
    }
  },
  filters: {
    CommaNumber(v){
      if(!v) return ''
      return v.replace(/\B(?=(\d{3})+\b)/g, ",")
    }
  },
  props: ['pthumblist']
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
    margin: 0px 5px 5px
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
