const path = require('path');
module.exports = {
   entry: {
       "inlinejs-animation": "./src/inlinejs-animation.ts",
   },
   output: {
       filename: "[name].js",
       path: path.resolve(__dirname, 'dist')
   },
   resolve: {
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   },
   mode: 'development',
   devtool: false
}
