const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 html-webpack-plugin

module.exports = {
  entry: './src/dev.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',  // 输出文件名
    libraryTarget: 'umd',
    library: 'MyComponentLibrary',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true // 允许 source map
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css' // CSS 文件名
    }),
    new HtmlWebpackPlugin({ // 使用 html-webpack-plugin
      template: './public/index.html', // 指定模板文件
      filename: 'index.html', // 输出文件名
      inject: 'body', // 在 body 中注入资源
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
};
