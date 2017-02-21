module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: 'bin/assets',
        publicPath: 'assets'
    },
    devServer: {
        inline: true,
        contentBase: './bin',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }
            }
        ]
    }
}