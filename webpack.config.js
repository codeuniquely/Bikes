/* globals __dirname, module, require */
var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NofifierPlugin    = require('webpack-build-notifier');
var autoprefixer      = require('autoprefixer');

// Define the environment
var env               = 'development';

// ==============================
//  Paths
// ==============================
var rootPath          = path.resolve( __dirname );
var nodeModulesPath   = path.resolve( __dirname, 'node_modules');
var buildPath         = path.resolve( __dirname, 'build');
var srcPath           = path.resolve( __dirname, 'src' );
var appPath           = path.resolve( srcPath, 'app' );
var assetsPath        = path.resolve( srcPath, 'assets' );
var stylePath         = path.resolve( srcPath, 'style' );

// ==============================
//  Plugins
// ==============================
var plugins = [

  new webpack.DefinePlugin({
    'process.env': {
      ENV: JSON.stringify(env),
      NODE_ENV: JSON.stringify(env),
    }
    // ,
    // 'React': 'react',
  }),

  new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.HotModuleReplacementPlugin(),

  new NofifierPlugin({
    title: 'Contact Forms',
    suppressSuccess: true,        // only first success is shown, after a fail
    // suppressWarnings: true,    // show warnings too
    sound: true,                  // I want some sounds
    successSound: 'Morse',        // Mac OSX  | Basso, Blow, Bottle, Frog, Funk |
    warningSound: 'Tink',         // Mac OSX  | Glass, Hero, Morse, Ping, Pop   |
    failureSound: 'Basso',        // Mac OSX  | Purr, Sosumi, Submarine, Tink   |
    logo: 'https://s.gravatar.com/avatar/5658520ca57bc79b1e14823e078d1d80?s=80',
    activateTerminalWindow: true  // Take me to terminal on errors
  }),

  new HtmlWebpackPlugin({
    inject: true,
    title: 'Bikes',
    favicon: path.resolve(assetsPath, 'favicon.ico'),
    template: path.resolve(assetsPath, 'index.html')
  }),

  new ExtractTextPlugin('bundle.[hash].css', {
    allChunks: true
  }),

  // optimization plugins
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].bundle.js'),

  new webpack.optimize.OccurenceOrderPlugin(),

  // https://github.com/webpack/docs/wiki/optimization#deduplication
  new webpack.optimize.DedupePlugin(),

  // new webpack.optimize.UglifyJsPlugin({
  //   sourceMap: false,
  //   comments:true,
  //   minimize: true,
  //   compress: {
  //     warnings: false,
  //     drop_console: true,   // eslint-disable-line camelcase
  //     drop_debugger: true,  // eslint-disable-line camelcase
  //     dead_code: true       // eslint-disable-line camelcase
  //   },
  //   output: {
  //     comments: false
  //   },
  //   mangle: true
  // }),

  new webpack.NoErrorsPlugin()
];

// ==============================
//  Pre-loaders
// ==============================
var preLoaders = [
  {
    test: /\.js$/,
    loaders: ['eslint'],
    exclude: [nodeModulesPath]
  }
];

// ==============================
//  Loaders
// ==============================
var loaders = [
  {
    test: /\.js$/i,
    loaders: ['babel'],
    exclude: [nodeModulesPath]
  },
  {
    test: /\.jsx?$/i,
    loaders: ['react-hot', 'babel'],
    exclude: [nodeModulesPath]
  },
  { test: /\.html$/i, loader: 'raw!htmlclean' },
  { test: /\.json$/i, loader: 'json' },
  { test: /\.ico($|\?)/i, loader: 'file', query:{ name:'[path][name].[ext]', context:assetsPath } },
  { test: /\.scss$/i, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
];

module.exports = {

  // 'eval', 'source-map', hidden-source-map, inline-source-map, eval-source-map, cheap-source-map
  devtool: 'eval',

  resolve: {
    alias:{
      root: rootPath,
      src: srcPath,
      code: appPath,
      node: nodeModulesPath,
      assets: assetsPath,
      style: stylePath
    },
    extensions: ['', '.js', '.jsx', '.json', '.html' ]
  },

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client?overlay=false',
      path.resolve(srcPath, 'index.js')
    ],
    vendor: [
      'react-addons-pure-render-mixin',
      'react-dom',
      'react-dropdown',
    ]
  },

  output: {
    path: buildPath,
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
      // browsers: ['last 2 versions', '> 2%', 'ie 8-11', 'firefox > 40', 'safari > 5', 'opera > 30', 'ios 6-7', 'android 4']
    })
  ],

  plugins: plugins,

  module: {
    preLoaders: preLoaders,
    loaders: loaders
  }
};
