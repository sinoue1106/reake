var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/main.js', // これがエントリーポイント

  output: { // コンパイルされたファイルの設定
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  resolve: {
    alias: {
　　　// 完全には理解できてないですが、
　　　// 下記エイリアス設定しないとvue走りません
      'vue': path.resolve('./node_modules/vue/dist/vue.js'),
    }
  },
}