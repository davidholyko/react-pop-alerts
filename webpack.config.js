const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 1993;

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
    alias: {},
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "lib"),
    publicPath: "/",
    libraryTarget: "commonjs2",
  },
  devServer: {
    contentBase: path.join(__dirname, "lib"),
    compress: true,
    port: port,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
