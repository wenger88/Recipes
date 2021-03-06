var helpers = require('./helpers');

module.exports = {
	devtool: 'source-map',

	resolve: {
		extensions: ['', '.ts', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html'

			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'null'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: 'null'
	  		},
	  		{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw!postcss'
	  		},
			{
				test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
				loader: 'null'
			},
			{ 
				test: /\.scss$/,
				include: helpers.root('src', 'app'),
				loaders: ['exports-loader?module.exports.toString()', 'css', 'postcss', 'sass']
			}
		]
	}
}
