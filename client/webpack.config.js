import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import apiMocker from 'connect-api-mocker';

const __dirname = path.resolve();

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: ['web', 'es5'],
  devtool: 'inline-source-map',
  entry: {
    main: './src/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },

      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('v.1.0.0'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(dev)' : '',
      },
      minify: process.env.NODE_ENV === 'production',
      hash: true,
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: `styles/[name].css` })]
      : []),
  ],

  devServer: {
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.use(apiMocker('/auth', './mocks/auth'));
      devServer.app.use(apiMocker('/api', './mocks/api'));
    },

    port: 3000,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      _core: path.resolve(__dirname, 'src/core'),
      _components: path.resolve(__dirname, 'src/components'),
      _styles: path.resolve(__dirname, 'src/styles'),
      _images: path.resolve(__dirname, 'src/images'),
      _utils: path.resolve(__dirname, 'src/utils'),
      _actions: path.resolve(__dirname, 'src/store/actions'),
      _store: path.resolve(__dirname, 'src/store'),
      _types: path.resolve(__dirname, 'src/store/types'),
    },
  },
};
