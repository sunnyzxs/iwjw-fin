var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');


//监听
var app = express();

var compiler = webpack(config);



var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: 'http://localhost:8888/',
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware)

app.listen(8888, function(err){
    console.log('123',config.output.publicPath);
    if(err){
        console.log(err)
        return;
    }
    console.log('Listening http://localhost:8888')
})