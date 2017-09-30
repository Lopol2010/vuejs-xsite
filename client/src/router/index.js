import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/components/Search'
import Tags from '@/components/Tags'
import VideosList from '@/components/VideosList'
import Footer from '@/components/Footer'

import Divider from '@/components/Divider'
//import EmbedWrap from '@/components/EmbedWrap'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        search: Search,
        tags: Tags,
        videoslist: VideosList,
        //embedwrap: EmbedWrap,
        divider: Divider,
        footer: Footer,
      }
    },
    {
      path: '/:id',
      components: {
        search: Search,
        tags: Tags,
        videoslist: VideosList,
        //embedwrap: EmbedWrap,
        divider: Divider,
        footer: Footer,
      }
    }
  ]
})
