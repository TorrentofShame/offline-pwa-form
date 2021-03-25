const path = require("path");

const rootDir = (p) => path.resolve(__dirname, "../", p);

exports.rootDir = rootDir;
