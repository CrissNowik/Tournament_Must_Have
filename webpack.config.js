const path = require("path");

module.export = {
    mode: "production", // "development" , "none"
    entry: "./js/app.js",
    output: {
        path: path.resolve("dist"),
        filename: "./out.js"
        },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
                }
        }]
    }
}