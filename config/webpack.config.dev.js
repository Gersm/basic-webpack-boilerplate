// Imports
   var path = require('path');

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
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
         }
      ]
   }
};
