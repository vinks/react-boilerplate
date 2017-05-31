'use strict'

const express = require('express')
const quoteCtrl = require('./quote.controller')

const router = express.Router()

router.route('/')
  .get(quoteCtrl.getQuote)

module.exports = router
