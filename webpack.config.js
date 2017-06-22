const path = require('path');
const webpack = require('webpack');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

const pxtorem = require('postcss-pxtorem');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    

    plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
             postcss: [
                pxtorem({
                    rootValue: 100,
                    propWhiteList: [],
                })
             ],
         }
       })
     ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            { test: /\.sass$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(svg)$/i, use: "svg-sprite-loader", include: svgDirs },  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, enforce: "pre", use: "source-map-loader" },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        noInfo: true,
        port: 8000
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};