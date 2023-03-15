const path = require("path");
const HeaderWebpackPlugin = require("./webpack-plugins/header-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "aa.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolveLoader: {
    // 去哪些目录下寻找 loader ，有先后顺序之分
    // 如下配置中，查找顺序是：先在 node_modules 目录下寻找，若找不到，再到 ./myLoaders 目录下寻找
    modules: ["node_modules", "./webpack-loaders"],
  },
  module: {
    rules: [
      {
        test: /\.c$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "c-loader",
        },
      },
    ],
  },
  plugins: [new HeaderWebpackPlugin()],
};
