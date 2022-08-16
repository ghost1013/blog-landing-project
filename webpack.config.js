const path = require('path');
const HTMLwebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HTMLwebpackplugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
};