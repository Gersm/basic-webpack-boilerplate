// Imports
   var path = require('path');
   var ExtractTextPlugin = require('extract-text-webpack-plugin');

// config
module.exports = {
   entry: {
      index: './src/app.js'
   },
   output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: '[name].js',
      publicPath: '/dist/'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
         },{
            test: /\.styl$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader!stylus-loader")
         },{
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader!sass-loader")
         }
      ]
   },
	plugins: [
		new ExtractTextPlugin("main.css")
	]
};
