const { rootDir } = require("./utils");

module.exports = {
  short_name: "Offline PWA Form",
  name: "Offline PWA Form",
  start_url: "/",
  display: "standalone",
  theme_color: "#000000",
  background_color: "#FFFFFF",
  icons: [
    {
      src: rootDir("src/assets/favicon.png"),
      sizes: [192],
      type: "image/png",
      destination: ""
    }
  ]
};
