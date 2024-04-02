const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html",
        }
    },
    // add the bunch of js files in the script tag in the index html file
    plugins: [ 
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                './MarketingApp': "./src/bootstrap"
            },
            shared: packageJson.dependencies
        }),
    ],
    
}

// merge function will merge the commonConfig and devConfig
// by giving the devConfig as the second argument, it will override anything added in the commonConfig file
module.exports = merge(commonConfig, devConfig);