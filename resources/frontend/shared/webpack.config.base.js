var webpack = require('webpack');
var path  = require('path');

module.exports = {

    context: path.resolve(__dirname, '../'),

    resolve: {
        root: [path.resolve(__dirname + '/../node_modules')],
    },

    resolveLoader: {
        modulesDirectories: [path.resolve(__dirname + '/../node_modules')]
    },

    module: {

        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel-loader", "babel"],
                include: [
                    path.join(__dirname, './'),

                    path.join(__dirname, '/../public/actions'),
                    path.join(__dirname, '/../public/components'),
                    path.join(__dirname, '/../public/shared'),
                    path.join(__dirname, '/../public/stores'),
                    path.join(__dirname, '/../public/index.js'),

                    path.join(__dirname, '/../locale'),
                    path.join(__dirname, '/../shared')
                ],

                exclude: [
                    path.resolve('../node_modules')
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};

