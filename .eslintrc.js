module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["import"],
	rules: {
		"import/dynamic-import-chunkname": "error",
	},
};
