const http = require('http')
const fs = require('fs')
const url = require('url')
const jimp = require('./jimp')

const port = 8080

http
	.createServer((req, res) => {
      const params = url.parse(req.url, true).query
		const file = params.file
		if (req.url == '/') {
			res.writeHead(200, { 'Content-Type': 'text/html' })
			fs.readFile('index.html', 'utf8', (err, html) => {
				res.end(html)
			})
		}
		if (req.url == '/style') {
			res.writeHead(200, { 'Content-Type': 'text/css' })
			fs.readFile('style.css', (err, css) => {
				res.end(css)
			})
		}
      if(req.url.includes('/img')){
         file ? jimp(file,res) : res.end('Please enter an image url to convert')
      }
	})
	.listen(port, () => console.log(`Server running on port ${port}`))
