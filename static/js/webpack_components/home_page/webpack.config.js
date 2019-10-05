var path = require("path");
let DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    entry: {
        home_page_bundle: ["root.jsx"]
    },
    output: {
        path: path.resolve("../../webpack_build/", "home_page.js"),
        filename: "home_page.js",
        library: "HomePage"
    },
    resolveLoader: {
        moduleExtensions: [path.resolve(__dirname, "node_modules")]
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: ["/usr/local/lib/node_modules/", /node_modules/],
                use: {
                    loader: "babel-loader?cacheDirectory=true",
                    options: {
                        presets: ["babel-preset-env", "babel-preset-es2015", "babel-preset-stage-0", "babel-preset-react"].map(require.resolve)
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".es6", ".jsx"],
        modules: [path.resolve(__dirname, "node_modules")]
    },
    plugins: [new DashboardPlugin()]
};
