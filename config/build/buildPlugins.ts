import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { DefinePlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  let plugins: WebpackPluginInstance[] = [];

  plugins.push(
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(isDev),
    })
  );
  plugins.push(
    new HtmlWebpackPlugin({
      template: paths.html,
    })
  );
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    })
  );

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshPlugin());
  }

  return plugins;
}
