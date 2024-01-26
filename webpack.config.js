const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  entry: "/src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  target: "web",
  devServer: {
    port: "5000",
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: {
      index: '/index.html',
    },
    allowedHosts: "all"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
      },
      {
        test: /\.(png|jpg)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      })
  ],
};
