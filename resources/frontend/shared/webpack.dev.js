import webpack from 'webpack';
import base from './webpack.config.base';
import _ from 'lodash';

var config = require('./env.js').webpack;


function webpackDevConfig(role_config) {

    return _.merge({

        context: base.context,

        entry: [
            'webpack-dev-server/client?' + config.url + ':' + role_config.port,
            'webpack/hot/only-dev-server', role_config.entry
        ],

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()//,
            // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }})
         ],

        output: {
            path: "/js",
            filename: role_config.output,
            publicPath: config.url + ':' + role_config.port
        },

        module: base.module
    });
};

export default webpackDevConfig;
