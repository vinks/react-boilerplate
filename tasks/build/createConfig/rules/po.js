'use strict'

module.exports = () => ({
  test: /\.po$/,
  loader: 'json-loader!po-gettext-loader'
})
