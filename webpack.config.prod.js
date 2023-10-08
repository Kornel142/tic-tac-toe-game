const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./starter-code/src/controller.ts",
  // devServer: {
  //   hot: true,
  //   static: [
  //     {
  //       directory: path.join(__dirname),
  //     },
  //   ],
  // },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "starter-code/dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
