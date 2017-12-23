const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  devServer: {
    contentBase: './',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
};