const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    "mode": 'development',
    "entry": './src/index.ts',
    "output": {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    "devtool": 'inline-source-map',
    "devServer": {
        contentBase: path.join(__dirname, 'public'),
        allowedHosts: [
            'node.first'
        ],
        host: '0.0.0.0',
        port: 3000,
    },
    "plugins": [
        new webpack.ProgressPlugin()
    ],
    "module": {
        "rules": [
            {
                "test": /\.(ts|tsx)$/,
                "loader": 'ts-loader',
                "include": [
                    path.resolve(__dirname, 'src')
                ],
                "exclude": [
                    "/node_modules/"
                ]
            },
            {
                "test": /.(scss|css)$/,
                "use": [
                    {
                        "loader": "style-loader"
                    },
                    {
                        "loader": "css-loader",
                        "options": {
                            "sourceMap": true
                        }
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": true
                        }
                    }
                ]
            }
        ]
    },
    "resolve": {
        "extensions": [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    "optimization": {
        "minimizer": [
            new TerserPlugin()
        ],
        "splitChunks": {
            "cacheGroups": {
                "vendors": {
                    "priority": -10,
                    "test": "/[\\\\/]node_modules[\\\\/]/"
                }
            },
            "chunks": 'async',
            "minChunks": 1,
            "minSize": 30000,
            "name": false
        }
    }
}
