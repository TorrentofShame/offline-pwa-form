const path = require("path");

module.exports = {
  process: (src, f) => `module.exports = ${JSON.stringify(path.basename(f))};`
};
