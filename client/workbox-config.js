module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,bak,png,json,txt}'
	],
	swDest: 'public/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};