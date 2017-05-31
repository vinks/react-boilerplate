'use strict'

module.exports = include => ({
  test: /\.(mp4|webm)$/,
  include,
  loader: 'url-loader',
  options: {
    limit: 10000
  }
})
