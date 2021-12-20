const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // "ts-loader",
          // {
          //   loader: path.resolve(__dirname, "./loader.js"),
          // },
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
                      console.log("style file:", file);
                      return (
                        file.replace("esm", "packages").toLowerCase() +
                        "/index.scss"
                      );
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
        test: /\.s?css$/i,
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
  devServer: {
    allowedHosts: "all",
    port: 9000,
  },
};
