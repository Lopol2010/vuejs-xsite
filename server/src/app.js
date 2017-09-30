var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var ph = require('./pornhub/api.js')

var path = require('path')

var rootPath = path.resolve(__dirname,'../../')

app.use(cors())
app.use(bodyParser.json())

app.post('/search', (req, res) => {
	ph.videos.search(req.body, true)
	.then(data => { res.send(data) })
	.catch(e=>{ res.send('Search error') })
})
app.post('/getbyid', (req, res) => {
	ph.videos.getById(req.body.id)
	.then(data=>{ res.send(data) })
	.catch(e=>{ res.send('Cant get video by ID') })

})

app.listen(1337, 'localhost')