import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from "./types/config";
export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [];

  plugins.push(
    new DefinePlugin({
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
    plugins.push(new ProgressPlugin());
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
  }

  return plugins;
}
