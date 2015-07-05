var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    config = require('./webpack.config.js'),
    path = require('path');

delete config.defaultConfig.devtool;
delete config.defaultConfig.debug;
config.defaultConfig.output.filename = '[chunkhash].entry.js';

// Setting `NODE_ENV` makes sure we get the production friendly version
// of React by removing unreachable code when we uglify.
config.defaultConfig.plugins.define = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': '"production"'
    }
});

config.defaultConfig.module.loaders.extract.loader = ExtractTextPlugin.extract(
    'style',
    'css?modules&localIdentName=[hash:base64:5]!autoprefixer'
);

config.defaultConfig.plugins.optimize = new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    output: {
        comments: false
    }
});

config.defaultConfig.plugins.extract = new ExtractTextPlugin('[contenthash].css', {
    allChunks: true
});

module.exports = config.convert(config.defaultConfig);