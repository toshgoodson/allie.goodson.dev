const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
	[optimizedImages, {}]
], {
	optimizeImages: false,
	inlineImageLimit: -1,
	images: {
		disableStaticImages: true
	}
})