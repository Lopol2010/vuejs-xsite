<template>
	<div id="app">
		<div class='container'>
			<router-view ref='searchbox' @SearchRequested='OnSearchRequested' name='search'></router-view>
			<router-view ref='tags' @Changed='OnTagsChanged' name='tags'></router-view>
			<router-view :pthumblist='videoList|CropSize' name='videoslist'></router-view>
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
		this.Search()

	},
	methods: {
		//When toggled any tag
		OnTagsChanged(){
			//Clean search-box
			this.$refs.searchbox.query = ''
			//Get selected tags
			var a = Array.from(document.getElementsByClassName('active-tag'))
			if(a.length>0){
				a.forEach( (el, i) => {
					a[i] = el.innerText
				})
			}
			this.searchQuery.search = a.join('+') || null
			this.Search(this.searchQuery)
		},
		//When user input something
		OnSearchRequested(){
			this.searchQuery.search = this.$refs.searchbox.query.replace(/[^\w\s\d-]/g,'').replace(/[\s]+/g,'+') || null
			this.$refs.tags.reset()
			this.Search(this.searchQuery)
		},
		Search(query){
			//Send request to server
			ph.SearchVideos(query).then(x=>{
				this.videoList = x.data || this.videoList
			})
		}
	},
	filters: {
		CropSize(v){
			return v.slice(0, config.videolist.length)
		}
	},
	data () {
		return {
			videoList: [],
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
