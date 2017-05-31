'use strict'

module.exports = include => ({
  test: /\.js$/,
  include,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  }
})
