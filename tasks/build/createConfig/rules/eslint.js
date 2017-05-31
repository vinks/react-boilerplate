'use strict'

module.exports = include => ({
  enforce: 'pre',
  include,
  loader: 'eslint-loader',
  exclude: /node_modules/,
  test: /\.js$/
})
