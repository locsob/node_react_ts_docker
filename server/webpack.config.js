const nodeExternals = require('webpack-node-externals');

const path = require('path');
const webpack = require('webpack');

module.exports = {
    "target": 'node',
    externals: [
        nodeExternals()
    ],
    "entry": './src/server.ts',
    "devtool": 'inline-source-map',
    "output": {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    "module": {
        "rules": [
            {
                "test": /\.(ts)$/,
                "loader": 'ts-loader',
                "include": [
                    path.resolve(__dirname, 'src')
                ],
                "exclude": [
                    "/node_modules/"
                ]
            },
        ]
    },
    "resolve": {
        "extensions": [
            '.ts',
        ]
    },
}
