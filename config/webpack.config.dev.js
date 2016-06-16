// Imports
   var path = require('path');

// config
module.exports = {
   entry: {
      main: './src/app.js'
   },
   output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: '[name].js',
      publicPath: '/dist/'
   }
};
