'use strict'

module.exports = include => ({
  enforce: 'pre',
  include,
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint-loader'
})
