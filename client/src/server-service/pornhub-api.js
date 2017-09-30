import axios from 'axios'

export default {
	request(){
		return axios.create({
			baseURL: 'http://localhost:1337'
		})
	},

	SearchVideos(query){
		return this.request().post('search', query);
	},

	GetVideoByID(id){
		return this.request().post('getbyid', id);
	}

}