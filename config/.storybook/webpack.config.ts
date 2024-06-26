import { Configuration } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { RuleSetRule } from 'webpack'
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

interface UpdateConfiguration extends Configuration {
    module: {
        rules: RuleSetRule[]
    }
}
export default ({ config }: { config: UpdateConfiguration }) => {
    const { src }: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", '..', "src"),
    }
    config.resolve?.modules?.push(src)
    config.resolve?.extensions?.push(".ts", ".tsx", "jsx");
    config.module?.rules?.push(buildCssLoaders(true));

    const fileLoaderRule = (config.module?.rules?.find((rule) => rule?.test &&
        // @ts-ignore
        rule?.test?.test('.svg')
    )) as RuleSetRule;

    if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push(buildSvgLoader());
    return config;
}