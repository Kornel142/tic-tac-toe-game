const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [path.resolve(__dirname, "index")],
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    // static: [
    //   {
    //     directory: path.join(__dirname),
    //   },
    // ],
  },
  output: {
    filename: "bundle.js",
    publicPath: "/"
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  // plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
