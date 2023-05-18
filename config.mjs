import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.js",
  },
  devtool: "source-map",
  output: {
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "main.js",
  },
};

if (isRunningRspack) {
  config.builtins = {
    html: [
      {
        template: "index.html",
        filename: "index.html",
      },
    ],
  };
}

if (isRunningWebpack) {
  config.plugins = [
    new HtmlWebpackPlugin({ template: "index.html", filename: "index.html" }),
  ];
}

export default config;
