const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const BASE_JS = './src/client/js/'

module.exports = {
  entry: {
    main: BASE_JS + 'main.js',
    signup: BASE_JS + 'signup.js',
    playlist: BASE_JS + 'playlist.js',
    FullscreenPlayer: BASE_JS + 'FullscreenPlayer.js',
    popup: BASE_JS + 'popup.js',
    search: BASE_JS + 'search.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'assets'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
}
