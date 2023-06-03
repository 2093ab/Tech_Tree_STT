const express = require('express')
const app = express()
const port = 3000
const stt = require('./file_streaming.js')

app.get('/', async (req, res) => {
	ret = await stt.start()
	console.log(ret)
	res.send(ret)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
