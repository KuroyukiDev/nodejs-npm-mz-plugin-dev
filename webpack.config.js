const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	optimization:{
		minimize: false,
		minimizer: [
			new TerserPlugin({
				terserOptions:{
					mangle:true,
					keep_classnames:true,
					output:{
						comments:/^[!:~]/,
					}
				}
			}),
		],
	},
	target: 'node',
	mode: "production", // "production" | "development" | "none"
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	entry: "./src", // string | object | array
	// defaults to ./src
	// Here the application starts executing
	// and webpack starts bundling
	output: {
		// options related to how webpack emits results
		path:path.resolve(__dirname, "OUTPUT/Plugin_Output_Project/js/plugins"), // string (default)
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)
		filename: "Template_Plugin.js" // Change to the name of the Plugin you're building BEFORE
		// you Build or your might accidentally overwrite the plugin Named Here instead!
		// string (default)
 },
	module:{
		rules:[
			{
				test:/\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use:{
					loader: 'babel-loader',
					options:{
						"presets":[
							["@babel/preset-env",{
								"targets":{"chrome":"62"},
								"useBuiltIns": "entry",
								corejs:{ version:"3.18.1", proposals: false }
							}]
						],
						"generatorOpts":{
							"retainLines":true
						},
						"sourceType":"module"
					}
				}
			}
		]
	},
}
