const { merge } = require("webpack-merge");
const glob = require("glob");
const { rootDir } = require("./utils");
const common = require("./webpack.common");

/* Plugins */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
    path: rootDir("dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(`${rootDir("src")}/**/*`, { nodir: true })
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/,
      algorithm: "gzip"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...",
      new TerserPlugin({
        test: /\.jsx?$/i
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  }
});
