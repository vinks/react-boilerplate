'use strict'

module.exports = include => ({
  test: /\.(gif|ico|jpg|jpeg|png|svg|webp)$/,
  include,
  loader: 'url-loader',
  options: {
    limit: 10000
  }
})
