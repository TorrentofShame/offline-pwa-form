const { merge } = require("webpack-merge");
const { rootDir } = require("./utils");
const common = require("./webpack.common");


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/",
    path: rootDir("dist")
  },
  devServer: {
    contentBase: rootDir("dist"),
    host: "localhost",
    port: 5000,
    hot: true,
    compress: true
  }
});
