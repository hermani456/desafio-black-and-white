const Jimp = require('jimp')
const fs = require('fs')

const jimp = (file, res) => {
	Jimp.read(file, (err, image) => {
		image
			.resize(350, Jimp.AUTO)
			.quality(60)
			.grayscale()
			.writeAsync('newImg.jpg')
			.then(() => {
				fs.readFile('newImg.jpg', (err, image) => {
					res.writeHead(200, { 'Content-Type': 'image/jpeg' })
					res.end(image)
				})
			})
	})
}

module.exports = jimp
