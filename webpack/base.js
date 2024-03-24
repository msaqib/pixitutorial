// const webpack = require("webpack");
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   mode: "development",
//   devtool: "eval-source-map",
//   entry: "./src/scripts/index.js",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.(png|mp3|jpe?g)$/i,
//         use: "file-loader"
//       }
//     ]
//   },
//   devServer: {
//     static: [
//       { directory: path.join(__dirname, 'dist') },
//       { directory: path.join(__dirname, 'node_modules'), publicPath: '/node_modules/' }
//     ],
//     port: 8080,
//   },
//   plugins: [
//     new CleanWebpackPlugin({
//       root: path.resolve(__dirname, "../")
//     }),
//     new webpack.DefinePlugin({
//       CANVAS_RENDERER: JSON.stringify(true),
//       WEBGL_RENDERER: JSON.stringify(true)
//     }),
//     new HtmlWebpackPlugin({
//       template: "./index.html"
//     })
//   ]
// };

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/scripts/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|mp3|jpe?g)$/i,
        use: 'file-loader?name=sprites/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};