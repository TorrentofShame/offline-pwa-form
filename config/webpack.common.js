const webpack = require("webpack");
const manifest = require("./manifest");
const { rootDir } = require("./utils");

/* Plugins */
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const NODE_ENV = process.env.NODE_ENV;

const babelLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import"
    ]
  }
};


module.exports = {
  entry: {
    main: rootDir("src/index.jsx")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ babelLoader ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.ya?ml$/,
        use: "yaml-loader"
      }
    ]
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".scss", ".html", ".yml" ],
    alias: {
      _components: rootDir("src/components"),
      _app: rootDir("src/app"),
      _styles: rootDir("src/styles"),
      _pages: rootDir("src/pages"),
      _config: rootDir("config")
    }
  },
  plugins: [
    //new webpack.DefinePlugin({
    //"process.env": {
    //NODE_ENV: JSON.stringify(NODE_ENV)
    //}
    //}),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      files: ["src"],
      emitError: true,
      emitWarning: true
    }),
    new HtmlWebpackPlugin({
      template: rootDir("src/index.html")
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      inject: true,
      ios: true,
      ...manifest
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
      ignoreOrder: true
    })
  ]
};
