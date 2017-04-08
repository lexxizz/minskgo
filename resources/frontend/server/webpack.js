var config = require('../shared/env.js');

import webpackDevConfig from '../shared/webpack.dev.js';
import StartWebpack from 'napishem-frontend-utils/modules/WebpackLocalStart';

StartWebpack("Public", config.webpack, webpackDevConfig(config.webpack.public), config.webpack.public.port);