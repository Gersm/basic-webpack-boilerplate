// Imports
   var path = require('path');
   var ExtractTextPlugin = require('extract-text-webpack-plugin');
   var HtmlWebpackPlugin = require('html-webpack-plugin');

// config
module.exports = {
   entry: {
      index: './src/app.js'
   },
   output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: '[name].js',
      publicPath: './'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },{
            test: /\.jade/,
            exclude: /node_modules/,
            loader: "jade"
         },{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
         },{
            test: /\.styl$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!stylus-loader')
         },{
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
         }
      ]
   },
	plugins: [
		new ExtractTextPlugin("main.css"),
      new HtmlWebpackPlugin({
         filename: 'index.html',
         showErrors: true,
         template: './src/index.jade'
      })
	]
};
