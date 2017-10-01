const request = require('request')

var _baseURL = "http://www.pornhub.com/webmasters"
var _baseEmbed = "https://www.pornhub.com/embed"

function search(queryData, logUrl=false) {
	var searchUrl = prepareSearchURL(queryData)
	if(logUrl) console.log(searchUrl)
	return sendRequest(searchUrl)
}

function getEmbed(videoID) {
	return `<iframe src=${_baseEmbed}/${videoID} frameborder=0 width=608 height=468 scrolling=no></iframe>`
}

function getById(videoID, thumbsize){
	var url = thumbsize ? `${_baseURL}/video_by_id?id=${videoID}&thumbsize=${thumbsize}`
						: `${_baseURL}/video_by_id?id=${videoID}`
	return sendRequest(url)
}


function getDeletedVideos(page){
	const url = `${_baseURL}/deleted_videos?page=${page}`

	return sendRequest(url)
}

function isVideoActive(videoID){
	const url = `${_baseURL}/is_video_active?id=${videoID}`

	return sendRequest(url)
}

function sendRequest(url){
	return new Promise((resolve, reject) => {
		request.get(url, (err, response, body) => {
			if(err){
				console.log('SendRequest: Error in promise')
			}else{
				try {
					resolve(JSON.parse(body).videos)
				} catch(e) {
					reject()
					console.log('Wrong data format in response (Search service maybe not avaiable)');
				}
			}
		})
	})
}

function prepareSearchURL(queryData){
	var url = `${_baseURL}/search?`

	if(typeof queryData.category === 'string'){
		url += `&category=${queryData.category}`
	}

	if(typeof queryData.page === 'number'){
		if(queryData.page >= 0){
			url += `&page=${queryData.page}`
		}
	}	

	if(typeof queryData.search === 'string'){
		url += `&search=${queryData.search}`
	}

	if(typeof queryData.stars === 'string'){
		url += `&stars[]=${queryData.stars}`
	}else if(Array.isArray(queryData.stars)){
		url += `&stars[]=${queryData.stars.join(",")}`
	}

	if(typeof queryData.tags === 'string'){
		url += `&tags[]=${queryData.tags}`
	}else if(Array.isArray(queryData.tags)){
		url += `&tags[]=${queryData.tags.join(",")}`
	}

	if(typeof queryData.ordering === 'string'){
		url += `&ordering=${queryData.ordering}`
	}else if(queryData.ordering === undefined || queryData.ordering === null){
		//url += `&ordering=mostviewed`
	}

	if(typeof queryData.period === 'string'){
		url += `&period=${queryData.period}`
	}else if(queryData.period === undefined || queryData.period === null){
		//url += `&period=alltime`
	}

	if(typeof queryData.thumbsize === 'string'){
		url += `&thumbsize=${queryData.thumbsize}`
	}else if(queryData.thumbsize === undefined || queryData.thumbsize === null){
		url += `&thumbsize=medium_hd`
	}

	return url.replace(/\?&/, '?')
}

module.exports = { search, getEmbed, getById, getDeletedVideos, isVideoActive }
