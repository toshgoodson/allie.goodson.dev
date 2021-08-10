const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')
const withVideos = require('next-videos')

module.exports = withPlugins([
	[optimizedImages, {}],
	[withImages, {fileExtensions: ['ico']}], // use this for images that can't be optimized
	[withVideos, {}]
], {
	optimizeImages: false,
	inlineImageLimit: -1,
	images: {
		disableStaticImages: true
	}
})