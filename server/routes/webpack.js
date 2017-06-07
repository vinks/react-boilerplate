'use strict'

const debug = require('debug')('app')
const colors = require('colors')
const express = require('express')
const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const config = require('../../tasks/build/webpackConfig')

debug(colors.yellow('Using webpack-dev-middleware'))

// Don't bail in dev server.
config.forEach(c => c.bail = false)

const router = express.Router()
const compiler = webpack(config)

compiler.apply(new FriendlyErrorsWebpackPlugin())
router.use(
  webpackDevMiddleware(compiler, {
    quiet: true,
    publicPath: config[0].output.publicPath
  })
)
router.use(
  webpackHotMiddleware(
    compiler.compilers.find(compiler => compiler.name === 'client'),
    {
      log: () => {}
    }
  )
)
router.use(
  webpackHotServerMiddleware(compiler, {
    chunkName: 'server'
  })
)

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watchDir = path.join(__dirname, '../../server/routes/api')
const watcher = chokidar.watch(watchDir)

debug(colors.magenta(`Watch directory for changes ${watchDir}`))

watcher.on('ready', () => {
  watcher.on('all', () => {
    debug(colors.green(`Clearing ${watchDir} module cache from server`))

    Object.keys(require.cache).forEach(id => {
      if (/[/\\]api[/\\]/.test(id) && !/[/\\]node_modules[/\\]/.test(id)) {
        delete require.cache[id]
      }
    })
  })
})

module.exports = router
