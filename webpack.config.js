const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		filename: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "main.js"
	},
	externals: [nodeExternals()],
	module: {
		rules: [{
			test: /\.js$/,
			include: path.join(__filename, "src"),
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	target: "node"
}
