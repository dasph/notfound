const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    clean: true,
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.[contenthash:8].js',
    assetModuleFilename: '[name].[contenthash:8][ext]'
  },
  module: {
    rules: [{
      test: /\.(png|svg|css)$/,
      type: 'asset/resource'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CompressionWebpackPlugin()
  ]
}
