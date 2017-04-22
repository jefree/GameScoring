const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
          './src/app.js'
        ]
    },
    output: {
        filename: './dist/[name].js'
    },
    devtool: 'source-map', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                loader: 'css-loader?modules!sass-loader'
              })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true})
    ]
}
