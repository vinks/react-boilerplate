'use strict'

const express = require('express')
const router = express.Router()

const quoteRoutes = require('./quote/quote.routes')

router.use('/quote', quoteRoutes)

module.exports = router
