var webpack = require('webpack');

module.exports = {
  entry: ["./hotReload.js"],
  output: {
    filename: "bundle.js"
  },
   devServer: {
    hot: true,
    inline: true,
    noInfo: true,
    // host: "0.0.0.50",
    port:5500
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

