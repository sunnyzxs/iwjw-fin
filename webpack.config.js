var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output:{
        path:path.resolve(__dirname, './static'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        enforceExtension:false,
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=stage-0',
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                loader:'style!css!sass?sourceMap'
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                query: {
                    limit: 30,
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'./index.html',
            template: path.resolve(__dirname,'index.html'),
            inject: true
        }),
        // new CleanWebpackPlugin(['static'])
    ]
}