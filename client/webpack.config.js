const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  target: ["web", "es5"],
  devtool: "inline-source-map",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("v.1.0.0"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(dev)" : "",
      },
      minify: process.env.NODE_ENV === "production" ? true : false,
      hash: true,
    }),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `styles/[name].css` })]
      : []),
  ],

  devServer: {
    port: 3000,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      _styles: path.resolve(__dirname, "src/styles"),
      _images: path.resolve(__dirname, "src/images"),
      _utils: path.resolve(__dirname, "src/utils"),
    },
  },
};
