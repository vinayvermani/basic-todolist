const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react','@babel/preset-env']
              }
            }
          }
        ]
      }
}

