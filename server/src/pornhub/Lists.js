const request = require('request')

var _baseURL = "http://www.pornhub.com/webmasters"


/**
 * Retrieves all available categories.
 * @function
 * @returns {Promise.<Object>}
 */
function getCategoriesList(){
	return sendRequest(`${_baseURL}/categories`)
}

/**
 * Retrieves all available tags.
 * @function
 * @parameter {string|number} list - A to Z for tag starting letter, 0 for other
 * @returns {Promise.<Object>}
 */
function getTagsList(list=0){
	return sendRequest(`${_baseURL}/tags?list=${list}`)
}

/**
 * Retrieves all available pornstars.
 * @function
 * @returns {Promise.<Object>}
 */
function getStarList(){
	return sendRequest(`${_baseURL}/stars`)
}

/**
 * Retrieves all available pornstars with details (page url and star's thumb).
 * @function
 * @returns {Promise.<Object>}
 */
function getStarDetailedList(){
	return sendRequest(`${_baseURL}/stars_detailed`)
}

function sendRequest(url){
	return new Promise((resolve, reject) => {
		request.get(url, (err, response, body) => {
			resolve(body)
		})
	})
}

module.exports = { getCategoriesList, getTagsList, getStarList, getStarDetailedList }