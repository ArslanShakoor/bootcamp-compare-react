module.exports = {
  devtool: '#eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.css$/,
      loader: "style-loader!css-loader" },
    {
      test: /\.sass$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    { test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {

    historyApiFallback: true,
    contentBase: './'
  }
};
