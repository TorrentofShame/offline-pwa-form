const path = require("path");

switch (process.env.NODE_ENV) {
  case "dev":
  case "development":
    module.exports = require(path.resolve(__dirname, "config/webpack.dev"));
    break;
  
  case "prod":
  case "production":
  default:
    module.exports = require(path.resolve(__dirname, "config/webpack.prod"));
}
