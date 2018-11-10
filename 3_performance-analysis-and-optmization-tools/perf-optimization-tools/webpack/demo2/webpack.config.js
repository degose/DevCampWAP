var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   mode: 'none',
//   entry: './app/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: { // loader
//     rules: [{
//       test: /\.css$/,
//       use: ['style-loader', 'css-loader']
//     }]
//   },
// }

module.exports = {
    // mode: 'none',
    mode: 'production',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}