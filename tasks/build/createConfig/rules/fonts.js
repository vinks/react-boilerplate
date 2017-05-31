'use strict'

module.exports = include => ({
  test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
  include,
  loader: 'url-loader',
  options: {
    limit: 10000
  }
})
