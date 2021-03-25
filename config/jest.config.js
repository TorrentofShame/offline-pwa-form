const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  collectCoverageFrom: ["**/*.{js,jsx}"],
  moduleFileExtensions: [ "js", "jsx", "json" ],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^_components(.*)$": "<rootDir>/src/components/$1",
    "^_app(.*)$": "<rootDir>/src/app/$1",
    "^_pages(.*)$": "<rootDir>/src/pages/$1",
    "^_styles(.*)$": "<rootDir>/src/styles/$1",
    "^_config(.*)$": "<rootDir>/config/$1"
  },
  setupFiles: [
    "<rootDir>/config/jest.setup.js",
    "<rootDir>/config/enzyme.setup.js"
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    /* eslint-disable-next-line */
    "\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp4|webm|wav|mp3|m4a|aac|oga|ico|css|s[ac]ss|less)$": "<rootDir>/config/assetsTransformer.js"
  }
};
