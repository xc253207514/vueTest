var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //entry: './src/main.js',
    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        path: path.resolve(__dirname, './ROOT'),
        //publicPath: 'dist/',
        filename: '[name].js?[hash]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /^node_modules$/
            },
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                //loader: ExtractTextPlugin.extract("style-loader","css-loader")
                loader: 'style-loader!css-loader',
                //loader: "style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!",
                /*options: {
                    name: 'static/css/[name].[ext]?[hash]'
                }*/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: 'static/imgs/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader',
                options: {
                    name: 'static/fonts/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.(mp4|Ogg|MPEG4|WebM)$/,
                loader:'file-loader',
                options:{
                    name:'static/video/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: [".js",".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: './index.html',
            template: './index.html'
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),*/
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
    //devtool: false
}

if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'uat' || process.env.NODE_ENV == 'dev') {
    //module.exports.devtool = '#source-map'
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                //NODE_ENV: '"production"'
                NODE_ENV: process.env.NODE_ENV
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
