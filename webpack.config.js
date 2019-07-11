const path = require('path');

module.exports = env => {
  const config = {
    entry: './js/index.js',
    output: {
      path: path.resolve(__dirname, 'js'),
      filename: 'bundle.js'
    }
  }

  const babelRule = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }

  const entryWithPolyfill = ['@babel/polyfill', './js/index.js'];

  if (env === 'production') {
    config.entry = entryWithPolyfill;
    config.module = babelRule;
  }

  return config;
}
