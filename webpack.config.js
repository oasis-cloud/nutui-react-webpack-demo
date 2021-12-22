const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: "./src/index.tsx",
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "import",
                  {
                    libraryName: "@test/nutui-react",
                    libraryDirectory: "dist/esm",
                    style: (file) => {
                      const fileName = file.match(/\/(\w+)$/)[0];
                      return `${file
                        .replace("esm", "packages")
                        .toLowerCase()}${fileName.toLowerCase()}.scss`;
                    },
                    camel2DashComponentName: false,
                  },
                  "nutui-react",
                ],
              ],
            },
          },
        ],
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "@test/nutui-react/dist/styles/variables.scss";`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
  devServer: {
    allowedHosts: "all",
    port: 9000,
  },
};
